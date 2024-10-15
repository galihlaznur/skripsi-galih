import express from 'express';
import { verifyToken } from '../middleware/verifyToken.js';
import { deleteStudent, getCoursesStudents, getStudentById, getStudents, postStudent, updateStudent } from '../controllers/studentController.js';
import { fileFilter, fileStorage } from '../utils/multer.js';
import multer from 'multer';

const studentRoute = express.Router();

const upload = multer({
    storage: fileStorage('students'),
    fileFilter
})

studentRoute.get('/students', verifyToken, getStudents);
studentRoute.get('/students/:id', verifyToken, getStudentById);
studentRoute.post('/students', verifyToken, upload.single('avatar'), postStudent);
studentRoute.put('/students/:id', verifyToken, upload.single('avatar'), updateStudent);
studentRoute.delete('/students/:id', verifyToken, deleteStudent);

studentRoute.get('/students-courses', verifyToken, getCoursesStudents)

export default studentRoute;