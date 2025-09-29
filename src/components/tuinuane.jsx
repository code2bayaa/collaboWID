

import NavBar from "./navBar"
import { useLayoutEffect, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Flip, Draggable, MotionPathPlugin } from "gsap/all";
// import LazyLoad from 'react-lazy-load';
import { LazyLoadImage } from "react-lazy-load-image-component";
import parse from 'html-react-parser'
import {select_tuinuane} from "../constants/tuinuane";

const TUINUANE = () => {

    const [tuinuane, setTuinuane] = useState({})

    useLayoutEffect(() => {

        gsap.registerPlugin(ScrollTrigger, Draggable, Flip, MotionPathPlugin);

        select_tuinuane().then(list => {
            setTuinuane({...list})

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
                    color:"#000",
                })
        
                gsap.to("#NavBar span",{
                    color:"#000",
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

            document.querySelectorAll("img").forEach( (img, index) => {
                gsap.fromTo(img,{ opacity:0,scale:4, delay:2},{
                    // y:0,
                    // stagger:1,
                    ease:"smooth",
                    // yoyo:true,
                    scale:1,
                    opacity:1,
                    duration:1
                })
            })


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
                    {tuinuane.hasOwnProperty("title") ? parse(tuinuane?.title):""}
                    <LazyLoadImage
                    // key={index}
                    alt="late-developers.com"
                    className="homeFrame"
                    // scrollPosition={index}
                    src={tuinuane?.wall}
                    width={200} />
                    {tuinuane.hasOwnProperty("body") ? parse(tuinuane?.body) : ""}
                </article>
                        
        </div>
        </div>
    )
}

export default TUINUANE