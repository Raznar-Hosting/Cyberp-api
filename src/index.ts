import type { RequestInit, Response } from "node-fetch";
import { IRequest, IWebsitePackageRequest, ICreateWebsiteRequest, IFirewallRule } from "./typings";
import http from "./util/http";
import Login from "./server/login";
import ChangeWebsitePackage from "./Website/ChangeWebsitePackage";
import CreateWebsite from "./Website/CreateWebsite";
import DeleteWebsite from "./Website/DeleteWebsite";
import SuspendWebsite from "./Website/SuspendWebsite";
import UnsuspendWebsite from "./Website/UnsuspendWebsite";
import AddFirewall from "./firewall/AddFirewall";

export default class CyberP {
    constructor(public hostUrl: string, private user: string, private password: string) {}
    private initRequest = (apiEndpoint: string, options?: RequestInit, contentType = "application/json"): Promise<Response> => http(this.hostUrl, this.user, this.password, apiEndpoint, options, contentType);

    public server = new Server(this.initRequest);
    public website = new Website(this.initRequest);
    public firewall = new Firewall(this.initRequest);
}

export class Server {
    constructor(private _request: IRequest) {}
    public login = () => Login(this._request);
}

export class Website {
    constructor(private _request: IRequest) {}
    public changePackage = (packageArgs: IWebsitePackageRequest) => ChangeWebsitePackage(this._request, packageArgs);
    public create = (websiteArgs: ICreateWebsiteRequest) => CreateWebsite(this._request, websiteArgs);
    public delete = (domainName: string) => DeleteWebsite(this._request, domainName);
    public suspend = (domainName: string) => SuspendWebsite(this._request, domainName);
    public unsuspend = (domainName: string) => UnsuspendWebsite(this._request, domainName);
}

export class Firewall {
    constructor(private _request: IRequest) {}
    public addFirewall = (firewallArgs: IFirewallRule) => AddFirewall(this._request, firewallArgs);
}