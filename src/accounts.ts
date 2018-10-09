import { Common } from './common';

import { Account } from './interfaces/accounts/account.interface';
import { Identity } from './interfaces/accounts/identity.interface';

export class Accounts {
  private common: Common;

  constructor() {
    this.common = new Common();
  }

  public async identity(): Promise<Identity> {
    return this.common.request('GET', '/identity');
  }

  public async accounts(): Promise<Account[]> {
    return this.common.request('GET', '/accounts');
  }

  public async account(accountId: string, currency: string): Promise<Account> {
    const qs = {
      currency,
    };

    return this.common.request('GET', `/accounts/${accountId}`, qs);
  }
}
