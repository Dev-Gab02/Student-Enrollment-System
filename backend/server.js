import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import { connectDB } from './config/db.js'
import authRoutes from './routes/authRoutes.js'

dotenv.config();

const app = express();

connectDB()

app.use(cors());
app.use(express.json());
app.use(helmet());

app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Enrollment API Running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});