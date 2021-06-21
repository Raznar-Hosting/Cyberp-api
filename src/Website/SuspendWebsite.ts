import { IRequest } from "../typings";

export default async function SuspendWebsite(request: IRequest, websiteName: string): Promise<boolean> {
    try {
        const response = await request("/api/submitWebsiteStatus", {
            method: "POST",
            body: JSON.stringify({
                "websiteName": websiteName,
                "state": "Suspend"
            })
        });
        return response.status == 200;
    } catch (e) {
        throw new Error(e);
    }
}