'use strict';

import { assert } from 'chai';
import { SinonStub, stub } from 'sinon';
import * as sinon from 'sinon';

import { createHmac } from './authentication';

import * as crypto from 'crypto';

describe('Authentication', () => {
  let cryptoStub: SinonStub;

  before(() => {
    cryptoStub = stub(crypto, 'createHmac');
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

        assert.strictEqual(update, expectedUpdate);

        return cryptoReturns;
      },
      digest(digest) {
        assert.strictEqual(digest, 'base64');

        return 'YWJjMTIz';
      },
    };

    cryptoStub.returns(cryptoReturns);

    const response = createHmac('MyApiKey', 'MyApiSecret');

    const expectedResponse = {
      'X-Blockbid-Api-Key': 'MyApiKey',
      'X-Blockbid-Nonce': 1541581502000,
      'X-Blockbid-Signature': 'YWJjMTIz',
    };

    assert.deepEqual(response, expectedResponse);
    assert.strictEqual(cryptoStub.callCount, 1);
  });
});
