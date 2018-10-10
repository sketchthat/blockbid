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
class Accounts {
    constructor(apiKey, apiSecret) {
        this.common = new common_1.Common();
        this.apiKey = apiKey;
        this.apiSecret = apiSecret;
    }
    identity() {
        return __awaiter(this, void 0, void 0, function* () {
            const headers = authentication_1.createHmac(this.apiKey, this.apiSecret);
            return this.common.request('GET', '/identity', null, null, headers);
        });
    }
    accounts() {
        return __awaiter(this, void 0, void 0, function* () {
            const headers = authentication_1.createHmac(this.apiKey, this.apiSecret);
            return this.common.request('GET', '/accounts', null, null, headers);
        });
    }
    account(accountId) {
        return __awaiter(this, void 0, void 0, function* () {
            const headers = authentication_1.createHmac(this.apiKey, this.apiSecret);
            return this.common.request('GET', `/accounts/${accountId}`, null, null, headers);
        });
    }
}
exports.Accounts = Accounts;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3VudHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvYWNjb3VudHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFDQUFrQztBQUNsQyw4REFBdUQ7QUFLdkQ7SUFNRSxZQUNFLE1BQWUsRUFDZixTQUFrQjtRQUVsQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksZUFBTSxFQUFFLENBQUM7UUFFM0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7SUFDN0IsQ0FBQztJQUVZLFFBQVE7O1lBQ25CLE1BQU0sT0FBTyxHQUFHLDJCQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7WUFFeEQsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDdEUsQ0FBQztLQUFBO0lBRVksUUFBUTs7WUFDbkIsTUFBTSxPQUFPLEdBQUcsMkJBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUV4RCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztRQUN0RSxDQUFDO0tBQUE7SUFFWSxPQUFPLENBQUMsU0FBaUI7O1lBQ3BDLE1BQU0sT0FBTyxHQUFHLDJCQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7WUFFeEQsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsYUFBYSxTQUFTLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ25GLENBQUM7S0FBQTtDQUNGO0FBakNELDRCQWlDQyJ9