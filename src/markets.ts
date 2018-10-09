import { Common } from './common';
import { createHmac } from './services/authentication';

import { Markets as MarketsResponse } from './interfaces/markets/markets.interface';
import { Ohlc, OhlcPeriodType } from './interfaces/markets/ohlc.interface';
import { Orderbooks } from './interfaces/markets/orderbooks.interface';
import { Tickers } from './interfaces/markets/tickers.interface';
import { Trades, TradesOrderByType } from './interfaces/markets/trades.interface';

export class Markets {
  private common: Common;

  private apiKey: string;
  private apiSecret: string;

  constructor(
    apiKey?: string,
    apiSecret?: string,
  ) {
    this.common = new Common();

    this.apiKey = apiKey;
    this.apiSecret = apiSecret;
  }

  public async markets(): Promise<MarketsResponse[]> {
    return this.common.request('GET', '/markets');
  }

  public async tickers(): Promise<Tickers[]> {
    return this.common.request('GET', '/tickers');
  }

  public async ohlc(market: string, limit?: number, period?: OhlcPeriodType, timestamp?: number): Promise<Ohlc> {
    const qs = {
      market,
      limit,
      period,
      timestamp,
    };

    return this.common.request('GET', '/ohlc', qs);
  }

  public async orderbook(market: string, asksLimit?: number, bidsLimit?: number): Promise<Orderbooks> {
    const qs = {
      market,
      asks_limit: asksLimit,
      bids_limit: bidsLimit,
    };

    return this.common.request('GET', '/orderbook', qs);
  }

  public async trades(
    market: string,
    limit?: number,
    timestamp?: number,
    from?: number,
    to?: number,
    orderBy?: TradesOrderByType,
  ): Promise<Trades> {
    const qs = {
      market,
      limit,
      timestamp,
      from,
      to,
      order_by: orderBy,
    };

    return this.common.request('GET', '/trades', qs);
  }

  public async tradesMy(
    market: string,
    limit?: number,
    timestamp?: number,
    from?: number,
    to?: number,
    orderBy?: TradesOrderByType,
  ): Promise<Trades> {
    const qs = {
      market,
      limit,
      timestamp,
      from,
      to,
      order_by: orderBy,
    };

    const headers = createHmac(this.apiKey, this.apiSecret);

    return this.common.request('GET', '/trades/my', qs, null, headers);
  }

}
