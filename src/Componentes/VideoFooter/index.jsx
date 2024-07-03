import styled from "styled-components";
import Editar from "../Modal";

const theme = {
  "Front End": "#75d7f5",
  "Back End": "#00C86F",
  "Innovacion y gestion": "#FFBA05",
  default: "black",
};

const getFormacionColor = (formacion) => theme[formacion] || theme.default;

const VideoFooterContainer = styled.footer`
  color: white;
  text-align: center;
  padding: 10px;
  margin: auto;
  height: 50px;
  width: 280px;
  margin-top: 163px;
  display: flex;
  margin-left: 1px;
  position: absolute;
  border: 2px solid ${props => getFormacionColor(props.formacion)};
  box-shadow: 0 0 30px 14px ${props => getFormacionColor(props.formacion)};
  border-radius: 0 0 7px 7px;
  background-color: black;
`;

const Botones = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
`;

const VideoFooter = ({ formacion, children }) => {
  return (
    <VideoFooterContainer formacion={formacion}>
      {children}
      <Botones>
        <Editar />
      </Botones>
    </VideoFooterContainer>
  );
};

export default VideoFooter;
