import React from "react";
import { useSelector } from "react-redux";
import { TickerSlice } from "../app/redux/tickerSlice";
import Loading from "./Loading";
import ErrorMessage from "./ErrorMessage";

function TickersTable() {
    const { loading, error, tickers } =  useSelector((state: TickerSlice) => state.ticker)
  
    return (
        <>
            {error ? <ErrorMessage /> : null}
            {loading ? <Loading /> : <div>Please enter a value and fetch some data</div>}
            {JSON.stringify(tickers)}
        </>
    );
}

export default TickersTable;
