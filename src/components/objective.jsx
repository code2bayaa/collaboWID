import Footer from "./footer"
import NavBar from "./navBar"
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Flip, Draggable, MotionPathPlugin } from "gsap/all";
import { useLayoutEffect, useState } from "react";
// import LazyLoad from 'react-lazy-load';
import { LazyLoadImage } from "react-lazy-load-image-component";
import {select_about} from "../constants/about";

const OBJECTIVE = () => {

    const [about,setAbout] = useState([])
    useLayoutEffect(() => {
        // don't forget to register plugins
        gsap.registerPlugin(ScrollTrigger, Draggable, Flip, MotionPathPlugin);

        // gsap.to("#NavBar",{
        //     backgroundImage:"linear-gradient(#57396fb9,#57396f8a,#57396f8a),url(" + slide19 + ")",
        //     height:"40%"
        // })
        select_about().then(list => {
            setAbout([...list])
        })
    },[])

    return (
        <div className = "component">
            <div id = "values" className = "inner-components">
            <NavBar/>
            {/* <img src={logo} alt="logo" className='logo'/> */}
            <div className="more-components">
                <h1>{about.length > 0 ? about[7].title : ""}</h1>
                <LazyLoadImage
                            // key={index}
                            alt="late-developers.com"
                            height={200}
                            // scrollPosition={index}
                            src={about.length > 0 ? about[7].wall : ""}
                            width={200} />
                <article className="moreArticle">
                    
                    {about.length > 0 ? about[7].body:""}
                </article>
            </div>
                <Footer/>
            </div>
        </div>
    )
}

export default OBJECTIVE