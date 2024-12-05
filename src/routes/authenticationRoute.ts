import { Request,Response,NextFunction } from "express";

export const authenticate = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers['authorization'];
    if (token == process.env.AUTH_TOKEN) {
        next();
    } else {
        res.status(403).json({ error: "Forbidden: Invalid token" });
    }
};