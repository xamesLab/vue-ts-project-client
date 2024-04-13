import Binance from 'binance-api-node'

export const binanceClient = Binance()

// Authenticated client, can make signed calls
const binanceClientAuth = Binance({
//   apiKey: 'xxx',
//   apiSecret: 'xxx',
//   getTime: 'xxx',
})

//client.time().then(time => console.log(time))