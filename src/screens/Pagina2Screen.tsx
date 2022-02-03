import { useNavigation } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import React, { useEffect } from 'react';
import { Button, Text, View } from 'react-native';
import { styles } from '../theme/appTheme';

interface Props extends StackScreenProps<any, any> { };

export const Pagina2Screen = () => {

  //Navegacion mandando a llamar a Hook - Menos eficiente
  const navigator = useNavigation();

  useEffect(() => {
  
    //El headerBackTitle solo funciona en IOS
    navigator.setOptions({
      title:'Hola Mundo',
      headerBackTitle: 'Atras'
    })
  }, []);
  
  return (
      <View style = {styles.globalMargin}>
          <Text style={styles.title}>Pagina2 Screen</Text>
          <Button
            title="Ir Pagina 3"
            onPress={() => navigator.navigate('Pagina3Screen')}
          
          />
      </View>
  )
};
