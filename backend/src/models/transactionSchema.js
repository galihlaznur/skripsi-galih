import mongoose from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

const transactionSchema = new mongoose.Schema({
    order_id: {
        type: String,
        unique: true, 
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    price: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: ['pending', 'success', 'failed'],
        default: 'pending'
    }
},
{
    timestamps: true,
});

transactionSchema.pre('save', function (next) {
    this.order_id = `ORD-${uuidv4()}`; 
    
    next();
});

export default mongoose.model('Transaction', transactionSchema);