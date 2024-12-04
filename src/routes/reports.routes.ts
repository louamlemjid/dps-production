import { Router } from 'express';
import { 
    createReport, 
    getReportsByProjectId, 
    updateReport, 
    deleteReport,
    getAllReportsWithRedanduntWords
} from '../controllers/reports.controller';

const router = Router();

// Create a new report
router.post('/', createReport);

// Get reports for a specific project
router.get('/:projectId', getReportsByProjectId);

// Get all reports with redundant words
router.get('/', getAllReportsWithRedanduntWords);
// Update a specific report
router.put('/:id', updateReport);

// Delete a specific report
router.delete('/:id', deleteReport);

export default router;
