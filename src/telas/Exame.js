import react from 'react';
import{ StyleSheet, Image, View, Text, Dimensions, ScrollView, TextInput, Button} from 'react-native';
import { useFonts, Roboto_400Regular, Roboto_700Bold_Italic} from '@expo-google-fonts/roboto';


const width = Dimensions.get('screen').width;
import Baixo from "../../assets/topo.png"


export default function Exames({navigation}){
  const [fonteLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold_Italic
  })


if(!fonteLoaded) {
  return null;
}
    return <>
    <View style={estilos.container}>
      <ScrollView>
          <Text style={estilos.title}>Agende seu Exame!</Text>
          <Text style={estilos.text}>
                O Hospital Presidente atende diversas especialidades ambulatoriais, possui Pronto 
                Atendimento Adulto e Infantil de urgência e emergência 24 horas.
          </Text>
        <View style={estilos.fundo}>
          <Text style={estilos.subTitle}>Nome:</Text>
          <TextInput
            placeholder='Nome'
            style={estilos.input}
          />
          <Text style={estilos.subTitle}>Celular:</Text>
          <TextInput
            placeholder="Celular"
            style={estilos.input}
          />
          <Text style={estilos.subTitle}>CPF:</Text>
          <TextInput
            placeholder="CPF"
            style={estilos.input}
          />
          <Text style={estilos.subTitle}>Email:</Text>
          <TextInput 
            placeholder="Email"
            style={estilos.input}
          />
          
          <Text style={estilos.subTitle}>Tipo do Exame:</Text>
          <TextInput 
            placeholder="Tipo do Exame"
            style={estilos.input}
          />
        </View>
        <View>
          <View style={estilos.btn}>
            <Button title='Confirmar' 
            onPress={() => navigation.navigate('Agradecimento')}/>
          </View>
          <View style={estilos.btn}>
            <Button 
            title='Voltar'
            onPress={() => navigation.goBack()}/>
          </View>
        </View>
        <Image source={Baixo} style={estilos.imgBaixo}/>  
      </ScrollView>
    </View>
    </>;
}

const estilos = StyleSheet.create({
      container:{
        display: 'flex',
        justifyContent: 'center',
        flex: 1
      },
      title:{
        fontSize: 40,
        marginTop: 20,
        color: '#1370ad',
        fontFamily: 'Roboto_700Bold_Italic',
        textAlign: 'center'
      },
      text:{
        fontSize: 20,
        marginTop: 17,
        fontFamily: 'Roboto_400Regular',
        textAlign: 'center',
        marginLeft: 13,
        marginRight: 13,
        color: '#043863',
      },
      input:{
        width: '97%',
        height: 40,
        borderColor: '#1370ad',
        borderWidth: 1,
        borderRadius: 5,
        paddingLeft: 10,
      },
      select:{
        width: '10%',
        backgroundColor: '#000',
        height: 20
      },
      subTitle:{
        fontSize:17,
        fontFamily: 'Roboto_700Bold_Italic',
        marginTop: 24,
        color: '#1370ad',
      },
      imgBaixo:{
        marginTop: 20,
        width: 70,
        height: 80,
        marginLeft: 'auto',
        marginRight: 'auto'
      },
      imgHp:{
        width: '100%',
        height: 200,
        marginTop: 17
      },
      btn:{
        width: '95%',
        backgroundColor: '#1370ad',
        borderRadius: 8,
        marginTop: 30,
        marginLeft: 'auto',
        marginRight: 'auto'
      },
      fundo:{
        marginLeft: 10
      }
})

