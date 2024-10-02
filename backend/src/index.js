import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import globalRoutes from './routes/globalRoutes.js';

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());
app.use(express.static('public'));
app.use("/api", globalRoutes);

app.get('/', (req, res) => {
    res.json({"text": "Hello Galih"});
});

const port = 3000;
app.listen(port, () => {
    console.log('listening on port ' + port);
});