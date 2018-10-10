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
const accounts_1 = require("./accounts");
const common_1 = require("./common");
const createHmac = require("./services/authentication");
describe('Accounts', () => {
    let accounts;
    let commonStub;
    let hmacStub;
    before(() => {
        accounts = new accounts_1.Accounts('MyApiKey', 'MyApiSecret');
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
    it('should call identity', () => __awaiter(this, void 0, void 0, function* () {
        hmacStub.returns({
            'X-Blockbid-Api-Key': 'MyApiKey',
            'X-Blockbid-Nonce': 1541581502000,
            'X-Blockbid-Signature': 'YWJjMTIz',
        });
        commonStub.returns({
            accounts: 'identity',
        });
        const resp = yield accounts.identity();
        const expectedMockReturn = {
            accounts: 'identity',
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
                '/identity',
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
    it('should call accounts', () => __awaiter(this, void 0, void 0, function* () {
        hmacStub.returns({
            'X-Blockbid-Api-Key': 'MyApiKey',
            'X-Blockbid-Nonce': 1541581502000,
            'X-Blockbid-Signature': 'YWJjMTIz',
        });
        commonStub.returns({
            accounts: 'accounts',
        });
        const resp = yield accounts.accounts();
        const expectedMockReturn = {
            accounts: 'accounts',
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
                '/accounts',
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
    it('should call account', () => __awaiter(this, void 0, void 0, function* () {
        hmacStub.returns({
            'X-Blockbid-Api-Key': 'MyApiKey',
            'X-Blockbid-Nonce': 1541581502000,
            'X-Blockbid-Signature': 'YWJjMTIz',
        });
        commonStub.returns({
            accounts: 'account',
        });
        const resp = yield accounts.account('114455');
        const expectedMockReturn = {
            accounts: 'account',
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
                '/accounts/114455',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3VudHMuc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9hY2NvdW50cy5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7Ozs7OztBQUViLCtCQUE4QjtBQUM5QixpQ0FBd0M7QUFFeEMseUNBQXNDO0FBQ3RDLHFDQUFrQztBQUNsQyx3REFBd0Q7QUFFeEQsUUFBUSxDQUFDLFVBQVUsRUFBRSxHQUFHLEVBQUU7SUFDeEIsSUFBSSxRQUFrQixDQUFDO0lBQ3ZCLElBQUksVUFBcUIsQ0FBQztJQUMxQixJQUFJLFFBQW1CLENBQUM7SUFFeEIsTUFBTSxDQUFDLEdBQUcsRUFBRTtRQUNWLFFBQVEsR0FBRyxJQUFJLG1CQUFRLENBQUMsVUFBVSxFQUFFLGFBQWEsQ0FBQyxDQUFDO1FBRW5ELFVBQVUsR0FBRyxZQUFJLENBQUMsZUFBTSxDQUFDLFNBQVMsRUFBRSxTQUFTLENBQUMsQ0FBQztRQUMvQyxRQUFRLEdBQUcsWUFBSSxDQUFDLFVBQVUsRUFBRSxZQUFZLENBQUMsQ0FBQztJQUM1QyxDQUFDLENBQUMsQ0FBQztJQUVILFVBQVUsQ0FBQyxHQUFHLEVBQUU7UUFDZCxVQUFVLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDbkIsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ25CLENBQUMsQ0FBQyxDQUFDO0lBRUgsS0FBSyxDQUFDLEdBQUcsRUFBRTtRQUNULFVBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNyQixRQUFRLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDckIsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsc0JBQXNCLEVBQUUsR0FBUyxFQUFFO1FBQ3BDLFFBQVEsQ0FBQyxPQUFPLENBQUM7WUFDZixvQkFBb0IsRUFBRSxVQUFVO1lBQ2hDLGtCQUFrQixFQUFFLGFBQWE7WUFDakMsc0JBQXNCLEVBQUUsVUFBVTtTQUNuQyxDQUFDLENBQUM7UUFFSCxVQUFVLENBQUMsT0FB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