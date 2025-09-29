
import NavBar from "./navBar"
import { useLayoutEffect, useState } from "react";
import gsap from "gsap";
import { LazyLoadImage } from "react-lazy-load-image-component";
import parse from 'html-react-parser'
import { select_peace } from "../constants/peace";
const PEACE = () => {
    const [peace, setPeace] = useState({})

    useLayoutEffect(() => {

        select_peace().then(list => {
            setPeace({...list})
            if(window.screen.width > 800){
                function runNavBar(){
    
                    document.querySelectorAll("#NavBar a").forEach(wrapper => {
                        gsap.to(wrapper,{
                            color:"#fff",
                        })
                    })
                    
                    gsap.to("#NavBar",{
                        backgroundImage:`linear-gradient(#aab95788,#aab95788,#aab95788),url(${list?.wall2})`,
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

        
        gsap.fromTo(".career-right",{
            width:"0%"
        },{
            width:"40%",
            duration:1,
            delay:2
        })

        gsap.fromTo(".career-left",{
            width:"0%"
        },{
            width:"40%",
            duration:1
        })

        gsap.fromTo("#peace article",{
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
            <div id="peace" className="inner-component">
                <div className = "headers-line"><div className="education-left"></div><h1>Peace &</h1><div className="education-right"></div></div>

                <div className = "headers-line"><div className="career-left"></div><h1>Security</h1><div className="career-right"></div></div>
                <section>

                    <article>
                        <LazyLoadImage
                            // key={index}
                            alt="web developers https://late-developers.com"
                            className="homeFrame"
                            // scrollPosition={index}
                            src={peace.hasOwnProperty('wall') ? peace?.wall:""}
                            width={200} />
                        {peace.hasOwnProperty('body') ? parse(peace?.body):""}
                    </article>
                </section>

            </div>
        </div>
    </div>
    )
}

export default PEACE