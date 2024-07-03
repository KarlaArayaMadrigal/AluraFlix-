import _ from 'lodash';
import styled from "styled-components";
import VideoFooter from "../VideoFooter";

const GaleriaContainer = styled.div`
  display: flex;
  background-color: #000000;
  flex-direction: column;
  justify-content: space-between;
  margin-left: -35px;
  margin-top: -20px;
  width: 1290px;
`;
const SeccionVideos = styled.section`
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  width: 1100px;
  justify-content: space-between;
  margin-top: 60px;
  margin-bottom: 5%;
  margin-left: 80px;
  gap: -20px;
`;

const Video = styled.div`
  display: flex;
  margin: auto;
  width: 300px;
  gap: 10px;
  margin-left: 60px;
  position: relative;
  margin-top: 60px;
  margin-bottom: 60px;
  border-radius: 7px 7px 0 0;
  border: 2px ${({ color }) =>
    color === 'Front End'? '#75d7f5' :
    color === 'Back End'? '#00C86F' :
    color === 'Innovacion y gestion'? '#FFBA05' :
    'black'
  }; ;
  box-shadow: 0 0 30px 15px ${({ formacion }) =>
    formacion === 'Front End'? '#75d7f5' :
    formacion === 'Back End'? '#00C86F' :
    formacion === 'Innovacion y gestion'? '#FFBA05' :
    'black'
  };
  iframe {
    border-radius: 7px;
  }
`;
const FormacionTitle = styled.h2`
  background-color: ${({ formacion }) => {
    switch (formacion) {
      case 'Front End':
        return '#75d7f5';
      case 'Back End':
        return '#00C86F';
      case 'Innovacion y gestion':
        return '#FFBA05';
      default:
        return 'black';
    }
  }};
  display: flex;
  position: absolute;
  margin-top: -40px;
  margin-bottom: 70px;
  margin-left: 25px;
  color: white;
  font-family : 'Roboto';
  width: 300px;
  height: 50px;
  border-radius: 6px;
  justify-content: center;
  align-items: center;
  box-shadow: ${({ formacion }) => {
    switch (formacion) {
      case 'Front End':
        return '0 0 10px 2px #75d7f5';
      case 'Back End':
        return '0 0 10px 2px #00C86F';
      case 'Innovacion y gestion':
        return '0 0 10px 2px #FFBA05';
      default:
        return '0 0 10px 2px black';
    }
  }};
`;

const Galeria = ({ videos = [] }) => {
  const formaciones = _.groupBy(videos, 'formacion');

  return (
    <GaleriaContainer>
      {Object.keys(formaciones).map((formacion) => (
        <SeccionVideos key={formacion}>
          <FormacionTitle formacion={formacion}>{formacion}</FormacionTitle>
          {formaciones[formacion].map((video) => (
            <Video key={video.id} formacion={video.formacion}>
              <iframe
                width="300"
                height="160"
                src={video.url}
                allowFullScreen
              />
              <VideoFooter formacion={video.formacion}>
  
              </VideoFooter>
            </Video>
          ))}
        </SeccionVideos>
      ))}
    </GaleriaContainer>
  );
};
export default Galeria;