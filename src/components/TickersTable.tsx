import React from "react";
import { useSelector } from "react-redux";
import Loading from "./loading/Loading";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import DataTable from "./DataTable";
import EmptyState from "./EmptyState/EmptyState";
import { TickerSlice } from "../app/redux/types";

function TickersTable() {
    const { loading, error, tickers } =  useSelector((state: TickerSlice) => state.ticker)
  
    return (
        <>
            { error}
            {error ? <ErrorMessage message={error} /> : null}
            {loading ? <Loading /> : <div>Please enter a value and fetch some data</div>}
            {Object.keys(tickers).includes('price') && Object.keys(tickers).includes('volume') ? <DataTable data={tickers} /> : <EmptyState />}
        </>
    );
}

export default TickersTable;
