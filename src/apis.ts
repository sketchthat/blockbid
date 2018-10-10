import { Common } from './common';
import { createHmac } from './services/authentication';

import { ApiKeys } from './interfaces/apis/apiKeys.interface';

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

  public async apiKeys(totpCode: string, scopes?: string): Promise<ApiKeys> {
    const body = {
      totp_code: totpCode,
      scopes,
    };

    const headers = createHmac(this.apiKey, this.apiSecret);

    return this.common.request('POST', '/apikeys', null, body, headers);
  }
}
