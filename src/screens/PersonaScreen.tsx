import { StackScreenProps } from '@react-navigation/stack';
import React, { useContext, useEffect } from 'react';
import { Text, View } from 'react-native';
import { RootStackParams } from '../navigator/StackNavigator';
import { styles } from '../theme/appTheme';
import { AuthContext } from '../context/AuthContext';

// interface RouteParams {
//     id:number;
//     nombre:string
// }

// interface Props extends StackScreenProps<any, any> { };
interface Props extends StackScreenProps<RootStackParams, 'PersonaScreen'> { };

export const PersonaScreen = ({ navigation, route }: Props) => {

    //const params = route.params as RouteParams;
    const params = route.params;
    const {changeUserName} = useContext(AuthContext);

    useEffect(() => {
        navigation.setOptions({
            title: params!.nombre
        })

    }, []);

    useEffect(() => {
        changeUserName(params.nombre);
    }, []);
    




    return (
        <View style={styles.globalMargin}>
            <Text
                style={styles.title}>
                {
                    JSON.stringify(params, null, 3)
                }
            </Text>
        </View>
    )
};
