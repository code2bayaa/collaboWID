
import Footer from "./footer"
import slide8 from "../assets/home/project7.jpeg"
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Flip, Draggable, MotionPathPlugin } from "gsap/all";
import { useLayoutEffect } from "react";
import {Link} from "react-router-dom"
import NavBar from "./navBar"
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import NAVIGATION from "../constants/navigation"
// import LazyLoad from 'react-lazy-load';
import { LazyLoadImage } from "react-lazy-load-image-component"

const Projects = () => {

    const open = [
        {
            title : "Women Gaining Ground Project:",
            to : "/projects/ground"
        },
        {
            title : "Tabasamu ya Wamama Project -Funded by Forum CIV",
            to:"/projects/tabasamu"
        },
        {
            title : "Badilika",
            to:"/badilika"
        },
        {
            title : "Tuinuane",
            to:"/tuinuane"
        },
        {
            title:"Support Adolescent Sexual Reproductive Health Project in Mombasa and Kilifi (TIKO Platform)",
            to:"/projects/reproductive"
        }
    ]

    const close = [
        {
            title:"Jijenge Jiboreshe Youth Initiative;",
            to:"/projects/jijenge"
        },
        {
            title:"Maternal Child Health Project:",
            to:"/projects/maternal"
        },
        {
            title:"Priority Focus",
            to:"/projects/priority"
        },
        {
            title:"She Trade Project",
            to:"/projects/she"
        },
        {
            title:"East Africa Young Women’s Leadership Mentorship Initiative (EAYWLMI):",
            to:"/projects/east"
        },
        {
            title:"Countering Violent Extremism through Anti-Corruption in Eastern Africa:",
            to:"/projects/violent"
        }
    ]

    useLayoutEffect(() => {

        // NAVIGATION(navBar, "#projects")

        // don't forget to register plugins
        gsap.registerPlugin(ScrollTrigger, Draggable, Flip, MotionPathPlugin);

        document.querySelectorAll("#NavBar a").forEach(wrapper => {
            gsap.to(wrapper,{
                color:"#ABB957",
            })
        })


        gsap.to(".header-info",{
            color:"#ABB957",
        })

        gsap.to("#NavBar span",{
            color:"#ABB957",
        })
        


    },[])
    
    // const contentHTML = () => {

    //     return (

    //     )
    // }

    return (
        <div className = "component">
            {/* <Header contentHTML = {contentHTML} url="#projects"/> */}
            <div id = "projects" className = "inner-components">
            <NavBar page = "#projects"/>
            {/* <img src={logo} alt="logo" className='logo'/> */}
            <div id = "project-content">
            <LazyLoadImage
            // key={index}
            alt="web developers https://late-developers.com"
            style={{width:window.screen.width > 800 ? "auto":"100%"}}
            height={200}
            // scrollPosition={index}
            src={slide8}
            width={200} />   
            {/* <LazyLoad threshold={0.95} onContentVisible={() => {console.log('loaded!')}}>
            <img src={slide8} alt="project image" className='partnerFrame' loading="lazy"/>
            </LazyLoad> */}
            <div id = "projects_aside">
                <div  className="projectStack">
                    <h2>Ongoing Projects</h2>
                        {
                            open.map(({title,to},index) => 
                                <div key = {index} style={index%2 ? {background:"#fff"} : {background:"rgba(207, 177, 177, 0.687)"}}>
                                    <h3>{title}</h3>
                                    <p><Link to = {to}>Read More <FontAwesomeIcon icon={faCaretDown}/></Link></p>
                                </div>
                            )
                        }
                </div>
                <div  className="projectStack">
                    <h2>Past Projects</h2>
                        {
                            close.map(({title,to},index) => 
                                <div key = {index} style={index%2 ? {background:"#fff"} : {background:"rgba(207, 177, 177, 0.687)"}}>
                                    <h3>{title}</h3>
                                    <p><Link to = {to}>Read More <FontAwesomeIcon icon={faCaretDown}/></Link></p>
                                </div> 
                            )
                        } 

                </div>

            </div>
            </div>
            <Footer/>
            </div>
        </div>
    );
}

export default Projects