import React from 'react';
import "./Filter.css";
import file from "./new.svg"
import arrow from "./arrow.svg";
import { setFilter } from "../../features/userPostSlice"
import { useSelector, useDispatch } from 'react-redux';

function Filter() {

  const results = useSelector(state=> state.userposts.data)
  const dispatch = useDispatch();
  const filter = useSelector(state=> state.userposts.filter)
  
  const filterTop = () => {
    dispatch(setFilter("top"))
  }
  const filterNew = () => {
    dispatch(setFilter("new"))
    // console.log(filter)
  }
  // console.log(results)
  return (
    <div className='grid'>
        <div className='filter' onClick={filterNew}>
            <img src={file} alt="new" width="40px" height="40px"/>
            New</div>
        <div className='filter' onClick={filterTop}>
            <img src={arrow} alt="arrow"/>
            Top</div>
    </div>
  )
}

export default Filter