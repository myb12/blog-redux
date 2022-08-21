import React, { useEffect, useState } from 'react';
import searchImg from '../assets/images/search.svg';
import { useDispatch } from 'react-redux';
import { searchAction } from '../redux/blogs/actions';

const Search = () => {
    const [searchText, setSearchText] = useState('');
    const dispatch = useDispatch();


    useEffect(() => {

        if (searchText === '') {
            dispatch(searchAction(null));
        };

        if (searchText.length > 3) {
            dispatch(searchAction(searchText));
        };

    }, [searchText]) //eslint-disable-line

    const handleSearchChange = (e) => {
        setSearchText(e.target.value);
    };


    return (
        <div
            className="border mt-6 border-slate-200 flex items-center w-11/12 lg:w-1/2 mx-auto bg-gray-50 h-12 px-5 rounded-lg text-sm ring-emerald-200"
        >
            <input
                onChange={handleSearchChange}
                className="outline-none border-none bg-gray-50 h-full w-full mr-2"
                type="search"
                name="search"
                placeholder="Search"
                value={searchText}
            />
            <img
                className="inline h-6 cursor-pointer"
                src={searchImg}
                alt="Search"
            />
        </div>
    );
};

export default Search;