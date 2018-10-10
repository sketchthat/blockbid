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
const index_1 = require("./index");
const createHmac = require("./services/authentication");
const rp = require("request-promise");
describe('Index', () => {
    let rpStub;
    let hmacStub;
    before(() => {
        rpStub = sinon_1.stub(rp, 'Request');
        hmacStub = sinon_1.stub(createHmac, 'createHmac');
    });
    beforeEach(() => {
        rpStub.reset();
        hmacStub.reset();
    });
    after(() => {
        rpStub.restore();
        hmacStub.restore();
    });
    it('should call account/identity', () => __awaiter(this, void 0, void 0, function* () {
        hmacStub.returns({
            'X-Blockbid-Api-Key': 'MyApiKey',
            'X-Blockbid-Nonce': 1541581502000,
            'X-Blockbid-Signature': 'YWJjMTIz',
        });
        rpStub.resolves({ response: true });
        const blockbid = new index_1.BlockBid('MyApiKey', 'MySecretKey');
        const resp = yield blockbid.accounts().identity();
        const expectedArgs = [
            [
                {
                    uri: 'https://api.blockbid.io/identity',
                    json: true,
                    method: 'GET',
                    qs: {},
                    body: {},
                    headers: {
                        'X-Blockbid-Api-Key': 'MyApiKey',
                        'X-Blockbid-Nonce': 1541581502000,
                        'X-Blockbid-Signature': 'YWJjMTIz',
                    },
                    callback: undefined,
                },
            ],
        ];
        chai_1.assert.deepEqual(rpStub.args, expectedArgs);
        chai_1.assert.strictEqual(rpStub.callCount, 1);
        chai_1.assert.deepEqual(resp, { response: true });
    }));
    it('should call apis/apiKeys', () => __awaiter(this, void 0, void 0, function* () {
        hmacStub.returns({
            'X-Blockbid-Api-Key': 'MyApiKey',
            'X-Blockbid-Nonce': 1541581502000,
            'X-Blockbid-Signature': 'YWJjMTIz',
        });
        rpStub.resolves({ response: true });
        const blockbid = new index_1.BlockBid('MyApiKey', 'MySecretKey');
        const resp = yield blockbid.apis().apiKeys('115577');
        const expectedArgs = [
            [
                {
                    uri: 'https://api.blockbid.io/apikeys',
                    json: true,
                    method: 'POST',
                    qs: {},
                    body: {
                        totp_code: '115577',
                    },
                    headers: {
                        'X-Blockbid-Api-Key': 'MyApiKey',
                        'X-Blockbid-Nonce': 1541581502000,
                        'X-Blockbid-Signature': 'YWJjMTIz',
                    },
                    callback: undefined,
                },
            ],
        ];
        chai_1.assert.deepEqual(rpStub.args, expectedArgs);
        chai_1.assert.strictEqual(rpStub.callCount, 1);
        chai_1.assert.deepEqual(resp, { response: true });
    }));
    it('should call deposits/addresses', () => __awaiter(this, void 0, void 0, function* () {
        hmacStub.returns({
            'X-Blockbid-Api-Key': 'MyApiKey',
            'X-Blockbid-Nonce': 1541581502000,
            'X-Blockbid-Signature': 'YWJjMTIz',
        });
        rpStub.resolves({ response: true });
        const blockbid = new index_1.BlockBid('MyApiKey', 'MySecretKey');
        const resp = yield blockbid.deposits().addresses('btc');
        const expectedArgs = [
            [
                {
                    uri: 'https://api.blockbid.io/addresses',
                    json: true,
                    method: 'GET',
                    qs: {
                        currency: 'btc',
                    },
                    body: {},
                    headers: {
                        'X-Blockbid-Api-Key': 'MyApiKey',
                        'X-Blockbid-Nonce': 1541581502000,
                        'X-Blockbid-Signature': 'YWJjMTIz',
                    },
                    callback: undefined,
                },
            ],
        ];
        chai_1.assert.deepEqual(rpStub.args, expectedArgs);
        chai_1.assert.strictEqual(rpStub.callCount, 1);
        chai_1.assert.deepEqual(resp, { response: true });
    }));
    it('should call markets/markets', () => __awaiter(this, void 0, void 0, function* () {
        rpStub.resolves({ response: true });
        const blockbid = new index_1.BlockBid();
        const resp = yield blockbid.markets().markets();
        const expectedArgs = [
            [
                {
                    uri: 'https://api.blockbid.io/markets',
                    json: true,
                    method: 'GET',
                    qs: {},
                    body: {},
                    callback: undefined,
                },
            ],
        ];
        chai_1.assert.deepEqual(rpStub.args, expectedArgs);
        chai_1.assert.strictEqual(rpStub.callCount, 1);
        chai_1.assert.deepEqual(resp, { response: true });
    }));
    it('should call orders/order', () => __awaiter(this, void 0, void 0, function* () {
        hmacStub.returns({
            'X-Blockbid-Api-Key': 'MyApiKey',
            'X-Blockbid-Nonce': 1541581502000,
            'X-Blockbid-Signature': 'YWJjMTIz',
        });
        rpStub.resolves({ response: true });
        const blockbid = new index_1.BlockBid('MyApiKey', 'MyApiSecret');
        const resp = yield blockbid.orders().order(112233);
        const expectedArgs = [
            [
                {
                    uri: 'https://api.blockbid.io/orders/112233',
                    json: true,
                    method: 'GET',
                    qs: {},
                    body: {},
                    headers: {
                        'X-Blockbid-Api-Key': 'MyApiKey',
                        'X-Blockbid-Nonce': 1541581502000,
                        'X-Blockbid-Signature': 'YWJjMTIz',
                    },
                    callback: undefined,
                },
            ],
        ];
        chai_1.assert.deepEqual(rpStub.args, expectedArgs);
        chai_1.assert.strictEqual(rpStub.callCount, 1);
        chai_1.assert.deepEqual(resp, { response: true });
    }));
    it('should call withdraws/withdraws', () => __awaiter(this, void 0, void 0, function* () {
        hmacStub.returns({
            'X-Blockbid-Api-Key': 'MyApiKey',
            'X-Blockbid-Nonce': 1541581502000,
            'X-Blockbid-Signature': 'YWJjMTIz',
        });
        rpStub.resolves({ response: true });
        const blockbid = new index_1.BlockBid('MyApiKey', 'MyApiSecret');
        const resp = yield blockbid.withdraws().withdraws();
        const expectedArgs = [
            [
                {
                    uri: 'https://api.blockbid.io/withdraws',
                    json: true,
                    method: 'GET',
                    qs: {
                        limit: 100,
                        page: 1,
                    },
                    body: {},
                    headers: {
                        'X-Blockbid-Api-Key': 'MyApiKey',
                        'X-Blockbid-Nonce': 1541581502000,
                        'X-Blockbid-Signature': 'YWJjMTIz',
                    },
                    callback: undefined,
                },
            ],
        ];
        chai_1.assert.deepEqual(rpStub.args, expectedArgs);
        chai_1.assert.strictEqual(rpStub.callCount, 1);
        chai_1.assert.deepEqual(resp, { response: true });
    }));
    // it('should call trade/order', async () => {
    //   hmacStub.returns({
    //     method: 'mockMethod',
    //     path: '/tradePath',
    //     qs: {
    //       mock: 'method',
    //     },
    //   });
    //   rpStub.resolves({ response: true });
    //   const blockbid = new BlockBid('MyApiKey', 'MySecretKey');
    //   const resp: any = await blockbid.trade().order('112233');
    //   const expectedArgs = [
    //     [
    //       {
    //         uri: 'https://api.blockbid.io/tradePath',
    //         json: true,
    //         method: 'mockMethod',
    //         qs: {
    //           mock: 'method',
    //         },
    //         callback: undefined,
    //       },
    //     ],
    //   ];
    //   assert.deepEqual(rpStub.args, expectedArgs);
    //   assert.strictEqual(rpStub.callCount, 1);
    //   assert.deepEqual(resp, { response: true });
    // });
    // it('should call market/trade', async () => {
    //   rpStub.resolves({ response: true });
    //   const blockbid = new BlockBid();
    //   const resp: any = await blockbid.market().trade('btcaud');
    //   const expectedArgs = [
    //     [
    //       {
    //         uri: 'https://api.blockbid.io/market/trade',
    //         json: true,
    //         method: 'GET',
    //         qs: {
    //           symbol: 'btcaud',
    //         },
    //         callback: undefined,
    //       },
    //     ],
    //   ];
    //   assert.deepEqual(rpStub.args, expectedArgs);
    //   assert.strictEqual(rpStub.callCount, 1);
    //   assert.deepEqual(resp, { response: true });
    // });
    // it('should call public/currencys', async () => {
    //   rpStub.resolves({ response: true });
    //   const blockbid = new BlockBid();
    //   const resp: any = await blockbid.public().currencys();
    //   const expectedArgs = [
    //     [
    //       {
    //         uri: 'https://api.blockbid.io/v1/common/currencys',
    //         json: true,
    //         method: 'GET',
    //         callback: undefined,
    //       },
    //     ],
    //   ];
    //   assert.deepEqual(rpStub.args, expectedArgs);
    //   assert.strictEqual(rpStub.callCount, 1);
    //   assert.deepEqual(resp, { response: true });
    // });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7Ozs7OztBQUViLCtCQUE4QjtBQUM5QixpQ0FBd0M7QUFFeEMsbUNBQW1DO0FBQ25DLHdEQUF3RDtBQUV4RCxzQ0FBc0M7QUFFdEMsUUFBUSxDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUU7SUFDckIsSUFBSSxNQUFpQixDQUFDO0lBQ3RCLElBQUksUUFBbUIsQ0FBQztJQUV4QixNQUFNLENBQUMsR0FBRyxFQUFFO1FBQ1YsTUFBTSxHQUFHLFlBQUksQ0FBQyxFQUFFLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDN0IsUUFBUSxHQUFHLFlBQUksQ0FBQyxVQUFVLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFDNUMsQ0FBQyxDQUFDLENBQUM7SUFFSCxVQUFVLENBQUMsR0FBRyxFQUFFO1FBQ2QsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2YsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ25CLENBQUMsQ0FBQyxDQUFDO0lBRUgsS0FBSyxDQUFDLEdBQUcsRUFBRTtRQUNULE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNqQixRQUFRLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDckIsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsOEJBQThCLEVBQUUsR0FBUyxFQUFFO1FBQzVDLFFBQVEsQ0FBQyxPQUFPLENBQUM7WUFDZixvQkFBb0IsRUFBRSxVQUFVO1lBQ2hDLGtCQUFrQixFQUFFLGFBQWE7WUFDakMsc0JBQXNCLEVBQUUsVUFBVTtTQUNuQyxDQUFDLENBQUM7UUFFSCxNQUFNLENBQUMsUUFBUSxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7UUFFcEMsTUFBTSxRQUFRLEdBQUcsSUFBSSxnQkFBUSxDQUFDLFVBQVUsRUFBRSxhQUFhLENB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