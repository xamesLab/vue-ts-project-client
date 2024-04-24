import Binance from 'binance-api-node'

// Authenticated client, can make signed calls
const binanceClientAuth = Binance({
    //   apiKey: 'xxx',
    //   apiSecret: 'xxx',
    //   getTime: 'xxx',
    })

export const clients = {
    binanceClient: Binance(),
}