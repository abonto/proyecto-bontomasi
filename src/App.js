import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
//import ItemCount from "./components/ItemCount/ItemCount";
import { BrowserRouter } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

const App = () => {

    const saludar = () => {
        console.log("Hola");
    }

    // const onAdd = () => {
    //     console.log('Agregado al carrito');
    // }

    return (
        <BrowserRouter>
           <Header />
           <Main saludar={saludar}/>
           <ItemDetailContainer />
           <Footer />
        </BrowserRouter>
    );     
}

export default App;
