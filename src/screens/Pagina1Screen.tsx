import { DrawerScreenProps } from '@react-navigation/drawer';
import React, { useEffect } from 'react';
import { Button, Text, TouchableOpacity, View } from 'react-native';


import { styles } from '../theme/appTheme';


//Navegacion a traves de los Props - Mas Eficiente
interface Props extends DrawerScreenProps<any, any> { };

export const Pagina1Screen = ({ navigation }: Props) => {

  useEffect(() => {
    navigation.setOptions({
      headerLeft:() =>{
         return <Button
          title="Menu"
          onPress={() => navigation.toggleDrawer()} />;
      }
    })
  }, []);
  
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Pagina1 Screen</Text>
      <Button title="Ir Pagina2" onPress={() => navigation.navigate('Pagina2Screen')} />
      <Text style = {{
        marginVertical:20,
        fontSize:20,
        marginLeft:5
        
        }}>Navegar con Argumentos</Text>
      {/* Enviar informacion a traves de los  botones */}

      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity style={{
          ...styles.botonGrande,
          backgroundColor:'blue'
          }
        }
          onPress={() => navigation.navigate('PersonaScreen', {
            id: 1,
            nombre: 'Pedro'
          })}
        >
          <Text style={styles.botonGrandeTexto}>Pedro</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{
          ...styles.botonGrande,
          backgroundColor:'#FF9427'
          }
        }
          onPress={() => navigation.navigate('PersonaScreen', {
            id: 2,
            nombre: 'Itxaso'
          })}
        >
          <Text style={styles.botonGrandeTexto}>Itxaso</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
};
