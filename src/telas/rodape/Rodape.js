import react from 'react';
import{ StyleSheet, View, Text, Dimensions, Button, ScrollView, Alert} from 'react-native';
import { useFonts, Roboto_400Regular, Roboto_700Bold_Italic } from '@expo-google-fonts/roboto';


const width = Dimensions.get('screen').width;
import Texto from "../../componentes/Texto";

export default function Rodape({footer}){
  const [fonteLoaded] = useFonts({
    "RobotoRegular" : Roboto_400Regular,
    "RobotoItalic" : Roboto_700Bold_Italic
  })

  if(!fonteLoaded) {
    return <View><Text>Erro!</Text></View>;
  }

    return <>
    <View style={estilos.container}>
        <ScrollView>
        <View style={estilos.fundoFooter}>   
          <Texto style={estilos.footer}> {footer} </Texto>
        </View>
        </ScrollView>
    </View>
    </>
}

const estilos = StyleSheet.create({
      fundoFooter:{
        width: '100%',
        backgroundColor: '#043863',
        marginTop: 40
      },
      footer:{
        textAlign:'center',
        margin: 15,
        width:'90%',
        fontSize: 13,
        color: '#fff',
        fontFamily: 'RobotoRegular'
      },

})

