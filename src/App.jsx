import { Route, Routes } from "react-router"
import Home from "./pages/Home/Home"
import About from "./pages/About/About"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      {/* <Route path="*" element={<NotFoundPage />} /> */}
      {/* <Route path="*" element={<Navigate to="/" />} /> */}
    </Routes>
  )
}

export default App
