import { BlockBid } from '../../src/index';

const bb = new BlockBid();

bb.markets().markets()
  .then(resp => {
    console.log(resp);
  })
  .catch(err => {
    console.log(err.message);
  });
