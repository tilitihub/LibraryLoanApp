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
import { View, TextInput, Button } from 'react-native';
import pool from './pool';

const UserProfile = ({ profile, setProfile }) => {
    const updateProfile = async () => {
        try {
            const conn = await pool.getConnection();
            const result = await conn.query(
                "UPDATE users SET name = ?, email = ? WHERE id = ?",
                [profile.name, profile.email, profile.id]
            );
            conn.end();
            console.log("Profile updated successfully:", result);
        } catch (error) {
            console.error("Error updating profile:", error);
        }
    };

    return (
        <View>
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={text => setProfile({ ...profile, name: text })}
                value={profile.name}
                placeholder="Name"
            />
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={text => setProfile({ ...profile, email: text })}
                value={profile.email}
                placeholder="Email"
            />
            <Button title="Update Profile" onPress={updateProfile} />
        </View>
    );
};

export default UserProfile;