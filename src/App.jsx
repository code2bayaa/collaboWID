


import Home from "./components/home"
import About from "./components/about"
import Projects from "./components/projects"
import Resources from "./components/resources"
import Opportunity from "./components/opportunity"
import Gallery from "./components/gallery"
import WHO from "./components/who"
import CORE from "./components/values"
import WORK from "./components/work"
import APPROACH from "./components/approach"
import "./constants/history/index"


import './css/index.css'

import {useState, useEffect} from "react"

function App() {

  const [pages, setPages] = useState([
    {
      name : "#gallery",
      open : false
    },
    {
      name : "#about",
      open:false
    },
    {
      name : "#opportunity",
      open:false
    },
    {
      name:"#projects",
      open:false
    },
    {
      name : "#resources",
      open:false
    },
    {
      name:"#home",
      open:true
    }
  ])
  // const [gallery, setGallery] = useState(null)
  // const [about, setAbout] = useState(null)
  // const [opportunity, setOpportunity] = useState(null)
  // const [projects, setProjects] = useState(null)
  // const [resources, setResources] = useState(null)
  // const [home, setHome] = useState(null)
  

    useEffect(() => {

      

      const updateContent = async(hash) => {

        // if(hash === "#home"){
        //   setHome(true)
        // }else if(hash === "#about"){
        //   setAbout(true)
        // }else if(hash === "#opportunity"){
        //   setOpportunity(true)
        // }else if(hash === "#projects"){
        //   setProjects(true)
        // }else if(hash === "#resources"){
        //   setResources(true)
        // }else if(hash === "#gallery"){
        //   setGallery(true)
        // }

        const id = pages.findIndex(({name}) => name === hash)
        pages[id].open = !pages[id].open
        console.log(pages)
        setPages([...pages])
        return true
      }
      // Add event listener for popstate
      const handlePopstate = (event) => {
        const hash = document.location.hash
        console.log('popstate event:', hash);

        const page = pages.find(({name}) => name === hash)
        // console.log(page)
        if(page && !page.open){
          updateContent(hash).then(() => {
            // console.log("move.." + hash)
            document.location.assign(hash)
          });
        }

      };

      handlePopstate()
      window.addEventListener('popstate', handlePopstate);

      // Clean up the event listener on component unmount
      return () => {
        window.removeEventListener('popstate', handlePopstate);
      };
    }, [document]);

    // const makeComponent = async(component) => {
      
    //   // if(n === hash){
    //     return (
    //       <>
    //         {component}
    //       </>
    //     )
    //   // }
    // }

    // console.log(pages)
    return (
      <>
        <Home/>
        { 
          pages[1].open ?
            <About/> 
              : ""         
        }
        { 
          pages[3].open ?
            <Projects/> 
              : ""         
        }
        { 
          pages[4].open ?
            <Resources/> 
              : ""         
        }
        { 
          pages[2].open ?
            <Opportunity/> 
              : ""         
        }
        { 
          pages[0].open ? <Gallery/>           
              : ""         
        }
             
        <WHO/>
        <CORE/>
        <WORK/>
        <APPROACH/>   
      </>
    );
  }
  
  export default App;