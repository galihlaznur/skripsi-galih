import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './utils/database.js';
import globalRoute from './routes/globalRoute.js';
import authRoute from './routes/authRoute.js';
import paymentRoute from './routes/paymentRoute.js';

const app = express();

dotenv.config();

connectDB();

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.use("/api", globalRoute);
app.use("/api", authRoute);
app.use("/api", paymentRoute);

app.get('/', (req, res) => {
    res.json({"text": "Hello Galih"});
});

const port = 3000;
app.listen(port, () => {
    console.log('listening on port ' + port);
});