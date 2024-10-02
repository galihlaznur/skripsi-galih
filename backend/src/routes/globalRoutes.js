import express from 'express';
import { helloWorld } from '../controllers/globalControllers.js';
import { validateRequest } from '../middleware/validateRequest.js';
import { exampleSchema } from '../utils/schema.js';

const globalRoutes = express.Router();

globalRoutes.get('/hello-world', helloWorld);
globalRoutes.post('/test-validate', validateRequest(exampleSchema), (req, res) => {
    return res.json({message: 'Success!'});
});

export default globalRoutes;