import React, { ChangeEvent, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import TickersTable from "./TickersTable";
import { fetchTickers } from "../app/redux/tickerSlice";
import { AppDispatch } from "../app/redux/store";

function TickersView() {
    const [searchText, setSearchText] = useState<string>("")
    const isInputValid = useMemo(() => searchText.trim() !== "", [searchText])
    const dispatch = useDispatch<AppDispatch>()

    const searchTickers = () => {
        dispatch(fetchTickers(searchText));
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
