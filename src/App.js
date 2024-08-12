import Navbar from './Component/Navbar/Navbar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Component/Fotter/Footer';
import men_banner from "./Component/Assest/banner_mens.png"
import women_banner from "./Component/Assest/banner_women.png"
import kids_banner from "./Component/Assest/banner_kids.png"



function App() {

  return (
    <>
      <div className="App">

        <Router >
          <>
            <Navbar />
            <Routes>
              <Route path='/' element={<Shop />} />
              <Route path='/mens' element={<ShopCategory banner={men_banner}   category="Men" />} />
              <Route path='/Womens' element={<ShopCategory banner={women_banner} category="Women" />} />
              <Route path='/Kids' element={<ShopCategory banner={kids_banner} category="Kid" />} />
              <Route path='/product' element={<Product />}>
                <Route path=':productId' element={<Product />}></Route>
              </Route>
              <Route path='/cart' element={<Cart />} />
              <Route path='/login' element={<LoginSignup />} /> 
            </Routes>
          </>
        </Router>
        <Footer />

      </div>
    </>
  );
}

export default App;
