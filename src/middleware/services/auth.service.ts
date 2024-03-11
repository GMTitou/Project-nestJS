import { Injectable } from "@nestjs/common";
import { UserData } from './user-data.interface';
import { decodeJWT } from "./auth.util";

@Injectable()
export class AuthService {

    async authUser(authCookie: string): Promise<UserData | null> {
        try {
            const userData: UserData = decodeJWT(authCookie);
            return userData;
        } catch (error) {
            console.error('Error authetificate user', error);
            return null;
        }
    }
}