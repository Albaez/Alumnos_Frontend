import React, { useState } from 'react';
import { Button, Text, TextInput } from 'react-native';
import { createAlumno } from '../service/api.js';

const AlumnoAddScreen: React.FC = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [asignatura, setAsignatura] = useState('');

  const handleSubmit = async () => {
    try {
      if (nombre && apellido && asignatura) {
        await createAlumno(nombre, apellido, asignatura);
        setNombre('');
        setApellido('');
        setAsignatura('');
        console.log('Alumno creado exitosamente');
      }
    } catch (error) {
      console.error('Error al guardar el alumno:', error);
    }
  };

  return (
    <>
      <Text>Nombre:</Text>
      <TextInput value={nombre} onChangeText={setNombre} />
      <Text>Apellido:</Text>
      <TextInput value={apellido} onChangeText={setApellido} />
      <Text>Asignatura:</Text>
      <TextInput value={asignatura} onChangeText={setAsignatura} />
      <Button title="Guardar" onPress={handleSubmit} />
    </>
  );
};

export default AlumnoAddScreen;