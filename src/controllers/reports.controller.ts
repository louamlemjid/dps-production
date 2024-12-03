import { Request, Response } from 'express';
import db from '../services/db.service';

export const getAllReports = async (req: Request, res: Response) => {
    try {
        const reports = db.query('SELECT * FROM reports');
        res.status(200).json(reports);
    } catch (error:any) {
        res.status(500).json({ error: error.message });
    }
};

export const getReportsByProjectId = async (req: Request, res: Response) => {
    try {
        const { projectId } = req.params;
        const reports = db.run('SELECT * FROM reports WHERE id = ?', {id: 1});
        res.status(200).json(reports);
    } catch (error:any) {
        res.status(500).json({ error: error.message });
    }
};

export const createReport = async (req: Request, res: Response) => {
    try {
        const { text, project_id } = req.body;
        const result = db.run('INSERT INTO reports (text, project_id) VALUES (?, ?)', {text, project_id});
        res.status(201).json({ id: result.lastInsertRowid, text, project_id });
    } catch (error:any) {
        res.status(500).json({ error: error.message });
    }
};

export const updateReport = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { text, project_id } = req.body;
        db.run('UPDATE reports SET text = ?, project_id = ? WHERE id = ?', {text, project_id, id});
        res.status(200).json({ message: 'Report updated successfully' });
    } catch (error:any) {
        res.status(500).json({ error: error.message });
    }
};

export const deleteReport = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        db.run('DELETE FROM reports WHERE id = ?', {id});
        res.status(200).json({ message: 'Report deleted successfully' });
    } catch (error:any) {
        res.status(500).json({ error: error.message });
    }
};

