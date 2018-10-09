import { BlockBid } from '../../src/index';

const bb = new BlockBid();

bb.markets().trades('btcaud', 5)
  .then(resp => {
    console.log(resp);
  })
  .catch(err => {
    console.log(err.message);
  });

bb.markets().trades('btcaud')
  .then(resp => {
    console.log(resp);
  })
  .catch(err => {
    console.log(err.message);
  });
