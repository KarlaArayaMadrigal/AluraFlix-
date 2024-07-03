import styled from "styled-components";
const ListaEstilizada = styled.ul`
  background-color: red;
`;
const Menu = () => {
  return (
    <aside>
      <nav>
        <ListaEstilizada>
          <ItemNavegacion
            iconoHome="iconos/home.png"
            iconoNuevoVideo="iconos/nuevovideo.png"
          ></ItemNavegacion>
        </ListaEstilizada>
      </nav>
    </aside>
  );
};
