import React, { useState } from 'react';
import search from '../assets/search.svg';
import { Paper } from '@mui/material';

const Search = () => {

    const data = ["React", "Next", "AWS"];

    const [filteredList, setFilteredList] = useState();
    const filterBySearch = (event) => {
        const query = event.target.value;
        var updatedList = [...data];
        updatedList = updatedList.filter((item) => {
            return item.toLowerCase().indexOf(query.toLowerCase()) !== -1;
        });

        setFilteredList(updatedList);
    };
    return (
        <div>
            <div class="flex bg-gray-100 p-1 rounded-md items-center gap-1">
                <img src={search} alt="search" class="w-5" />
                <input
                    type="text"
                    placeholder="Search..."
                    class="focus:outline-none bg-gray-100 text-gray-500"
                    onChange={filterBySearch}
                />
            </div>
            {filteredList &&
                <div>
                    <Paper elevation={2} sx={{padding:"3px"}}>
                        <ol>
                            {filteredList.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ol>
                    </Paper>
                </div>
            }
        </div>
    )
}

export default Search