'use strict';

import { assert } from 'chai';
import { SinonStub, stub } from 'sinon';

import { Apis } from './apis';
import { Common } from './common';
import * as createHmac from './services/authentication';

describe('Apis', () => {
  let apis: Apis;
  let commonStub: SinonStub;
  let hmacStub: SinonStub;

  before(() => {
    apis = new Apis('MyApiKey', 'MyApiSecret');

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

  it('should call apiKeys without params', async () => {
    hmacStub.returns({
      'X-Blockbid-Api-Key': 'MyApiKey',
      'X-Blockbid-Nonce': 1541581502000,
      'X-Blockbid-Signature': 'YWJjMTIz',
    });

    commonStub.returns({
      apis: 'apiKeys',
    });

    const resp: any = await apis.apiKeys('112233');

    const expectedMockReturn = {
      apis: 'apiKeys',
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
        '/apikeys',
        null,
        {
          totp_code: '112233',
          scopes: undefined,
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

  it('should call apiKeys with params', async () => {
    hmacStub.returns({
      'X-Blockbid-Api-Key': 'MyApiKey',
      'X-Blockbid-Nonce': 1541581502000,
      'X-Blockbid-Signature': 'YWJjMTIz',
    });

    commonStub.returns({
      apis: 'apiKeys',
    });

    const resp: any = await apis.apiKeys('112233', 'someScope');

    const expectedMockReturn = {
      apis: 'apiKeys',
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
        '/apikeys',
        null,
        {
          totp_code: '112233',
          scopes: 'someScope',
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
