'use strict';

import { assert } from 'chai';
import { SinonStub, stub } from 'sinon';

import { BlockBid } from './index';
import * as createHmac from './services/authentication';

import * as rp from 'request-promise';

describe('Index', () => {
  let rpStub: SinonStub;
  let hmacStub: SinonStub;

  before(() => {
    rpStub = stub(rp, 'Request');
    hmacStub = stub(createHmac, 'createHmac');
  });

  beforeEach(() => {
    rpStub.reset();
    hmacStub.reset();
  });

  after(() => {
    rpStub.restore();
    hmacStub.restore();
  });

  it('should call account/identity', async () => {
    hmacStub.returns({
      'X-Blockbid-Api-Key': 'MyApiKey',
      'X-Blockbid-Nonce': 1541581502000,
      'X-Blockbid-Signature': 'YWJjMTIz',
    });

    rpStub.resolves({ response: true });

    const blockbid = new BlockBid('MyApiKey', 'MySecretKey');

    const resp: any = await blockbid.accounts().identity();

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

    assert.deepEqual(rpStub.args, expectedArgs);
    assert.strictEqual(rpStub.callCount, 1);
    assert.deepEqual(resp, { response: true });
  });

  it('should call apis/apiKeys', async () => {
    hmacStub.returns({
      'X-Blockbid-Api-Key': 'MyApiKey',
      'X-Blockbid-Nonce': 1541581502000,
      'X-Blockbid-Signature': 'YWJjMTIz',
    });

    rpStub.resolves({ response: true });

    const blockbid = new BlockBid('MyApiKey', 'MySecretKey');

    const resp: any = await blockbid.apis().apiKeys('115577');

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

    assert.deepEqual(rpStub.args, expectedArgs);
    assert.strictEqual(rpStub.callCount, 1);
    assert.deepEqual(resp, { response: true });
  });

  it('should call deposits/addresses', async () => {
    hmacStub.returns({
      'X-Blockbid-Api-Key': 'MyApiKey',
      'X-Blockbid-Nonce': 1541581502000,
      'X-Blockbid-Signature': 'YWJjMTIz',
    });

    rpStub.resolves({ response: true });

    const blockbid = new BlockBid('MyApiKey', 'MySecretKey');

    const resp: any = await blockbid.deposits().addresses('btc');

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

    assert.deepEqual(rpStub.args, expectedArgs);
    assert.strictEqual(rpStub.callCount, 1);
    assert.deepEqual(resp, { response: true });
  });

  it('should call markets/markets', async () => {
    rpStub.resolves({ response: true });

    const blockbid = new BlockBid();

    const resp: any = await blockbid.markets().markets();

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

    assert.deepEqual(rpStub.args, expectedArgs);
    assert.strictEqual(rpStub.callCount, 1);
    assert.deepEqual(resp, { response: true });
  });

  it('should call orders/order', async () => {
    hmacStub.returns({
      'X-Blockbid-Api-Key': 'MyApiKey',
      'X-Blockbid-Nonce': 1541581502000,
      'X-Blockbid-Signature': 'YWJjMTIz',
    });

    rpStub.resolves({ response: true });

    const blockbid = new BlockBid('MyApiKey', 'MyApiSecret');

    const resp: any = await blockbid.orders().order(112233);

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

    assert.deepEqual(rpStub.args, expectedArgs);
    assert.strictEqual(rpStub.callCount, 1);
    assert.deepEqual(resp, { response: true });
  });

  it('should call withdraws/withdraws', async () => {
    hmacStub.returns({
      'X-Blockbid-Api-Key': 'MyApiKey',
      'X-Blockbid-Nonce': 1541581502000,
      'X-Blockbid-Signature': 'YWJjMTIz',
    });

    rpStub.resolves({ response: true });

    const blockbid = new BlockBid('MyApiKey', 'MyApiSecret');

    const resp: any = await blockbid.withdraws().withdraws();

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

    assert.deepEqual(rpStub.args, expectedArgs);
    assert.strictEqual(rpStub.callCount, 1);
    assert.deepEqual(resp, { response: true });
  });
});
