import fetch, { RequestInit, Response } from "node-fetch";

function ValidUrl(url: string) {
    try {
        new URL(url);
        return true;
    } catch {
        return false;
    }
}

export default function http(baseURL: string, user: string, password: string, apiEndpoint: string, options?: RequestInit, contentType = "application/json"): Promise<Response> {
    if (!ValidUrl(baseURL)) throw new Error("invalid URL");

    return fetch(`${baseURL}${apiEndpoint}`, {
        headers: {
            "adminUser": user,
            "adminPass": password,
            "Content-Type": contentType,
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36"
        },
        "follow":5,
        ...options
    });
}