import React, { useState } from 'react';
import styled from 'styled-components';

const TituloForm = styled.form`
  display: flex;
  font-size: 60px;
  justify-content: center;
  margin-top: 50px;
  font-family: "Roboto";
  font-style: bolder;
  color: white;
`;
const Instruccion = styled.h1`
  display: flex;
  font-size: 20px;
  margin-top: 20px;
  font-family: "Roboto";
  font-style: normal;
  color: white;
  justify-content: center;
`;
const Texto = styled.h1`
  display: flex;
  font-size: 36px;
  font-family: "Roboto";
  font-style: bold;
  width: 959px;
  height: 70px;
  align-items: center;
  color: white;
  margin-top: -3px;
  margin: auto;
`;
const FormularioContainer = styled.form`
  display: flex;
  width: 1000px;
    flex-wrap: wrap;
    flex-direction: row;
    background-color: transparent;
    border: 3px solid #312f2f;
    margin-bottom: 60px;
    align-items: center;
    margin: auto;
    padding: 10px;
    margin-bottom: 25px;
`;
const Label = styled.h5`
  display: flex;
  width: 100px;
  flex-direction: row;
  flex-wrap: nowrap;
  font-size: 20px;
  font-family: "Roboto";
  font-style: normal;
  color: white;
  margin-top: 20px;
  justify-content: space-between;
  margin-bottom: 15px;
  padding: 25px;
`;
const Input = styled.input`
  display: flex;
  width: 345px;
  background-color: transparent;
  border: 3px solid #312f2f;
  height: 35px;
  border-radius: 7px;
  font-size: 20px;
  font-family: "Roboto";
  font-style: normal;
  font-family: "Source Sans Pro" sans-serif;
  font-size: 14px;
  color: white;
  margin-left: -15px;
`;
const Select = styled.select`
  display: flex;
  width: 250px;
  background-color: transparent;
  border: 3px solid #312f2f;
  height: 45px;
  border-radius: 7px;
  margin-bottom: 20px;
  color: white;
  font-size: 20px;
  font-family: "Roboto";
  font-style: normal;
  margin-top: 20px;
`;
const Option = styled.option`
 background-color: #141212; 
 color: #6b6b6b;
  font-family: "Source Sans Pro" sans-serif;
`;

const Textarea = styled.textarea`
  display: flex;
  justify-content: space-between;
  width: 450px;
  height: 130px;
  background-color: transparent;
  border: 3px solid #312f2f;
  resize: none;
  color: white;
  margin-right: 650px;
  border-radius: 7px;
  font-size: 20px;
  font-family: "Roboto";
  margin: auto;
  padding: 16px ;
  margin-left: 29px;
`;
  const Botones = styled.section`
  display: flex;
  justify-content: space-between;
  align-content: center;
  padding: 20px; 
  margin: auto;
  gap: 40px;
  font-family: "Source Sans Pro", sans-serif;
`;

const Enviar = styled.button`
  height: fixed;
  width: 150.13px;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  color: #0099ff; 
  background-color: black; 
  border: 2px solid #0099ff; 
  box-shadow: 2px 2px 10px rgba(0, 255, 255, 0.5);
  border-radius: 5px;
  border-style: solid;
  margin: auto;
  cursor: pointer;
  :hover {
    background-color: #0077cc; 
  }
  :active {
    background-color: #0055aa; 
  }
`;
const Limpiar = styled.button`
  height: fixed;
  width: 150.13px;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  color: #ffffff; 
  background-color: black;
  border: 2px solid #c3d5e1; 
  box-shadow: 2px 2px 10px rgba(214, 215, 215, 0.5);
  border-radius: 5px;
  border-style: solid;
  margin-right: 50px;
  cursor: pointer;
  :hover {
    background-color: #8b98a1; 
  }
  :active {
    background-color: #718497; 
  }
`;
const Error = styled.div`
  color: red;
  font-size: 14px;
  margin-top: 10px;
`;

const Formulario = () => {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);

  // Datos de formación
  const formacion = [
    { id: 1, url: "https://www.youtube.com/embed/PztCEdIJITY", formacion: "Front End" },
    { id: 2, url: "https://www.youtube.com/embed/GJfOSoaXk4s", formacion: "Front End" },
    { id: 3, url: "https://www.youtube.com/embed/rpvrLaBQwgg", formacion: "Front End" },
    { id: 4, url: "https://www.youtube.com/embed/t-iqt1b2qqk", formacion: "Back End" },
    { id: 5, url: "https://www.youtube.com/embed/cLLKVd5CNLc", formacion: "Back End" },
    { id: 6, url: "https://www.youtube.com/embed/EoPvlE85XAQ", formacion: "Back End" },
    { id: 7, url: "https://www.youtube.com/embed/vhwspfvI52k", formacion: "Innovacion y gestion" },
    { id: 8, url: "https://www.youtube.com/embed/YhR7Zp8NUzE", formacion: "Innovacion y gestion" },
    { id: 9, url: "https://www.youtube.com/embed/6N3OkLCfK-0", formacion: "Innovacion y gestion" },
  ];

  // Obtener categorías únicas
  const categoriasUnicas = [...new Set(formacion.map(url => url.formacion))];

  const handleClearForm = (e) => {
    setFormData({});
    e.preventDefault(); 
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (!formData.formacion || !formData.video) {
      setError('Por favor, complete todos los campos requeridos');
      return;
    }

    try {
      const respuesta = await fetch('http://localhost:3000/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await respuesta.json();

      if (respuesta.ok) {
        // Redirigir a la página de inicio o mostrar un mensaje de éxito
        alert('Tarjeta creada con éxito!');
      } else {
        setError(data.message || 'Hubo un error al crear la tarjeta');
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <TituloForm>NUEVO VIDEO</TituloForm>
      <Instruccion>Complete el formulario para crear una nueva tarjeta de video</Instruccion>
      <FormularioContainer onSubmit={handleSubmit}>
        <Texto>Crear Tarjeta</Texto>
        <Label htmlFor="categoria">Categoría</Label>
        <Select id="formacion" value={formData.formacion || ''} onChange={handleInputChange} required>
  <Option value="">Seleccione una categoría</Option>
  {categoriasUnicas.map((formacion, index) => (
    <Option key={index} value={formacion}>
      {formacion}
    </Option>
  ))}
</Select>
        <Label htmlFor="video">Video</Label>
        <Input type="text" id="video" value={formData.video || ''} onChange={handleInputChange} placeholder="Ingrese el enlace del video" required />
        <Botones>
          <Enviar type="submit">Enviar</Enviar>
          <Limpiar onClick={handleClearForm}>Limpiar</Limpiar>
        </Botones>
        {error && <Error>{error}</Error>}
      </FormularioContainer>
    </>
  );
};

export default Formulario;
