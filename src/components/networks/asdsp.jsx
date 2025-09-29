
import Footer from "../footer"
import NavBar from "../navBar"
import { useLayoutEffect, useState } from "react";
import gsap from "gsap";
import { select_networks } from "../../constants/networks";
import parse from 'html-react-parser'
const ASDSP = () => {

    const [networks, setNetworks] = useState([])
    useLayoutEffect(() => {

        gsap.fromTo(".education-right",{
            width:"0%"
        },{
            width:"40%",
            duration:1,
            delay:1,
                //             start:"top 60%",
                // end:"bottom bottom"
            // scrollTrigger:{
            //     trigger:wrapper,
            //     scrub:true,
            //     start:"top 60%",
            //     end:"bottom bottom"
            // }
        })

        gsap.fromTo(".education-left",{
            width:"0%"
        },{
            width:"40%",
            duration:1,
            // delay:1,
            // scrollTrigger:{
            //     trigger:wrapper,
            //     scrub:true,
            //     start:"top 60%",
            //     end:"bottom bottom"
            // }
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
                                <img src={networks.length > 7 ? networks[7].img : ""} alt="web developers late-developers https://late-developers.com" className='homeFrame' loading="lazy"/>
                                {networks.length > 7 ? parse(networks[7].body) : ""}
                            </section>
                                      
                    </div>
                    <Footer/>
            </div>
            
        </div>
    )
}

export default ASDSP