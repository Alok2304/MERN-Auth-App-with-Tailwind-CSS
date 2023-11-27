import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user-route.js';
import authRoutes from './routes/auth-route.js';

dotenv.config()

mongoose.connect(process.env.MONGO).then(() => { console.log('Connected to the database') }).catch((err) => { console.log(err) });

const app = express();
const port = 3000

app.use(express.json());

app.use("/api/user/", userRoutes);
app.use("/api/auth/", authRoutes);

app.listen(port, () => {
	console.log(`Server listening on port ${port}`)
})

app.use((err, req, res, next) => {
	const statuscode = err.statusCode || 500;
	const message = err.message || 'Internal Server Error';
	return res.status(statuscode).json({
		success: false,
		message,
		statuscode
	})
})
