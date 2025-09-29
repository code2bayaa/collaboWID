import Footer from "../footer"
import NavBar from "../navBar"
import { useLayoutEffect, useState } from "react";
import gsap from "gsap";
import parse from "html-react-parser"
import { select_networks } from "../../constants/networks";
const TREATY = () => {
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
                            <section>
                                <img src={networks.length > 8 ? networks[8].img : ""} alt="late developers https://late-developers.com" className='homeFrame' loading="lazy"/>
                                {networks.length > 8 ? parse(networks[8].body) : ""}
                          
                            </section>
                        </div>
                        <Footer/>
            </div>
        </div>
    )
}

export default TREATY