import mongoose from "mongoose";
import courseSchema from "./courseSchema.js";

const courseDetailSchema = mongoose.Schema({
    title: {
        type: String, 
        required: true},
    type: {
        type: String,
        enum: ['video', 'text'],
        default: 'video'
    },
    youtubeId: String,
    text: String,
    course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
    }
},
{
    timestamps: true
});

courseDetailSchema.post('findOneAndDelete', async (doc) => {
    if (doc) {
        await courseSchema.findByIdAndUpdate(doc.course, {
            $pull: {
                details: doc._id
            }
        })
    }
})

export default mongoose.model('CourseDetail', courseDetailSchema)