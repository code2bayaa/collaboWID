
import NavBar from "./navBar"
import { useLayoutEffect, useState } from "react";
import gsap from "gsap";
import { LazyLoadImage } from "react-lazy-load-image-component";
import parse from 'html-react-parser'
import {select_governance} from "../constants/governance"
const GOVERNANCE = () => {
    const [governance, setGovernance] = useState({})
    useLayoutEffect(() => {
        select_governance().then(list => {
            setGovernance({...list})
            if(window.screen.width > 800){
                function runNavBar(){
    
                    document.querySelectorAll("#NavBar a").forEach(wrapper => {
                        gsap.to(wrapper,{
                            color:"#fff",
                        })
                    })
                    
                    gsap.to("#NavBar",{
                        backgroundImage:"linear-gradient(#aab95788,#aab95788,#aab95788),url(" + list.wall2 + ")",
                        height:"40%"
                    })
            
                    gsap.to(".header-strip",{
                        opacity:0
                    })
            
                    gsap.to("#NavBar p",{
                        color:"#fff"
                    })
            
                    gsap.to(".header-info",{
                        color:"#ABB957",
                    })
            
                    gsap.to("#NavBar span",{
                        color:"#411342",
                    })
                }
                runNavBar()
            }
        })
            

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

        gsap.fromTo("#governance article",{
            y : "50%",
            delay:1.5
        },{
            y:"0%"
        })

    },[])

    return (
        <div className = "component">
            <div id = "home" className="inner-components">
            <NavBar page = "#home"/>
            <div id="governance" className="inner-component">
                <div className = "headers-line">
                    <div className="education-left"></div>
                    <div><h1>Governance</h1></div>
                    <div className="education-right"></div>
                </div>
                <section>

                    <article>
                        <LazyLoadImage
                                // key={index}
                                alt="late-developers.com"
                                className="homeFrame"
                                // scrollPosition={index}
                                src={governance?.wall}
                                width={200} /> 
                        {governance.hasOwnProperty("body") ? parse(governance?.body) : ""}
                    </article>
                </section>

                </div>  
            </div>
        </div>
    )
}

export default GOVERNANCE