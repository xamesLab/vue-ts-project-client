import { CandleChartInterval_LT, CandleChartResult, Binance } from "binance-api-node";
import { binanceClient } from "../../../shared/binance-client";

export interface ICandleProp {
    symbol: string;
    interval: CandleChartInterval_LT;
    limit?: number
}

class BinanceCandles {
    client: Binance

    constructor(client: Binance) {
        this.client = client
    }

    async fetchCandles({symbol, interval, limit}: ICandleProp) {
        const response: CandleChartResult[] = await this.client.futuresCandles({
            symbol,
            interval,
            limit: limit || 100
        })

        return response
    }
}

export const binanceCandles = new BinanceCandles(binanceClient)