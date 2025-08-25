import Header from "./components/Header/Header"
import Home from "./components/Home/Home"
import Footer from "./components/Footer/Footer"
import { BrowserRouter, Link, Routes, Route, Outlet } from "react-router-dom"
import Body from "./components/Home/Body"
import Image from "./components/Home/Image"
import Form from "./components/Form"
import Ghost from "./components/Ghost"
import Data from "./components/Data"
import First from "./components/First"
import Second from "./components/Second"
import Third from "./components/Third"
import Inner from "./components/Home/Inner"
import Hide from "./components/Hide"

import Header1 from "./components/Header1"
import Home2 from "./components/Home2"
import About2 from "./components/About2"
import Setting2 from "./components/Setting2"
import Profile2 from "./components/Profile2"
import Account from "./components/Account"
import Footer2 from "./components/Footer2"
import Layout from "./components/Layout"


function App() {

  return (
    <>
      <BrowserRouter >
        <Hide>
          <Ghost></Ghost>
          <p>hello ghost</p>
          <nav className="w-1/2 mx-auto  flex items-center justify-evenly ">
            <Link to="/home">home</Link><br />
            <Link to="/header">header</Link><br />
            <Link to="/footer">footer</Link>

          </nav>


          <Routes>
            <Route path="/home" element={<Home></Home>}>
              <Route path="body" element={<Body></Body>}>
                <Route path="inner" element={<Inner></Inner>}></Route>
              </Route>
              <Route path="image" element={<Image></Image>}> </Route>
            </Route>
            <Route path="/header" element={<Header></Header>} >
              <Route path="form" element={<Form></Form>}></Route>
            </Route>

            <Route path="/footer" element={<Footer />} />
            <Route path="/ghost" element={<Data></Data>}>
              <Route path="first" element={<First></First>}></Route>
              <Route path="second" element={<Second></Second>}></Route>
              <Route path="third" element={<Third></Third>}></Route>
            </Route>
            <Route path="*" element={<h2>404 Page Not Found</h2>} />
          </Routes>


        </Hide>
        


      <Routes>
        <Route path="/" element={<Layout></Layout>}>
          <Route index element={<Home2 />}></Route>
          <Route path="/about" element={<About2/>}></Route>
          <Route path="/setting" element={<Setting2/>}></Route>
          <Route path="/profile" element={<Profile2/>}></Route>
          <Route path="/account" element={<Account/>}></Route>
        </Route>
        <Route path="*" element={<h2 className="text-3xl text-[red] font-serif text-center font-bold">404 Page Not Found</h2>} />
      </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
