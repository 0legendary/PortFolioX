
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Headers/Header"

import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
 
} from "react-router-dom"

import HomeFiles from "./Pages/HomePage/HomeFiles";
import AboutFiles from "./Pages/AboutPage/AboutFiles";

const Layout = ()=>{
  return (
    <div>
      <Header/>
      <Outlet />
      <Footer/>
    </div>
   
  )
}

const HomePage = ()=>{
  return (
    <div>
    <HomeFiles/>
    </div>
  )
}

const AboutPage = ()=>{
  return(
    <div>
     <AboutFiles/>
    </div>
  )
}
const ServicePage = ()=>{
  return(
    <div>

    </div>
  )
}
const ContactPage = ()=>{
  return(
    <div>

    </div>
  )
}

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Layout/>}>
          <Route index element={<HomePage/>}></Route>
        </Route>

        <Route path="/about" element={<Layout/>}>
          <Route index element={<AboutPage/>}></Route>
        </Route>

        <Route path="/service" element={<Layout/>}>
          <Route index element={<ServicePage/>}></Route>
        </Route>
        <Route path="/contact" element={<Layout/>}>
          <Route index element={<ContactPage/>}></Route>
        </Route>
      </Route>
      
    )
  )
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
