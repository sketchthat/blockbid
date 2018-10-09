import { Accounts } from './accounts';
import { Apis } from './apis';
import { Deposits } from './deposits';
import { Markets } from './markets';
import { Orders } from './orders';
import { Withdraws } from './withdraws';

export class BlockBid {
  private accountsClass: Accounts;
  private apisClass: Apis;
  private depositsClass: Deposits;
  private marketsClass: Markets;
  private ordersClass: Orders;
  private withdrawsClass: Withdraws;

  constructor(
    apiKey?: string,
    apiSecret?: string,
  ) {
    this.accountsClass = new Accounts(apiKey, apiSecret);
    this.apisClass = new Apis(apiKey, apiSecret);
    this.marketsClass = new Markets(apiKey, apiSecret);
    this.ordersClass = new Orders(apiKey, apiSecret);
    this.withdrawsClass = new Withdraws(apiKey, apiSecret);
  }

  public accounts() {
    return this.accountsClass;
  }

  public apis() {
    return this.apisClass;
  }

  public deposits() {
    return this.depositsClass;
  }

  public markets() {
    return this.marketsClass;
  }

  public orders() {
    return this.ordersClass;
  }

  public withdraws() {
    return this.withdrawsClass;
  }
}
