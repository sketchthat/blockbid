"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const accounts_1 = require("./accounts");
const apis_1 = require("./apis");
const deposits_1 = require("./deposits");
const markets_1 = require("./markets");
const orders_1 = require("./orders");
const withdraws_1 = require("./withdraws");
class BlockBid {
    constructor(apiKey, apiSecret) {
        this.accountsClass = new accounts_1.Accounts(apiKey, apiSecret);
        this.apisClass = new apis_1.Apis(apiKey, apiSecret);
        this.depositsClass = new deposits_1.Deposits(apiKey, apiSecret);
        this.marketsClass = new markets_1.Markets(apiKey, apiSecret);
        this.ordersClass = new orders_1.Orders(apiKey, apiSecret);
        this.withdrawsClass = new withdraws_1.Withdraws(apiKey, apiSecret);
    }
    accounts() {
        return this.accountsClass;
    }
    apis() {
        return this.apisClass;
    }
    deposits() {
        return this.depositsClass;
    }
    markets() {
        return this.marketsClass;
    }
    orders() {
        return this.ordersClass;
    }
    withdraws() {
        return this.withdrawsClass;
    }
}
exports.BlockBid = BlockBid;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx5Q0FBc0M7QUFDdEMsaUNBQThCO0FBQzlCLHlDQUFzQztBQUN0Qyx1Q0FBb0M7QUFDcEMscUNBQWtDO0FBQ2xDLDJDQUF3QztBQUV4QztJQVFFLFlBQ0UsTUFBZSxFQUNmLFNBQWtCO1FBRWxCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxtQkFBUSxDQUFDLE1BQU0sRUFBRSxTQUFTLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksV0FBSSxDQUFDLE1BQU0sRUFBRSxTQUFTLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksbUJBQVEsQ0FBQyxNQUFNLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLGlCQUFPLENBQUMsTUFBTSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxlQUFNLENBQUMsTUFBTSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxxQkFBUyxDQUFDLE1BQU0sRUFBRSxTQUFTLENBQUMsQ0FBQztJQUN6RCxDQUFDO0lBRU0sUUFBUTtRQUNiLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUM1QixDQUFDO0lBRU0sSUFBSTtRQUNULE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4QixDQUFDO0lBRU0sUUFBUTtRQUNiLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUM1QixDQUFDO0lBRU0sT0FBTztRQUNaLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztJQUMzQixDQUFDO0lBRU0sTUFBTTtRQUNYLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUMxQixDQUFDO0lBRU0sU0FBUztRQUNkLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUM3QixDQUFDO0NBQ0Y7QUEzQ0QsNEJBMkNDIn0=