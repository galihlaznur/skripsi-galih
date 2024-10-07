import categorySchema from "../models/categorySchema.js";
import courseDetailSchema from "../models/courseDetailSchema.js";
import courseSchema from "../models/courseSchema.js"
import userSchema from "../models/userSchema.js";
import { mutateCourseSchema } from "../utils/schema.js";
import fs from 'fs'
import path from 'path'

export const getCourses = async (req, res) => {
    try {
        const courses = await courseSchema.find({
            manager: req.user?._id
        })
        .select('name thumbnail')
        .populate({
            path: 'category',
            select: 'name -_id'
        })
        .populate({
            path: 'students',
            select: 'name'
        })

        const imageUrl = process.env.APP_URL + '/uploads/courses/'

        const response = courses.map((item) => {
            return {
                ...item.toObject(),
                thumbnail_url: imageUrl + item.thumbnail,
                total_students: item.students.length
            }
        })

        return res.json({
            message: "Get Courses Success",
            data: response
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Internal Server Error"
        })
    }
}

export const postCourse = async (req, res) => {
    try {
        const body = req.body

        const parse = mutateCourseSchema.safeParse(body)

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

        const category = await categorySchema.findById(parse.data.categoryId)

        if (!category) {
            return res.status(500).json({
                message: 'Category Id not found'
            })
        }

        const course = new courseSchema({
            name: parse.data.name,
            category: category._id,
            description: parse.data.description,
            tagline: parse.data.tagline,
            thumbnail: req.file?.filename,
            manager: req.user._id,
        })

        await course.save()

        await categorySchema.findByIdAndUpdate(category._id, {
            $push: {
                courses: course._id
            },
        }, {new: true})

        await userSchema.findByIdAndUpdate(req.user?._id, {
            $push: {
                courses: course._id
            }
        }, {new: true})

        return res.json({message: 'Create Course Success'})
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'Internal server error'
        })
    }
}

export const updateCourse = async (req, res) => {
    try {
        const body = req.body
        const courseId = req.params.id

        const parse = mutateCourseSchema.safeParse(body)

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

        const category = await categorySchema.findById(parse.data.categoryId)
        const oldCourse = await courseSchema.findById(courseId)

        if (!category) {
            return res.status(500).json({
                message: 'Category Id not found'
            })
        }

        await courseSchema.findByIdAndUpdate(
            courseId,
            {
                name: parse.data.name,
                category: category._id,
                description: parse.data.description,
                tagline: parse.data.tagline,
                thumbnail: req?.file ? req.file?.filename: oldCourse.thumbnail,
                manager: req.user._id,
            }
        )

        return res.json({message: 'Update Course Success'})
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'Internal server error'
        })
    }
}

export const deleteCourse = async (req, res) => {
    try {
        const {id} = req.params

        const course = await courseSchema.findById(id)

        const dirname = path.resolve()

        const filePath = path.join(dirname, "public/uploads/courses", course.thumbnail)

        if (fs.existsSync(filePath)) {
            fs.unlinkSync(filePath)
        }

        await courseSchema.findByIdAndDelete(id)

        return res.json({
            message: 'Delete course success'
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'Internal server error'
        })
    }
}