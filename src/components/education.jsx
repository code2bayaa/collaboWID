
import NavBar from "./navBar"
import { useLayoutEffect, useState } from "react";
import gsap from "gsap";
import { LazyLoadImage } from "react-lazy-load-image-component";
import parse from 'html-react-parser'
import {select_education} from "../constants/education";
const EDUCATION = () => {
    const [education, setEducation] = useState([])

    
    useLayoutEffect(() => {
        select_education().then(list => {
            setEducation([...list])
            function runNavBar(){
                gsap.to("#NavBar",{
                    backgroundImage:"linear-gradient(#748c2449,#748c2449,#748c2449),url(" + list[0].wall2 + ")",
                    height:"40%"
                })
        
                gsap.to(".header-strip",{
                    opacity:0
                })
        
                document.querySelectorAll("#NavBar a").forEach(wrapper => {
                    gsap.to(wrapper,{
                        color:"#fff",
                    })
                })
        
                gsap.to("#NavBar span",{
                    color:"#411342"
                })
            }
            if(window.screen.width > 800)
                runNavBar()
        })
    

        gsap.to("#NavBar p",{
            color:"#fff"
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

        gsap.fromTo("#education article",{
            y : "50%",
            delay:1.5
        },{
            y:"0%"
        })

    },[])

    return (
        <div className = "component">
            <div id="education" className="inner-components">
            <NavBar page = "#home"/>
            <div className="inner-component">
            <div className = "headers-line"><div className="education-left"></div><h1>Education</h1><div className="education-right"></div></div>
                <div>
                                   
                    <article>

                        <LazyLoadImage
                        // key={index}
                        alt="late-developers.com"
                        className="homeFrame"
                        // scrollPosition={index}
                        src={education.length > 0 ? education[0].wall : ""}
                        width={200} /> 
                        {education.length > 0 ? parse(education[0].body) : ""}
                        <div className={ window.screen.width > 800 ? "with-row" : "with-column with-full"}>
                            <div className="stack" style={{"backgroundColor": "#411342b7"}}>
                                <article>
                                    {education.length > 0 ? parse(education[1].body) : ""}
                                </article>
                            </div>
                            <div className="stack" style={{"backgroundColor": "#1b5969c1"}}>
                                <article>
                                    {education.length > 0  ? parse(education[2].body) : ""}
                                </article>
                            </div>
                        </div>
                    </article>
                </div>

            </div>
            </div>
        </div>
    )
}

export default EDUCATION