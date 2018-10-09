import { Common } from './common';

export class Api {
  private common: Common;

  constructor() {
    this.common = new Common();
  }

  public async createKey() {
    console.log('create key');

    return this.common.request('POST', '/apikeys');
  }
}
