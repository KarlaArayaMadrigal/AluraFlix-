import Cabecera from "../../Componentes/Cabecera";
import "../../Componentes/GlobalStyles"; 
import styled from "styled-components";
import Formulario from "../../Componentes/Formulario";
import Footer from "../../Componentes/Footer";

const FondoGradiente = styled.div`
  background: linear-gradient(175deg, #191919 100%, #262626 100%);
  width: 100%;
  min-height: 100vh;
`;

const NuevoVideo = () => {
  return (
    <FondoGradiente>
      <Cabecera />
      <Formulario />
      <Footer />
    </FondoGradiente>
  );
};

export default NuevoVideo;
