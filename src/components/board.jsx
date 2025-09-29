import Footer from "./footer"
import NavBar from "./navBar"
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Flip, Draggable, MotionPathPlugin } from "gsap/all";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiamond } from '@fortawesome/free-solid-svg-icons'
import { useLayoutEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

import { select_members } from "../constants/about";

const BOARD = () => {

    const [members, setMembers] = useState([])
    useLayoutEffect(() => {
        // don't forget to register plugins
        gsap.registerPlugin(ScrollTrigger, Draggable, Flip, MotionPathPlugin);
        select_members().then(list => {
            setMembers([...list])
        })

    },[])

    return (
        <>
            <div className = "component">
                <div className = "inner-components">
                <NavBar/>
                     <div id = "board">
                        <h1><FontAwesomeIcon icon={faDiamond}/> Board Members <FontAwesomeIcon icon={faDiamond}/></h1>
                        <div className="with-row with-full">

                        
                            {
                                members.map(({name, title, img},index) => 
                                    <div className = "teamIcon" key={index}>
                                        {
                                            img ? 
                                                <LazyLoadImage
                                                // key={index}
                                                alt="late developers https://late-developers.com"
                                                height={200}
                                                // scrollPosition={index}
                                                src={img}
                                                width={200} />  
                                                 : ""
                                        }
                                        <h2>{name}</h2>

                                        <p>{title}</p>
                                        CWID
                                    </div>
                                )
                            }
                        </div>

                    </div>
                    <Footer/>
                </div>
            </div>
        </>
    )
}

export default BOARD