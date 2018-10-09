import { Common } from './common';
import { createHmac } from './services/authentication';

import { Account } from './interfaces/accounts/account.interface';
import { Identity } from './interfaces/accounts/identity.interface';

export class Accounts {
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

  public async identity(): Promise<Identity> {
    const headers = createHmac(this.apiKey, this.apiSecret);

    return this.common.request('GET', '/identity', null, null, headers);
  }

  public async accounts(): Promise<Account[]> {
    const headers = createHmac(this.apiKey, this.apiSecret);

    return this.common.request('GET', '/accounts', null, null, headers);
  }

  public async account(accountId: string, currency: string): Promise<Account> {
    const qs = {
      currency,
    };

    const headers = createHmac(this.apiKey, this.apiSecret);

    return this.common.request('GET', `/accounts/${accountId}`, qs, null, headers);
  }
}
