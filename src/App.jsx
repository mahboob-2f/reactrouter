import Header from "./components/Header"
import Home from "./components/Home"
import Footer from "./components/Footer"
import { BrowserRouter, Link,Routes,Route } from "react-router-dom"
import Body from "./components/Body"
import Image from "./components/Image"

function App() {

  return (
    <>
      <BrowserRouter>
        <p>hello ghost</p>
        <Link to="/home">home</Link><br />
        <Link to="/header">header</Link><br />
        <Link to="/footer">footer</Link>


        <Routes>
          <Route path="/home" element={<Home></Home>}>
            <Route path="body" element={<Body></Body>}> </Route>
            <Route path="image" element={<Image></Image>}> </Route>
          </Route>
          <Route path="/header" element={<Header></Header>} />
          <Route path="/footer" element={<Footer/>} />
          <Route path="*" element={<h2>404 Page Not Found</h2>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
