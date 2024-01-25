import React, { ChangeEvent, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { getTickers } from "../app/redux/tickerSlice";
import TickersTable from "./TickersTable";

function TickersView() {
    const [searchText, setSearchText] = useState<string>("")
    const isInputValid = useMemo(() => searchText.trim() !== "", [searchText])
    const dispatch = useDispatch()

    const searchTickers = () => {
        dispatch(getTickers())
    }

    const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchText(event.target.value);
    };
    return (
        <div>
            <label htmlFor="tickerKey">Please enter ticker key(Example: AAPL):</label>
            <input type="text" id="tickerKey" name="tickerKey" onChange={handleOnChange} required />
            <button type="button" onClick={searchTickers} disabled={!isInputValid}>Search!</button>
            <TickersTable />
        </div>
    );
}

export default TickersView;
