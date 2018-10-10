'use strict';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const sinon_1 = require("sinon");
const common_1 = require("./common");
const markets_1 = require("./markets");
const createHmac = require("./services/authentication");
describe('Market', () => {
    let markets;
    let commonStub;
    let hmacStub;
    before(() => {
        markets = new markets_1.Markets('MyApiKey', 'MyApiSecret');
        commonStub = sinon_1.stub(common_1.Common.prototype, 'request');
        hmacStub = sinon_1.stub(createHmac, 'createHmac');
    });
    beforeEach(() => {
        commonStub.reset();
        hmacStub.reset();
    });
    after(() => {
        commonStub.restore();
        hmacStub.restore();
    });
    it('should call markets', () => __awaiter(this, void 0, void 0, function* () {
        commonStub.returns({
            markets: 'markets',
        });
        const resp = yield markets.markets();
        const expectedMockReturn = {
            markets: 'markets',
        };
        chai_1.assert.deepEqual(resp, expectedMockReturn);
        chai_1.assert.strictEqual(hmacStub.callCount, 0);
        const expectedCommonArgs = [
            [
                'GET',
                '/markets',
            ],
        ];
        chai_1.assert.deepEqual(commonStub.args, expectedCommonArgs);
        chai_1.assert.strictEqual(commonStub.callCount, 1);
    }));
    it('should call tickers', () => __awaiter(this, void 0, void 0, function* () {
        commonStub.returns({
            markets: 'tickers',
        });
        const resp = yield markets.tickers();
        const expectedMockReturn = {
            markets: 'tickers',
        };
        chai_1.assert.deepEqual(resp, expectedMockReturn);
        chai_1.assert.strictEqual(hmacStub.callCount, 0);
        const expectedCommonArgs = [
            [
                'GET',
                '/tickers',
            ],
        ];
        chai_1.assert.deepEqual(commonStub.args, expectedCommonArgs);
        chai_1.assert.strictEqual(commonStub.callCount, 1);
    }));
    it('should call ohlc without params', () => __awaiter(this, void 0, void 0, function* () {
        commonStub.returns({
            markets: 'ohlc',
        });
        const resp = yield markets.ohlc('btcaud');
        const expectedMockReturn = {
            markets: 'ohlc',
        };
        chai_1.assert.deepEqual(resp, expectedMockReturn);
        chai_1.assert.strictEqual(hmacStub.callCount, 0);
        const expectedCommonArgs = [
            [
                'GET',
                '/ohlc',
                {
                    market: 'btcaud',
                    limit: 30,
                    period: 1,
                    timestamp: undefined,
                },
            ],
        ];
        chai_1.assert.deepEqual(commonStub.args, expectedCommonArgs);
        chai_1.assert.strictEqual(commonStub.callCount, 1);
    }));
    it('should call ohlc with params', () => __awaiter(this, void 0, void 0, function* () {
        commonStub.returns({
            markets: 'ohlc',
        });
        const resp = yield markets.ohlc('btcaud', 50, 15, 1541581502000);
        const expectedMockReturn = {
            markets: 'ohlc',
        };
        chai_1.assert.deepEqual(resp, expectedMockReturn);
        chai_1.assert.strictEqual(hmacStub.callCount, 0);
        const expectedCommonArgs = [
            [
                'GET',
                '/ohlc',
                {
                    market: 'btcaud',
                    limit: 50,
                    period: 15,
                    timestamp: 1541581502000,
                },
            ],
        ];
        chai_1.assert.deepEqual(commonStub.args, expectedCommonArgs);
        chai_1.assert.strictEqual(commonStub.callCount, 1);
    }));
    it('should call orderbook without params', () => __awaiter(this, void 0, void 0, function* () {
        commonStub.returns({
            markets: 'orderbook',
        });
        const resp = yield markets.orderbook('btcaud');
        const expectedMockReturn = {
            markets: 'orderbook',
        };
        chai_1.assert.deepEqual(resp, expectedMockReturn);
        chai_1.assert.strictEqual(hmacStub.callCount, 0);
        const expectedCommonArgs = [
            [
                'GET',
                '/orderbook',
                {
                    market: 'btcaud',
                    asks_limit: 20,
                    bids_limit: 20,
                },
            ],
        ];
        chai_1.assert.deepEqual(commonStub.args, expectedCommonArgs);
        chai_1.assert.strictEqual(commonStub.callCount, 1);
    }));
    it('should call orderbook with params', () => __awaiter(this, void 0, void 0, function* () {
        commonStub.returns({
            markets: 'orderbook',
        });
        const resp = yield markets.orderbook('btcaud', 50, 25);
        const expectedMockReturn = {
            markets: 'orderbook',
        };
        chai_1.assert.deepEqual(resp, expectedMockReturn);
        chai_1.assert.strictEqual(hmacStub.callCount, 0);
        const expectedCommonArgs = [
            [
                'GET',
                '/orderbook',
                {
                    market: 'btcaud',
                    asks_limit: 50,
                    bids_limit: 25,
                },
            ],
        ];
        chai_1.assert.deepEqual(commonStub.args, expectedCommonArgs);
        chai_1.assert.strictEqual(commonStub.callCount, 1);
    }));
    it('should call trades without params', () => __awaiter(this, void 0, void 0, function* () {
        commonStub.returns({
            markets: 'trades',
        });
        const resp = yield markets.trades('btcaud');
        const expectedMockReturn = {
            markets: 'trades',
        };
        chai_1.assert.deepEqual(resp, expectedMockReturn);
        chai_1.assert.strictEqual(hmacStub.callCount, 0);
        const expectedCommonArgs = [
            [
                'GET',
                '/trades',
                {
                    market: 'btcaud',
                    limit: 50,
                    timestamp: undefined,
                    from: undefined,
                    to: undefined,
                    order_by: 'desc',
                },
            ],
        ];
        chai_1.assert.deepEqual(commonStub.args, expectedCommonArgs);
        chai_1.assert.strictEqual(commonStub.callCount, 1);
    }));
    it('should call trades with params', () => __awaiter(this, void 0, void 0, function* () {
        commonStub.returns({
            markets: 'trades',
        });
        const resp = yield markets.trades('btcaud', 41, 1541581502000, 99, 2500, 'desc');
        const expectedMockReturn = {
            markets: 'trades',
        };
        chai_1.assert.deepEqual(resp, expectedMockReturn);
        chai_1.assert.strictEqual(hmacStub.callCount, 0);
        const expectedCommonArgs = [
            [
                'GET',
                '/trades',
                {
                    market: 'btcaud',
                    limit: 41,
                    timestamp: 1541581502000,
                    from: 99,
                    to: 2500,
                    order_by: 'desc',
                },
            ],
        ];
        chai_1.assert.deepEqual(commonStub.args, expectedCommonArgs);
        chai_1.assert.strictEqual(commonStub.callCount, 1);
    }));
    it('should call tradesMy without params', () => __awaiter(this, void 0, void 0, function* () {
        hmacStub.returns({
            'X-Blockbid-Api-Key': 'MyApiKey',
            'X-Blockbid-Nonce': 1541581502000,
            'X-Blockbid-Signature': 'YWJjMTIz',
        });
        commonStub.returns({
            markets: 'trades',
        });
        const resp = yield markets.tradesMy('btcaud');
        const expectedMockReturn = {
            markets: 'trades',
        };
        chai_1.assert.deepEqual(resp, expectedMockReturn);
        const expectedHmacArgs = [
            [
                'MyApiKey',
                'MyApiSecret',
            ],
        ];
        chai_1.assert.deepEqual(hmacStub.args, expectedHmacArgs);
        chai_1.assert.strictEqual(hmacStub.callCount, 1);
        const expectedCommonArgs = [
            [
                'GET',
                '/trades/my',
                {
                    market: 'btcaud',
                    limit: 50,
                    timestamp: undefined,
                    from: undefined,
                    to: undefined,
                    order_by: 'desc',
                },
                null,
                {
                    'X-Blockbid-Api-Key': 'MyApiKey',
                    'X-Blockbid-Nonce': 1541581502000,
                    'X-Blockbid-Signature': 'YWJjMTIz',
                },
            ],
        ];
        chai_1.assert.deepEqual(commonStub.args, expectedCommonArgs);
        chai_1.assert.strictEqual(commonStub.callCount, 1);
    }));
    it('should call tradesMy with params', () => __awaiter(this, void 0, void 0, function* () {
        hmacStub.returns({
            'X-Blockbid-Api-Key': 'MyApiKey',
            'X-Blockbid-Nonce': 1541581502000,
            'X-Blockbid-Signature': 'YWJjMTIz',
        });
        commonStub.returns({
            markets: 'tradesMy',
        });
        const resp = yield markets.tradesMy('btcaud', 41, 1541581502000, 99, 2500, 'desc');
        const expectedMockReturn = {
            markets: 'tradesMy',
        };
        chai_1.assert.deepEqual(resp, expectedMockReturn);
        const expectedHmacArgs = [
            [
                'MyApiKey',
                'MyApiSecret',
            ],
        ];
        chai_1.assert.deepEqual(hmacStub.args, expectedHmacArgs);
        chai_1.assert.strictEqual(hmacStub.callCount, 1);
        const expectedCommonArgs = [
            [
                'GET',
                '/trades/my',
                {
                    market: 'btcaud',
                    limit: 41,
                    timestamp: 1541581502000,
                    from: 99,
                    to: 2500,
                    order_by: 'desc',
                },
                null,
                {
                    'X-Blockbid-Api-Key': 'MyApiKey',
                    'X-Blockbid-Nonce': 1541581502000,
                    'X-Blockbid-Signature': 'YWJjMTIz',
                },
            ],
        ];
        chai_1.assert.deepEqual(commonStub.args, expectedCommonArgs);
        chai_1.assert.strictEqual(commonStub.callCount, 1);
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFya2V0cy5zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL21hcmtldHMuc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7Ozs7QUFFYiwrQkFBOEI7QUFDOUIsaUNBQXdDO0FBRXhDLHFDQUFrQztBQUNsQyx1Q0FBb0M7QUFDcEMsd0RBQXdEO0FBRXhELFFBQVEsQ0FBQyxRQUFRLEVBQUUsR0FBRyxFQUFFO0lBQ3RCLElBQUksT0FBZ0IsQ0FBQztJQUNyQixJQUFJLFVBQXFCLENBQUM7SUFDMUIsSUFBSSxRQUFtQixDQUFDO0lBRXhCLE1BQU0sQ0FBQyxHQUFHLEVBQUU7UUFDVixPQUFPLEdBQUcsSUFBSSxpQkFBTyxDQUFDLFVBQVUsRUFBRSxhQUFhLENBQUMsQ0FBQztRQUVqRCxVQUFVLEdBQUcsWUFBSSxDQUFDLGVBQU0sQ0FBQyxTQUFTLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDL0MsUUFBUSxHQUFHLFlBQUksQ0FBQyxVQUFVLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFDNUMsQ0FBQyxDQUFDLENBQUM7SUFFSCxVQUFVLENBQUMsR0FBRyxFQUFFO1FBQ2QsVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ25CLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNuQixDQUFDLENBQUMsQ0FBQztJQUVILEtBQUssQ0FBQyxHQUFHLEVBQUU7UUFDVCxVQUFVLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDckIsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ3JCLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLHFCQUFxQixFQUFFLEdBQVMsRUFBRTtRQUNuQyxVQUFVLENBQUMsT0FBTyxDQUFDO1lBQ2pCLE9BQU8sRUFBRSxTQUFTO1NBQ25CLENBQUMsQ0FBQztRQUVILE1BQU0sSUFBSSxHQUFRLE1BQU0sT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBRTFDLE1BQU0sa0JBQWtCLEdBQUc7WUFDekIsT0FBTyxFQUFFLFNBQVM7U0FDbkIsQ0FBQztRQUVGLGFBQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLGtCQUFrQixDQUFDLENBQUM7UUFFM0MsYUFBTSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRTFDLE1BQU0sa0JBQWtCLEdBQUc7WUFDekI7Z0JBQ0UsS0FBSztnQkFDTCxVQUFVO2FBQ1g7U0FDRixDQUFDO1FBRUYsYUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLGtCQUFrQixDQUFDLENBQUM7UUFDdEQsYUFBTSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzlDLENBQUMsQ0FBQSxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMscUJBQXFCLEVBQUUsR0FBUyxFQUFFO1FBQ25DLFVBQVUsQ0FBQyxPQUFPLENBQUM7WUFDakIsT0FBTyxFQUFFLFNBQVM7U0FDbkIsQ0FBQyxDQUFDO1FBRUgsTUFBTSxJQUFJLEdBQVEsTUFBTSxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7UUFFMUMsTUFBTSxrQkFBa0IsR0FBRztZQUN6QixPQUFPLEVBQUUsU0FBUztTQUNuQixDQUFDO1FBRUYsYUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztRQUUzQyxhQUFNLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFMUMsTUFBTSxrQkFBa0IsR0FBRztZQUN6QjtnQkFDRSxLQUFLO2dCQUNMLFVBQVU7YUFDWDtTQUNGLENBQUM7UUFFRixhQUFNLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztRQUN0RCxhQUFNLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDOUMsQ0FBQyxDQUFBLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxpQ0FBaUMsRUFBRSxHQUFTLEVBQUU7UUFDL0MsVUFBVSxDQUFDLE9BQU8sQ0FBQztZQUNqQixPQUFPLEVBQUUsTUFBTTtTQUNoQixDQUFDLENBQUM7UUFFSCxNQUFNLElBQUksR0FBUSxNQUFNLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFL0MsTUFBTSxrQkFBa0IsR0FBRztZQUN6QixPQUFPLEVBQUUsTUFBTTtTQUNoQixDQUFDO1FBRUYsYUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztRQUUzQyxhQUFNLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFMUMsTUFBTSxrQkFBa0IsR0FBRztZQUN6QjtnQkFDRSxLQUFLO2dCQUNMLE9BQU87Z0JBQ1A7b0JBQ0UsTUFBTSxFQUFFLFFBQVE7b0JBQ2hCLEtBQUssRUFBRSxFQUFFO29CQUNULE1BQU0sRUFBRSxDQUFDO29CQUNULFNBQVMsRUFBRSxTQUFTO2lCQUNyQjthQUNGO1NBQ0YsQ0FBQztRQUVGLGFBQU0sQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1FBQ3RELGFBQU0sQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUM5QyxDQUFDLENBQUEsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLDhCQUE4QixFQUFFLEdBQVMsRUFBRTtRQUM1QyxVQUFVLENBQUMsT0FBTyxDQUFDO1lBQ2pCLE9BQU8sRUFBRSxNQUFNO1NBQ2hCLENBQUMsQ0FBQztRQUVILE1BQU0sSUFBSSxHQUFRLE1BQU0sT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxhQUFhLENBQUMsQ0FBQztRQUV0RSxNQUFNLGtCQUFrQixHQUFHO1lBQ3pCLE9BQU8sRUFBRSxNQUFNO1NBQ2hCLENBQUM7UUFFRixhQUFNLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1FBRTNDLGFBQU0sQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUUxQyxNQUFNLGtCQUFrQixHQUFHO1lBQ3pCO2dCQUNFLEtBQUs7Z0JBQ0wsT0FBTztnQkFDUDtvQkFDRSxNQUFNLEVBQUUsUUFBUTtvQkFDaEIsS0FBSyxFQUFFLEVBQUU7b0JBQ1QsTUFBTSxFQUFFLEVBQUU7b0JBQ1YsU0FBUyxFQUFFLGFBQWE7aUJBQ3pCO2FBQ0Y7U0FDRixDQUFDO1FBRUYsYUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLGtCQUFrQixDQUFDLENBQUM7UUFDdEQsYUFBTSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzlDLENBQUMsQ0FBQSxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsc0NBQXNDLEVBQUUsR0FBUyxFQUFFO1FBQ3BELFVBQVUsQ0FBQyxPQUFPLENBQUM7WUFDakIsT0FBTyxFQUFFLFdBQVc7U0FDckIsQ0FBQyxDQUFDO1FBRUgsTUFBTSxJQUFJLEdBQVEsTUFBTSxPQUFPLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRXBELE1BQU0sa0JBQWtCLEdBQUc7WUFDekIsT0FBTyxFQUFFLFdBQVc7U0FDckIsQ0FBQztRQUVGLGFBQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLGtCQUFrQixDQUFDLENBQUM7UUFFM0MsYUFBTSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRTFDLE1BQU0sa0JBQWtCLEdBQUc7WUFDekI7Z0JBQ0UsS0FBSztnQkFDTCxZQUFZO2dCQUNaO29CQUNFLE1BQU0sRUFBRSxRQUFRO29CQUNoQixVQUFVLEVBQUUsRUFBRTtvQkFDZCxVQUFVLEVBQUUsRUFBRTtpQkFDZjthQUNGO1NBQ0YsQ0FBQztRQUVGLGFBQU0sQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1FBQ3RELGFBQU0sQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUM5QyxDQUFDLENBQUEsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLG1DQUFtQyxFQUFFLEdBQVMsRUFBRTtRQUNqRCxVQUFVLENBQUMsT0FBTyxDQUFDO1lBQ2pCLE9BQU8sRUFBRSxXQUFXO1NBQ3JCLENBQUMsQ0FBQztRQUVILE1BQU0sSUFBSSxHQUFRLE1BQU0sT0FBTyxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRTVELE1BQU0sa0JBQWtCLEdBQUc7WUFDekIsT0FBTyxFQUFFLFdBQVc7U0FDckIsQ0FBQztRQUVGLGFBQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLGtCQUFrQixDQUFDLENBQUM7UUFFM0MsYUFBTSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRTFDLE1BQU0sa0JBQWtCLEdBQUc7WUFDekI7Z0JBQ0UsS0FBSztnQkFDTCxZQUFZO2dCQUNaO29CQUNFLE1BQU0sRUFBRSxRQUFRO29CQUNoQixVQUFVLEVBQUUsRUFBRTtvQkFDZCxVQUFVLEVBQUUsRUFBRTtpQkFDZjthQUNGO1NBQ0YsQ0FBQztRQUVGLGFBQU0sQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1FBQ3RELGFBQU0sQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUM5QyxDQUFDLENBQUEsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLG1DQUFtQyxFQUFFLEdBQVMsRUFBRTtRQUNqRCxVQUFVLENBQUMsT0FBTyxDQUFDO1lBQ2pCLE9BQU8sRUFBRSxRQUFRO1NBQ2xCLENBQUMsQ0FBQztRQUVILE1BQU0sSUFBSSxHQUFRLE1BQU0sT0FBTyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUVqRCxNQUFNLGtCQUFrQixHQUFHO1lBQ3pCLE9BQU8sRUFBRSxRQUFRO1NBQ2xCLENBQUM7UUFFRixhQUFNLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1FBRTNDLGFBQU0sQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUUxQyxNQUFNLGtCQUFrQixHQUFHO1lBQ3pCO2dCQUNFLEtBQUs7Z0JBQ0wsU0FBUztnQkFDVDtvQkFDRSxNQUFNLEVBQUUsUUFBUTtvQkFDaEIsS0FBSyxFQUFFLEVBQUU7b0JBQ1QsU0FBUyxFQUFFLFNBQVM7b0JBQ3BCLElBQUksRUFBRSxTQUFTO29CQUNmLEVBQUUsRUFBRSxTQUFTO29CQUNiLFFBQVEsRUFBRSxNQUFNO2lCQUNqQjthQUNGO1NBQ0YsQ0FBQztRQUVGLGFBQU0sQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1FBQ3RELGFBQU0sQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUM5QyxDQUFDLENBQUEsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLGdDQUFnQyxFQUFFLEdBQVMsRUFBRTtRQUM5QyxVQUFVLENBQUMsT0FBTyxDQUFDO1lBQ2pCLE9BQU8sRUFBRSxRQUFRO1NBQ2xCLENBQUMsQ0FBQztRQUVILE1BQU0sSUFBSSxHQUFRLE1BQU0sT0FBTyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsRUFBRSxFQUFFLGFBQWEsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBRXRGLE1BQU0sa0JBQWtCLEdBQUc7WUFDekIsT0FBTyxFQUFFLFFBQVE7U0FDbEIsQ0FBQztRQUVGLGFBQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLGtCQUFrQixDQUFDLENBQUM7UUFFM0MsYUFBTSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRTFDLE1BQU0sa0JBQWtCLEdBQUc7WUFDekI7Z0JBQ0UsS0FBSztnQkFDTCxTQUFTO2dCQUNUO29CQUNFLE1BQU0sRUFBRSxRQUFRO29CQUNoQixLQUFLLEVBQUUsRUFBRTtvQkFDVCxTQUFTLEVBQUUsYUFBYTtvQkFDeEIsSUFBSSxFQUFFLEVBQUU7b0JBQ1IsRUFBRSxFQUFFLElBQUk7b0JBQ1IsUUFBUSxFQUFFLE1BQU07aUJBQ2pCO2FBQ0Y7U0FDRixDQUFDO1FBRUYsYUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLGtCQUFrQixDQUFDLENBQUM7UUFDdEQsYUFBTSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzlDLENBQUMsQ0FBQSxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMscUNBQXFDLEVBQUUsR0FBUyxFQUFFO1FBQ25ELFFBQVEsQ0FBQyxPQUFPLENBQUM7WUFDZixvQkFBb0IsRUFBRSxVQUFVO1lBQ2hDLGtCQUFrQixFQUFFLGFBQWE7WUFDakMsc0JBQXNCLEVBQUUsVUFBVTtTQUNuQyxDQUFDLENBQUM7UUFFSCxVQUFVLENBQUMsT0FBTyxDQUFDO1lBQ2pCLE9BQU8sRUFBRSxRQUFRO1NBQ2xCLENBQUMsQ0FBQztRQUVILE1BQU0sSUFBSSxHQUFRLE1BQU0sT0FBTyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUVuRCxNQUFNLGtCQUFrQixHQUFHO1lBQ3pCLE9BQU8sRUFBRSxRQUFRO1NBQ2xCLENBQUM7UUFFRixhQUFNLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1FBRTNDLE1BQU0sZ0JBQWdCLEdBQUc7WUFDdkI7Z0JBQ0UsVUFBVTtnQkFDVixhQUFhO2FBQ2Q7U0FDRixDQUFDO1FBRUYsYUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLENBQUM7UUFDbEQsYUFBTSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRTFDLE1BQU0sa0JBQWtCLEdBQUc7WUFDekI7Z0JBQ0UsS0FBSztnQkFDTCxZQUFZO2dCQUNaO29CQUNFLE1BQU0sRUFBRSxRQUFRO29CQUNoQixLQUFLLEVBQUUsRUFBRTtvQkFDVCxTQUFTLEVBQUUsU0FBUztvQkFDcEIsSUFBSSxFQUFFLFNBQVM7b0JBQ2YsRUFBRSxFQUFFLFNBQVM7b0JBQ2IsUUFBUSxFQUFFLE1BQU07aUJBQ2pCO2dCQUNELElBQUk7Z0JBQ0o7b0JBQ0Usb0JBQW9CLEVBQUUsVUFBVTtvQkFDaEMsa0JBQWtCLEVBQUUsYUFBYTtvQkFDakMsc0JBQXNCLEVBQUUsVUFBVTtpQkFDbkM7YUFDRjtTQUNGLENBQUM7UUFFRixhQUFNLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztRQUN0RCxhQUFNLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDOUMsQ0FBQyxDQUFBLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxrQ0FBa0MsRUFBRSxHQUFTLEVBQUU7UUFDaEQsUUFBUSxDQUFDLE9BQU8sQ0FBQztZQUNmLG9CQUFvQixFQUFFLFVBQVU7WUFDaEMsa0JBQWtCLEVBQUUsYUFBYTtZQUNqQyxzQkFBc0IsRUFBRSxVQUFVO1NBQ25DLENBQUMsQ0FBQztRQUVILFVBQVUsQ0FBQyxPQUFPLENBQUM7WUFDakIsT0FBTyxFQUFFLFVBQVU7U0FDcEIsQ0FBQyxDQUFDO1FBRUgsTUFBTSxJQUFJLEdBQVEsTUFBTSxPQUFPLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxFQUFFLEVBQUUsYUFBYSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFFeEYsTUFBTSxrQkFBa0IsR0FBRztZQUN6QixPQUFPLEVBQUUsVUFBVTtTQUNwQixDQUFDO1FBRUYsYUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztRQUUzQyxNQUFNLGdCQUFnQixHQUFHO1lBQ3ZCO2dCQUNFLFVBQVU7Z0JBQ1YsYUFBYTthQUNkO1NBQ0YsQ0FBQztRQUVGLGFBQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ2xELGFBQU0sQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUUxQyxNQUFNLGtCQUFrQixHQUFHO1lBQ3pCO2dCQUNFLEtBQUs7Z0JBQ0wsWUFBWTtnQkFDWjtvQkFDRSxNQUFNLEVBQUUsUUFBUTtvQkFDaEIsS0FBSyxFQUFFLEVBQUU7b0JBQ1QsU0FBUyxFQUFFLGFBQWE7b0JBQ3hCLElBQUksRUFBRSxFQUFFO29CQUNSLEVBQUUsRUFBRSxJQUFJO29CQUNSLFFBQVEsRUFBRSxNQUFNO2lCQUNqQjtnQkFDRCxJQUFJO2dCQUNKO29CQUNFLG9CQUFvQixFQUFFLFVBQVU7b0JBQ2hDLGtCQUFrQixFQUFFLGFBQWE7b0JBQ2pDLHNCQUFzQixFQUFFLFVBQVU7aUJBQ25DO2FBQ0Y7U0FDRixDQUFDO1FBRUYsYUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLGtCQUFrQixDQUFDLENBQUM7UUFDdEQsYUFBTSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzlDLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMsQ0FBQyJ9