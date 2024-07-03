import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import styled from "styled-components";

const FooterEstilizado = styled.footer`
  position: relative;
  justify-content: center;
  flex-direction: column;
  display: flex;
  justify-content: center;
  padding: 30px 0;
  width: 100%;
  height: max-content;
  background-color: black;
  border-top: 2px  #0099ff; 
  box-shadow: 0 -5px 2px rgba(50, 90, 252, 0.5); 
  outline: inset; 
  margin: auto;
  img {
    width: 168px;
    height: 40px;
    margin: auto;
  }
`;
const H2 = styled.h2`
  display: flex;
  color: white;
  justify-content: center;
  font-size: 15px;
  font-family: "Roboto";
`
const IconContainer = styled.div`
  display: flex; 
  justify-content: space-between;
  margin: auto;
`;

const IconLink = styled.a`
  margin:12px; 
  color: #fff; 
  transition: color 0.2s ease; 

  &:hover {
    color: #0c13da; 
  }
`;

const Footer = () => {
  return (
    <FooterEstilizado>
      <img src="img/logo.png" alt="Logo de Alura" />
      <H2>Desarrollado por Daniela Araya </H2>
      <IconContainer>
        <IconLink href="https://www.linkedin.com/in/karla-daniela-araya-madrigal/" target="_blank">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </IconLink>
        <IconLink href="https://github.com/KarlaArayaMadrigal" target="_blank">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </IconLink>
      </IconContainer>
    </FooterEstilizado>
  );
};

export default Footer;