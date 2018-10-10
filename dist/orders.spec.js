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
const orders_1 = require("./orders");
const createHmac = require("./services/authentication");
describe('Orders', () => {
    let orders;
    let commonStub;
    let hmacStub;
    before(() => {
        orders = new orders_1.Orders('MyApiKey', 'MyApiSecret');
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
    it('should call orders without params', () => __awaiter(this, void 0, void 0, function* () {
        hmacStub.returns({
            'X-Blockbid-Api-Key': 'MyApiKey',
            'X-Blockbid-Nonce': 1541581502000,
            'X-Blockbid-Signature': 'YWJjMTIz',
        });
        commonStub.returns({
            orders: 'orders',
        });
        const resp = yield orders.orders('btc');
        const expectedMockReturn = {
            orders: 'orders',
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
                '/orders',
                {
                    market: 'btc',
                    state: undefined,
                    limit: undefined,
                    page: undefined,
                    order_by: undefined,
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
    it('should call orders with params', () => __awaiter(this, void 0, void 0, function* () {
        hmacStub.returns({
            'X-Blockbid-Api-Key': 'MyApiKey',
            'X-Blockbid-Nonce': 1541581502000,
            'X-Blockbid-Signature': 'YWJjMTIz',
        });
        commonStub.returns({
            orders: 'orders',
        });
        const resp = yield orders.orders('btc', 'filled', 10, 5, 'asc');
        const expectedMockReturn = {
            orders: 'orders',
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
                '/orders',
                {
                    market: 'btc',
                    state: 'filled',
                    limit: 10,
                    page: 5,
                    order_by: 'asc',
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
    it('should call order', () => __awaiter(this, void 0, void 0, function* () {
        hmacStub.returns({
            'X-Blockbid-Api-Key': 'MyApiKey',
            'X-Blockbid-Nonce': 1541581502000,
            'X-Blockbid-Signature': 'YWJjMTIz',
        });
        commonStub.returns({
            orders: 'order',
        });
        const resp = yield orders.order(112233);
        const expectedMockReturn = {
            orders: 'order',
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
                '/orders/112233',
                null,
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
    it('should call createOrders', () => __awaiter(this, void 0, void 0, function* () {
        hmacStub.returns({
            'X-Blockbid-Api-Key': 'MyApiKey',
            'X-Blockbid-Nonce': 1541581502000,
            'X-Blockbid-Signature': 'YWJjMTIz',
        });
        commonStub.returns({
            orders: 'createOrders',
        });
        const requestedOrders = [
            {
                side: 'buy',
                volume: '0.554',
                ord_type: 'market',
            }, {
                side: 'sell',
                volume: '1.3114',
                price: '83211.54',
                ord_type: 'limit',
            }, {
                side: 'buy',
                volume: '0.1153',
                price: '9221.22',
                ord_type: 'limit',
            },
        ];
        const resp = yield orders.createOrders('btcaud', requestedOrders);
        const expectedMockReturn = {
            orders: 'createOrders',
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
                '/orders',
                null,
                {
                    market: 'btcaud',
                    orders: [{
                            side: 'buy',
                            volume: '0.554',
                            ord_type: 'market',
                        }, {
                            side: 'sell',
                            volume: '1.3114',
                            price: '83211.54',
                            ord_type: 'limit',
                        }, {
                            side: 'buy',
                            volume: '0.1153',
                            price: '9221.22',
                            ord_type: 'limit',
                        }],
                },
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
    it('should call cancelOrders without a side', () => __awaiter(this, void 0, void 0, function* () {
        hmacStub.returns({
            'X-Blockbid-Api-Key': 'MyApiKey',
            'X-Blockbid-Nonce': 1541581502000,
            'X-Blockbid-Signature': 'YWJjMTIz',
        });
        commonStub.returns({
            orders: 'order',
        });
        const resp = yield orders.cancelOrders();
        const expectedMockReturn = {
            orders: 'order',
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
                'DELETE',
                '/orders',
                null,
                {
                    side: undefined,
                },
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
    it('should call cancelOrders with a side', () => __awaiter(this, void 0, void 0, function* () {
        hmacStub.returns({
            'X-Blockbid-Api-Key': 'MyApiKey',
            'X-Blockbid-Nonce': 1541581502000,
            'X-Blockbid-Signature': 'YWJjMTIz',
        });
        commonStub.returns({
            orders: 'order',
        });
        const resp = yield orders.cancelOrders('buy');
        const expectedMockReturn = {
            orders: 'order',
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
                'DELETE',
                '/orders',
                null,
                {
                    side: 'buy',
                },
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
    it('should call cancelOrder', () => __awaiter(this, void 0, void 0, function* () {
        hmacStub.returns({
            'X-Blockbid-Api-Key': 'MyApiKey',
            'X-Blockbid-Nonce': 1541581502000,
            'X-Blockbid-Signature': 'YWJjMTIz',
        });
        commonStub.returns({
            orders: 'cancelOrder',
        });
        const resp = yield orders.cancelOrder(119988);
        const expectedMockReturn = {
            orders: 'cancelOrder',
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
                'DELETE',
                '/orders/119988',
                null,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXJzLnNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvb3JkZXJzLnNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7Ozs7Ozs7O0FBRWIsK0JBQThCO0FBQzlCLGlDQUF3QztBQUV4QyxxQ0FBa0M7QUFDbEMscUNBQWtDO0FBQ2xDLHdEQUF3RDtBQUV4RCxRQUFRLENBQUMsUUFBUSxFQUFFLEdBQUcsRUFBRTtJQUN0QixJQUFJLE1BQWMsQ0FBQztJQUNuQixJQUFJLFVBQXFCLENBQUM7SUFDMUIsSUFBSSxRQUFtQixDQUFDO0lBRXhCLE1BQU0sQ0FBQyxHQUFHLEVBQUU7UUFDVixNQUFNLEdBQUcsSUFBSSxlQUFNLENBQUMsVUFBVSxFQUFFLGFBQWEsQ0FBQyxDQUFDO1FBRS9DLFVBQVUsR0FBRyxZQUFJLENBQUMsZUFBTSxDQUFDLFNBQVMsRUFBRSxTQUFTLENBQUMsQ0FBQztRQUMvQyxRQUFRLEdBQUcsWUFBSSxDQUFDLFVBQVUsRUFBRSxZQUFZLENBQUMsQ0FBQztJQUM1QyxDQUFDLENBQUMsQ0FBQztJQUVILFVBQVUsQ0FBQyxHQUFHLEVBQUU7UUFDZCxVQUFVLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDbkIsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ25CLENBQUMsQ0FBQyxDQUFDO0lBRUgsS0FBSyxDQUFDLEdBQUcsRUFBRTtRQUNULFVBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNyQixRQUFRLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDckIsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsbUNBQW1DLEVBQUUsR0FBUyxFQUFFO1FBQ2pELFFBQVEsQ0FBQyxPQUFPLENBQUM7WUFDZixvQkFBb0IsRUFBRSxVQUFVO1lBQ2hDLGtCQUFrQixFQUFFLGFBQWE7WUFDakMsc0JBQXNCLEVBQUUsVUFBVTtTQUNuQyxDQUFDLENBQUM7UUFFSCxVQUFVLENBQUMsT0FBTyxDQUFD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