import React, { useState } from 'react';
import { FormControlLabel, TextField, Checkbox, Button } from '@mui/material';

export function Formulario() {
  const [nombre, setNombre] = useState('');
  const [edad, setEdad] = useState('');
  const [esEstudiante, setEstudiante] = useState(false);
  const [direccion, setDireccion] = useState('');
  const [hobbies, setHobbies] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = { nombre, edad, esEstudiante, direccion, hobbies };
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Nombre"
        variant="outlined"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        fullWidth
      />
      <TextField
        label="Edad"
        type="number"
        variant="outlined"
        value={edad}
        onChange={(e) => setEdad(e.target.value)}
        fullWidth
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={esEstudiante}
            onChange={(e) => setEstudiante(e.target.checked)}
          />
        }
        label="Es estudiante"
      />
      <TextField
        label="Dirección"
        variant="outlined"
        value={direccion}
        onChange={(e) => setDireccion(e.target.value)}
        fullWidth
      />
      <TextField
        label="Hobbies"
        variant="outlined"
        value={hobbies}
        onChange={(e) => setHobbies(e.target.value)}
        fullWidth
      />
      <Button type="submit" variant="contained" color="primary">
        Enviar
      </Button>
    </form>
  );
}
