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
const rp = require("request-promise");
class Common {
    constructor() {
        const domain = 'api.blockbid.io';
        this.uri = `https://${domain}`;
    }
    request(method, path, qs, body, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            const opts = {
                uri: `${this.uri}${path}`,
                json: true,
                body: this.buildParams(body),
                headers,
                method,
                qs: this.buildParams(qs),
            };
            return rp(opts);
        });
    }
    buildParams(params) {
        const returnParams = {};
        if (params) {
            Object.keys(params)
                .forEach(key => {
                if (params[key]) {
                    returnParams[key] = params[key];
                }
            });
        }
        return returnParams;
    }
}
exports.Common = Common;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2NvbW1vbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsc0NBQXNDO0FBSXRDO0lBR0U7UUFDRSxNQUFNLE1BQU0sR0FBRyxpQkFBaUIsQ0FBQztRQUNqQyxJQUFJLENBQUMsR0FBRyxHQUFHLFdBQVcsTUFBTSxFQUFFLENBQUM7SUFDakMsQ0FBQztJQUVZLE9BQU8sQ0FBQyxNQUFjLEVBQUUsSUFBWSxFQUFFLEVBQVcsRUFBRSxJQUFhLEVBQUUsT0FBc0I7O1lBQ25HLE1BQU0sSUFBSSxHQUFHO2dCQUNYLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxFQUFFO2dCQUN6QixJQUFJLEVBQUUsSUFBSTtnQkFDVixJQUFJLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUM7Z0JBQzVCLE9BQU87Z0JBQ1AsTUFBTTtnQkFDTixFQUFFLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUM7YUFDekIsQ0FBQztZQUVGLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xCLENBQUM7S0FBQTtJQUVPLFdBQVcsQ0FBQyxNQUFXO1FBQzdCLE1BQU0sWUFBWSxHQUFHLEVBQUUsQ0FBQztRQUV4QixJQUFJLE1BQU0sRUFBRTtZQUNWLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO2lCQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQ2IsSUFBSSxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUU7b0JBQ2YsWUFBWSxDQUFDLEdBQUcsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztpQkFDakM7WUFDSCxDQUFDLENBQUMsQ0FBQztTQUNOO1FBRUQsT0FBTyxZQUFZLENBQUM7SUFDdEIsQ0FBQztDQUNGO0FBbkNELHdCQW1DQyJ9