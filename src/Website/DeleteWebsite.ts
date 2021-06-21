import { IRequest } from "../typings";

export default async function DeleteWebsite(request: IRequest, domainName: string): Promise<boolean> {
    try {
        const response = await request("/api/deleteWebsite", {
            method: "POST",
            body: JSON.stringify({
                "domainName": "cyberpanel.net"
            })
        })
        return response.status == 200;
    } catch (e) {
        throw new Error(e);
    }
}