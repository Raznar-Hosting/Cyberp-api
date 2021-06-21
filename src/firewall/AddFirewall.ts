import { IRequest, IFirewallRule } from "../typings";

export default async function AddFirewall(request: IRequest, firewallArgs: IFirewallRule): Promise<boolean> {
    try {
        const response = await request("/api/addFirewallRule", {
            method: "POST",
            body: JSON.stringify(firewallArgs)
        });
        return response.status == 200;
    } catch (e) {
        throw new Error(e);
    }
}