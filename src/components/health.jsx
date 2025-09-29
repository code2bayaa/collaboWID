import NavBar from "./navBar"
import { useLayoutEffect, useState } from "react";
import gsap from "gsap";
import { LazyLoadImage } from "react-lazy-load-image-component";
import parse from 'html-react-parser'
import {select_healths} from "../constants/healths";
const HEALTH = () => {

    const [healths, setHealths] = useState([])
    
    useLayoutEffect(() => {
        

        select_healths().then(list => {
            setHealths([...list])
            if(window.screen.width > 800){
                function runNavBar(){
    
                    document.querySelectorAll("#NavBar a").forEach(wrapper => {
                        gsap.to(wrapper,{
                            color:"#fff",
                        })
                    })
                    
                    gsap.to("#NavBar",{
                        backgroundImage:"linear-gradient(#aab95788,#aab95788,#aab95788),url(" + list[0].wall2 + ")",
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

        gsap.fromTo("#health article",{
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
            <div id="health" className="inner-component">
                <div className = "headers-line"><div className="education-left"></div><h1>Health</h1><div className="education-right"></div></div>
                    <section>

                        <article>
                            <LazyLoadImage
                            // key={index}
                            alt="late-developers.com"
                            className="homeFrame"
                            // scrollPosition={index}
                            src={healths.length > 0 ? healths[0].wall : ""}
                            width={200} /> 
                        </article>
                        <article>
                            {healths.length > 0 ?  parse(healths[0].body) : ""}
                        </article>
                        <div className={ window.screen.width > 800 ? "with-row" : "with-column with-full"}>
                            <div className="stack">
                                <article>
                                    {healths.length > 0 ?  parse(healths[1].body) : ""}
                                </article>

                            </div>


                            <div className="stack">
                                <article>
                                    {healths.length > 0 ?  parse(healths[2].body) : ""}
                                </article>

                            </div>
                        </div>


                    </section>
                </div>
            </div>
        </div>
    )
}

export default HEALTH