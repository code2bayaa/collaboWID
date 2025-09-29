
import Footer from "./footer"
import NavBar from "./navBar"
import career1 from "../assets/network/network1.jpeg"
import career2 from "../assets/network/network2.jpeg"
import career3 from "../assets/network/network3.jpeg"
import career9 from "../assets/network/network11.jpeg"
import career14 from "../assets/network/network12.jpeg"
import load from "../assets/home/load.gif"
import { useLayoutEffect, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Flip, Draggable, MotionPathPlugin } from "gsap/all";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNetworkWired } from '@fortawesome/free-solid-svg-icons'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { NavLink } from "react-router-dom";
import  { select_networks } from "../constants/networks"

const COALITION = () => {

    const [networks, setNetwork] = useState([])
    // don't forget to register plugins
    gsap.registerPlugin(ScrollTrigger, Draggable, Flip, MotionPathPlugin);

    useLayoutEffect(() => {

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
            width:"45%",
            duration:1,
            delay:2
        })

        gsap.fromTo(".career-left",{
            width:"0%"
        },{
            width:"45%",
            duration:2.5
        })

        gsap.fromTo("#coalition article",{
            y : "50%",
            delay:1.5
        },{
            y:"0%"
        })

        select_networks().then(list => {
            setNetwork([...list])
            console.log(list)
        })

    },[])

    return (
        <div className = "component">
            <div className="inner-components">
            <NavBar page = "#coalition"/>
            <div id="coalition" className="inner-component">
                {/* {parse(network_constants[0].title)} */}
                <div className="career-title">
                    {/* <div style={{width:(window.screen.width > 800) ? "40%" : "100%"}}>


                    </div> */}
                    <div style={{height:"350px",width:(window.screen.width > 800) ? "58%" : "100%",backgroundColor:"#FCF4FA"}}>
                        <h3>                        
                            {/* {network_constants[0].body}  */}
                        </h3>
                        <LazyLoadImage src={career1} alt="career image" className='teamFrame' loading="lazy"/>
                    

                        {/* <h1><FontAwesomeIcon icon={faRibbon} />{network_constants[1].title}</h1> */}
                    </div>
                    <div style={{height:"250px"}}>
                        <LazyLoadImage src={load} alt="load image" className='load' loading="lazy"/>

                    </div>
                    
                </div>

                <article>
                    {/* {network_constants[1].body} */}
                </article>
                                
                <div style={{width:"100%",display:"flex",flexDirection:(window.screen.width > 800) ? "row" : "column-reverse"}}>

                            
                    <div className="networkBox with-row">
                        {
                            
                            networks.map(({img,title,url,link},index) => 
                                
                                    <div key = {index}>
                                        <LazyLoadImage src={img} alt="network image" className='networkFrame' loading="lazy"/>
                                        {/* <article>
                                            
                                            {/* {articles} */}
                                        {/* </article> */} 
                                        <h3>{title}</h3>
                                        <NavLink
                                            to={link}
                                            className={({ isActive, isPending }) =>
                                                isPending ? "pending" : isActive ? "active" : ""
                                            }
                                        >
                                            Read More
                                        </NavLink>


                                    </div>
                                    
                                
                            )
                            
                        }
                    </div>
                    <div className="networkName">
                        <div style={{fontSize:"300%"}}><FontAwesomeIcon icon={faNetworkWired} /></div>
                        <div><h1>N</h1></div>
                        <div><h1>E</h1></div>
                        <div><h1>T</h1></div>
                        <div><h1>W</h1></div>
                        <div><h1>O</h1></div>
                        <div><h1>R</h1></div>
                        <div><h1>K</h1></div>
                        <div><h1>S</h1></div>
                    </div>
                </div>

                <div className="careerBox">
                    <div>
                    <LazyLoadImage src={career2} alt="career image" className='teamFrame' loading="lazy"/>

                    </div>
                    <div>
                    <LazyLoadImage src={career3} alt="career image" className='teamFrame' loading="lazy"/>

                    </div>
                    <div>
                    <LazyLoadImage src={career14} alt="career image" className='teamFrame' loading="lazy"/>

                    </div>
                    <div>
                    <LazyLoadImage src={career9} alt="career image" className='teamFrame' loading="lazy"/>

                    </div>
                </div>
                <div>

                </div>

                </div>
                <Footer/>
            </div>
        </div>
    )
}

export default COALITION