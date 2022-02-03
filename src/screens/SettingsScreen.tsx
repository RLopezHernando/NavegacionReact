import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles, colores } from '../theme/appTheme';
import { AuthContext } from '../context/AuthContext';
import Icon from 'react-native-vector-icons/Ionicons';



export const SettingsScreen = () => {

    const { authState } = useContext(AuthContext);


    //Estos insets sirven para IOS y es para que no nos queden imperfecciones en la vista por el noch
    //En android no se utiliza

    const insets = useSafeAreaInsets();
    return (
        <View style={{
            ...styles.globalMargin,
            marginTop: insets.top + 20
        }

        }>
            <Text style={styles.title}>Settings Screen</Text>
            <Text>{JSON.stringify(authState, null, 4)}</Text>

            {
                authState.favoriteIcon && (
                    <Icon
                        name={authState.favoriteIcon}
                        size={150}
                        color={colores.primary}


                    />
                )
            }

        </View>

    )
};
