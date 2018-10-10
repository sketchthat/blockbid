[![Build Status](https://travis-ci.org/sketchthat/blockbid.svg?branch=master)](https://travis-ci.org/sketchthat/blockbid) [![Coverage Status](https://coveralls.io/repos/github/sketchthat/blockbid/badge.svg?branch=master)](https://coveralls.io/github/sketchthat/blockbid?branch=master)
![Dependencies](https://david-dm.org/sketchthat/blockbid.svg)

# BlockBid Australia Wrapper

Typescript / Node wrapper for the APIs offered by [BlockBid Australia](https://blockbid.com.au)

## Setup

Install the dependancies with npm / yarn.

```
npm install blockbid --save
```

### API Key

TODO

## Usage

The API wrapper exposes several classes, `Accounts`, `Apis`, `Deposits`, `Markets`, `Orders` and `Withdraws`. Each class has methods for each API Endpoint as specified in the [BlockBid API Documentation](https://docs.blockbid.io/).

### Exposed Functions

Authentication is required for some functions within each class. When requesting public end-points API Keys aren't required.

- `Accounts` methods are within [`accounts.ts`](https://github.com/sketchthat/blockbid/blob/master/src/accounts.ts)
- `Apis` methods are within [`apis.ts`](https://github.com/sketchthat/blockbid/blob/master/src/apis.ts)
- `Deposits` methods are within [`deposits.ts`](https://github.com/sketchthat/blockbid/blob/master/src/deposits.ts)
- `Markets` methods are within [`markets.ts`](https://github.com/sketchthat/blockbid/blob/master/src/markets.ts)
- `Orders` methods are within [`orders.ts`](https://github.com/sketchthat/blockbid/blob/master/src/orders.ts)
- `Withdraws` methods are within [`withdraws.ts`](https://github.com/sketchthat/blockbid/blob/master/src/withdraws.ts)


### Example

Examples for usage of each function can be found within the [examples folder]
(https://github.com/sketchthat/blockbid/tree/master/examples).

```typescript
import { BlockBid } from 'blockbid';

// Public Method
const bb = new BlockBid();

bb.orders().markets()
  .then(resp => {
    console.log(resp);
  })
  .catch(err => {
    console.error(err.message);
  });

// Private Method
const bbPrivate = new BlockBid('MyApiKey', 'MyApiSecret');

bbPrivate.orders().order(112233)
  .then(resp => {
    console.log(resp);
  })
  .catch(err => {
    console.error(err.message);
  });
```


