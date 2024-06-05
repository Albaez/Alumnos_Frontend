import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button, Text, View } from 'react-native';

interface Alumno {
  nombre: string;
  apellido: string;
  asignatura: string;
  // otras propiedades del alumno
}

const AlumnoDetailScreen = () => {
  const navigation = useNavigation();
  const alumno: Alumno = {
    nombre: 'Nombre del alumno',
    apellido: 'Apellido del alumno',
    asignatura: 'Asignatura del alumno',
    // otras propiedades del alumno
  };

  const handleEditar = () => {
    console.log('Se ha modificado exitosamente');
  };

  const handleEliminar = () => {
    console.log('Se ha eliminado exitosamente');
  };

  return (
    <View>
      <Text>Nombre: {alumno.nombre}</Text>
      <Text>Apellido: {alumno.apellido}</Text>
      <Text>Asignatura: {alumno.asignatura}</Text>
      <Button title="Editar" onPress={handleEditar} />
      <Button title="Eliminar" onPress={handleEliminar} />
      <Button title="Volver" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default AlumnoDetailScreen;