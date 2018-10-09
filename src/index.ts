import { Api } from './api';
import { Markets } from './markets';

export class BlockBid {
  private apiClass: Api;
  private marketsClass: Markets;

  constructor() {
    this.apiClass = new Api();
    this.marketsClass = new Markets();
  }

  public api() {
    return this.apiClass;
  }

  public markets() {
    return this.marketsClass;
  }
}
