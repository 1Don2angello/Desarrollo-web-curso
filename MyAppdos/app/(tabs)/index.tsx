import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ThemedText } from '@/components/ThemedText';
import {Alumnos} from '../../components/Alumnos';
import {Materias} from '../../components/Materias';
import {Noticias} from '../../components/Noticias';
import {Eventos} from '../../components/Eventos';
import DataTimePicker from '../../components/DataTimePicker';
const Stack = createStackNavigator();

export default function HomeScreen() {
  return (
    <Stack.Navigator initialRouteName="Bienvenido">
      <Stack.Screen name='Bienvenido' component={ThemedText} /> 
      <Stack.Screen name='Alumnos'  component={Alumnos} />
      <Stack.Screen name='Materias'  component={Materias} />
      <Stack.Screen name='Noticias'  component={Noticias} />
      <Stack.Screen name='Eventos'  component={Eventos} />
      <Stack.Screen name='DataTimePicker' component={DataTimePicker}/>
    </Stack.Navigator>
  );

}



