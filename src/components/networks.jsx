
import NavBar from "./navBar"
import { useLayoutEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Flip, Draggable, MotionPathPlugin } from "gsap/all";
const NETWORK = () => {

    // don't forget to register plugins
    gsap.registerPlugin(ScrollTrigger, Draggable, Flip, MotionPathPlugin);

    useLayoutEffect(() => {

        gsap.fromTo(".education-right",{
            width:"0%"
        },{
            width:"40%",
            duration:1,
            delay:1
        })

        gsap.fromTo(".education-left",{
            width:"0%"
        },{
            width:"40%",
            duration:1
        })

        gsap.fromTo("#coalition article",{
            y : "50%",
            delay:1.5
        },{
            y:"0%"
        })

        // gsap.fromTo(".careerBox img",{
        //     skewY : 5,
        //     delay:1.5
        // },{
        //     skewY:0
        // })

        // gsap.to(".currently",{
        //     x:20,
        //     scrollTrigger:{
        //         scroller : "#careers",
        //         trigger:"#careers section",
        //         start:"top 30%",
        //         scrub:true,
        //         end:"bottom bottom",
        //     }
        // })

    },[])

    return (
        <div className = "component">
            <div className="inner-components">
            <NavBar page = "#networks"/>
            <div id="networks" className="inner-component">
                <div className = "headers-line"><div className="education-left"></div><h1>Our Networks</h1><div className="education-right"></div></div>
                    {/* <div style={{width:"100%",height:"300px"}}>
                        <LazyLoadImage src={career9} alt="career image" className='networkHeader' loading="lazy"/>
                    </div> */}




                        </div>
            </div>
        </div>
    )
}

export default NETWORK