import { Withdraw } from './interfaces/withdraws/withdraw.interface';
export declare class Withdraws {
    private common;
    private apiKey;
    private apiSecret;
    constructor(apiKey?: string, apiSecret?: string);
    withdraws(currency?: string, page?: number, limit?: number): Promise<Withdraw[]>;
    createWithdraw(address: string, currency: string, amount: string): Promise<Withdraw>;
}
