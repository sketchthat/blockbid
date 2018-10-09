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
class Markets {
    constructor() {
        this.common = new common_1.Common();
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
                limit,
                period,
                timestamp,
            };
            return this.common.request('GET', '/ohlc', qs);
        });
    }
    orderbook(market, asksLimit, bidsLimit) {
        return __awaiter(this, void 0, void 0, function* () {
            const qs = {
                market,
                asks_limit: asksLimit,
                bids_limit: bidsLimit,
            };
            return this.common.request('GET', '/orderbook', qs);
        });
    }
    trades(market, limit, timestamp, from, to, orderBy) {
        return __awaiter(this, void 0, void 0, function* () {
            const qs = {
                market,
                limit,
                timestamp,
                from,
                to,
                order_by: orderBy,
            };
            return this.common.request('GET', '/trades', qs);
        });
    }
}
exports.Markets = Markets;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFya2V0cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9tYXJrZXRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQ0FBa0M7QUFRbEM7SUFHRTtRQUNFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxlQUFNLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBRVksT0FBTzs7WUFDbEIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFDaEQsQ0FBQztLQUFBO0lBRVksT0FBTzs7WUFDbEIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFDaEQsQ0FBQztLQUFBO0lBRVksSUFBSSxDQUFDLE1BQWMsRUFBRSxLQUFjLEVBQUUsTUFBdUIsRUFBRSxTQUFrQjs7WUFDM0YsTUFBTSxFQUFFLEdBQUc7Z0JBQ1QsTUFBTTtnQkFDTixLQUFLO2dCQUNMLE1BQU07Z0JBQ04sU0FBUzthQUNWLENBQUM7WUFFRixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDakQsQ0FBQztLQUFBO0lBRVksU0FBUyxDQUFDLE1BQWMsRUFBRSxTQUFrQixFQUFFLFNBQWtCOztZQUMzRSxNQUFNLEVBQUUsR0FBRztnQkFDVCxNQUFNO2dCQUNOLFVBQVUsRUFBRSxTQUFTO2dCQUNyQixVQUFVLEVBQUUsU0FBUzthQUN0QixDQUFDO1lBRUYsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsWUFBWSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3RELENBQUM7S0FBQTtJQUVZLE1BQU0sQ0FDakIsTUFBYyxFQUNkLEtBQWMsRUFDZCxTQUFrQixFQUNsQixJQUFhLEVBQ2IsRUFBVyxFQUNYLE9BQTJCOztZQUUzQixNQUFNLEVBQUUsR0FBRztnQkFDVCxNQUFNO2dCQUNOLEtBQUs7Z0JBQ0wsU0FBUztnQkFDVCxJQUFJO2dCQUNKLEVBQUU7Z0JBQ0YsUUFBUSxFQUFFLE9BQU87YUFDbEIsQ0FBQztZQUVGLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLFNBQVMsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNuRCxDQUFDO0tBQUE7Q0FDRjtBQXZERCwwQkF1REMifQ==