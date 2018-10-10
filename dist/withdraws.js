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
class Withdraws {
    constructor(apiKey, apiSecret) {
        this.common = new common_1.Common();
        this.apiKey = apiKey;
        this.apiSecret = apiSecret;
    }
    withdraws(currency, page, limit) {
        return __awaiter(this, void 0, void 0, function* () {
            const qs = {
                currency,
                page: (page ? page : 1),
                limit: (limit ? (limit > 1000 ? 1000 : limit) : 100),
            };
            const headers = authentication_1.createHmac(this.apiKey, this.apiSecret);
            return this.common.request('GET', '/withdraws', qs, null, headers);
        });
    }
    createWithdraw(address, currency, amount) {
        return __awaiter(this, void 0, void 0, function* () {
            const body = {
                address,
                currency,
                amount,
            };
            const headers = authentication_1.createHmac(this.apiKey, this.apiSecret);
            return this.common.request('POST', '/withdraws', null, body, headers);
        });
    }
}
exports.Withdraws = Withdraws;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2l0aGRyYXdzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3dpdGhkcmF3cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUNBQWtDO0FBQ2xDLDhEQUF1RDtBQUl2RDtJQU1FLFlBQ0UsTUFBZSxFQUNmLFNBQWtCO1FBRWxCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxlQUFNLEVBQUUsQ0FBQztRQUUzQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztJQUM3QixDQUFDO0lBRVksU0FBUyxDQUFDLFFBQWlCLEVBQUUsSUFBYSxFQUFFLEtBQWM7O1lBQ3JFLE1BQU0sRUFBRSxHQUFHO2dCQUNULFFBQVE7Z0JBQ1IsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDdkIsS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQzthQUNyRCxDQUFDO1lBRUYsTUFBTSxPQUFPLEdBQUcsMkJBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUV4RCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxZQUFZLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztRQUNyRSxDQUFDO0tBQUE7SUFFWSxjQUFjLENBQUMsT0FBZSxFQUFFLFFBQWdCLEVBQUUsTUFBYzs7WUFDM0UsTUFBTSxJQUFJLEdBQUc7Z0JBQ1gsT0FBTztnQkFDUCxRQUFRO2dCQUNSLE1BQU07YUFDUCxDQUFDO1lBRUYsTUFBTSxPQUFPLEdBQUcsMkJBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUV4RCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztRQUN4RSxDQUFDO0tBQUE7Q0FDRjtBQXZDRCw4QkF1Q0MifQ==