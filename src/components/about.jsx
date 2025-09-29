
import Footer from "./footer"
import NavBar from "./navBar"
// import { LazyLoadImage } from 'react-lazy-load-image-component';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Flip, Draggable, MotionPathPlugin } from "gsap/all";
import { useLayoutEffect, useState } from "react";
import {Link} from "react-router-dom"
import { faGem, faCaretRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import parse from 'html-react-parser'
import {select_about} from "../constants/about";

const About = () => {

    const [about, setAbout] = useState([])
    
    useLayoutEffect(() => {
        // don't forget to register plugins
        gsap.registerPlugin(ScrollTrigger, Draggable, Flip, MotionPathPlugin);

        // gsap.utils.toArray(".about-component").forEach( (wrapper, index) => {

        // document.querySelectorAll("#dogma li").forEach((wrapper) => {
        //     gsap.fromTo(wrapper,{x:"-98%",opacity:0},{
        //         x:"0%",
        //         duration:2,
        //         opacity:1,
        //         delay:0.4,
        //         // scrollTrigger:{
        //         //     trigger : "#dogma",
        //         //     scroller : "#about",
        //         //     start : "top top",
        //         //     end : "bottom bottom",
        //         //     scrub : true,
        //         // }
        //     })
        // })

        document.querySelectorAll("#about-info article").forEach( wrapper => {
            gsap.fromTo(wrapper,{
                opacity:0,
                scale:0.5
            },{
                scale:1,
                duration:2,
                opacity:1,
                delay:0.4
            })


        })

        if(window.screen.width > 800){

            document.querySelectorAll(".about-component").forEach( (wrapper, index) => {
                const photos = gsap.utils.toArray(".aboutFrame:not(:first-child)")
    
                gsap.set(photos,{
                    opacity:0,
                    scale:0.5
                    // yPercent:101
                })
                gsap.to(photos[index],{
                    // x:"-100%",
                    // yPercent:0,
                    zIndex:1 + Number(index),
                    scale:1,
                    // stagger:1,
                    ease:"smooth",
                    
                    opacity:1,
                    duration:1,
                    scrollTrigger:{
                        trigger : wrapper,
                        scroller : "#about",
                        start : "top top",
                        end : "bottom 15%",
                        // pin:"#about-gallery",
                        scrub : true,
                        // markers:true
                    }
                })
    
                // const stuck = gsap.to("#about-box",{
                //     position:"absolute",
                //     // scrub:true
                // })
    
                // if(index === self.length)
                //     stuck.kill()
    
                // gsap.fromTo("#dogma h2",{
                //     opacity:0,
                //     duration:2,
                //     delay:0.5,
                //     scale:1.5
                // },{
                //     opacity:1,
                //     scale:1.5,
                //     ease:"smooth",
                //     scrollTrigger:{
                //         trigger : "#about-gallery",
                //         scroller : "#about",
                //         start : "top 5%",
                //         end : "bottom bottom",
                //         // pin:"#about-gallery",
                //         scrub : false,
                //         // markers:true
                //     }
                // })

                // gsap.fromTo("#dogma div",{
                //     opacity:0,
                //     // duration:2,
                //     // delay:3,
                //     y:100
                // },{
                //     duration:1,
                //     opacity:1,
                //     y:0,
                //     ease:"smooth",
                //     scrollTrigger:{
                //         trigger : "#about-gallery",
                //         scroller : "#about",
                //         start : "top 5%",
                //         end : "bottom bottom",
                //         // pin:"#about-gallery",
                //         scrub : false,
                //         // markers:true
                //     }
                // })

                gsap.to("#NavBar",{
                    height:"40%",
                    scrollTrigger:{
                        trigger : "#about-gallery",
                        scroller : "#about",
                        start : "top 10%",
                        end : "bottom 70%",
                        scrub : true
                    }
                })
                // gsap.fromTo("#dogma p",{
                //     opacity:0,
                //     duration:2,
                //     delay:2.5,
                //     scale:2.5
                // },{
                //     opacity:1,
                //     scale:1,
                //     ease:"smooth",
                //     scrollTrigger:{
                //         trigger : "#about-gallery",
                //         scroller : "#about",
                //         start : "top 10%",
                //         end : "bottom 70%",
                //         // pin:"#about-gallery",
                //         scrub : true,
                //         // markers:true
                //     }
                // })
                
        


            // const ctx = gsap.timeline()
            // ctx.to("#about-gallery",{
            //     opacity:1
            // })
        })

        // gsap.fromTo("#about-gallery",{opacity:1},{
        //     opacity:0,
        //     duration:0.4,
        //     scrollTrigger: {
        //         scroller:"#about",
        //         trigger:"#board",
        //         start:"top top",
        //         end: "bottom bottom",
        //         scrub:true
        //         // onEnd:() => {
        //         //     console.log("ending...")
        //         //     about.kill()
        //         // },
        //         // onLeave:() => {
        //         //     console.log("leaving...")
        //         //     about.kill()
        //         // },
        //         // onLeaveBack:() => {
        //         //     about.kill()
        //         // }
        //         // togglActions:"play reverse revers reverse"
        //     }
        // })
    }
        select_about().then(list => {
            setAbout([...list])
            console.log(list,"about list")
            function runNavBar(){
                gsap.to("#NavBar",{
                    backgroundImage:"linear-gradient(#fff,#41134246,#fff),url(" + list[0].wall3 + ")",
                    height:"80%",
                    scrub:true
                })
        
                gsap.to("#NavBar a",{
                    color:"#000"
                })
        
                gsap.to(".header-strip",{
                    opacity:0
                })
        
                gsap.to("#NavBar span",{
                    color:"#000"
                })
        
                gsap.to("#NavBar p",{
                    color:"#000"
                })
            }
            if(window.screen.width > 800)
                runNavBar()
        })

    },[])

    // const contentHTML = () => {

    //     return (

    //     )
    // }
    return (
        <div className = "component">
            {/* <Header contentHTML = {contentHTML} url="#about"/> */}
            <div id = "about" className = "inner-components">
            <NavBar style={{backgroundImage:`linear-gradient(#57396F,#57396F,#57396F),url( ${about.length > 0 ? about[0].wall2:""} )`}} page = "#about"/>
                <div id="about-gallery">

                    <div id = "dogma">
                        <div className={window.screen.width > 800 ? "with-half" : "with-full" }>
                            <section>
                                <article>
                                    {about.length > 0 ? parse(about[1].body) : ""}
                                </article>

                            </section>    
                        </div>
                        <div className={window.screen.width > 800 ? "with-half" : "with-full" }>
                            <section>
                                <article>
                                    {about.length > 0 ? parse(about[2].body) : ""}
                                </article>

                            </section>
                            {/* <img src={brand} alt="about image" className="with-full" loading="lazy"/> */}
                        </div>

                        {/* <article className="background-black">
                            <h1>Motto</h1>
                            <ul>
                                <li>Investing in Women Youth and Children.</li>
                            </ul>
                            
                        </article> */}
                    </div>
                    
                </div>
                <h1>Who We Are</h1>
                    <div id = "snippet">
                    
                        <article>
                            {about.length > 0 ? parse(about[3].body) : ""}
                        </article>
                        <article>
                            {about.length > 0 ? parse(about[4].body) : ""}
                        </article>
                        <article>
                            {about.length > 0 ? parse(about[5].body):""}
                        </article>
                        
                    </div>
                <div id = "about-info">
                    <div id = "us" className="about-component">
                        <article>
                            <span><FontAwesomeIcon icon={faGem}/></span>
                            <h1>What We Do:</h1>
                            Ours is diversity, read more...:

                            <p><Link to = "/about/what">More <FontAwesomeIcon icon={faCaretRight}/></Link></p>
                        </article>
                    </div>

                    <div className = "about-component">
                        <article>
                        <span><FontAwesomeIcon icon={faGem}/></span>
                            <h1>Core Values</h1>
                            We cherish and adhere to the following
                            <p><Link to = "/about/values">More <FontAwesomeIcon icon={faCaretRight}/></Link></p>
                            
                        </article>

                    </div>
                    <div className = "about-component">
                        <article>
                        <span><FontAwesomeIcon icon={faGem}/></span>
                            <h1>Our Team</h1>
                            Collaboration of Women In Development-CWID team... 
                            <p><Link to = "/about/team">More <FontAwesomeIcon icon={faCaretRight}/></Link></p>
                        </article>
                    </div>
                    <div className = "about-component">

                        <article>
                        <span><FontAwesomeIcon icon={faGem}/></span>
                            <h1>Approach</h1>
                            <h2>Theory of Change </h2>
                            CWID believes that...
                            <p><Link to = "/about/approach">More <FontAwesomeIcon icon={faCaretRight}/></Link></p>
                        </article>
                    </div>
                </div>
                <div>
                    {/* <div className="careerBoxBoard">
                         <LazyLoad offset={400}Image src={career1} alt="career image" loading="lazy"/>
                        <section>
                            <img src={open} alt="about image" className="quotes" loading="lazy"/>
                                <span>Solidarity between women can be a powerful force of change and can influence future development in ways favorable not only to women but men.</span>
                            <img src={close} alt="about image" className="quotes" loading="lazy"/>
                        </section>

                    </div>
                    <div className="careerBoxBoard">
                        
                        <section>
                        <img src={open} alt="about image" className="quotes" loading="lazy"/>
                            <span>There comes a time where humanity is called to shift to a new level of consiousness. That time is now.</span>
                        <img src={close} alt="about image" className="quotes" loading="lazy"/>
                        </section>
                         <LazyLoad offset={400}Image src={career2} alt="career image" loading="lazy"/>
                    </div>
                    <div className="careerBoxBoard">
                         <LazyLoad offset={400}Image src={career3} alt="career image" loading="lazy"/>
                        <section>
                        <img src={open} alt="about image" className="quotes" loading="lazy"/>
                            <span>Women need respect, support and opportunity. Not pity.</span>
                        <img src={close} alt="about image" className="quotes" loading="lazy"/>

                        </section>
                    </div> */}
                                    {/* 
                                    
                                     <LazyLoad offset={400}Image src={career4} alt="career image" loading="lazy"/>
                                     <LazyLoad offset={400}Image src={career5} alt="career image" loading="lazy"/>
                                     <LazyLoad offset={400}Image src={career6} alt="career image" loading="lazy"/>
                                     <LazyLoad offset={400}Image src={career7} alt="career image" loading="lazy"/>
                                     <LazyLoad offset={400}Image src={career8} alt="career image" loading="lazy"/> */}
                </div>

            {/* </div> */}



            <Footer/>
            </div>
        </div>
    );
}

export default About