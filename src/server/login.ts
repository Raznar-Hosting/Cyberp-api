import { IRequest } from "../typings";

export default async function Login(request: IRequest): Promise<boolean> {
    try {
        const response = await request("/api/verifyConn", {
            method: "POST"
        });
        return response.status == 200;
    } catch(e) {
        throw new Error(e);
    }
}