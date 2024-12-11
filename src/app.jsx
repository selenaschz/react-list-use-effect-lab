import { Navbar } from "./components/ui";
import Home from "./components/pages/home/home";
import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path ="/" element={<Home/>}/>
      </Routes>
    </>
  )
}

export default App
