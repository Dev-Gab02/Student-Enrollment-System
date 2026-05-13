// import express from 'express';
// import cors from 'cors';
// import dotenv from 'dotenv';
// import helmet from 'helmet';
// import { connectDB } from './config/db.js'
// import authRoutes from './routes/authRoutes.js'
// import enrollmentRoutes from './routes/enrollmentRoutes.js'
// import adminRoutes from './routes/adminRoutes.js'

// dotenv.config();

// const app = express();

// connectDB()

// app.use(cors({
//   origin: "*"
// }));
// app.use(express.json());
// app.use(helmet());

// app.use("/api/auth", authRoutes);
// app.use("/api/enrollment", enrollmentRoutes);
// app.use("/api/admin", adminRoutes);

// const PORT = process.env.PORT || 5000;

// app.get("/", (req, res) => {
//   res.send("Backend is running on Azure");
// });

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
import express from 'express';
const app = express();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Backend is alive on Azure");
});

app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});