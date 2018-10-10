import { BlockBid } from '../../src/index';

const bb = new BlockBid();

bb.apis().apiKeys('112233')
  .then(resp => {
    console.log(resp);
  })
  .catch(err => {
    console.log(err.message);
  });
