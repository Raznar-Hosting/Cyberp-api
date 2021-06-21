import type { RequestInit, Response } from "node-fetch";
import { IRequest } from "./typings";
import Login from "./server/login";
import http from "./util/http";

export default class CyberP {
    constructor(public hostUrl: string, private user: string, private password: string) {}
    private initRequest = (endpointAPI: string, options?: RequestInit) => http(this.hostUrl, this.user, this.password, endpointAPI, options);

    public server = new Server(this.initRequest);
}

export class Server {
    constructor(private _request: IRequest) {}
    
}