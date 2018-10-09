import { Common } from './common';

import { Withdraw } from './interfaces/withdraws/withdraw.interface';

export class Withdraws {
  private common: Common;

  constructor() {
    this.common = new Common();
  }

  public async withdraws(currency?: string, page?: number, limit?: number): Promise<Withdraw[]> {
    const qs = {
      currency,
      page: (page ? page : 1),
      limit: (limit ? (limit > 1000 ? 1000 : limit) : 100),
    };

    return this.common.request('GET', '/withdraws', qs);
  }

  public async createWithdraw(address: string, currency: string, amount: string): Promise<Withdraw> {
    const body = {
      address,
      currency,
      amount,
    };

    return this.common.request('POST', '/withdraws', null, body);
  }
}
