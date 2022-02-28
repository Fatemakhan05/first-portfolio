import About from "./components/intro/about/About";
import Contact from "./components/intro/contact/Contact";
import Intro from "./components/intro/Intro";
import ProductList from "./components/intro/productList/ProductList";

 
function App() {
  return (
    <div className="App">
        <Intro/>
        <About/>
        <ProductList/>
        <Contact/>
    </div>
  );
}

export default App;
