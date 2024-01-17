import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/Home';
import HorarioScreen from './screens/Horario';
import TareasPendientesScreen from './screens/TareasPendientes';
import EstudiosScreen from './screens/Estudios';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRoute="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Horario" component={HorarioScreen} />
        <Stack.Screen
          name="TareasPendientes"
          component={TareasPendientesScreen}
        />
        <Stack.Screen name="Estudios" component={EstudiosScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
