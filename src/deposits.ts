import { Common } from './common';

import { Addresses } from './interfaces/deposits/addresses.interface';
import { Deposits as DepositsResponse } from './interfaces/deposits/deposits.interface';

export class Deposits {
  private common: Common;

  constructor() {
    this.common = new Common();
  }

  public async addresses(currency: string): Promise<Addresses> {
    const qs = {
      currency,
    };

    return this.common.request('GET', '/addresses', qs);
  }

  public async deposits(currency: string, limit: number, state: string): Promise<DepositsResponse[]> {
    const qs = {
      currency,
      limit,
      state,
    };

    return this.common.request('GET', '/deposits', qs);
  }

  public async deposit(id: number): Promise<DepositsResponse> {
    return this.common.request('GET', `/deposits/${id}`);
  }
}
