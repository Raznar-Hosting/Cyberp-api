import { IRequest } from "../typings";

export default async function Login(request: IRequest, user: string, password: string) {
    try {
        const response = await request("/api/verifyConn")
    } catch(e) {
        throw new Error(e);
    }
}