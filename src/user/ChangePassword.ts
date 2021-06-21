import { IRequest } from "../typings";

export async function ChangePassword(request: IRequest, websiteOwner: string, newPassword: string): Promise<boolean> {
    try {
        const response = await request("/api/getUserInfo", {
            method: "POST",
            body: JSON.stringify({
                "websiteOwner": websiteOwner,
                "ownerPassword": newPassword
            })
        });
        return response.status == 200;
    } catch (e) {
        throw new Error(e);
    }
}