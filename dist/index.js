"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = require("./api");
const markets_1 = require("./markets");
class BlockBid {
    constructor() {
        this.apiClass = new api_1.Api();
        this.marketsClass = new markets_1.Markets();
    }
    api() {
        return this.apiClass;
    }
    markets() {
        return this.marketsClass;
    }
}
exports.BlockBid = BlockBid;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwrQkFBNEI7QUFDNUIsdUNBQW9DO0FBRXBDO0lBSUU7UUFDRSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksU0FBRyxFQUFFLENBQUM7UUFDMUIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLGlCQUFPLEVBQUUsQ0FBQztJQUNwQyxDQUFDO0lBRU0sR0FBRztRQUNSLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN2QixDQUFDO0lBRU0sT0FBTztRQUNaLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztJQUMzQixDQUFDO0NBQ0Y7QUFoQkQsNEJBZ0JDIn0=