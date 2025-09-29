
import Footer from "../footer"
import NavBar from "../navBar"
import { useLayoutEffect, useState } from "react";
import parse from "html-react-parser"
import gsap from "gsap";
import { select_networks } from "../../constants/networks";
const RIGHTS = () => {
    const [networks, setNetwork] = useState([])
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
            setNetwork([...list])
        })

    },[])

    return (
        <div className = "component">
            <div id = "home" className="inner-components">
            <NavBar page = "#home"/>
            <div id="health" className="inner-component">
                        <div className = "headers-line"><div className="education-left"></div><h1>Networks</h1><div className="education-right"></div></div>
                            <section>
                                <img src={networks.length > 3 ? networks[3].img : ""} alt="web developer late-developers https://late-developers.com" className='homeFrame' loading="lazy"/>
                                {networks.length > 3 ? parse(networks[3].body) : ""} 
                            </section>
                        </div>
                        <Footer/>
            </div>
        </div>
    )
}

export default RIGHTS