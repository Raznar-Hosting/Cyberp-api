import { IRequest, IUserRequest } from "../typings";

export default async function Create(request: IRequest, userArgs: IUserRequest ): Promise<boolean> {
    try {
        const response = await request("/api/submitUserCreation", {
            method: "POST",
            body: JSON.stringify(userArgs)
        });
        return response.status == 200;
    } catch (e) {
        throw new Error(e);
    }
}