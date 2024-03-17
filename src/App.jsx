import {
createRoutesFromElements,
createBrowserRouter,
Route,
RouterProvider, 
} from "react-router-dom";
import Lyaout from "./components/pages/Navber/Lyaout";
import Navlogo from "./components/pages/Navber/Navlogo";
import Home from "./components/pages/Navber/Home/Home";
import About from "./components/pages/Navber/About/About";
import Items from "./components/pages/Navber/Items/Items";
import Pages from "./components/pages/Navber/Pages";
import Contact from "./components/pages/Navber/Contact";
import Register from "./components/pages/Navber/Register";
import Login from "./components/pages/Navber/Login";
import Cart from "./components/pages/Navber/Cart";
import User from "./components/pages/Navber/User";



const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Lyaout />}>
      <Route index element={<Navlogo />}></Route>
      <Route path="/home" element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/items" element={<Items/>}></Route>
      <Route path="/pages" element={<Pages/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
      <Route path="/user" element={<User/>}></Route>
      <Route path="/register" element={<Register/>}></Route>
      <Route path="/cart" element={<Cart/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      
      </Route>
    )
 );

  return  <RouterProvider router={router} />
};

export default App;