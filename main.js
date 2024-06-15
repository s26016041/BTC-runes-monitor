const axios = require('axios');
const parameters = require('./user_parameters');



async function test() {
    const latestBlockResponse = await  axios.get(parameters.RPC+'block-height/615615');
  

    console.log('New block detected:', latestBlockResponse.data);
}
test();