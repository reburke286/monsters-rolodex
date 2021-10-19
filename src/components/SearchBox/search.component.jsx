import React from 'react';
import './search.styles.css'

const SearchBox = ({placeholder, handleChange}) => {
    return (
        <input
        className="search"
        type="search"
        placeholder={placeholder}
        onChange={handleChange}
      ></input>
    )

}

export default SearchBox;