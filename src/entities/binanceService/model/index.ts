import { defineStore } from 'pinia'
import { binanceCandles, ICandleProp } from '../api'

interface ICandleModel {
    candleList: object
}

export const useCandleModel = defineStore({
    id: 'candle',
  
    state: () => <ICandleModel> {
        candleList: {}
    },

    actions: {
        async fetchCandles(payload: ICandleProp): Promise<void> {
            const response = await binanceCandles.fetchCandles(payload)
            
            const formatResponse = response.map(i => {
                return {...i, close: Number(i.close), open: Number(i.open), low: Number(i.low), high: Number(i.close), volume: Number(i.volume)}
            })

            this.candleList = {[payload.symbol]: formatResponse}
        }
    },

    getters: {
        
    }
})