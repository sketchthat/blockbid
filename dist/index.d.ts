import { Accounts } from './accounts';
import { Apis } from './apis';
import { Deposits } from './deposits';
import { Markets } from './markets';
import { Orders } from './orders';
import { Withdraws } from './withdraws';
export declare class BlockBid {
    private accountsClass;
    private apisClass;
    private depositsClass;
    private marketsClass;
    private ordersClass;
    private withdrawsClass;
    constructor(apiKey?: string, apiSecret?: string);
    accounts(): Accounts;
    apis(): Apis;
    deposits(): Deposits;
    markets(): Markets;
    orders(): Orders;
    withdraws(): Withdraws;
}
