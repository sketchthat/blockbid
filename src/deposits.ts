import { Common } from './common';
import { createHmac } from './services/authentication';

import { Addresses } from './interfaces/deposits/addresses.interface';
import { Deposits as DepositsResponse } from './interfaces/deposits/deposits.interface';

export class Deposits {
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

  public async addresses(currency: string): Promise<Addresses> {
    const qs = {
      currency,
    };

    const headers = createHmac(this.apiKey, this.apiSecret);

    return this.common.request('GET', '/addresses', qs, null, headers);
  }

  public async deposits(currency: string, limit: number, state: string): Promise<DepositsResponse[]> {
    const qs = {
      currency,
      limit,
      state,
    };

    const headers = createHmac(this.apiKey, this.apiSecret);

    return this.common.request('GET', '/deposits', qs, null, headers);
  }

  public async deposit(id: number): Promise<DepositsResponse> {
    const headers = createHmac(this.apiKey, this.apiSecret);

    return this.common.request('GET', `/deposits/${id}`, null, null, headers);
  }
}
