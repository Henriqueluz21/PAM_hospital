import react from 'react';
import{ StyleSheet, Image, View, Text, Dimensions, ScrollView, TextInput, Button} from 'react-native';
import { useFonts, Roboto_400Regular, Roboto_700Bold_Italic} from '@expo-google-fonts/roboto';


const width = Dimensions.get('screen').width;
import Baixo from "../../assets/topo.png"
import logo from "../../assets/logo.png"


export default function Cadastro({navigation}){
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
        <View>
          <Image source={logo} style={estilos.logo}/>
        </View>
        <View style={estilos.meio}>
          <Text style={estilos.meioTexto}>"Em nome de toda a equipe do Deckel, gostaríamos de expressar nossa profunda gratidão pela confiança que você depositou em nossos serviços de saúde. Agradecemos sinceramente por escolher o nosso hospital para receber cuidados médicos.
          Nosso compromisso é fornecer atendimento de qualidade, com dedicação e respeito, visando sua saúde e bem-estar. Valorizamos imensamente a oportunidade de cuidar de você e estamos empenhados em oferecer o melhor tratamento possível."</Text>
        </View>

          <View>
            <Button 
            title='Voltar'
            onPress={() => navigation.navigate("Home")}/>
          </View>
          <View style={estilos.fundoFooter}>   
            <Text style={estilos.footer}> "O Pronto Atendimento clínica médica do Hospital Presidente funciona 24 horas, Pronto Atendimento Ortopedia das 7:00 às 19:00 hs. iariamente, inclusive sábados, domingos e feriados. Em caso de dúvidas, ligue para o telefone (11) 2261-6611."</Text>
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
        width: '99%',
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
        width: '100%',
        backgroundColor: '#1370ad',
        borderRadius: 8,
        marginTop: 30,
        marginLeft: 'auto',
        marginRight: 'auto'
      },
      logo: {
        width: '100%',
        height: 950/1600 * width,
        marginTop: 0,
      },
      footer:{
        textAlign:'center',
        margin: 15,
        width:'90%',
        fontSize: 13,
        color: '#fff',
        fontFamily: 'RobotoRegular'
      },
      fundoFooter:{
        width: '100%',
        backgroundColor: '#043863',
        marginTop: 40
      },
      meio:{
        width: '90%',
        marginLeft: 17,
      },
      meioTexto:{
        textAlign: 'center'
      }
})


