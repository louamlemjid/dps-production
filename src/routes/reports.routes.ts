import { Router } from 'express';
import { 
    createReport, 
    getReportsByProjectId, 
    updateReport, 
    deleteReport,
    getAllReportsWithRedondantWords,
    getAllReports
} from '../controllers/reports.controller';
import { authenticate } from './authenticationRoute';
const router = Router();

// Create a new report
router.post('/',authenticate, createReport);

// Get reports for a specific project
router.get('/projectid/:projectId',authenticate, getReportsByProjectId);

//Get reports having redandunt words
router.get('/redondant',authenticate,getAllReportsWithRedondantWords)

// Get all reports with redundant words
router.get('/',authenticate, getAllReports);

// Update a specific report
router.put('/:id',authenticate, updateReport);

// Delete a specific report
router.delete('/:id',authenticate, deleteReport);

export default router;
