import express from 'express';
const router = express.Router();
import authMiddleware from '../middleware/authMiddleware.js'
import roleMiddleware from '../middleware/roleMiddleware.js'
import adminController from '../controllers/adminController.js';

router.get("/enrollments", authMiddleware, roleMiddleware("admin"), adminController.getAllEnrollments);
router.patch("/enrollment/:id", authMiddleware, roleMiddleware("admin"), adminController.updateEnrollmentStatus);

export default router;