import { Request, Response } from 'express';
import db from '../services/db.service'; // Assume your DB service handles queries

export const getAllProjects = async (req: Request, res: Response) => {
    try {
        const projects = db.query('SELECT * FROM projects');
        res.status(200).json(projects);
    } catch (error:any) {
        res.status(500).json({ error: error.message });
    }
};

export const getProjectById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const project = db.query('SELECT * FROM projects WHERE id = :id', {id});
        if (project.length === 0) {
            return res.status(404).json({ message: 'Project not found' });
        }
        res.status(200).json(project[0]);
    } catch (error:any) {
        res.status(500).json({ error: error.message });
    }
};

export const createProject = async (req: Request, res: Response) => {
    try {
        const { name, description } = req.body;
        const result = db.run('INSERT INTO projects (name, description) VALUES (:name, :description)', {name, description});
        res.status(201).json({ id: result.lastInsertRowid, name, description });
    } catch (error:any) {
        res.status(500).json({ error: error.message });
    }
};

export const updateProject = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { name, description } = req.body;
        db.run('UPDATE projects SET name = :name, description = :description WHERE id = :id', {name, description, id});
        res.status(200).json({ message: 'Project updated successfully' });
    } catch (error:any) {
        res.status(500).json({ error: error.message });
    }
};

export const deleteProject = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        db.run('DELETE FROM projects WHERE id = :id', {id});
        res.status(200).json({ message: 'Project deleted successfully' });
    } catch (error:any) {
        res.status(500).json({ error: error.message });
    }
};

