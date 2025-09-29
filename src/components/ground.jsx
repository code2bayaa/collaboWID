
// import slide4 from "../assets"
import NavBar from "./navBar"
import { useLayoutEffect, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Flip, Draggable, MotionPathPlugin } from "gsap/all";
// import LazyLoad from 'react-lazy-load';
import { LazyLoadImage } from "react-lazy-load-image-component";
import parse from 'html-react-parser'
import {select_grounds} from "../constants/ground";

const GROUND = () => {
    
    const [grounds, setGrounds] = useState({})
    useLayoutEffect(() => {

        gsap.registerPlugin(ScrollTrigger, Draggable, Flip, MotionPathPlugin);
        
        select_grounds().then(list => {

            setGrounds({...list})
            function runNavBar(){

                document.querySelectorAll("#NavBar a").forEach(wrapper => {
                    gsap.to(wrapper,{
                        color:"#fff",
                    })
                })
                
                gsap.to("#NavBar",{
                    backgroundImage:"linear-gradient(rgb(0,0,0,0.75),rgb(0,0,0,0.55),rgb(0,0,0,0.45)),url(" + list.wall2 + ")",
                    height:"40%"
                })
        
                gsap.to(".header-strip",{
                    opacity:0
                })
        
                gsap.to("#NavBar p",{
                    color:"#fff"
                })
        
                gsap.to(".header-info",{
                    color:"#411342",
                })
        
                gsap.to("#NavBar span",{
                    color:"#411342",
                })
            }
            if(window.screen.width > 800)
                runNavBar()
        })

        document.querySelectorAll("#projects article").forEach( (wrapper, index) => {

            if(window.screen.width > 800){
                const img = wrapper.querySelector("img")
                gsap.fromTo(img,{ x: "-100%"},{
                    x:0,
                    // stagger:1,
                    ease:"smooth",
                    // yoyo:true,
                    // opacity:1,
                    duration:1,
                    scrollTrigger : {
                        trigger : wrapper,
                        scroller : "#projects",
                        toggleActions : "play none none reverse",
                        start : "top 55%",
                        end : "bottom bottom",
                        // scrub : true,
                        // markers:true
                    }
                })
            }


            const section = wrapper.querySelector("section")
            gsap.fromTo(section,{ y: "20%",opacity:0},{
                y:0,
                // stagger:1,
                ease:"smooth",
                // yoyo:true,
                opacity:1,
                duration:1,
                scrollTrigger : {
                    trigger : wrapper,
                    scroller : "#projects",
                    toggleActions : "play none none reverse",
                    start : "top 55%",
                    end : "bottom bottom",
                    // scrub : true,
                    // markers:true
                }
            })
        })
        


    },[])

    return (
        <div className = "component">
            <div id = "projects" className = "inner-components">
            <NavBar page = "#projects"/>
                
                <article>
                    <LazyLoadImage
                            // key={index}
                            alt="late-developers.com"
                            className="homeFrame"
                            // scrollPosition={index}
                            src={grounds?.wall}
                            width={200} /> 
                    {grounds.hasOwnProperty("body") ? parse(grounds?.body) : ""}

                </article>
        </div>
        </div>
    )
}

export default GROUND