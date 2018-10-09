import { Api } from './api';
import { Markets } from './markets';
export declare class BlockBid {
    private apiClass;
    private marketsClass;
    constructor();
    api(): Api;
    markets(): Markets;
}
