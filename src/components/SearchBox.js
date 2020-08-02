import React from 'react';

const SearchBox = ({searchField, searchChange}) => {
    return (
        <div className='pa1'>
            <input
                className='pa3 ba b--green bg-lightest-blue'
                type='Search' 
                placeholder='search robots'
                onChange={searchChange}
            />
        </div>
    )
};

export default SearchBox;