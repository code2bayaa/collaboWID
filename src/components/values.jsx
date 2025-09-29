import Footer from "./footer"
import NavBar from "./navBar"
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Flip, Draggable, MotionPathPlugin } from "gsap/all";
import { useLayoutEffect, useState } from "react";
import {select_values} from "../constants/about";

const CORE = () => {

    const [values, setValues] = useState([])
    useLayoutEffect(() => {
        // don't forget to register plugins
        gsap.registerPlugin(ScrollTrigger, Draggable, Flip, MotionPathPlugin);

        select_values().then(list => {
            setValues([...list])
        })
    },[])

    return (
        <div className = "component">
            <div id = "values" className = "inner-components">
            <NavBar/>
            <div className="more-components">
                

            <h1>Our Core Values</h1>
                <article className="moreArticle empowerment" style={{height:"300px"}}>
                    <section>
                        <img src={values.length > 0 ? values[0].img:""} alt="web developers https://late-developers.com" loading="lazy"/>
                        <h2>{values.length > 0 ? values[0].title : ""}</h2>
                        <article>
                            {values.length > 0 ? values[0].body:""}
                        </article>
                    </section>
                </article>
                <article className="moreArticle valueFrame">
                    {
                        values.map(({img, title, body},index) => index > 0 && (
                                    <div key={index}>
                                        <img src={img} alt="late developers web developers https://late-developers.com" loading="lazy"/>
                                        <h2>{title}</h2>
                                        <article>
                                            {body}
                                        </article>
                                    </div>  
                                )
                        )
                    }
                </article>

                </div>
                <Footer/>
            </div>
        </div>
    )
}

export default CORE