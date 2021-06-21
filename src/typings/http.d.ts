import type { RequestInit, Response } from "node-fetch";

export type IRequest = (apiEndpoint: string, options?: RequestInit, contentType?: string) => Promise<Response>;