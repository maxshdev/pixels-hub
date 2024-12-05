import { SessionData } from "express-session";

interface ISessionData extends SessionData {
    token?: any;
    user?: any;
}

interface ITokenizedData {
    private_key: string;
    public_key: string;
    token_auth: string;
    iat: number;
}

export { ISessionData, ITokenizedData }