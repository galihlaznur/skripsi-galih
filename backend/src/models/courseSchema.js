import mongoose from "mongoose";
import categorySchema from "./categorySchema.js";
import courseDetailSchema from "./courseDetailSchema.js";
import userSchema from "./userSchema.js";

const courseSchema = mongoose.Schema({
    name: {
        type: String, 
        required: true
    },
    thumbnail: {
        type: String, 
        required: true,
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    },
    tagline: {
        type: String, 
        required: true
    },
    description: {
        type: String, 
        required: true
    },
    students: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    manager: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    details: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'CourseDetail'
    }]
}, 
{
    timestamp: true
});

courseSchema.post('findOneAndDelete', async (doc) => {
    if (doc) {
        await categorySchema.findByIdAndUpdate(doc.category, {
            $pull: {
                courses: doc._id
            }
        })

        await courseDetailSchema.deleteMany({
            course: doc._id
        })    
        
        doc.students?.map(async (std) => {
            await userSchema.findByIdAndUpdate(std._id, {
                $pull: {
                    courses: doc._id
                }
            })
        })
    }
})

export default mongoose.model('Course', courseSchema);