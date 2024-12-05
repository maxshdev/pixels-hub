import jwt from 'jsonwebtoken';
import { config } from '../config/parameters';
import { Request, Response, NextFunction } from 'express';
import { ISessionData } from '../interfaces/ISessionData.interface';

const authenticateToken = (req: Request, res: Response, next: NextFunction): void => {
    const token = req.headers.authorization?.split(' ')[1];
  
    if (!token) {
      res.sendStatus(401); 
      return;
    }
    
    jwt.verify(token, config.jwt_secret, (err: any) => {
      
      if (err) {
        return res.sendStatus(403);
      }

      const session: ISessionData = req.session;
      session.token = token;

      next();
    });
  };

export default authenticateToken;
