/*
* File: ...
* Author: Tiliczki Tibor
* Copyright: 2024, Tiliczki Tibor
* Group: Szoft II-1-E
* Date: 2024-03-...
* Github: https://github.com/tilitihub/...
* Licenc: GNU GPL @ kopirájtkriptobájt
*/
import React from 'react';
import { View, Text, Button } from 'react-native';
import pool from './pool';

const BorrowedBooks = ({ borrowedBooks, borrowBook, returnBook }) => {
    return (
        <View>
            {borrowedBooks.map(book => (
                <View key={book.id}>
                    <Text>{book.title} - {book.author}</Text>
                    <Button title="Return Book" onPress={() => returnBook(book.id)} />
                </View>
            ))}
        </View>
    );
};

export default BorrowedBooks;