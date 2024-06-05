import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Inicio from './component/Inicio';
import AlumnoAddScreen from './screens/AlumnoAddScreen';
import AlumnoDetailScreen from './screens/AlumnoDetailScreen';
import AlumnoListScreen from './screens/AlumnoListScreen';
const Tab = createBottomTabNavigator();

const App = () => {
    return (
        <NavigationContainer>

<Tab.Navigator
      initialRouteName="CRUD ALUMNOS"
    >
      <Tab.Screen
        name="CRUD ALUMNOS"
        component={Inicio}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Agregar Alumnos"
        component={AlumnoAddScreen}
        options={{
          tabBarLabel: 'Agregar',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="book-plus" color={color} size={26} />
          ),
        }}
      />
       <Tab.Screen
        name="Listar Alumnos"
        component={AlumnoListScreen}
        options={{
          tabBarLabel: 'Lista',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="book-plus" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Detalle Alumno"
        component={AlumnoDetailScreen}
        options={{
          tabBarLabel: 'Detalle',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="list-status" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>    




          
        </NavigationContainer>
    );
};

export default App;
