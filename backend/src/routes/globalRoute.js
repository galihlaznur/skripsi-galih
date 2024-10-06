import express from 'express';
import { helloWorld } from '../controllers/globalController.js';
import { validateRequest } from '../middleware/validateRequest.js';
import { exampleSchema } from '../utils/schema.js';

const globalRoute = express.Router();

globalRoute.get('/hello-world', helloWorld);
globalRoute.post('/test-validate', validateRequest(exampleSchema), (req, res) => {
    return res.json({message: 'Success!'});
});

export default globalRoute;