import { Markets as MarketsResponse } from './interfaces/markets/markets.interface';
import { Ohlc, OhlcPeriodType } from './interfaces/markets/ohlc.interface';
import { Orderbooks } from './interfaces/markets/orderbooks.interface';
import { Tickers } from './interfaces/markets/tickers.interface';
import { Trades, TradesOrderByType } from './interfaces/markets/trades.interface';
export declare class Markets {
    private common;
    private apiKey;
    private apiSecret;
    constructor(apiKey?: string, apiSecret?: string);
    markets(): Promise<MarketsResponse[]>;
    tickers(): Promise<Tickers[]>;
    ohlc(market: string, limit?: number, period?: OhlcPeriodType, timestamp?: number): Promise<Ohlc>;
    orderbook(market: string, asksLimit?: number, bidsLimit?: number): Promise<Orderbooks>;
    trades(market: string, limit?: number, timestamp?: number, from?: number, to?: number, orderBy?: TradesOrderByType): Promise<Trades>;
    tradesMy(market: string, limit?: number, timestamp?: number, from?: number, to?: number, orderBy?: TradesOrderByType): Promise<Trades>;
}
