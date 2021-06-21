import { IRequest } from "../typings";

export async function Create(request: IRequest, userName: string): Promise<boolean> {
    try {
        const response = await request("/api/getUserInfo", {
            method: "POST",
            body: JSON.stringify({
                "userName": userName
            })
        });
        return response.status == 200;
    } catch (e) {
        throw new Error(e);
    }
}