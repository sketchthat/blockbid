import { Accounts } from './accounts';
import { Apis } from './apis';
import { Deposits } from './deposits';
import { Markets } from './markets';

export class BlockBid {
  private accountsClass: Accounts;
  private apisClass: Apis;
  private depositsClass: Deposits;
  private marketsClass: Markets;

  constructor() {
    this.apisClass = new Apis();
    this.marketsClass = new Markets();
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
}
