import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./assets/Pages/Home";
import NuevoVideo from "./assets/Pages/nuevoVideo";
import GlobalStyles from './Componentes/GlobalStyles';


const App = () => {
  return (
    <BrowserRouter>
    <GlobalStyles/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nuevoVideo" element={<NuevoVideo />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;