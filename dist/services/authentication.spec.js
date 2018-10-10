'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const sinon_1 = require("sinon");
const sinon = require("sinon");
const authentication_1 = require("./authentication");
const crypto = require("crypto");
describe('Authentication', () => {
    let cryptoStub;
    before(() => {
        cryptoStub = sinon_1.stub(crypto, 'createHmac');
    });
    beforeEach(() => {
        cryptoStub.reset();
        const utcDate = new Date(Date.UTC(2018, 10, 7, 9, 5, 2));
        this.clock = sinon.useFakeTimers(utcDate);
    });
    after(() => {
        cryptoStub.restore();
    });
    afterEach(() => {
        this.clock.restore();
    });
    it('should call createHmac', () => {
        const cryptoReturns = {
            update(update) {
                const expectedUpdate = 'TXlBcGlLZXk=MTU0MTU4MTUwMjAwMA==';
                chai_1.assert.strictEqual(update, expectedUpdate);
                return cryptoReturns;
            },
            digest(digest) {
                chai_1.assert.strictEqual(digest, 'base64');
                return 'YWJjMTIz';
            },
        };
        cryptoStub.returns(cryptoReturns);
        const response = authentication_1.createHmac('MyApiKey', 'MyApiSecret');
        const expectedResponse = {
            'X-Blockbid-Api-Key': 'MyApiKey',
            'X-Blockbid-Nonce': 1541581502000,
            'X-Blockbid-Signature': 'YWJjMTIz',
        };
        chai_1.assert.deepEqual(response, expectedResponse);
        chai_1.assert.strictEqual(cryptoStub.callCount, 1);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aGVudGljYXRpb24uc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZXJ2aWNlcy9hdXRoZW50aWNhdGlvbi5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7QUFFYiwrQkFBOEI7QUFDOUIsaUNBQXdDO0FBQ3hDLCtCQUErQjtBQUUvQixxREFBOEM7QUFFOUMsaUNBQWlDO0FBRWpDLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRSxHQUFHLEVBQUU7SUFDOUIsSUFBSSxVQUFxQixDQUFDO0lBRTFCLE1BQU0sQ0FBQyxHQUFHLEVBQUU7UUFDVixVQUFVLEdBQUcsWUFBSSxDQUFDLE1BQU0sRUFBRSxZQUFZLENBQUMsQ0FBQztJQUMxQyxDQUFDLENBQUMsQ0FBQztJQUVILFVBQVUsQ0FBQyxHQUFHLEVBQUU7UUFDZCxVQUFVLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFbkIsTUFBTSxPQUFPLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzVDLENBQUMsQ0FBQyxDQUFDO0lBRUgsS0FBSyxDQUFDLEdBQUcsRUFBRTtRQUNULFVBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUN2QixDQUFDLENBQUMsQ0FBQztJQUVILFNBQVMsQ0FBQyxHQUFHLEVBQUU7UUFDYixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ3ZCLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLHdCQUF3QixFQUFFLEdBQUcsRUFBRTtRQUNoQyxNQUFNLGFBQWEsR0FBRztZQUNwQixNQUFNLENBQUMsTUFBTTtnQkFDWCxNQUFNLGNBQWMsR0FBRyxrQ0FBa0MsQ0FBQztnQkFFMUQsYUFBTSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsY0FBYyxDQUFDLENBQUM7Z0JBRTNDLE9BQU8sYUFBYSxDQUFDO1lBQ3ZCLENBQUM7WUFDRCxNQUFNLENBQUMsTUFBTTtnQkFDWCxhQUFNLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQztnQkFFckMsT0FBTyxVQUFVLENBQUM7WUFDcEIsQ0FBQztTQUNGLENBQUM7UUFFRixVQUFVLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBRWxDLE1BQU0sUUFBUSxHQUFHLDJCQUFVLENBQUMsVUFBVSxFQUFFLGFBQWEsQ0FBQyxDQUFDO1FBRXZELE1BQU0sZ0JBQWdCLEdBQUc7WUFDdkIsb0JBQW9CLEVBQUUsVUFBVTtZQUNoQyxrQkFBa0IsRUFBRSxhQUFhO1lBQ2pDLHNCQUFzQixFQUFFLFVBQVU7U0FDbkMsQ0FBQztRQUVGLGFBQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLGdCQUFnQixDQUFDLENBQUM7UUFDN0MsYUFBTSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzlDLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDLENBQUMifQ==