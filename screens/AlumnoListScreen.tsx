import React, { useEffect, useState } from 'react';
import { Button, Text, View } from 'react-native';
import { deleteAlumno, getAlumnos } from '../service/api.js';

interface Alumno {
  id: string;
  nombre: string;
  apellido: string;
  asignatura: string;
  // otras propiedades del alumno
}

const AlumnoListScreen = () => {
  const [alumnos, setAlumnos] = useState<Alumno[]>([]);

  useEffect(() => {
    const fetchAlumnos = async () => {
      try {
        const data = await getAlumnos();
        setAlumnos(data);
      } catch (error) {
        console.error('Error al obtener los alumnos:', error);
      }
    };

    fetchAlumnos();
  }, []);

  const handleDeleteAlumno = async (alumnoId: string) => {
    try {
      await deleteAlumno(alumnoId);
      const updatedAlumnos = alumnos.filter((alumno) => alumno.id !== alumnoId);
      setAlumnos(updatedAlumnos);
      console.log('Alumno eliminado exitosamente');
    } catch (error) {
      console.error('Error al eliminar el alumno:', error);
    }
  };

  const handleVerDetalle = (alumnoId: string) => {
    const alumno = alumnos.find((alumno) => alumno.id === alumnoId);
    if (alumno) {
      console.log('Nombre:', alumno.nombre);
      console.log('Apellido:', alumno.apellido);
      console.log('Asignatura:', alumno.asignatura);
    }
  };

  return (
    <View>
      {alumnos.map((alumno) => (
        <View key={alumno.id}>
          <Text>Nombre: {alumno.nombre}</Text>
          <Text>Apellido: {alumno.apellido}</Text>
          <Button title="Ver Detalle" onPress={() => handleVerDetalle(alumno.id)} />
          <Button title="Eliminar" onPress={() => handleDeleteAlumno(alumno.id)} />
        </View>
      ))}
    </View>
  );
};

export default AlumnoListScreen;