
import slide3 from "../assets/team/team2 (3).jpg"
import Footer from "./footer"
import NavBar from "./navBar"
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Flip, Draggable, MotionPathPlugin } from "gsap/all";
import { useLayoutEffect } from "react";

const WORK = () => {

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
            <div id = "work" className = "inner-components">
            <NavBar/>
            {/* <img src={logo} alt="logo" className='logo'/> */}
            <div className="more-components">
                <img src={slide3} alt="late developers https://late-developers.com" className='moreImg' loading="lazy"/>

                <article className="moreArticle">
                    <h1>Work</h1>
                    Collaboration of Women In Development-CWID work focuses on various Thematic areas that includes; Climate Change Adaptation and Resilience. The organization has implemented the "Jijenge Jiboreshe  Project" which was supported by Australian Aid through the Direct Aid Program (DAP). The project achieved to contribute towards climate Change mitigation by supporting in planting 10,000 Mangroves trees  at Tudor, Mshomoroni and Mwangala Creeks. These are within Kisauni, Jomvu and Likoni Sub Counties. Jijenge Jiboreshe project had a solid waste management component and through the Beach Management Unit the youths were made trainers of trainees in solid waste management at the sea shore and also recycle waste through Briquettes Making and sale of coal within the Kisauni and Likoni Sub County as they promote waste management attitude to the Mombasa Citizens. The project supported 40 reformed youths with avenues or background of poverty and crime history, though were reformed  and willing to champion protection of the environment through economic support for them to be self dependent and reduce their chances to engage in violent extremism activities (Recidivism). The project applied two models on economic support which are;
                    - Briquette making
                    - Mangrove restoration and management
                    Through briquette machines the youths are able to make coal, sales and sustain themselves. 
                </article>
                </div>
                <Footer/>
            </div>
        </div>
        </>
    )
}

export default WORK