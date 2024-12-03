import { Router } from 'express';
import { 
    createProject, 
    getAllProjects, 
    getProjectById, 
    updateProject, 
    deleteProject 
} from '../controllers/projects.controller';

const router = Router();

// Create a new project
router.post('/', createProject);

// Get all projects
router.get('/', getAllProjects);

// Get a project by its ID
router.get('/:id', getProjectById);

// Update a specific project
router.put('/:id', updateProject);

// Delete a specific project
router.delete('/:id', deleteProject);

export default router;
