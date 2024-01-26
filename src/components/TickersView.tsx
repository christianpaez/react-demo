import React, { ChangeEvent, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import TickersTable from "./TickersTable";
import { fetchTickers, fetchTickersError } from "../app/redux/TickerSlice";
import { AppDispatch } from "../app/redux/Store";

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
        <div>
            <label htmlFor="tickerKey">Please enter ticker key(Example: AAPL):</label>
            <input type="text" id="tickerKey" name="tickerKey" onChange={handleOnChange} required />
            <button type="button" onClick={searchTickers} disabled={!isInputValid}>Search!</button>
            <label>
        <input
          type="checkbox"
          checked={simulateError}
          onChange={() => setSimulateError(!simulateError)}
        />
        Simulate API Error
      </label>

            <TickersTable />
        </div>
    );
}

export default TickersView;
