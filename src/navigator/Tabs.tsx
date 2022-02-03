import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';

import { Tab1Screen } from '../screens/Tab1Screen';
import { Tab2Screen } from '../screens/Tab2Screen';
import { Tab3Screen } from '../screens/Tab3Screen';
import { StackNavigator } from './StackNavigator';
import { colores, styles } from '../theme/appTheme';
import { Platform, Text } from 'react-native';
import { TopTabNavigator } from './TopTabNavigator';


export const Tabs = () => {
    return Platform.OS === 'ios'
        ? <TabsIOS />
        : <TabsAndroid />
}

const BottomTapAndroid = createMaterialBottomTabNavigator();

 const TabsAndroid = () => {
    return (
        <BottomTapAndroid.Navigator
            sceneAnimationEnabled= {true}
            barStyle = {{
                backgroundColor:colores.primary
            }}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, focused }) => {
                    let iconName: string = '';
                    switch (route.name) {
                        case 'Tab1Screen':
                            iconName = 'T1'
                            break;
                        case 'Tab2Screen':
                            iconName = 'T2'
                            break;
                        case 'StackNavigator':
                            iconName = 'St'
                            break;
                    }

                    return <Text style={{ color }}>{iconName}</Text>
                }

            })}

        >
            <BottomTapAndroid.Screen name="Tab1Screen" options={{ title: 'Tab 1' }} component={Tab1Screen} />
            <BottomTapAndroid.Screen name="TopTabNavigator" options={{ title: 'Tab 2' }} component={TopTabNavigator} />
            <BottomTapAndroid.Screen name="StackNavigator" options={{ title: 'Stack' }} component={StackNavigator} />
        </BottomTapAndroid.Navigator>
    );
}



const BottomTabIOS = createBottomTabNavigator();

const TabsIOS = () => {
    return (
        <BottomTabIOS.Navigator
            //Fondo de las Tabs o Pantalla
            sceneContainerStyle={{
                backgroundColor: 'white'
            }}
            //Zona de los Botones de las Tabs
            tabBarOptions={{
                activeTintColor: colores.primary,
                styles: {
                    borderTopColor: 'green',
                    elevation: 0,
                    borderTopWidth: 0
                },
                labelStyle: {
                    fontSize: 15
                }
            }}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, focused }) => {
                    let iconName: string = '';
                    switch (route.name) {
                        case 'Tab1Screen':
                            iconName = 'T1'
                            break;
                        case 'Tab2Screen':
                            iconName = 'T2'
                            break;
                        case 'StackNavigator':
                            iconName = 'St'
                            break;
                    }

                    return <Text style={{ color }}>{iconName}</Text>
                }

            })}

        >


            {/* Forma complicada para poner Icono en Tabs */}
            {/* <Tab.Screen name="Tab1Screen" options={
                { title: 'Tab 1',
                tabBarIcon:(props) => <Text style={{color:props.color}}>Tab1</Text> }}
                component={Tab1Screen} /> */}
            <BottomTabIOS.Screen name="Tab1Screen" options={{ title: 'Tab 1' }} component={Tab1Screen} />
            <BottomTabIOS.Screen name="TopTabNavigator" options={{ title: 'Tab 2' }} component={TopTabNavigator} />
            <BottomTabIOS.Screen name="StackNavigator" options={{ title: 'Stack' }} component={StackNavigator} />
        </BottomTabIOS.Navigator>
    );
}