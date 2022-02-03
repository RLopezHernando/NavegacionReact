import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { AlbumScreen } from '../screens/AlbumScreen';
import { ChatScreen } from '../screens/ChatScreen';
import { ContactsScreen } from '../screens/ContactsScreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colores } from '../theme/appTheme';
import { Text } from 'react-native';

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {


    const { top: paddingTop } = useSafeAreaInsets();
    return (
        <Tab.Navigator
            style={{ padding: paddingTop }}
            sceneContainerStyle={{
                backgroundColor: 'white'
            }}
            tabBarOptions={{
                pressColor: colores.primary,
                showIcon: true,
                indicatorStyle: {
                    backgroundColor: colores.primary
                },
                style: {
                    elevation: 0,
                    borderTopWidth: 0
                },
            }}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color }) => {
                    let iconName: string = '';
                    switch (route.name) {
                        case 'Chat':
                            iconName = 'Ch'
                            break;
                        case 'Contacts':
                            iconName = 'Co'
                            break;
                        case 'Albums':
                            iconName = 'Al'
                            break;
                    }

                    return <Text style={{ color }}>{iconName}</Text>
                }

            })}
        >
            <Tab.Screen name="Album Screen" component={AlbumScreen} />
            <Tab.Screen name="Chat Screen" component={ChatScreen} />
            <Tab.Screen name="Contacts Screen" component={ContactsScreen} />
        </Tab.Navigator>
    );
}