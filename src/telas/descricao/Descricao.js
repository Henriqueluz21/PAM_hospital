import react from 'react';
import{ StyleSheet, Image, View, Dimensions} from 'react-native';


const width = Dimensions.get('screen').width;

export default function Descricao({topo}){
    return <>
    <View style={estilos.container}>
        <Image source={topo} style={estilos.imgBaixo}/>
    </View>
    </>
}

const estilos = StyleSheet.create({
      imgBaixo:{
        marginTop: 10,
        marginBottom: 10,
        width: 80,
        height: 100,
        marginRight: 'auto',
        marginLeft: 'auto'
      },
      container:{
        width: '100%',
      }
})

