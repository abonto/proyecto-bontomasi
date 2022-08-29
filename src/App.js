import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import ItemCount from "./components/ItemCount/ItemCount";

const App = () => {

    const saludar = () => {
        console.log("Hola");
    }

    const onAdd = () => {
        console.log('Agregado al carrito');
    }

    return (
        <>
           <Header />
           <Main saludar={saludar}/>
           <ItemCount stock={10} initial={5} onAdd={onAdd}/>
        </>
    );     
}

export default App;
