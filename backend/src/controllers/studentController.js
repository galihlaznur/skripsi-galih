import bcryptjs from "bcryptjs";
import userSchema from "../models/userSchema.js"
import { mutateStudentSchema } from "../utils/schema.js";
import courseSchema from "../models/courseSchema.js";
import fs from 'fs'
import path from 'path'

export const getStudents = async (req, res) => {
    try {
        const students = await userSchema.find({
            role: 'student',
            manager: req.user._id
        }).select('name courses photo')

        const imageUrl = process.env.APP_URL + '/uploads/students/'

        const response = students.map((item) => {
            return {
                ...item.toObject(),
                photo_url: imageUrl + item.photo
            }
        })

        return res.json({
            message: 'Get students successfully',
            data: response
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'Internal server error'
        })
    }
}

export const getStudentById = async (req, res) => {
    try {
        const {id} = req.params

        const student = await userSchema.findById(id).select('name email')

        return res.json({
            message: 'Get details student successfully',
            data: student
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'Internal server error'
        })
    }
}

export const postStudent = async (req, res) => {
    try {
        const body = req.body

        const parse = mutateStudentSchema.safeParse(body)

        if (!parse.success) {
            const errorMessages = parse.error.issues.map((err) => err.message)

            if (req?.file?.path && fs.existsSync(req?.file?.path)) {
                fs.unlinkSync(req?.file?.path)
            }

            return res.status(500).json({
                message: 'Error Validation',
                data: null,
                errors: errorMessages
            })
        }

        const hashPassword = bcryptjs.hashSync(body.password, 12)

        const student = new userSchema({
            name: parse.data.name,
            email: parse.data.email,
            password: hashPassword,
            photo: req.file?.filename,
            manager: req.user?._id,
            role: 'student'
        })

        await student.save();

        return res.json({
            message: 'Create student successfully'
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'Internal server error'
        })
    }
}

export const updateStudent = async (req, res) => {
    try {
        const {id} = req.params
        const body = req.body

        const parse = mutateStudentSchema.partial({password: true}).safeParse(body)

        if (!parse.success) {
            const errorMessages = parse.error.issues.map((err) => err.message)

            if (req?.file?.path && fs.existsSync(req?.file?.path)) {
                fs.unlinkSync(req?.file?.path)
            }

            return res.status(500).json({
                message: 'Error Validation',
                data: null,
                errors: errorMessages
            })
        }

        const student = await userSchema.findById(id)

        const hashPassword = parse.data?.password ? bcryptjs.hashSync(parse.data.password, 12) : student.password

        await userSchema.findByIdAndUpdate(id, {
            name: parse.data.name,
            email: parse.data.email,
            password: hashPassword,
            photo: req?.file ? req.file?.filename : student.photo
        })

        await student.save();

        return res.json({
            message: 'Update student successfully'
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'Internal server error'
        })
    }
}

export const deleteStudent = async (req, res) => {
    try {
        const {id} = req.params

        const student = await userSchema.findById(id)

        await courseSchema.findOneAndUpdate({
            students: id
        }, {
            $pull: {
                students: id
            }
        })

        const dirname = path.resolve()

        const filePath = path.join(dirname, "public/uploads/students", student.photo)

        if (fs.existsSync(filePath)) {
            fs.unlinkSync(filePath)
        }

        await userSchema.findByIdAndDelete(id)

        return res.json({
            message: 'Delete student successfully'
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'Internal server error'
        })
    }
}

export const getCoursesStudents = async (req, res) => {
    try {
        const user = await userSchema.findById(req.user._id).populate({
            path: 'courses',
            select: 'name category thumbnail',
            populate: {
                path: 'category',
                select: 'name'
            }
        })

        const imageUrl = process.env.APP_URL + '/uploads/courses/'

        const response = user?.courses?.map((item) => {
           return {
            ...item.toObject(),
            thumbnail_url: imageUrl + item.thumbnail
           }
        })

        return res.json({
            message: 'Get courses success',
            data: response
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'Internal server error'
        })
    }
}