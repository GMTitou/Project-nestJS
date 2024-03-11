import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";
import { AuthService } from "./services/auth.service";

declare global {
    namespace Express {
        interface Request {
            user?: any;
        }
    }
}


@Injectable()
export class AuthMiddleware implements NestMiddleware {

    constructor(private readonly authService: AuthService) {}

    async use(req: Request, res: Response, next: NextFunction) {

        try {
            
            const authCookie = req.cookies['auth-cookie'];

            if(!authCookie) {
                return res.status(401).json({ message: 'Unauthorized' });
            }

            const userData = await this.authService.authUser(authCookie);

            if(!userData) {
                return res.status(401).json({ message: 'Unauthorized'});
            }

            req.user = userData;

        } catch (error) {

            console.error('Error in auth middleware: ', error)
            return res.status(500).json({ message: 'Internal server error' });
        }

        next();
    }
}