import NavBar from "./navBar"
import { useLayoutEffect, useState } from "react";
import gsap from "gsap";
import { LazyLoadImage } from "react-lazy-load-image-component";
import parse from 'html-react-parser'
import {select_climate} from "../constants/climate";

const CLIMATE = () => {
    const [climate, setClimate] = useState({})

    
    useLayoutEffect(() => {
        select_climate().then(list => {
            setClimate({...list})
            if(window.screen.width > 800){
                function runNavBar(){

                    document.querySelectorAll("#NavBar a").forEach(wrapper => {
                        gsap.to(wrapper,{
                            color:"#fff",
                        })
                    })
                    
                    gsap.to("#NavBar",{
                        backgroundImage:"linear-gradient(#41134246,#41134246,#41134246),url(" + list.wall2 + ")",
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

        gsap.fromTo("#climate article",{
            y : "50%",
            delay:2
        },{
            y:"0%"
        })

    },[])

    return (
        <div className = "component">
            <div id = "home" className="inner-components">
            <NavBar page = "#home"/>
            <div id="climate" className="inner-component">
            <div className = "headers-line"><div className="education-left"></div><h1>Climate</h1><div className="education-right"></div></div>
                <section>

                    <article>
                        {/* <LazyLoad threshold={0.95} onContentVisible={() => {console.log('loaded!')}}>
                            <img src={climate?.wall} alt="climate image" className='homeFrame' loading="lazy"/>
                        </LazyLoad> */}
                        <LazyLoadImage
                                                // key={index}
                                                alt="late-developers.com"
                                                className="homeFrame"
                                                // scrollPosition={index}
                                                src={climate?.wall}
                                                width={200} /> 
                        {climate.hasOwnProperty("body") ? parse(climate?.body) : ""}
                    </article>
                </section>

            </div> 
            </div>
        </div>
    )
}

export default CLIMATE