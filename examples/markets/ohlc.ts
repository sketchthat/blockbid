import { BlockBid } from '../../src/index';

const bb = new BlockBid();

bb.markets().ohlc('btcaud', 5, 60, 1516921200)
  .then(resp => {
    console.log(resp);
  })
  .catch(err => {
    console.log(err.message);
  });

bb.markets().ohlc('ethaud')
  .then(resp => {
    console.log(resp);
  })
  .catch(err => {
    console.log(err.message);
  });
