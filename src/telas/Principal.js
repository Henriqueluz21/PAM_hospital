import react from 'react';
import { StyleSheet, View, ScrollView, Button} from 'react-native';


import Cabecalho from '../telas/cabecalho/Cabecalho';
import NomeLoja from '../telas/nomeLoja/NomeLoja';
import Descricao from '../telas/descricao/Descricao';
import Botao from '../telas/botoes/Botoes';
import Rodape from '../telas/rodape/Rodape';

export default function Principal( { topo, logo, principal, rodape, navigation } ) {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Cabecalho {...logo}/>
        <NomeLoja {...principal} />  
          <View style={styles.botao}>
            <Button 
            title='Consulta'
            onPress={() => navigation.navigate('Consulta')}/>
          </View>
          <View style={styles.botao2}>
            <Button 
            title='Exame'
            onPress={() => navigation.navigate('Exame')}/>
          </View>
        <Rodape {...rodape}/>
        <Descricao {...topo}/>
          
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2faff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  botao:{
    marginTop: 50,
    width: '95%',
    marginLeft: 10
  },
  botao2:{
    marginTop: 10,
    width: '95%',
    marginLeft: 10
  }
});
