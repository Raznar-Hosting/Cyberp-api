import { IRequest, IWebsitePackageRequest } from "../typings";

export default async function ChangeWebsitePackage(request: IRequest, packageArgs: IWebsitePackageRequest): Promise<boolean> {
    try {
        const response = await request("/api/changePackageApi", {
            method: "POST",
            body: JSON.stringify(packageArgs)
        });
        return response.status == 200;
    } catch (e) {
        throw new Error(e);
    }
}