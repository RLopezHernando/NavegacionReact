import React, { useContext } from 'react';
import { Button, Text, View } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import { styles } from '../theme/appTheme';

export const AlbumScreen = () => {

    const { logOut, authState : {isLoggedIn} } = useContext(AuthContext);
    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>Album Screen</Text>
            {
                isLoggedIn && (
                    <Button title="LogOut" onPress={logOut} />
                )
            }

        </View >
    )
};