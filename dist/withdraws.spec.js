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
const createHmac = require("./services/authentication");
const withdraws_1 = require("./withdraws");
describe('Withdraws', () => {
    let withdraws;
    let commonStub;
    let hmacStub;
    before(() => {
        withdraws = new withdraws_1.Withdraws('MyApiKey', 'MyApiSecret');
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
    it('should call withdraws', () => __awaiter(this, void 0, void 0, function* () {
        hmacStub.returns({
            'X-Blockbid-Api-Key': 'MyApiKey',
            'X-Blockbid-Nonce': 1541581502000,
            'X-Blockbid-Signature': 'YWJjMTIz',
        });
        commonStub.returns({
            withdraws: 'withdraws',
        });
        const resp = yield withdraws.withdraws();
        const expectedMockReturn = {
            withdraws: 'withdraws',
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
                '/withdraws',
                {
                    currency: undefined,
                    page: 1,
                    limit: 100,
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
    it('should call withdraws with params', () => __awaiter(this, void 0, void 0, function* () {
        hmacStub.returns({
            'X-Blockbid-Api-Key': 'MyApiKey',
            'X-Blockbid-Nonce': 1541581502000,
            'X-Blockbid-Signature': 'YWJjMTIz',
        });
        commonStub.returns({
            withdraws: 'withdraws',
        });
        const resp = yield withdraws.withdraws('btc', 5, 50);
        const expectedMockReturn = {
            withdraws: 'withdraws',
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
                '/withdraws',
                {
                    currency: 'btc',
                    page: 5,
                    limit: 50,
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
    it('should call withdraws with invalid limit', () => __awaiter(this, void 0, void 0, function* () {
        hmacStub.returns({
            'X-Blockbid-Api-Key': 'MyApiKey',
            'X-Blockbid-Nonce': 1541581502000,
            'X-Blockbid-Signature': 'YWJjMTIz',
        });
        commonStub.returns({
            withdraws: 'withdraws',
        });
        const resp = yield withdraws.withdraws('btc', 5, 5000);
        const expectedMockReturn = {
            withdraws: 'withdraws',
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
                '/withdraws',
                {
                    currency: 'btc',
                    page: 5,
                    limit: 1000,
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
    it('should call withdraws with invalid limit', () => __awaiter(this, void 0, void 0, function* () {
        hmacStub.returns({
            'X-Blockbid-Api-Key': 'MyApiKey',
            'X-Blockbid-Nonce': 1541581502000,
            'X-Blockbid-Signature': 'YWJjMTIz',
        });
        commonStub.returns({
            withdraws: 'withdraws',
        });
        const resp = yield withdraws.createWithdraw('xbtcAddress', 'btc', '0.54');
        const expectedMockReturn = {
            withdraws: 'withdraws',
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
                'POST',
                '/withdraws',
                null,
                {
                    address: 'xbtcAddress',
                    currency: 'btc',
                    amount: '0.54',
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
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2l0aGRyYXdzLnNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvd2l0aGRyYXdzLnNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7Ozs7Ozs7O0FBRWIsK0JBQThCO0FBQzlCLGlDQUF3QztBQUV4QyxxQ0FBa0M7QUFDbEMsd0RBQXdEO0FBQ3hELDJDQUF3QztBQUV4QyxRQUFRLENBQUMsV0FBVyxFQUFFLEdBQUcsRUFBRTtJQUN6QixJQUFJLFNBQW9CLENBQUM7SUFDekIsSUFBSSxVQUFxQixDQUFDO0lBQzFCLElBQUksUUFBbUIsQ0FBQztJQUV4QixNQUFNLENBQUMsR0FBRyxFQUFFO1FBQ1YsU0FBUyxHQUFHLElBQUkscUJBQVMsQ0FBQyxVQUFVLEVBQUUsYUFBYSxDQUFDLENBQUM7UUFFckQsVUFBVSxHQUFHLFlBQUksQ0FBQyxlQUFNLENBQUMsU0FBUyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQy9DLFFBQVEsR0FBRyxZQUFJLENBQUMsVUFBVSxFQUFFLFlBQVksQ0FBQyxDQUFDO0lBQzVDLENBQUMsQ0FBQyxDQUFDO0lBRUgsVUFBVSxDQUFDLEdBQUcsRUFBRTtRQUNkLFVBQVUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNuQixRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDbkIsQ0FBQyxDQUFDLENBQUM7SUFFSCxLQUFLLENBQUMsR0FBRyxFQUFFO1FBQ1QsVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3JCLFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNyQixDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyx1QkFBdUIsRUFBRSxHQUFTLEVBQUU7UUFDckMsUUFBUSxDQUFDLE9BQU8sQ0FBQztZQUNmLG9CQUFvQixFQUFFLFVBQVU7WUFDaEMsa0JBQWtCLEVBQUUsYUFBYTtZQUNqQyxzQkFBc0IsRUFBRSxVQUFVO1NBQ25DLENBQUMsQ0FBQztRQUVILFVBQVUsQ0FBQyxP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