import express from 'express';
const router = express.Router();
import authMiddleware from '../middleware/authMiddleware.js';
import roleMiddleware from '../middleware/roleMiddleware.js';
import enrollmentController from '../controllers/enrollmentController.js';

router.post("/submit", authMiddleware, roleMiddleware("student"), enrollmentController.createEnrollment);
router.get("/my", authMiddleware, roleMiddleware("student"), enrollmentController.getMyEnrollment);

export default router;