import express from "express";
import { deleteContentCourse, deleteCourse, deleteStudentToCourse, getCategories, getCourseById, getCourses, getDetailContent, getStudentByCourseId, postContentCourse, postCourse, postStudentToCourse, updateContentCourse, updateCourse } from "../controllers/courseController.js";
import { verifyToken } from "../middleware/verifyToken.js";
import multer from "multer";
import { fileFilter, fileStorage } from "../utils/multer.js";
import { addStudentCourseSchema, mutateContentSchema } from "../utils/schema.js";
import { validateRequest } from '../middleware/validateRequest.js';

const courseRoute = express.Router();

const upload = multer({
    storage: fileStorage('courses'),
    fileFilter
})

courseRoute.get('/courses', verifyToken, getCourses)
courseRoute.get('/categories', verifyToken, getCategories)
courseRoute.get('/courses/:id', verifyToken, getCourseById)
courseRoute.post('/courses', verifyToken, upload.single('thumbnail'), postCourse)
courseRoute.put('/courses/:id', verifyToken, upload.single('thumbnail'), updateCourse)
courseRoute.delete('/courses/:id', verifyToken, deleteCourse)

courseRoute.post('/courses/contents', verifyToken, validateRequest(mutateContentSchema), postContentCourse)
courseRoute.put('/courses/contents/:id', verifyToken, validateRequest(mutateContentSchema), updateContentCourse)
courseRoute.delete('/courses/contents/:id', verifyToken, deleteContentCourse)
courseRoute.get('/courses/contents/:id', verifyToken, getDetailContent)

courseRoute.get('/courses/students/:id', verifyToken, getStudentByCourseId)
courseRoute.post('/courses/students/:id', verifyToken, validateRequest(addStudentCourseSchema), postStudentToCourse)
courseRoute.put('/courses/students/:id', verifyToken, validateRequest(addStudentCourseSchema), deleteStudentToCourse)

export default courseRoute;