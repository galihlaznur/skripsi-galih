import bcryptjs from 'bcryptjs';
import userSchema from '../models/userSchema.js';
import transactionSchema from '../models/transactionSchema.js';
import jwt from 'jsonwebtoken';

export const signUpAction = async (req, res) => {
   const MIDTRANS_URL = process.env.MIDTRANS_URL;
   const MIDTRANS_AUTH_STRING = process.env.MIDTRANS_AUTH_STRING;

    try {
        const body = req.body;
        const hashPassword = bcryptjs.hashSync(body.password, 12);
        const user = new userSchema({
            name: body.name,
            photo: 'default.png',
            email: body.email,
            password: hashPassword,
            role: 'manager'
        })

        // action payment gateway midtrans
        const transaction = new transactionSchema({
            user: user._id,
            price: 280000,
        })

        await user.save();
        await transaction.save();

        const midtrans = await fetch(MIDTRANS_URL, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Authorization': `Basic ${MIDTRANS_AUTH_STRING}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                transaction_details: {
                    order_id: transaction.order_id,
                    gross_amount: transaction.price
                },
                credit_card:{
                    secure : true
                },
                customer_details: {
                    email: user.email,
                },
                callbacks: {
                    finish: 'http://localhost:5173/success-checkout'
                }
            })
        })

        const resMidtrans = await midtrans.json();

        return res.json({
            message: 'Sign Up Successfully',
            data: {
                midtrans_payment_url: resMidtrans.redirect_url
            }
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'Internal Server Error',
        })
    }
}

export const signInAction = async (req, res) => {
    try {
        const body = req.body;

        const existingUser = await userSchema.findOne()
            .where('email')
            .equals(body.email);
        if (!existingUser) return res.status(404).json({message: 'User Not Found'});

        const comparePassword = bcryptjs.compareSync(
            body.password,
            existingUser.password
        )
        if (!comparePassword) return res.status(400).json({message: 'Email / Password Incorrect'});

        const isValidUser = await transactionSchema.findOne({
            user: existingUser._id,
            status: 'success'
        })
        if (existingUser.role !== "student" && !isValidUser) return res.status(400).json({message: "User Not Verified"})

        const token = jwt.sign(
            {
                data: {
                    id: existingUser._id.toString()
                }
            }, 
            process.env.SECRET_KEY_JWT,
            {expiresIn: '1 days'}
        )
        return res.json({
            message: 'User Logged In Successfully',
            data: {
                name: existingUser.name,
                email: existingUser.email,
                token,
                role: existingUser.role
            }
        })
    } catch (error) {
            console.log(error);
            return res.status(500).json({
                message: "Internal Server Error"
            })
    }
}