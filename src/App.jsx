import { Route, Routes } from "react-router"
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import Todo from "./components/Todo/Todo"
import { useState } from "react"
import UserContext from "./context/userContext"
import ProductContext from "./context/productsContext"

export const Menus = [
  {
    path: "/",
    title: "Home",
    element: <Home />
  },
  {
    path: "/about",
    title: "About",
    element: <About />
  }
]

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  return (
    <ProductContext.Provider value={{ cartItems, setCartItems }}>
      <UserContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
        <Routes>
          {
            Menus.map((ele) => (
              <Route path={ele.path} element={ele.element} />
            ))
          }
        </Routes>
      </UserContext.Provider>
    </ProductContext.Provider>
  )
}

export default App
