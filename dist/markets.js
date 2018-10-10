"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("./common");
const authentication_1 = require("./services/authentication");
class Markets {
    constructor(apiKey, apiSecret) {
        this.common = new common_1.Common();
        this.apiKey = apiKey;
        this.apiSecret = apiSecret;
    }
    markets() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.common.request('GET', '/markets');
        });
    }
    tickers() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.common.request('GET', '/tickers');
        });
    }
    ohlc(market, limit, period, timestamp) {
        return __awaiter(this, void 0, void 0, function* () {
            const qs = {
                market,
                limit: limit ? limit : 30,
                period: period ? period : 1,
                timestamp,
            };
            return this.common.request('GET', '/ohlc', qs);
        });
    }
    orderbook(market, asksLimit, bidsLimit) {
        return __awaiter(this, void 0, void 0, function* () {
            const qs = {
                market,
                asks_limit: asksLimit ? asksLimit : 20,
                bids_limit: bidsLimit ? bidsLimit : 20,
            };
            return this.common.request('GET', '/orderbook', qs);
        });
    }
    trades(market, limit, timestamp, from, to, orderBy) {
        return __awaiter(this, void 0, void 0, function* () {
            const qs = {
                market,
                limit: limit ? limit : 50,
                timestamp,
                from,
                to,
                order_by: orderBy ? orderBy : 'desc',
            };
            return this.common.request('GET', '/trades', qs);
        });
    }
    tradesMy(market, limit, timestamp, from, to, orderBy) {
        return __awaiter(this, void 0, void 0, function* () {
            const qs = {
                market,
                limit: limit ? limit : 50,
                timestamp,
                from,
                to,
                order_by: orderBy ? orderBy : 'desc',
            };
            const headers = authentication_1.createHmac(this.apiKey, this.apiSecret);
            return this.common.request('GET', '/trades/my', qs, null, headers);
        });
    }
}
exports.Markets = Markets;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFya2V0cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9tYXJrZXRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQ0FBa0M7QUFDbEMsOERBQXVEO0FBUXZEO0lBTUUsWUFDRSxNQUFlLEVBQ2YsU0FBa0I7UUFFbEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLGVBQU0sRUFBRSxDQUFDO1FBRTNCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO0lBQzdCLENBQUM7SUFFWSxPQUFPOztZQUNsQixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxVQUFVLENBQUMsQ0FBQztRQUNoRCxDQUFDO0tBQUE7SUFFWSxPQUFPOztZQUNsQixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxVQUFVLENBQUMsQ0FBQztRQUNoRCxDQUFDO0tBQUE7SUFFWSxJQUFJLENBQUMsTUFBYyxFQUFFLEtBQWMsRUFBRSxNQUF1QixFQUFFLFNBQWtCOztZQUMzRixNQUFNLEVBQUUsR0FBRztnQkFDVCxNQUFNO2dCQUNOLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDekIsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMzQixTQUFTO2FBQ1YsQ0FBQztZQUVGLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNqRCxDQUFDO0tBQUE7SUFFWSxTQUFTLENBQUMsTUFBYyxFQUFFLFNBQWtCLEVBQUUsU0FBa0I7O1lBQzNFLE1BQU0sRUFBRSxHQUFHO2dCQUNULE1BQU07Z0JBQ04sVUFBVSxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUN0QyxVQUFVLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUU7YUFDdkMsQ0FBQztZQUVGLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLFlBQVksRUFBRSxFQUFFLENBQUMsQ0FBQztRQUN0RCxDQUFDO0tBQUE7SUFFWSxNQUFNLENBQ2pCLE1BQWMsRUFDZCxLQUFjLEVBQ2QsU0FBa0IsRUFDbEIsSUFBYSxFQUNiLEVBQVcsRUFDWCxPQUEyQjs7WUFFM0IsTUFBTSxFQUFFLEdBQUc7Z0JBQ1QsTUFBTTtnQkFDTixLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ3pCLFNBQVM7Z0JBQ1QsSUFBSTtnQkFDSixFQUFFO2dCQUNGLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsTUFBTTthQUNyQyxDQUFDO1lBRUYsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsU0FBUyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ25ELENBQUM7S0FBQTtJQUVZLFFBQVEsQ0FDbkIsTUFBYyxFQUNkLEtBQWMsRUFDZCxTQUFrQixFQUNsQixJQUFhLEVBQ2IsRUFBVyxFQUNYLE9BQTJCOztZQUUzQixNQUFNLEVBQUUsR0FBRztnQkFDVCxNQUFNO2dCQUNOLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDekIsU0FBUztnQkFDVCxJQUFJO2dCQUNKLEVBQUU7Z0JBQ0YsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxNQUFNO2FBQ3JDLENBQUM7WUFFRixNQUFNLE9BQU8sR0FBRywyQkFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBRXhELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLFlBQVksRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3JFLENBQUM7S0FBQTtDQUVGO0FBdkZELDBCQXVGQyJ9