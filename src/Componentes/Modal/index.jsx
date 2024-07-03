import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import axios from 'axios';
import Error from "../Error";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const theme = {
  "Front End": "#75d7f5",
  "Back End": "#00C86F",
  "Innovacion y gestion": "#FFBA05",
  default: "black",
};

const getFormacionColor = (formacion) => theme[formacion] || theme.default;

const TituloModal = styled.div`
  display: block;
  margin-bottom: 30px;
  font-size: 40px;
  font-weight: bold;
  font-family: "Roboto";
  font-style: bold;
`;
const IconoCerrar = styled.img`
  display: flex;
  margin-left: 460px;
  margin-top: -70px;
  height: 20px;
  width: 20px;
`;

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh; 
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: #03122f;
  color: #2271d1;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  width: 500px;
  margin: auto;
  animation: ${fadeIn} 0.5s;
  animation-fill-mode: forwards;
  display: block;
  flex-direction: column;
  font-size: 20px;
  font-family: "Roboto";
  box-shadow: 0 0 10px 3px #6bd1ff inset;
`;

const Form = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`;

const Button = styled.button`
  border: 1px solid; 
  cursor: pointer;
  font-size: 16px;
  color: white;
  padding: 10px 20px;
  margin: auto;
  margin-left: 100px;
  border-radius: 10px;
  box-shadow: 0 0 7px 6px #dde8f87e;
  background-color: transparent;
  &:hover {
    background-color: #1d192b;
  }
`;

const Label = styled.label`
  display: flex;
  margin-bottom: 2px;
  margin-top: 20px;
  font-weight: bold;
  color: #2271d1;
  font-size: 20px;
  font-family: "Source Sans Pro", sans-serif;
  margin-left: 65px;
`;

const Input = styled.input`
  display: flex;
  font-size: 15px;
  width: 350px;
  height: 33px;
  margin-left: 70px;
  border: 2px solid #2271d1;
  background-color: #03122f;
  margin-top: 2px;
  margin-bottom: 20px;
  border-radius: 7px;
  justify-content: center;
  color: white;
`;

const Select = styled.select`
  margin-top: 3px;
  background-color: #03122f;
  border: 2px solid #2271d1;
  color: white;
  width: 355px;
  height: 40px;
  font-family: "Source Sans Pro", sans-serif;
  font-size: 15px;
  margin-left: 70px;
  border-radius: 7px;
`;

const Option = styled.option`
  background-color: #1c1a21;
  color: #6b6969;
`;

const Botones = styled.section`
  display: flex;
  justify-content: space-between;
  align-content: center;
  margin: 70px;
  gap: 30px;
  margin-top: 59px;
  margin-bottom: 1px;
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
  margin: auto;
  cursor: pointer;
  &:hover {
    background-color: #0077cc;
  }
  &:active {
    background-color: #0055aa;
  }
`;

const Eliminar = styled.button`
  height: fixed;
  width: 150.13px;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  color: #ffffff;
  background-color: black;
  border: 2px solid #f80505;
  box-shadow: 2px 2px 10px rgba(214, 215, 215, 0.5);
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #ed0303d1;
  }
  &:active {
    background-color: #718497;
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
  margin-right: 50px;
  cursor: pointer;
  &:hover {
    background-color: #a18e8b;
  }
  &:active {
    background-color: #718497;
  }
`;

const formacion = [
  { id: 1, nombre: "Front End" },
  { id: 2, nombre: "Back End" },
  { id: 3, nombre: "Innovación y gestión" },
];

const Editar = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({});
  const [cardId, setCardId] = useState(null);
  const [error, setError] = useState(null);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchVideos();
  }, []);

  const handleOpenModal = (cardId) => {
    setShowModal(true);
    setCardId(cardId);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setFormData({});
  };

  const handleClearForm = () => {
    setFormData({});
  };

  const handleEditCard = async () => {
    setError(null);

    if (!formData.formacion || !formData.url) {
      setError('Por favor, complete todos los campos requeridos');
      return;
    }

    try {
      const response = await axios.put(`http://localhost:3000/${cardId}`, formData);
      const updatedCard = response.data;

      setVideos(prevVideos => prevVideos.map(video => (video.id === cardId ? updatedCard : video)));
      handleCloseModal();
      fetchVideos(); // Actualizar la lista de videos después de la edición
    } catch (error) {
      setError(error.message);
    }
  };

  const fetchVideos = async () => {
    try {
      const response = await axios.get('http://localhost:3000/');
      const videos = response.data;
      setVideos(videos);
    } catch (error) {
      console.error('Error fetching videos:', error);
    }
  };

  return (
    <>
        <Button onClick={handleOpenModal}>Editar</Button>
      {showModal && (
        <ModalContainer>
          <ModalContent>
            <TituloModal>EDITAR CARD</TituloModal>
            <IconoCerrar
              src="Iconos/Cerrar.png"
              alt="Logo de Alura"
              onClick={handleCloseModal}
            />
            <Form>
              <Label htmlFor="formacion">Categoría</Label>
              <Select value={formData.formacion || ''} onChange={(e) => setFormData({...formData, formacion: e.target.value })} required>
                <Option value="">Seleccione una categoría</Option>
                {formacion.map(option => (
                  <Option key={option.id} value={option.id}>
                    {option.nombre}
                  </Option>
                ))}
              </Select>
              <Label htmlFor="video">Video</Label>
              <Input type="text" id="video" value={formData.url || ''} onChange={(e) => setFormData({...formData, url: e.target.value })} required/>
            </Form>
            <Botones>
              <Enviar onClick={handleEditCard} type="button">Guardar</Enviar>
              <Eliminar>Eliminar</Eliminar>
              <Limpiar onClick={handleClearForm}>Limpiar</Limpiar>
            </Botones>
            {error && <Error message={error} />}
          </ModalContent>
        </ModalContainer>
      )}
    </>
  );
};

export default Editar;