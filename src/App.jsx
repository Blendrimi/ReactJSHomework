import Header from "./Components/Header"
import Products from "./Pages/Products";
import './style.css';

function App() {
  return (
    <>
     <Header />
    <h1 className="recommended">Të rekomanduara</h1>
    <Products/>
    </>
  );
}

export default App;
