import React from 'react';
import { Button, Text, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { styles } from '../theme/appTheme';

interface Props extends StackScreenProps<any, any> { };

export const Pagina3Screen = ({ navigation }: Props) => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Pagina3 Screen</Text>
      <Button
        title="Regresar"
        //Pop --> LLeva a la pagina anterior del stack (Pagina2)
        onPress={() => navigation.pop()}
      />

      <Button
        title="Ir a Pagina 1"
        //PopToTop --> LLeva a la pagian inicial (Pagina1) del Stack y lo destruye
        onPress={() => navigation.popToTop()}
      />
    </View>
  )
};
