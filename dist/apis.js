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
class Apis {
    constructor(apiKey, apiSecret) {
        this.common = new common_1.Common();
        this.apiKey = apiKey;
        this.apiSecret = apiSecret;
    }
    apiKeys(totpCode, scopes) {
        return __awaiter(this, void 0, void 0, function* () {
            const body = {
                totp_code: totpCode,
                scopes,
            };
            const headers = authentication_1.createHmac(this.apiKey, this.apiSecret);
            return this.common.request('POST', '/apikeys', null, body, headers);
        });
    }
}
exports.Apis = Apis;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9hcGlzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQ0FBa0M7QUFDbEMsOERBQXVEO0FBSXZEO0lBTUUsWUFDRSxNQUFlLEVBQ2YsU0FBa0I7UUFFbEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLGVBQU0sRUFBRSxDQUFDO1FBRTNCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO0lBQzdCLENBQUM7SUFFWSxPQUFPLENBQUMsUUFBZ0IsRUFBRSxNQUFlOztZQUNwRCxNQUFNLElBQUksR0FBRztnQkFDWCxTQUFTLEVBQUUsUUFBUTtnQkFDbkIsTUFBTTthQUNQLENBQUM7WUFFRixNQUFNLE9BQU8sR0FBRywyQkFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBRXhELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3RFLENBQUM7S0FBQTtDQUNGO0FBMUJELG9CQTBCQyJ9