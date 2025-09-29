

import NavBar from "./navBar"
import { useLayoutEffect, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Flip, Draggable, MotionPathPlugin } from "gsap/all";
import { LazyLoadImage } from "react-lazy-load-image-component";
import parse from 'html-react-parser'
import {select_badilika} from "../constants/badilika";

const BADILIKA = () => {
    const [badilika, setBadilika] = useState({})
    useLayoutEffect(() => {

        gsap.registerPlugin(ScrollTrigger, Draggable, Flip, MotionPathPlugin);

        select_badilika().then(list => {
            setBadilika({...list})
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

        // gsap.to(".header-info",{
        //     color:"#ABB957",
        // })

        // gsap.to("#NavBar span",{
        //     color:"#ABB957",
        // })

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
                    {badilika.hasOwnProperty("title") ? parse(badilika?.title):""}
                    {/* <LazyLoad threshold={0.95} onContentVisible={() => {console.log('loaded!')}}>
                        <img src={badilika?.wall} alt="project image" className='projectFrame' loading="lazy"/>
                    </LazyLoad> */}
                    <LazyLoadImage
                            // key={index}
                            alt="late-developers.com"
                            className="homeFrame"
                            // scrollPosition={index}
                            src={badilika?.wall}
                            width={200} />  
                    {badilika.hasOwnProperty("body") ? parse(badilika?.body):""}
                </article>
                <article style={{width:"100%"}}>
                    <h3>Learn More</h3>
                    <a href={badilika.hasOwnProperty("file")?badilika?.file : ""} className="pdf" target="_blank" without rel="noreferrer" download><p>{badilika.hasOwnProperty("file_name")? badilika?.file_name : "" }</p>DOWNLOAD</a>
                    <a href={badilika.hasOwnProperty("file2")?badilika?.file2:""} className="pdf" target="_blank" without rel="noreferrer" download><p>{badilika.hasOwnProperty("file_name2")? badilika?.file_name2 : "" }</p>DOWNLOAD</a>
                </article>
                        
            </div>
        </div>
    )
}

export default BADILIKA