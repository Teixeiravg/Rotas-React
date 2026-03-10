import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contato from "./pages/Contato";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Menu from "./componentes/Menu";
import Produto from "./pages/Produto";
import Footer from "./componentes/Footer";

function App(){
  return(
    <BrowserRouter>

      <div style={{
        minHeight:"100vh",
        display:"flex",
        flexDirection:"column"
      }}>

        <Menu/>

        <div style={{flex:1}}>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/produto" element={<Produto/>}/>
            <Route path="/sobre" element={<Sobre/>}/>
            <Route path="/contato" element={<Contato/>}/>
          </Routes>
        </div>
        <Footer/>
      </div>

    </BrowserRouter>
  )
}

export default App