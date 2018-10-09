import * as rp from 'request-promise';

import { HmacResponse } from './services/hmacResponse.interface';

export class Common {
  private uri: string;

  constructor() {
    const domain = 'api.blockbid.io';
    this.uri = `https://${domain}`;
  }

  public async request(method: string, path: string, qs?: object, body?: object, headers?: HmacResponse): Promise<any> {
    const opts = {
      uri: `${this.uri}${path}`,
      json: true,
      body,
      headers,
      method,
      qs,
    };

    return rp(opts);
  }
}
