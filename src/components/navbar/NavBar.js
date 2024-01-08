import React from 'react'
import "./NavBar.css"
import { useDispatch, useSelector } from 'react-redux';
import { fetchResults } from '../../features/searchSlice';
import { useState } from 'react';
import { setDataAsResults } from '../../features/userPostSlice';

function NavBar() {
  const dispatch = useDispatch();
  const results = useSelector(state=> state.search.results);
  const [searchValue, setSearchValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchResults(searchValue)).then((action) => {
      const results = action.payload;
      dispatch(setDataAsResults(results));
      console.log(results)
    });
  };

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  
  return (
    <div className='flex'>
        <h1>RAGHHH</h1>
        <form onSubmit={handleSubmit} >
            <input type="Search" onChange={handleInputChange} className='search' ></input>
            <button className='search'>Search</button>
        </form>
    </div>
  )
}

export default NavBar