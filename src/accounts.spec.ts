'use strict';

import { assert } from 'chai';
import { SinonStub, stub } from 'sinon';

import { Accounts } from './accounts';
import { Common } from './common';
import * as createHmac from './services/authentication';

describe('Accounts', () => {
  let accounts: Accounts;
  let commonStub: SinonStub;
  let hmacStub: SinonStub;

  before(() => {
    accounts = new Accounts('MyApiKey', 'MyApiSecret');

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

  it('should call identity', async () => {
    hmacStub.returns({
      'X-Blockbid-Api-Key': 'MyApiKey',
      'X-Blockbid-Nonce': 1541581502000,
      'X-Blockbid-Signature': 'YWJjMTIz',
    });

    commonStub.returns({
      accounts: 'identity',
    });

    const resp: any = await accounts.identity();

    const expectedMockReturn = {
      accounts: 'identity',
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

    assert.deepEqual(commonStub.args, expectedCommonArgs);
    assert.strictEqual(commonStub.callCount, 1);
  });

  it('should call accounts', async () => {
    hmacStub.returns({
      'X-Blockbid-Api-Key': 'MyApiKey',
      'X-Blockbid-Nonce': 1541581502000,
      'X-Blockbid-Signature': 'YWJjMTIz',
    });

    commonStub.returns({
      accounts: 'accounts',
    });

    const resp: any = await accounts.accounts();

    const expectedMockReturn = {
      accounts: 'accounts',
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

    assert.deepEqual(commonStub.args, expectedCommonArgs);
    assert.strictEqual(commonStub.callCount, 1);
  });

  it('should call account', async () => {
    hmacStub.returns({
      'X-Blockbid-Api-Key': 'MyApiKey',
      'X-Blockbid-Nonce': 1541581502000,
      'X-Blockbid-Signature': 'YWJjMTIz',
    });

    commonStub.returns({
      accounts: 'account',
    });

    const resp: any = await accounts.account('114455');

    const expectedMockReturn = {
      accounts: 'account',
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

    assert.deepEqual(commonStub.args, expectedCommonArgs);
    assert.strictEqual(commonStub.callCount, 1);
  });
});
