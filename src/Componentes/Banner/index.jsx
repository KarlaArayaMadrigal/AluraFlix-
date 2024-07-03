import YouTube from "react-youtube";
import styled from "styled-components";

const FigureEstilizada = styled.figure`
  background-image: ${(props) => `url(${props.$backgroundImage})`};
  height: 680px;
  margin: 0px;
  margin-top: -20px;
`;

const TituloEstilizado = styled.h1`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  color: white;
  margin-left: 20px;
  font-size: 46px;
  font-family: "Roboto", "Helvetica";
  font-style: bold;
  margin-top: 36px;
`;

const Formacion = styled.h3`
  background-color: #75d7f5;
  width: 270px;
  text-align: center;
  border-radius: 10px;
  padding: 10px;
  margin-top: 220px;
  font-family: "roboto", "Helvetica";
  font-style: bold;
`;

const Texto = styled.p`
  font-family: "Roboto", "Helvetica", sans-serif;
  font-size: 14px;
  font-weight: 200;
  width: 500px;
  color: #f5f5f5;
  margin-top: -15px;
  margin-left: 20px;
`;

const VideoContainer = styled.div`
  width: 630px;
  height: 300px;
  margin-left: 540px;
  margin-top: -270px;
  border-radius: 10px;
  border-color: white;
`;

const VideoDestacado = styled.div`
  border-radius: 7px;
  overflow: hidden;
  box-shadow: 0px 0px 35px 25px rgba(103, 158, 245, 0.5);
  width: 640px;
  height: 360px;
  margin-left: 10px;
`;

const videoDestacado = [
  { id: 1, url: "https://www.youtube.com/watch?v=ov7vA5HFe6w" },
];

const Banner = ({ formacion, backgroundImage, titulo, texto, videos }) => {
  const videoId = videoDestacado[0].url.split("v=")[1];

  return (
    <FigureEstilizada $backgroundImage={backgroundImage}>
      <Formacion
        style={{ color: "white", fontSize: "46px", marginLeft: "20px" }}
      >
        {formacion}
      </Formacion>
      <TituloEstilizado>{titulo}</TituloEstilizado>
      <Texto>{texto}</Texto>
      <VideoContainer>
        <VideoDestacado>
          <YouTube videoId={`${videoId}`} />
        </VideoDestacado>
      </VideoContainer>
    </FigureEstilizada>
  );
};
export default Banner;
