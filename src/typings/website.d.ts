export interface ICreateWebsiteRequest {
    domainName: string;
    ownerEmail: string;
    packageName: string;
    websiteOwner: string;
    ownerPassword: string;
    websitesLimit?: number;
    acl?: string;
}

export interface IWebsitePackageRequest {
    websiteName: string;
    packageName: string;
}