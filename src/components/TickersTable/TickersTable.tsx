import React from "react";
import { useSelector } from "react-redux";
import Loading from "../loading/Loading";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import DataTable from "../DataTable/DataTable";
import EmptyState from "../EmptyState/EmptyState";
import { TickerSlice } from "../../app/redux/types";
import './TickersTable.css'

function TickersTable() {
    const { loading, error, tickers } =  useSelector((state: TickerSlice) => state.ticker)
  
    return (
        <>
            <div className="title">Please enter a value to fetch some data</div >
            {loading ? <Loading /> : null}
            {error ? <ErrorMessage message={error} /> : null}
            {!error && Object.keys(tickers).includes('price') && Object.keys(tickers).includes('volume') ? <DataTable data={tickers} /> : <EmptyState />}
        </>
    );
}

export default TickersTable;
