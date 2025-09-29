
import priority from "../assets/carreers/menu1.jpg"

import NavBar from "./navBar"
import { useLayoutEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Flip, Draggable, MotionPathPlugin } from "gsap/all";

const PRIORITY = () => {

    function runNavBar(){
        gsap.to("#NavBar",{
            backgroundImage:"linear-gradient(#748c2449,#748c2449,#748c2449),url(" + priority + ")",
            height:"40%"
        })

        gsap.to(".header-strip",{
            opacity:0
        })


        gsap.to(".header-info",{
            color:"#ABB957",
        })

        gsap.to("#NavBar span",{
            color:"#ABB957",
        })
    }
    
    useLayoutEffect(() => {

        gsap.registerPlugin(ScrollTrigger, Draggable, Flip, MotionPathPlugin);

        document.querySelectorAll("#NavBar a").forEach(wrapper => {
            gsap.to(wrapper,{
                color:"#ABB957",
            })
        })




        if(window.screen.width > 800)
            runNavBar()

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
                <h2>Priority Focus</h2>
                    


                </article>
        </div>
        </div>
    )
}

export default PRIORITY