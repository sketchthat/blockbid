'use strict';

import { assert } from 'chai';
import { SinonStub, stub } from 'sinon';

import { Common } from './common';
import { Deposits } from './deposits';
import * as createHmac from './services/authentication';

describe('Deposits', () => {
  let deposits: Deposits;
  let commonStub: SinonStub;
  let hmacStub: SinonStub;

  before(() => {
    deposits = new Deposits('MyApiKey', 'MyApiSecret');

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

  it('should call addresses', async () => {
    hmacStub.returns({
      'X-Blockbid-Api-Key': 'MyApiKey',
      'X-Blockbid-Nonce': 1541581502000,
      'X-Blockbid-Signature': 'YWJjMTIz',
    });

    commonStub.returns({
      deposits: 'addresses',
    });

    const resp: any = await deposits.addresses('btc');

    const expectedMockReturn = {
      deposits: 'addresses',
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
        '/addresses',
        {
          currency: 'btc',
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

  it('should call deposits without params', async () => {
    hmacStub.returns({
      'X-Blockbid-Api-Key': 'MyApiKey',
      'X-Blockbid-Nonce': 1541581502000,
      'X-Blockbid-Signature': 'YWJjMTIz',
    });

    commonStub.returns({
      deposits: 'deposits',
    });

    const resp: any = await deposits.deposits();

    const expectedMockReturn = {
      deposits: 'deposits',
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
        '/deposits',
        {
          currency: undefined,
          limit: undefined,
          state: undefined,
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

  it('should call deposits with params', async () => {
    hmacStub.returns({
      'X-Blockbid-Api-Key': 'MyApiKey',
      'X-Blockbid-Nonce': 1541581502000,
      'X-Blockbid-Signature': 'YWJjMTIz',
    });

    commonStub.returns({
      deposits: 'deposits',
    });

    const resp: any = await deposits.deposits('btc', 20, 'completed');

    const expectedMockReturn = {
      deposits: 'deposits',
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
        '/deposits',
        {
          currency: 'btc',
          limit: 20,
          state: 'completed',
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

  it('should call deposit', async () => {
    hmacStub.returns({
      'X-Blockbid-Api-Key': 'MyApiKey',
      'X-Blockbid-Nonce': 1541581502000,
      'X-Blockbid-Signature': 'YWJjMTIz',
    });

    commonStub.returns({
      deposits: 'deposit',
    });

    const resp: any = await deposits.deposit(991122);

    const expectedMockReturn = {
      deposits: 'deposit',
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
        '/deposits/991122',
        null,
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
});
