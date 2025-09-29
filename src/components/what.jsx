import slide5 from "../assets/team/about1.jpeg"
import Footer from "./footer"
import NavBar from "./navBar"
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Flip, Draggable, MotionPathPlugin } from "gsap/all";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useLayoutEffect } from "react";
import about from "../constants/about";
import parse from 'html-react-parser'

const WHAT = () => {

    useLayoutEffect(() => {
        // don't forget to register plugins
        gsap.registerPlugin(ScrollTrigger, Draggable, Flip, MotionPathPlugin);
        document.querySelectorAll("img").forEach( (img, index) => {
            gsap.fromTo(img,{ opacity:0,scale:4},{
                // y:0,
                // stagger:1,
                ease:"smooth",
                // yoyo:true,
                scale:1,
                opacity:1,
                duration:1
            })
        })

        // gsap.to("#NavBar",{
        //     backgroundImage:"linear-gradient(#57396fb9,#57396f8a,#57396f8a),url(" + slide19 + ")",
        //     height:"40%"
        // })
    },[])

    return (
        <>
            <div className = "component">
                <div id = "who" className = "inner-components">
                <NavBar/>
            {/* <img src={logo} alt="logo" className='logo'/> */}
                <div className="more-components">
                <LazyLoadImage
                    // key={index}
                    alt="late-developers.com"
                    height={200}
                    // scrollPosition={index}
                    src={slide5}
                    width={200} />
                <h1>{parse(about[5].title)}</h1>
                    <article className="moreArticle">

                        {parse(about[5].body)}

                    </article>
                    </div>
                    <Footer/>
                </div>
            </div>
        </>
    )
}

export default WHAT