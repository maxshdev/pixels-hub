import jwt from 'jsonwebtoken';
import { config } from '../../config/parameters';

import { Request, Response } from "express";

import { ISessionData } from "../../interfaces/ISessionData.interface";

export class AutenticacionController {

    async authorization(req: Request, res: Response): Promise<any> {
        
        const { public_key, private_key } = req.body;

        // Validate credentials
        if (public_key !== config.public_key || private_key !== config.private_key) {
            return res.sendStatus(401);
        }

        const token_auth = config.jwt_secret;

        // Generate token
        const token = jwt.sign({ private_key, public_key, token_auth }, config.jwt_secret);

        // Save data in sesión
        const sessionData: ISessionData = req.session;
        sessionData.token = token;

        return res.json({ token });
    }

    async getStatus(req: Request, res: Response): Promise<any> {

        const jsonResponse = {
            code: 200,
            status: 'OK'
        };

        return res.json(jsonResponse);
    }
}