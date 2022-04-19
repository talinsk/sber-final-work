import React, {useState} from 'react';
import './index.css';

const Search = () => {
  const [val, updateVal] = useState("tralala");
  const changeText = (e) => {
    updateVal(e.target.value);
  }
  return (
    <form className="searchWrap">
      <input placeholder="Search for Item..." type="text" value={val} onInput={changeText}/>
      <button className="searchWrapButton">
          <i className="fas fa-search"></i>
      </button>
    </form>
  )
}

export default Search;