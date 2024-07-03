import { styled } from "styled-components";
import GlobalStyles from "../../Componentes/GlobalStyles";
import Cabecera from "../../Componentes/Cabecera";
import Banner from "../../Componentes/Banner";
import banner from "../../assets/banner.png";
import videos from "../../data/db.json";
import { useState } from "react";
import Galeria from "../../Componentes/Galeria";
import Footer from "../../Componentes/Footer";

const FondoGradiente = styled.div`
  background: linear-gradient(175deg, #031224 4.16%, #021e42 48%,
  #03162f 96.76%);
  width: 100%;
  min-height: 100vh;
`
const ContenidoGaleria = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

const Home = () => {
  const [videosdeGaleria, setvideosdeGaleria]= useState(videos)
  return (
    <>
    <FondoGradiente>
      <GlobalStyles/>
      <Cabecera/>
      <ContenidoGaleria>
      <Banner formacion={"FRONT END"}
      titulo={"Challenge React"}
      texto = {"Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React."}
      backgroundImage={banner}/>
      <Galeria videos={videosdeGaleria}/>
      </ContenidoGaleria>
      <Footer/>
    </FondoGradiente>
      
    </>
  )
}

export default Home;