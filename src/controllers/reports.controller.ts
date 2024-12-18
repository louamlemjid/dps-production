import { Request, Response } from 'express';
import db from '../services/db.service';
import { wordsCounterById } from '../specialOperationsFunctions/wordsFrequencyById';
import { findMostFrequentWordInReports } from '../specialOperationsFunctions/findFrequentWords';
import { report } from 'process';
import { Report } from '../types/reportType'; 
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
        const reports = db.query('SELECT * FROM reports WHERE projectid = :projectId', {projectId});
        res.status(200).json(reports);
    } catch (error:any) {
        res.status(500).json({ error: error.message });
    }
};

export const createReport = async (req: Request, res: Response) => {
    try {
        const { id,text, projectId } = req.body;
        const result = db.run('INSERT INTO reports (id,text, projectid) VALUES (:id,:text,:projectId)', {id,text, projectId});
        res.status(200).json({ result: result });
    } catch (error:any) {
        res.status(500).json({ error: error.message });
    }
};

export const updateReport = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { text} = req.body;
        db.run('UPDATE reports SET text = :text WHERE id = :id', {text,  id});
        res.status(200).json({ message: 'Report updated successfully' });
    } catch (error:any) {
        res.status(500).json({ error: error.message });
    }
};

export const deleteReport = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const result=db.run('DELETE FROM reports WHERE id = :id',{id});
        res.status(200).json({ result:result });
    } catch (error:any) {
        res.status(500).json({ error: error.message });
    }
};

export const getAllReportsWithRedondantWords = async (req: Request, res: Response) => {
    try {
        const reports = db.query("SELECT * FROM reports") as Report[];
        const idsWithFrequentWords=wordsCounterById(reports)
        //e.g { '1': { quantum: 3 }, '2': { quantum: 3, culinary: 3 } }
        const resultedIdsArrays=findMostFrequentWordInReports(
            idsWithFrequentWords
        )//e.g ['1','2']
        // Create placeholders like ":id0, :id1" and params like {"id0":'1',"id1":'2'}
        const placeholders = resultedIdsArrays.map((_, index) => `:id${index}`).join(',');
        const query = `SELECT * FROM reports WHERE id IN (${placeholders})`;

        const params = resultedIdsArrays.reduce<Record<string, string>>((acc, id, index) => {
            acc[`id${index}`] = id; 
            return acc;
        }, {});  
        const chosenReports= db
        .query(query,params)

        res.status(200).json(chosenReports);
    } catch (error:any) {
        res.status(500).json({ error: error.message });
    }
}
