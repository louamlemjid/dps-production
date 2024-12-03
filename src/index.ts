import express, { Express } from 'express';
import dotenv from 'dotenv';
dotenv.config();
import projectRoutes from './routes/projects.routes'; 
import reportRoutes from './routes/reports.routes';
const app: Express = express();
const port = process.env.PORT || 3000;
app.use(express.json());

app.use('/projects', projectRoutes); 
app.use('/reports', reportRoutes);

app.listen(port, () => {
	console.log(`[server]: Server is running at http://localhost:${port}`);
});
