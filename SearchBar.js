/*
* File: ...
* Author: Tiliczki Tibor
* Copyright: 2024, Tiliczki Tibor
* Group: Szoft II-1-E
* Date: 2024-03-...
* Github: https://github.com/tilitihub/...
* Licenc: GNU GPL @ kopirájtkriptobájt
*/
import React, { useState, useEffect } from 'react';
import { TextInput } from 'react-native';
import pool from './pool';

const SearchBar = ({ search, setSearch }) => {
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        if (search) {
            // Itt implementálhatod a keresési logikát, például egy adatbázis lekérdezést
            // a keresési szöveg alapján, és frissítheted a searchResults állapotot az eredményekkel.
        } else {
            setSearchResults([]);
        }
    }, [search]);

    return (
        <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={text => setSearch(text)}
            value={search}
            placeholder="Search books"
        />
    );
};

export default SearchBar;