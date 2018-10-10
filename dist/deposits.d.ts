import { Addresses } from './interfaces/deposits/addresses.interface';
import { Deposits as DepositsResponse } from './interfaces/deposits/deposits.interface';
export declare class Deposits {
    private common;
    private apiKey;
    private apiSecret;
    constructor(apiKey?: string, apiSecret?: string);
    addresses(currency: string): Promise<Addresses>;
    deposits(currency?: string, limit?: number, state?: string): Promise<DepositsResponse[]>;
    deposit(id: number): Promise<DepositsResponse>;
}
