import react from 'react';
import{ StyleSheet, Image, View, Dimensions,} from 'react-native';

const width = Dimensions.get('screen').width;

export default function Cabecalho({logo}){
    return <>
    <View style={estilos.container}>
      <Image source={logo} style={estilos.logo}/>
    </View>
    </>
}

const estilos = StyleSheet.create({
    logo: {
        width: '100%',
        height: 950/1600 * width,
        marginTop: 0,
      },
      container:{
        width: '100%',
      }

})


