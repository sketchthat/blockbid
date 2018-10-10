import { Common } from './common';
import { createHmac } from './services/authentication';

import { CreateKeys } from './interfaces/apis/createKeys.interface';

export class Apis {
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

  public async createKey(totpCode: string, scopes?: string): Promise<CreateKeys> {
    const body = {
      totp_code: totpCode,
      scopes,
    };

    const headers = createHmac(this.apiKey, this.apiSecret);

    return this.common.request('POST', '/apikeys', null, body, headers);
  }
}
