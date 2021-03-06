import React, { useState } from 'react';
import { SearchBox } from '../../components/search-box/search-box';
import  {searchProduct}  from "../../store/actions/webDataInfo";
// import { useDispatch } from "react-redux";
import { useRouter } from 'next/router';
import { useCart } from "../../contexts/cart/use-cart";
import {useAppState, useAppDispatch } from "../../contexts/app/app.provider"



const Search = ({ onSubmit, ...props }) => {
  const [timeOut, setkeyTimeOut ] = useState(0);
  const { getSearchText } = useCart();
  const searchTerm = useAppState("searchTerm")
  const router = useRouter();
const dispatch = useAppDispatch();

   let myVar = 0;
  const handleOnChange = (e) => {
     const { value } = e.target;
    if (myVar) clearTimeout(myVar);
    // setTimeout(() => {
    //   // dispatch({ type: 'SET_SEARCH_TERM', payload: value });
    // }, 500);
     myVar = setTimeout(function(){ dispatch({ type: 'SET_SEARCH_TERM', payload: value }); }, 1000);
    window.scrollTo(0, 0);
    
  };

    
 
  return (
    <SearchBox
      // onEnter={onSearch}
      onChange={handleOnChange}
      // value={searchTerm}
      name="search"
      placeholder='Search your products from here'
      {...props}
    />
  );
};

export default Search;
