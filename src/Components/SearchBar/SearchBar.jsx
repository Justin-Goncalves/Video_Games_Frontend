import React, { useState } from 'react';

const SearchBar = ({getUserInput, userInput}) => {


    return ( 
        <form>
            <div>
                <label>Search</label>
                <input name={''} type='search' value={userInput} onChange={(event) => getUserInput(event)}/>
            </div>
        </form>
     );
}
 
export default SearchBar;