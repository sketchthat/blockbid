import { Account } from './interfaces/accounts/account.interface';
import { Identity } from './interfaces/accounts/identity.interface';
export declare class Accounts {
    private common;
    private apiKey;
    private apiSecret;
    constructor(apiKey?: string, apiSecret?: string);
    identity(): Promise<Identity>;
    accounts(): Promise<Account[]>;
    account(accountId: string): Promise<Account>;
}
