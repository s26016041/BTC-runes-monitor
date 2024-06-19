const axios = require('axios');
const config = require('../config/config');



exports.getrawmempool = () => {
    const postData = {
        method: "getrawmempool",
        params: [
            false
        ]
    };
    return axios.post(config.httpProvider, postData, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => {
            return response.data.result.slice(0, 7000);
        })
        .catch(error => {
            console.error('Error:', error);
        });
};

exports.getrawtransaction = (txid) => {
    const postData = {
        method: "getrawtransaction",
        "params": [
            txid,
            1
          ]
    };
    return axios.post(config.httpProvider, postData, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => {
            return response.data;
        })
        .catch(error => {
            console.error('Error:', error);
        });
};


