
import Footer from "./footer"
import NavBar from "./navBar"
import { useLayoutEffect, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Flip, Draggable, MotionPathPlugin } from "gsap/all";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNewspaper } from '@fortawesome/free-solid-svg-icons'
import { select_all_news } from "../constants/news"
import parse from "html-react-parser"

const NEWS = () => {

    const [news, setNews] = useState([])
    // don't forget to register plugins
    gsap.registerPlugin(ScrollTrigger, Draggable, Flip, MotionPathPlugin);

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

        gsap.fromTo("#coalition article",{
            y : "50%",
            delay:1.5
        },{
            y:"0%"
        })
        select_all_news().then(list => {
            setNews([...list])
        })

    },[])

    return (
        <div className = "component">
            <div className="inner-components">
                <NavBar/>
                <div className="news-article" style={{backgroundImage:`linear-gradient(rgba(0,0,0,0.95),rgba(0,0,0,0.45),rgba(0,0,0,0.65)),url(${news.length > 0 ? news[news.length - 1].img : ""})`}}>
                    <h3>                        
                        {news.length > 0 ? news[news.length - 1].title : ""}
                    </h3>
                </div>
                <h1 className="fontIconFrame"><FontAwesomeIcon icon={faNewspaper} /> </h1>
                <div className = "headers-line"><div className="education-left"></div><h1>{news.length > 0 ? news[news.length - 1].date : ""}</h1><div className="education-right"></div></div>

                    <article className="articleFrame">
                        {news.length > 0 ? parse(news[news.length - 1].article) : ""}
                    </article>
                        
                <Footer/>
            </div>
        </div>
    )
}

export default NEWS