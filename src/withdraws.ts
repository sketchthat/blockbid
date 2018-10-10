import { Common } from './common';
import { createHmac } from './services/authentication';

import { Withdraw } from './interfaces/withdraws/withdraw.interface';

export class Withdraws {
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

  public async withdraws(currency?: string, page?: number, limit?: number): Promise<Withdraw[]> {
    const qs = this.common.buildParams({
      currency,
      page: (page ? page : 1),
      limit: (limit ? (limit > 1000 ? 1000 : limit) : 100),
    });

    const headers = createHmac(this.apiKey, this.apiSecret);

    return this.common.request('GET', '/withdraws', qs, null, headers);
  }

  public async createWithdraw(address: string, currency: string, amount: string): Promise<Withdraw> {
    const body = this.common.buildParams({
      address,
      currency,
      amount,
    });

    const headers = createHmac(this.apiKey, this.apiSecret);

    return this.common.request('POST', '/withdraws', null, body, headers);
  }
}
