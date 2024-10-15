import express from 'express';
import { verifyToken } from "../middleware/verifyToken.js";
import { getOverviews } from '../controllers/overview.controller.js';

const overviewRoute = express.Router();

overviewRoute.get('/overviews', verifyToken, getOverviews)


export default overviewRoute