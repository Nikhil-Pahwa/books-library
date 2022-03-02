import React, { useState } from 'react';

function Search({ searchedString }) {

    const [inputString, setInputString] = useState("");

    const searchChange = (e) => {
        setInputString(e.target.value);
        searchedString(e.target.value);
    }

    return (
        <input placeholder="Search here" onChange={searchChange} />
    );
}

export default Search;
