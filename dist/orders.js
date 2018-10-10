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
class Orders {
    constructor(apiKey, apiSecret) {
        this.common = new common_1.Common();
        this.apiKey = apiKey;
        this.apiSecret = apiSecret;
    }
    orders(market, state, limit, page, orderBy) {
        return __awaiter(this, void 0, void 0, function* () {
            const qs = {
                market,
                state,
                limit,
                page,
                order_by: orderBy,
            };
            const headers = authentication_1.createHmac(this.apiKey, this.apiSecret);
            return this.common.request('GET', '/orders', qs, null, headers);
        });
    }
    order(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const headers = authentication_1.createHmac(this.apiKey, this.apiSecret);
            return this.common.request('GET', `/orders/${id}`, null, null, headers);
        });
    }
    createOrders(market, orders) {
        return __awaiter(this, void 0, void 0, function* () {
            const body = {
                market,
                orders,
            };
            const headers = authentication_1.createHmac(this.apiKey, this.apiSecret);
            return this.common.request('GET', '/orders', null, body, headers);
        });
    }
    cancelOrders(side) {
        return __awaiter(this, void 0, void 0, function* () {
            const body = {
                side,
            };
            const headers = authentication_1.createHmac(this.apiKey, this.apiSecret);
            return this.common.request('DELETE', '/orders', null, body, headers);
        });
    }
    cancelOrder(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const headers = authentication_1.createHmac(this.apiKey, this.apiSecret);
            return this.common.request('DELETE', `/orders/${id}`, null, null, headers);
        });
    }
}
exports.Orders = Orders;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXJzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL29yZGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUNBQWtDO0FBQ2xDLDhEQUF1RDtBQUt2RDtJQU1FLFlBQ0UsTUFBZSxFQUNmLFNBQWtCO1FBRWxCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxlQUFNLEVBQUUsQ0FBQztRQUUzQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztJQUM3QixDQUFDO0lBRVksTUFBTSxDQUFDLE1BQWMsRUFBRSxLQUFjLEVBQUUsS0FBYyxFQUFFLElBQWEsRUFBRSxPQUFnQjs7WUFDakcsTUFBTSxFQUFFLEdBQUc7Z0JBQ1QsTUFBTTtnQkFDTixLQUFLO2dCQUNMLEtBQUs7Z0JBQ0wsSUFBSTtnQkFDSixRQUFRLEVBQUUsT0FBTzthQUNsQixDQUFDO1lBRUYsTUFBTSxPQUFPLEdBQUcsMkJBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUV4RCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztRQUNsRSxDQUFDO0tBQUE7SUFFWSxLQUFLLENBQUMsRUFBVTs7WUFDM0IsTUFBTSxPQUFPLEdBQUcsMkJBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUV4RCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxXQUFXLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDMUUsQ0FBQztLQUFBO0lBRVksWUFBWSxDQUFDLE1BQWMsRUFBRSxNQUFzQjs7WUFDOUQsTUFBTSxJQUFJLEdBQUc7Z0JBQ1gsTUFBTTtnQkFDTixNQUFNO2FBQ1AsQ0FBQztZQUVGLE1BQU0sT0FBTyxHQUFHLDJCQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7WUFFeEQsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDcEUsQ0FBQztLQUFBO0lBRVksWUFBWSxDQUFDLElBQWE7O1lBQ3JDLE1BQU0sSUFBSSxHQUFHO2dCQUNYLElBQUk7YUFDTCxDQUFDO1lBRUYsTUFBTSxPQUFPLEdBQUcsMkJBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUV4RCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztRQUN2RSxDQUFDO0tBQUE7SUFFWSxXQUFXLENBQUMsRUFBVTs7WUFDakMsTUFBTSxPQUFPLEdBQUcsMkJBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUV4RCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxXQUFXLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDN0UsQ0FBQztLQUFBO0NBQ0Y7QUE5REQsd0JBOERDIn0=