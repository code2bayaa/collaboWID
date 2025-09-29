import Footer from "../footer"
import NavBar from "../navBar"
import { useLayoutEffect, useState } from "react";
import gsap from "gsap";
import { select_networks } from "../../constants/networks";
import parse from 'html-react-parser'

const KANCO = () => {
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
                                <img src={networks.length > 9 ? networks[10].img : ""} alt="late developers https://late-developers.com" className='homeFrame' loading="lazy"/>
                                {networks.length > 9 ? parse(networks[10].body) : ""}
                            </section>
                        </div>
                        <Footer/>
            </div>
        </div>
    )
}

export default KANCO