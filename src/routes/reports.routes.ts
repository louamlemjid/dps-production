import { Router } from 'express';
import { 
    createReport, 
    getReportsByProjectId, 
    updateReport, 
    deleteReport,
    getAllReportsWithRedanduntWords
} from '../controllers/reports.controller';
import { authenticate } from './authenticationRoute';
const router = Router();

// Create a new report
router.post('/',authenticate, createReport);

// Get reports for a specific project
router.get('/:projectId',authenticate, getReportsByProjectId);

// Get all reports with redundant words
router.get('/',authenticate, getAllReportsWithRedanduntWords);

// Update a specific report
router.put('/:id',authenticate, updateReport);

// Delete a specific report
router.delete('/:id',authenticate, deleteReport);

export default router;
