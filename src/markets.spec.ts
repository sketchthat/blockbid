'use strict';

import { assert } from 'chai';
import { SinonStub, stub } from 'sinon';

import { Common } from './common';
import { Markets } from './markets';
import * as createHmac from './services/authentication';

describe('Market', () => {
  let markets: Markets;
  let commonStub: SinonStub;
  let hmacStub: SinonStub;

  before(() => {
    markets = new Markets('MyApiKey', 'MyApiSecret');

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

  it('should call markets', async () => {
    commonStub.returns({
      markets: 'markets',
    });

    const resp: any = await markets.markets();

    const expectedMockReturn = {
      markets: 'markets',
    };

    assert.deepEqual(resp, expectedMockReturn);

    assert.strictEqual(hmacStub.callCount, 0);

    const expectedCommonArgs = [
      [
        'GET',
        '/markets',
      ],
    ];

    assert.deepEqual(commonStub.args, expectedCommonArgs);
    assert.strictEqual(commonStub.callCount, 1);
  });

  it('should call tickers', async () => {
    commonStub.returns({
      markets: 'tickers',
    });

    const resp: any = await markets.tickers();

    const expectedMockReturn = {
      markets: 'tickers',
    };

    assert.deepEqual(resp, expectedMockReturn);

    assert.strictEqual(hmacStub.callCount, 0);

    const expectedCommonArgs = [
      [
        'GET',
        '/tickers',
      ],
    ];

    assert.deepEqual(commonStub.args, expectedCommonArgs);
    assert.strictEqual(commonStub.callCount, 1);
  });

  it('should call ohlc without params', async () => {
    commonStub.returns({
      markets: 'ohlc',
    });

    const resp: any = await markets.ohlc('btcaud');

    const expectedMockReturn = {
      markets: 'ohlc',
    };

    assert.deepEqual(resp, expectedMockReturn);

    assert.strictEqual(hmacStub.callCount, 0);

    const expectedCommonArgs = [
      [
        'GET',
        '/ohlc',
        {
          market: 'btcaud',
          limit: 30,
          period: 1,
          timestamp: undefined,
        },
      ],
    ];

    assert.deepEqual(commonStub.args, expectedCommonArgs);
    assert.strictEqual(commonStub.callCount, 1);
  });

  it('should call ohlc with params', async () => {
    commonStub.returns({
      markets: 'ohlc',
    });

    const resp: any = await markets.ohlc('btcaud', 50, 15, 1541581502000);

    const expectedMockReturn = {
      markets: 'ohlc',
    };

    assert.deepEqual(resp, expectedMockReturn);

    assert.strictEqual(hmacStub.callCount, 0);

    const expectedCommonArgs = [
      [
        'GET',
        '/ohlc',
        {
          market: 'btcaud',
          limit: 50,
          period: 15,
          timestamp: 1541581502000,
        },
      ],
    ];

    assert.deepEqual(commonStub.args, expectedCommonArgs);
    assert.strictEqual(commonStub.callCount, 1);
  });

  it('should call orderbook without params', async () => {
    commonStub.returns({
      markets: 'orderbook',
    });

    const resp: any = await markets.orderbook('btcaud');

    const expectedMockReturn = {
      markets: 'orderbook',
    };

    assert.deepEqual(resp, expectedMockReturn);

    assert.strictEqual(hmacStub.callCount, 0);

    const expectedCommonArgs = [
      [
        'GET',
        '/orderbook',
        {
          market: 'btcaud',
          asks_limit: 20,
          bids_limit: 20,
        },
      ],
    ];

    assert.deepEqual(commonStub.args, expectedCommonArgs);
    assert.strictEqual(commonStub.callCount, 1);
  });

  it('should call orderbook with params', async () => {
    commonStub.returns({
      markets: 'orderbook',
    });

    const resp: any = await markets.orderbook('btcaud', 50, 25);

    const expectedMockReturn = {
      markets: 'orderbook',
    };

    assert.deepEqual(resp, expectedMockReturn);

    assert.strictEqual(hmacStub.callCount, 0);

    const expectedCommonArgs = [
      [
        'GET',
        '/orderbook',
        {
          market: 'btcaud',
          asks_limit: 50,
          bids_limit: 25,
        },
      ],
    ];

    assert.deepEqual(commonStub.args, expectedCommonArgs);
    assert.strictEqual(commonStub.callCount, 1);
  });

  it('should call trades without params', async () => {
    commonStub.returns({
      markets: 'trades',
    });

    const resp: any = await markets.trades('btcaud');

    const expectedMockReturn = {
      markets: 'trades',
    };

    assert.deepEqual(resp, expectedMockReturn);

    assert.strictEqual(hmacStub.callCount, 0);

    const expectedCommonArgs = [
      [
        'GET',
        '/trades',
        {
          market: 'btcaud',
          limit: 50,
          timestamp: undefined,
          from: undefined,
          to: undefined,
          order_by: 'desc',
        },
      ],
    ];

    assert.deepEqual(commonStub.args, expectedCommonArgs);
    assert.strictEqual(commonStub.callCount, 1);
  });

  it('should call trades with params', async () => {
    commonStub.returns({
      markets: 'trades',
    });

    const resp: any = await markets.trades('btcaud', 41, 1541581502000, 99, 2500, 'desc');

    const expectedMockReturn = {
      markets: 'trades',
    };

    assert.deepEqual(resp, expectedMockReturn);

    assert.strictEqual(hmacStub.callCount, 0);

    const expectedCommonArgs = [
      [
        'GET',
        '/trades',
        {
          market: 'btcaud',
          limit: 41,
          timestamp: 1541581502000,
          from: 99,
          to: 2500,
          order_by: 'desc',
        },
      ],
    ];

    assert.deepEqual(commonStub.args, expectedCommonArgs);
    assert.strictEqual(commonStub.callCount, 1);
  });

  it('should call tradesMy without params', async () => {
    hmacStub.returns({
      'X-Blockbid-Api-Key': 'MyApiKey',
      'X-Blockbid-Nonce': 1541581502000,
      'X-Blockbid-Signature': 'YWJjMTIz',
    });

    commonStub.returns({
      markets: 'trades',
    });

    const resp: any = await markets.tradesMy('btcaud');

    const expectedMockReturn = {
      markets: 'trades',
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
        '/trades/my',
        {
          market: 'btcaud',
          limit: 50,
          timestamp: undefined,
          from: undefined,
          to: undefined,
          order_by: 'desc',
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

  it('should call tradesMy with params', async () => {
    hmacStub.returns({
      'X-Blockbid-Api-Key': 'MyApiKey',
      'X-Blockbid-Nonce': 1541581502000,
      'X-Blockbid-Signature': 'YWJjMTIz',
    });

    commonStub.returns({
      markets: 'tradesMy',
    });

    const resp: any = await markets.tradesMy('btcaud', 41, 1541581502000, 99, 2500, 'desc');

    const expectedMockReturn = {
      markets: 'tradesMy',
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
        '/trades/my',
        {
          market: 'btcaud',
          limit: 41,
          timestamp: 1541581502000,
          from: 99,
          to: 2500,
          order_by: 'desc',
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
});
