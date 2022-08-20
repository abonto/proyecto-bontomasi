import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

const App = () => {
    return (
        <>
           <Header />
           <ItemListContainer saludo ='Bienvenidos'/>
           <Main />
           <Footer className='sticky'/>
        </>
    );     
}

export default App;
