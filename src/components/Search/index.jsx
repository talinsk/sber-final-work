import React, {useState} from 'react';
import './index.css';

const Search = ({initSearchText, searchCallback}) => {
  const [val, updateVal] = useState(initSearchText);
  const changeText = (e) => {
    updateVal(e.target.value);
  }
  return (
    <form className="searchWrap">
      <input placeholder="Search for Item..." type="text" value={val} onInput={changeText}/>
      <button className="searchWrapButton" onClick={() => searchCallback(val)} type="button">
          <i className="fas fa-search"></i>
      </button>
    </form>
  )
}

export default Search;