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

export const getCategories = async (req, res) => {
    try {
        const categories = await categorySchema.find()

        return res.json({
            message: "Get Categories Success",
            data: categories
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'Internal server error'
        })
    }
}

export const getCourseById = async (req, res) => {
    try {
        const {id} = req.params
        const {preview} = req.query

        const course = await courseSchema.findById(id)
        .populate({
            path: 'category',
            select: 'name -_id'
        })
        .populate({
            path: 'details',
            select: preview === "true" ? 'title type youtubeId text' : 'title type'
        })

        const imageUrl = process.env.APP_URL + '/uploads/courses/'

        return res.json({
            message: 'Get Course Details Success',
            data: {
                ...course.toObject(),
                thumbnail_url: imageUrl + course.thumbnail
            }
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'Internal server error'
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

export const postContentCourse = async (req, res) => {
    try {
        const body = req.body;

        const course = await courseSchema.findById(body.courseId)

        const content = new courseDetailSchema({
            title: body.title,
            type: body.type,
            course: course._id,
            text: body.text,
            youtubeId: body.youtubeId,
        })

        await content.save()

        await courseSchema.findByIdAndUpdate(course._id, {
            $push: {
                details: content._id
            }
        }, {new: true})

        return res.json({message: 'Content saved successfully'})
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'Internal server error'
        })
    }
}

export const updateContentCourse = async (req, res) => {
    try {
        const {id} = req.params
        const body = req.body;

        const course = await courseSchema.findById(body.courseId)

        await courseDetailSchema.findByIdAndUpdate(id, {
            title: body.title,
            type: body.type,
            course: course._id,
            text: body.text,
            youtubeId: body.youtubeId
        }, {new: true})

        return res.json({message: 'Update content saved successfully'})
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'Internal server error'
        })
    }
}

export const deleteContentCourse = async (req, res) => {
    try {
        const {id} = req.params;

        await courseDetailSchema.findByIdAndDelete(id)

        return res.json({
            message: 'Delete content successfully'
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'Internal server error'
        })
    }
}

export const getDetailContent = async (req, res) => {
    try {
        const {id} = req.params;

        const content = await courseDetailSchema.findById(id);

        return res.json({
            message: 'Get detail content successfully',
            data: content
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'Internal server error'
        })  
    }
}

export const getStudentByCourseId = async (req, res) => {
    try {
        const {id} = req.params;
        const course = await courseSchema.findById(id).select('name').populate({
            path: 'students',
            select: 'name email photo'
        })

        const imageUrl = process.env.APP_URL + '/uploads/students/'

        const studentsMap = course?.students?.map((item) => {
            return {
                ...item.toObject(),
                photo_url: imageUrl + item.photo
            }
        })

        return res.json({
            message: 'Get students by course success',
            data: {
                ...course.toObject(),
                students: studentsMap
            }
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'Internal server error'
        }) 
    }
}

export const postStudentToCourse = async (req, res) => {
    try {
        const body = req.body
        const {id} = req.params

        await userSchema.findByIdAndUpdate(body.studentId, {
            $push: {
                courses: id
            }
        })

        await courseSchema.findByIdAndUpdate(id, {
            $push: {
                students: body.studentId
            }
        })

        return res.json({
            message: 'Add student to course success'
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'Internal server error'
        }) 
    }
}

export const deleteStudentToCourse = async (req, res) => {
    try {
        const body = req.body
        const {id} = req.params

        await userSchema.findByIdAndUpdate(body.studentId, {
            $pull: {
                courses: id
            }
        })

        await courseSchema.findByIdAndUpdate(id, {
            $pull: {
                students: body.studentId
            }
        })

        return res.json({
            message: 'Delete student to course success'
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'Internal server error'
        }) 
    }
}