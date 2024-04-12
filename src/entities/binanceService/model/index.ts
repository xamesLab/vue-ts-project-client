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
            this.candleList = {[payload.symbol]: response}
        }
    },

    getters: {
        
    }
})