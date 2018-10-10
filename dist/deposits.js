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
class Deposits {
    constructor(apiKey, apiSecret) {
        this.common = new common_1.Common();
        this.apiKey = apiKey;
        this.apiSecret = apiSecret;
    }
    addresses(currency) {
        return __awaiter(this, void 0, void 0, function* () {
            const qs = {
                currency,
            };
            const headers = authentication_1.createHmac(this.apiKey, this.apiSecret);
            return this.common.request('GET', '/addresses', qs, null, headers);
        });
    }
    deposits(currency, limit, state) {
        return __awaiter(this, void 0, void 0, function* () {
            const qs = {
                currency,
                limit,
                state,
            };
            const headers = authentication_1.createHmac(this.apiKey, this.apiSecret);
            return this.common.request('GET', '/deposits', qs, null, headers);
        });
    }
    deposit(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const headers = authentication_1.createHmac(this.apiKey, this.apiSecret);
            return this.common.request('GET', `/deposits/${id}`, null, null, headers);
        });
    }
}
exports.Deposits = Deposits;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVwb3NpdHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvZGVwb3NpdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFDQUFrQztBQUNsQyw4REFBdUQ7QUFLdkQ7SUFNRSxZQUNFLE1BQWUsRUFDZixTQUFrQjtRQUVsQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksZUFBTSxFQUFFLENBQUM7UUFFM0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7SUFDN0IsQ0FBQztJQUVZLFNBQVMsQ0FBQyxRQUFnQjs7WUFDckMsTUFBTSxFQUFFLEdBQUc7Z0JBQ1QsUUFBUTthQUNULENBQUM7WUFFRixNQUFNLE9BQU8sR0FBRywyQkFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBRXhELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLFlBQVksRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3JFLENBQUM7S0FBQTtJQUVZLFFBQVEsQ0FBQyxRQUFpQixFQUFFLEtBQWMsRUFBRSxLQUFjOztZQUNyRSxNQUFNLEVBQUUsR0FBRztnQkFDVCxRQUFRO2dCQUNSLEtBQUs7Z0JBQ0wsS0FBSzthQUNOLENBQUM7WUFFRixNQUFNLE9BQU8sR0FBRywyQkFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBRXhELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLFdBQVcsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3BFLENBQUM7S0FBQTtJQUVZLE9BQU8sQ0FBQyxFQUFVOztZQUM3QixNQUFNLE9BQU8sR0FBRywyQkFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBRXhELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLGFBQWEsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztRQUM1RSxDQUFDO0tBQUE7Q0FDRjtBQTNDRCw0QkEyQ0MifQ==