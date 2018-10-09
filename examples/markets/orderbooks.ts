import { BlockBid } from '../../src/index';

const bb = new BlockBid();

bb.markets().orderbook('btcaud', 5, 10)
  .then(resp => {
    console.log(resp);
  })
  .catch(err => {
    console.log(err.message);
  });
