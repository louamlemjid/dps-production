import { Router } from 'express';
import { 
    createReport, 
    getReportsByProjectId, 
    updateReport, 
    deleteReport 
} from '../controllers/reports.controller';

const router = Router();

// Create a new report
router.post('/', createReport);

// Get reports for a specific project
router.get('/:projectId', getReportsByProjectId);

// Update a specific report
router.put('/:id', updateReport);

// Delete a specific report
router.delete('/:id', deleteReport);

export default router;
