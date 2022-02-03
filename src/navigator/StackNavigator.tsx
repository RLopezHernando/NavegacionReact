import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import { Pagina1Screen } from '../screens/Pagina1Screen';
import { Pagina2Screen } from '../screens/Pagina2Screen';
import { Pagina3Screen } from '../screens/Pagina3Screen';
import { PersonaScreen } from '../screens/PersonaScreen';

//Estamos especificando los argumentos que se recibirarn por las rutas
// Vemos que las paginas no reciben nada
// Vemos que 'PersonaScreen' recibe un objeto con dos parametros cuales son y de que tipo

export type RootStackParams = {
    Pagina1Screen: undefined
    Pagina2Screen: undefined
    Pagina3Screen: undefined
    PersonaScreen: { id: number, nombre: string }
}
const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
    return (
        <Stack.Navigator
            //Propiedad para cambiar la pagina inicial de la navegacion
            //initialRouteName='Pagina2Screen'
            //headerStyle --> Quita la linea de arriba en la card o pagian en la que estamos 
            // cardStyle ---> Cada Pagina es una card , estilos de esa card. 
            //          ----> backgroundColor : Color de Fondo
            screenOptions={{
                headerStyle: {
                    elevation: 0
                },
                cardStyle: {
                    backgroundColor: 'white'
                }
            }
            }
        >
            <Stack.Screen name="Pagina1Screen" options={{ title: "Pagina 1" }} component={Pagina1Screen} />
            <Stack.Screen name="Pagina2Screen" options={{ title: "Pagina 2" }} component={Pagina2Screen} />
            <Stack.Screen name="Pagina3Screen" options={{ title: "Pagina 3" }} component={Pagina3Screen} />
            <Stack.Screen name="PersonaScreen" options={{ title: "Pagina Persona" }} component={PersonaScreen} />
        </Stack.Navigator>
    );

}