import { UserData } from "./user-data.interface";

export function decodeJWT(token: string): UserData {
    return JSON.parse(atob(token.split('.')[1])) as UserData;
}