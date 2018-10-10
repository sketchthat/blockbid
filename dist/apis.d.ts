import { ApiKeys } from './interfaces/apis/apiKeys.interface';
export declare class Apis {
    private common;
    private apiKey;
    private apiSecret;
    constructor(apiKey?: string, apiSecret?: string);
    apiKeys(totpCode: string, scopes?: string): Promise<ApiKeys>;
}
