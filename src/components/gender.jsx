
import NavBar from "./navBar"
import { useLayoutEffect, useState } from "react";
import gsap from "gsap";
import { LazyLoadImage } from "react-lazy-load-image-component";
import parse from 'html-react-parser'
import {select_gender} from "../constants/gender";

const GENDER = () => {
    const [gender_constants, setGender] = useState({})

    
    useLayoutEffect(() => {

        select_gender().then(list => {
            setGender({...list})
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

        gsap.fromTo("#gender article",{
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
            <div id="gender" className="inner-component">
                <div className = "headers-line"><div className="education-left"></div><h1>Gender</h1><div className="education-right"></div></div>
                    <section>
                        <article>
                            <LazyLoadImage
                                // key={index}
                                alt="late-developers.com"
                                className="homeFrame"
                                // scrollPosition={index}
                                src={gender_constants.hasOwnProperty('wall') ? gender_constants?.wall: ""}
                                width={200} /> 
                            {gender_constants.hasOwnProperty('body') ? parse(gender_constants?.body):""}
                        </article>

                    </section>

                </div>
            </div>
        </div>
    )
}

export default GENDER