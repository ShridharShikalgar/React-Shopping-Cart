import { BrowserRouter, Routes,Route } from "react-router-dom";
import NavBar from "./Components/NAVBAR/NavBar";
import Home from "./Components/HOME/Home";
import Cart from "./Components/CART/Cart";
function App() {
  return (
    <BrowserRouter>
          <NavBar/>
              <Routes>
                <Route path='/' element={<Home/>} exact/>
                <Route path='/cart' element={<Cart/>} exact/>
              </Routes>
    </BrowserRouter>
  );
}

export default App;
