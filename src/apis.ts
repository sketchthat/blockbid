import { Common } from './common';

import { CreateKeys } from './interfaces/apis/createKeys.interface';

export class Apis {
  private common: Common;

  constructor() {
    this.common = new Common();
  }

  public async createKey(totpCode: string, scopes: string): Promise<CreateKeys> {
    const body = {
      totp_code: totpCode,
      scopes,
    };

    return this.common.request('POST', '/apikeys', null, body);
  }
}
