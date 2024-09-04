import React, { useState } from 'react'
import SearchModule from '../../components/Search/SearchModule';

const Search = ({ items }) => {
    const [searchTerm, setSearchTerm] = useState('');

    // Filter items based on the search term
    const filteredItems = items?.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="search__wrapper">

            <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
                <SearchModule searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                <ul style={{ listStyleType: 'none', padding: '0' }}>
                    {filteredItems?.map(item => (
                        <li key={item.id} style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>
                            {item.name}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};


export default Search
