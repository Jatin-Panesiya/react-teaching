import { Route, Routes } from "react-router"
import Home from "./pages/Home/Home"
import About from "./pages/About/About"

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
  return (
    <Routes>
      {
        Menus.map((ele) => (
          <Route path={ele.path} element={ele.element} />
        ))
      }
      {/* <Route path="*" element={<NotFoundPage />} /> */}
      {/* <Route path="*" element={<Navigate to="/" />} /> */}
    </Routes>
  )
}

export default App
