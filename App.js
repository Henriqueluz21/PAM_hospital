import { StyleSheet, View, ScrollView} from 'react-native';

import Principal from './src/telas/Principal';
import Consulta from './src/telas/Consulta'
import Cadastro from './src/telas/Cadastro'
import Exame from './src/telas/Exame'

import Conteudo from './src/mocks/conteudo';
import { StackView } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator>
        <Stack.Screen name='Home'>
          {(props) => <Principal {...props} {...Conteudo} />}
        </Stack.Screen>

        <Stack.Screen name='Consulta'>
          {(props) => <Consulta {...props} {...Conteudo} />}
        </Stack.Screen>

        <Stack.Screen name='Exame'>
          {(props) => <Exame {...props} {...Conteudo} />}
        </Stack.Screen>

        <Stack.Screen name='Cadastro'>
          {(props) => <Cadastro {...props} {...Conteudo} />}
        </Stack.Screen>
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2faff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
