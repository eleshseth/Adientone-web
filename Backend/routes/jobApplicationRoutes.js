import express from 'express';
import {
  createJobApplication,
  getAllJobApplications,
  getJobApplicationById,
  updateApplicationStatus,
} from '../controllers/jobApplicationController.js';
import { upload } from '../middleware/uploadMiddleware.js';

const router = express.Router();

// Job application routes
router.post('/job-application', upload.single('resume'), createJobApplication);
router.get('/job-applications', getAllJobApplications);
router.get('/job-application/:id', getJobApplicationById);
router.patch('/job-application/:id/status', updateApplicationStatus);

export default router;
