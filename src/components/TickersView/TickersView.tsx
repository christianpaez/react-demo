import React, { ChangeEvent, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import TickersTable from "../TickersTable/TickersTable";
import { fetchTickers, fetchTickersError } from "../../app/redux/TickerSlice";
import { AppDispatch } from "../../app/redux/Store";
import './TickersView.css'

function TickersView() {
    const [searchText, setSearchText] = useState<string>("")
    const [simulateError, setSimulateError] = useState<boolean>(false)
    const isInputValid = useMemo(() => searchText.trim() !== "", [searchText])
    const dispatch = useDispatch<AppDispatch>()

    const searchTickers = () => {
        if (simulateError) {
            dispatch(fetchTickersError());

        } else {


            dispatch(fetchTickers(searchText));
        }
    }

    const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchText(event.target.value);
    };
    return (
        <div className="container">
            <h1>Tickers!</h1>
                <label htmlFor="tickerKey">Please enter ticker key(Example: AAPL):</label>
            <div className="search-container">
                <input type="text" id="tickerKey" name="tickerKey" onChange={handleOnChange} required />
                <button type="button" onClick={searchTickers} disabled={!isInputValid}>Search!</button>
            </div>
            <div>
            </div>
            <div>
                <input
                    className="checkbox-input"
                    type="checkbox"
                    id="simulateError"
                    name="simulateError"
                        checked={simulateError}
                        onChange={() => setSimulateError(!simulateError)}
                    />
                <label htmlFor="simulateError" className="checkbox-label">
                    Simulate API Error
                </label>

            </div>
            <TickersTable />
        </div>
    );
}

export default TickersView;
