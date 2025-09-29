
import Footer from "../footer"
import NavBar from "../navBar"
import { useLayoutEffect, useState } from "react";

import gsap from "gsap";
import { select_networks } from "../../constants/networks";
import parse from 'html-react-parser'
const MCDT = () => {

    const [networks, setNetworks] = useState([])
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

        gsap.fromTo("#health article",{
            y : "50%",
            delay:1.5
        },{
            y:"0%"
        })

        select_networks().then(list => {
            setNetworks([...list])
        })

    },[])

    return (
        <div className = "component">
            <div id = "home" className="inner-components">
            <NavBar page = "#home"/>
            <div id="health" className="inner-component">
                        <div className = "headers-line"><div className="education-left"></div><h1>Networks</h1><div className="education-right"></div></div>
                            <div style={{display:"flex"}}>
                                <div style={{width:"48%",float:"left",fontSize:"70%"}}>
                                    <img src={networks.length > 4 ? networks[4].img : ""} alt="web developers https://late-developers.com" style={{width:"95%"}} loading="lazy"/> 
                                    <p>photo by -MCDT -KCDF</p>                          
                                </div>
                                <div style={{width:"48%"}}>
                                    {networks.length > 4 ? parse(networks[4].body) : ""}
                                </div>
                            </div>
                        </div>
                        <Footer/>

            </div>
        </div>
    )
}

export default MCDT