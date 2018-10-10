'use strict';

import { assert } from 'chai';
import { SinonStub, stub } from 'sinon';

import { Common } from './common';
import * as createHmac from './services/authentication';
import { Withdraws } from './withdraws';

describe('Withdraws', () => {
  let withdraws: Withdraws;
  let commonStub: SinonStub;
  let hmacStub: SinonStub;

  before(() => {
    withdraws = new Withdraws('MyApiKey', 'MyApiSecret');

    commonStub = stub(Common.prototype, 'request');
    hmacStub = stub(createHmac, 'createHmac');
  });

  beforeEach(() => {
    commonStub.reset();
    hmacStub.reset();
  });

  after(() => {
    commonStub.restore();
    hmacStub.restore();
  });

  it('should call withdraws', async () => {
    hmacStub.returns({
      'X-Blockbid-Api-Key': 'MyApiKey',
      'X-Blockbid-Nonce': 1541581502000,
      'X-Blockbid-Signature': 'YWJjMTIz',
    });

    commonStub.returns({
      withdraws: 'withdraws',
    });

    const resp: any = await withdraws.withdraws();

    const expectedMockReturn = {
      withdraws: 'withdraws',
    };

    assert.deepEqual(resp, expectedMockReturn);

    const expectedHmacArgs = [
      [
        'MyApiKey',
        'MyApiSecret',
      ],
    ];

    assert.deepEqual(hmacStub.args, expectedHmacArgs);
    assert.strictEqual(hmacStub.callCount, 1);

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

    assert.deepEqual(commonStub.args, expectedCommonArgs);
    assert.strictEqual(commonStub.callCount, 1);
  });

  it('should call withdraws with params', async () => {
    hmacStub.returns({
      'X-Blockbid-Api-Key': 'MyApiKey',
      'X-Blockbid-Nonce': 1541581502000,
      'X-Blockbid-Signature': 'YWJjMTIz',
    });

    commonStub.returns({
      withdraws: 'withdraws',
    });

    const resp: any = await withdraws.withdraws('btc', 5, 50);

    const expectedMockReturn = {
      withdraws: 'withdraws',
    };

    assert.deepEqual(resp, expectedMockReturn);

    const expectedHmacArgs = [
      [
        'MyApiKey',
        'MyApiSecret',
      ],
    ];

    assert.deepEqual(hmacStub.args, expectedHmacArgs);
    assert.strictEqual(hmacStub.callCount, 1);

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

    assert.deepEqual(commonStub.args, expectedCommonArgs);
    assert.strictEqual(commonStub.callCount, 1);
  });

  it('should call withdraws with invalid limit', async () => {
    hmacStub.returns({
      'X-Blockbid-Api-Key': 'MyApiKey',
      'X-Blockbid-Nonce': 1541581502000,
      'X-Blockbid-Signature': 'YWJjMTIz',
    });

    commonStub.returns({
      withdraws: 'withdraws',
    });

    const resp: any = await withdraws.withdraws('btc', 5, 5000);

    const expectedMockReturn = {
      withdraws: 'withdraws',
    };

    assert.deepEqual(resp, expectedMockReturn);

    const expectedHmacArgs = [
      [
        'MyApiKey',
        'MyApiSecret',
      ],
    ];

    assert.deepEqual(hmacStub.args, expectedHmacArgs);
    assert.strictEqual(hmacStub.callCount, 1);

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

    assert.deepEqual(commonStub.args, expectedCommonArgs);
    assert.strictEqual(commonStub.callCount, 1);
  });

  it('should call withdraws with invalid limit', async () => {
    hmacStub.returns({
      'X-Blockbid-Api-Key': 'MyApiKey',
      'X-Blockbid-Nonce': 1541581502000,
      'X-Blockbid-Signature': 'YWJjMTIz',
    });

    commonStub.returns({
      withdraws: 'withdraws',
    });

    const resp: any = await withdraws.createWithdraw('xbtcAddress', 'btc', '0.54');

    const expectedMockReturn = {
      withdraws: 'withdraws',
    };

    assert.deepEqual(resp, expectedMockReturn);

    const expectedHmacArgs = [
      [
        'MyApiKey',
        'MyApiSecret',
      ],
    ];

    assert.deepEqual(hmacStub.args, expectedHmacArgs);
    assert.strictEqual(hmacStub.callCount, 1);

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

    assert.deepEqual(commonStub.args, expectedCommonArgs);
    assert.strictEqual(commonStub.callCount, 1);
  });
});
