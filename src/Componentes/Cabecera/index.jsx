import styled from "styled-components";
import { useNavigate } from 'react-router-dom';


const HeaderEstilizado = styled.header`
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: 30px 0;
  width: 100%;
  background-color: #252525;
  border-bottom: 2px solid #0099ff; /* cyan bottom border */
  box-shadow: 0 2px 10px rgba(0, 255, 255, 0.5); /* glowing effect on bottom border */
  outline: none; /* remove outline */
  img {
    width: 168px;
    height: 40px;
    margin-left: 40px;
  }
`;

const Menu = styled.section`
  display: flex;
  justify-content: space-between;
  margin-right: 60px;
  gap: 20px;
  font-family: 'Source Sans Pro', sans-serif;
`;

const Home = styled.button`
  height: fixed;
  width: 150.13px;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  color: #0099ff; /* white text */
  background-color: black; /* cyan background */
  border: 2px solid #0099ff; /* cyan bottom border */
  box-shadow: 2px 2px 10px rgba(0, 255, 255, 0.5);
  border-radius: 5px;
  border-style: solid;
  cursor: pointer;
  &:hover {
    background-color: #0077cc53; 
  }
  :active {
    background-color: #0055aa; 
  }
`;

const NuevoVideo = styled.button`
  height: fixed;
  width: 180.13px;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  color: #ffffff; 
  background-color: black; 
  border: 2px solid #c3d5e1; 
  box-shadow: 2px 2px 10px rgba(214, 215, 215, 0.5);
  border-radius: 5px;
  border-style: solid;
  cursor: pointer;
  &:hover {
    background-color: #1d192b;
  }
  :active {
    background-color: #0d79e4;
  }
`;

const Cabecera = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/');
  };

  const handleNuevoVideoClick = () => {
    navigate('/NuevoVideo'); 
  }

  return (
    <HeaderEstilizado>
      <img src="img/logo.png" alt="Logo de Alura" />
      <Menu>
        <Home onClick={handleHomeClick}>HOME</Home>
        <NuevoVideo onClick={handleNuevoVideoClick}>NUEVO VIDEO</NuevoVideo>
      </Menu>
    </HeaderEstilizado>
  );
};

export default Cabecera;