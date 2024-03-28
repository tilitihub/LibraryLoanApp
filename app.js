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
import { View } from 'react-native';
import SearchBar from './SearchBar';
import UserProfile from './UserProfile';
import BorrowedBooks from './BorrowedBooks';
import pool from './db';

const App = () => {
 const [search, setSearch] = useState('');
 const [profile, setProfile] = useState({ name: '', email: '' });
 const [borrowedBooks, setBorrowedBooks] = useState([]);

 useEffect(() => {
    // lekérdezhetjük az adatokat az adatbázisból
    getBooks().then(books => {
        setBorrowedBooks(books);
    });
 }, []);

 // Könyvek kölcsönzési és visszaadási logika
 const borrowBook = (book) => {
    // implementálhatod a könyv kölcsönzési logikáját
    console.log("Kölcsönzés logikájának implementálása szükséges:", book);
 };

 const returnBook = (bookId) => {
    // implementálhatod a könyv visszaadásának logikáját
    console.log("Visszaadás logikájának implementálása szükséges:", bookId);
 };

 // aszinkron függvény a könyvek lekérdezésére
 async function getBooks() {
    try {
        const conn = await pool.getConnection();
        const rows = await conn.query("SELECT * FROM books");
        conn.end();
        return rows;
    } catch (error) {
        console.error("Error fetching books:", error);
        // További hibakezelés itt
    }
}

 return (
    <View>
      <SearchBar search={search} setSearch={setSearch} />
      <UserProfile profile={profile} setProfile={setProfile} />
      <BorrowedBooks borrowedBooks={borrowedBooks} borrowBook={borrowBook} returnBook={returnBook} />
    </View>
 );
};

export default App;
