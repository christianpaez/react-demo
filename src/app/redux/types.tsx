export interface DataItem {
    high: number;
    low: number;
    average: number;
}
export interface TableData {
    price?: DataItem;
    volume?: DataItem;
}

export interface TickerState {
    tickers: TableData;
    loading: boolean;
    error: string | null;

}

export interface TickerSlice {
    ticker: TickerState

}