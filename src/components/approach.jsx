
import Footer from "./footer"
import NavBar from "./navBar"
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Flip, Draggable, MotionPathPlugin } from "gsap/all";
import { useLayoutEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import {select_about} from "../constants/about";
import parse from 'html-react-parser'

const APPROACH = () => {

    const [about, setAbout] = useState([])
    useLayoutEffect(() => {
        // don't forget to register plugins
        gsap.registerPlugin(ScrollTrigger, Draggable, Flip, MotionPathPlugin);


        select_about().then(list => {
            setAbout([...list])
        })
    },[])

    return (
            <div className = "component">
                <div id = "approach" className = "inner-components">
                <NavBar/>
                    <div className="more-components">
                    <img src={about.length > 0 ? about[6].wall:""} alt="late developers https://late-developers.com" className='moreImg' loading="lazy"/>
                    <h1>{about.length > 0 ? about[6].title : ""}</h1>

                    <article className="moreArticle">

                        {about.length > 0 ? parse(about[6].body):""}
                        {/* <LazyLoad threshold={0.95} onContentVisible={() => {console.log('loaded!')}}>
                            <img src={about.length > 0 ? about[6].wall2 : ""} alt="about image" style={{width:"100%",height:"100%"}} loading="lazy"/>
                        </LazyLoad> */}
                        <LazyLoadImage
                            // key={index}
                            alt="web developers https://late-developers.com"
                            height={200}
                            style={{width:"100%",height:"70%"}}
                            // scrollPosition={index}
                            src={about.length > 0 ? about[6].wall2 : ""}
                            width={200} />  
                    </article>
                    </div>
                    <Footer/>
                    
                </div>
                
            </div>
    )
}

export default APPROACH