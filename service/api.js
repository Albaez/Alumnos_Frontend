const API_URL = 'http://localhost:3000/alumnos';

export const createAlumno = async (nombre, apellido, asignatura) => {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ nombre, apellido, asignatura }),
    });
    const newAlumno = await response.json();
    console.log('Alumno creado exitosamente');
    return newAlumno;
  } catch (error) {
    console.error(error);
    throw new Error('Error al crear el alumno');
  }
};

export const updateAlumno = async (alumnoId, nombre, apellido, asignatura) => {
  try {
    const response = await fetch(`${API_URL}/${alumnoId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ nombre, apellido, asignatura })
    });
    if (response.ok) {
      console.log('Alumno actualizado exitosamente');
    } else {
      throw new Error('Error al actualizar el alumno');
    }
  } catch (error) {
    console.error('Error al actualizar el alumno:', error);
    throw new Error('Error al actualizar el alumno');
  }
};

export const getAlumnos = async () => {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error al obtener los alumnos:', error);
    throw new Error('Error al obtener los alumnos');
  }
};

export const deleteAlumno = async (alumnoId) => {
  try {
    const response = await fetch(`${API_URL}/${alumnoId}`, {
      method: 'DELETE',
    });
    if (response.ok) {
      console.log('Alumno eliminado exitosamente');
    } else {
      throw new Error('Error al eliminar el alumno');
    }
  } catch (error) {
    console.error('Error al eliminar el alumno:', error);
    throw new Error('Error al eliminar el alumno');
  }
};