
import NavBar from "./components/navBar"

import Home from "./components/home"
import About from "./components/about"
import Projects from "./components/projects"
import Resources from "./components/resources"
import Opportunity from "./components/opportunity"
import Gallery from "./components/gallery"
import logo from './assets/footer/footer2.jpeg'

function App() {
    return (
      <>
        <NavBar/>
        {/* <img src={logo} alt="logo" className='logo'/> */}
        <Home/>
        <About/>
        <Projects/>
        <Resources/>
        <Opportunity/>
        <Gallery/>        
      </>
    );
  }
  
  export default App;