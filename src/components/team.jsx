import Footer from "./footer"
import NavBar from "./navBar"
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Flip, Draggable, MotionPathPlugin } from "gsap/all";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiamond } from '@fortawesome/free-solid-svg-icons'
import { useLayoutEffect, useState } from "react";
import { select_team } from "../constants/about";


const TEAM = () => {

    const [team, setTeam] = useState([])

    useLayoutEffect(() => {
        // don't forget to register plugins
        gsap.registerPlugin(ScrollTrigger, Draggable, Flip, MotionPathPlugin);

        select_team().then(list => {
            setTeam([...list])
        })
    },[])

    return (
        <>
            <div className = "component">
                <div className = "inner-components" style={{backgroundColor: "#F4F7F7"}}>
                    <NavBar/>
                    <div style={{width:"100%"}}>
                        <h1><FontAwesomeIcon icon={faDiamond}/> {team.length > 0 ? team[0].title : ""} <FontAwesomeIcon icon={faDiamond}/></h1>
                        <h2>{team.length > 0 ? team[0].description : ""}</h2>
                        
                        <img src={team.length > 0 ? team[0].img : ""} alt="web developers https://late-developers.com" className='mainTeamFrame' loading="lazy"/>
                        
                    </div>
                    
                <div id = "team">
                    {
                        team.map(({img, title, description},index) => index > 0 && (
                                    <div className = "teamIcon" key={index}>         
                                        <img src={img} alt="late developers https://late-developers.com" className='teamFrame' loading="lazy"/>
                                        <h2>{title}</h2>
                                        <p>{description}</p>        
                                    </div>
                                )
                            
                        )
                    }
                </div>
                <Footer/>
                </div>
            </div>
        </>
    )
}

export default TEAM