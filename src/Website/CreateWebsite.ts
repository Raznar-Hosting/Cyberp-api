import { IRequest, ICreateWebsiteRequest } from "../typings";

export default async function CreateWebsite(request: IRequest, websiteArgs: ICreateWebsiteRequest): Promise<boolean> {
    try {
        const response = await request("/api/createWebsite", {
            method: "POST",
            body: JSON.stringify(websiteArgs)
        });
        return response.status == 200;
    } catch (e) {
        throw new Error(e);
    }
}