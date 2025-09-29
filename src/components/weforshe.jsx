// import slide6 from "../assets/weforshe/weforshe4.jpeg"
import career1 from "../assets/weforshe/WGG.jpg"
import career2 from "../assets/weforshe/weforshe2.jpg"
import career3 from "../assets/weforshe/weforshe3.jpg"
// import career4 from "../assets/weforshe/weforshe (5).jpeg"
import career5 from "../assets/weforshe/weforshe (1).jpeg"
import career6 from "../assets/weforshe/weforshe (2).jpeg"
import career7 from "../assets/weforshe/weforshe (3).jpeg"
import career8 from "../assets/weforshe/weforshe (4).jpeg"
import career9 from "../assets/weforshe/weforshe1.jpg"
import logo from "../assets/weforshe/weforshelogo.jpg"
import Footer from "./footer"
import NavBar from "./navBar"
import { useLayoutEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Flip, Draggable, MotionPathPlugin } from "gsap/all";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { faInstagram,faTwitter } from "@fortawesome/free-brands-svg-icons"
import parse from 'html-react-parser'
import weforshe_constants from "../constants/weforshe"

const WEFORSHE = () => {

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

        gsap.fromTo("#weofrshe article",{
            y : "50%",
            delay:1.5
        },{
            y:"0%"
        })

        // gsap.fromTo(".careerBox img",{
        //     skewY : 5,
        //     delay:1.5
        // },{
        //     skewY:0
        // })

        // gsap.to(".currently",{
        //     x:20,
        //     scrollTrigger:{
        //         scroller : "#careers",
        //         trigger:"#careers section",
        //         start:"top 30%",
        //         scrub:true,
        //         end:"bottom bottom",
        //     }
        // })

    },[])

    return (
        <div className = "component">
            <div id = "home" className="inner-components">
            <NavBar page = "#weofrshe"/>
            <div id="weofrshe" className="inner-component">
                <div style={{display:"flex"}}>
                    <LazyLoadImage src={logo} alt="web developers https://late-developers.com" style={{width:"10%"}} loading="lazy"/>
                    <div className="weforsheBox-link">
                        <a href = "https://x.com/WeForSheMovKn" target = "_blank" without rel="noreferrer"  >
                            <FontAwesomeIcon icon={faTwitter}/>
                        </a>
                        <a href = "https://www.instagram.com/weforshemovkn/" target = "_blank" without rel="noreferrer"  >
                            <FontAwesomeIcon icon={faInstagram}/>
                        </a>
                    </div>
                </div>

                            <div className = "headers-line"><div className="education-left"></div><h1>
                            
                                {weforshe_constants[0].title}</h1><div className="education-right"></div></div>
                                
                                {/* <div style={{margin:"1%",width:"98%",height:"200px"}}>
                                    <LazyLoadImage src={career4} alt="we for she image" className='weforsheFrame' loading="lazy"/>

                                </div> */}
                                <div className="career-title">
                                    <div className="career-box">

                                        {/* <LazyLoadImage src={career6} alt="we for she image" className='teamFrame' loading="lazy"/> */}

                                        {parse(weforshe_constants[0].body)}
                                    </div>
                                    
                                </div>

                                <div className="weforsheBox">
                                    
                                    <article>
                                        {parse(weforshe_constants[1].body)}
                                    </article>
                                    <div className="careerBox">
                                        <div>
                                            <LazyLoadImage
                                            // key={index}
                                            alt="late-developers.com"
                                            height={200}
                                            // scrollPosition={index}
                                            src={career1}
                                            width={200} />

                                        </div>
                                        <div>
                                            <LazyLoadImage
                                            // key={index}
                                            alt="late-developers.com"
                                            height={200}
                                            // scrollPosition={index}
                                            src={career2}
                                            width={200} />

                                        </div>
                                        <div>
                                            <LazyLoadImage
                                            // key={index}
                                            alt="late-developers.com"
                                            height={200}
                                            // scrollPosition={index}
                                            src={career3}
                                            width={200} />

                                        </div>
                                        <div>
                                            <LazyLoadImage
                                            // key={index}
                                            alt="late-developers.com"
                                            height={200}
                                            // scrollPosition={index}
                                            src={career9}
                                            width={200} />

                                        </div>
                                        <div>
                                            <LazyLoadImage
                                            // key={index}
                                            alt="late-developers.com"
                                            height={200}
                                            // scrollPosition={index}
                                            src={career5}
                                            width={200} />

                                        </div>
                                        <div>
                                            <LazyLoadImage
                                            // key={index}
                                            alt="late-developers.com"
                                            height={200}
                                            // scrollPosition={index}
                                            src={career6}
                                            width={200} />

                                        </div>
                                        <div>
                                            <LazyLoadImage
                                            // key={index}
                                            alt="late-developers.com"
                                            height={200}
                                            // scrollPosition={index}
                                            src={career7}
                                            width={200} />

                                        </div>
                                        <div>
                                            <LazyLoadImage
                                            // key={index}
                                            alt="late-developers.com"
                                            height={200}
                                            // scrollPosition={index}
                                            src={career8}
                                            width={200} />

                                        </div>
                                        
                                        
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

export default WEFORSHE