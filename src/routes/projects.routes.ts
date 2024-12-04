import { Router } from 'express';
import { 
    createProject, 
    getAllProjects, 
    getProjectById, 
    updateProject, 
    deleteProject 
} from '../controllers/projects.controller';
import { authenticate } from './authenticationRoute';
const router = Router();

// Create a new project
router.post('/',authenticate, createProject);

// Get all projects
router.get('/', authenticate,getAllProjects);

// Get a project by its ID
router.get('/:id',authenticate, getProjectById);

// Update a specific project
router.put('/:id',authenticate, updateProject);

// Delete a specific project
router.delete('/:id',authenticate, deleteProject);

export default router;
