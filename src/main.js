const btcAPI = require('./functions/btc_api');



async function main() {
    rawmempool = await btcAPI.getrawmempool()
    rawtransaction = await btcAPI.getrawtransaction(rawmempool[0])
    console.log("-------------------rawmempool[0]",rawmempool[0])
    console.log("----------------------vin",rawtransaction.result.vin)
    console.log("----------------------vout",rawtransaction.result.vout)
}
main();