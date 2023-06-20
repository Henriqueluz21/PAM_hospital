import react from 'react';
import{ StyleSheet, View, Text, Dimensions, Button, ScrollView, Alert} from 'react-native';
import { useFonts, Roboto_400Regular, Roboto_700Bold_Italic } from '@expo-google-fonts/roboto';


const width = Dimensions.get('screen').width;
import Texto from "../../componentes/Texto";

export default function NomeLoja( { titulo, desc }){
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
        <Texto style={estilos.titulo1}>{ titulo }</Texto>
        <Texto style={estilos.desc1}>{ desc }</Texto>
        </ScrollView>
    </View>
    </>
}

const estilos = StyleSheet.create({
      titulo1: {
        textAlign:'center',
        width:'100%',
        fontSize: 40,
        color: '#043863',
        marginBottom: 0,
        fontFamily:'RobotoItalic',
      },

      desc1:{
        textAlign:'center',
        margin: 15,
        width:'90%',
        fontSize: 20,
        color: '#1370ad',
        fontFamily: 'RobotoRegular'
      },
      btn:{
        width:'80%',
        marginTop:20,
        marginRight: 'auto',
        marginLeft: 'auto',
      },
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
      container:{
        width: '100%',
      }


})

