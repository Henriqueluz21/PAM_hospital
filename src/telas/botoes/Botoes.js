import react from 'react';
import{ StyleSheet, View, Dimensions, Button} from 'react-native';
import { useFonts, Roboto_400Regular, Roboto_700Bold_Italic } from '@expo-google-fonts/roboto';


const width = Dimensions.get('screen').width;

export default function Botao({navigate, navigation}){
  
  return (
    <View style={estilos.container}>
        <View style={estilos.btn}>
          <Button 
          title='Marque sua consulta '
          onPress={() => navigation.navigate('Consulta')}/>
        </View>
        <View style={estilos.btn}>
          <Button 
          title='Página Inicial'
          onPress={() => navigation.goBack()}/>
        </View>
    </View>
  );  
}

const estilos = StyleSheet.create({
      btn:{
        width:'80%',
        marginTop:20,
        marginRight: 'auto',
        marginLeft: 'auto',
      },


})

