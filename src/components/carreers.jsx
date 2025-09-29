
import load from "../assets/home/load.gif"
import Footer from "./footer"
import NavBar from "./navBar"
import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Flip, Draggable, MotionPathPlugin } from "gsap/all";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import $ from "jquery"
import {select_careers} from "../constants/careers";

const CAREERS = () => {

    const [career, setCareer] = useState([])
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

        gsap.fromTo("#careers article",{
            y : "50%",
            delay:1.5
        },{
            y:"0%"
        })

        gsap.fromTo(".careerBox img",{
            skewY : 5,
            delay:1.5
        },{
            skewY:0
        })

        gsap.to(".currently",{
            x:20,
            scrollTrigger:{
                scroller : "#careers",
                trigger:"#careers section",
                start:"top 30%",
                scrub:true,
                end:"bottom bottom",
            }
        })

        select_careers().then(list => {
            setCareer([...list])
        })

    },[])

    const btnRef = useRef();
    const [clicked, setClicked] = useState(true)

      const seeMore = () => {
        console.log(clicked)
        if(clicked){
            $("#listed").slideDown("slow")
            btnRef.current.innerHTML = "view less"
        }else{
            $("#listed").slideUp("slow")
            btnRef.current.innerHTML = "See job details"
        }
        setClicked(!clicked)
      }

    return (
        <div className = "component">
            <div id="careers" className="inner-components">
            <NavBar page = "#home"/>
                            <div className = "headers-line"><div className="education-left"></div><h1>Careers</h1><div className="education-right"></div></div>
                                <div className="career-title">
                                    <h1>-We Are Hiring !-</h1>
                                    <div className="loadFrame" style={{marginLeft:"20%"}}>
                                        <LazyLoadImage src={load} alt="career image" loading="lazy"/>
                                    </div>
                                    
                                </div>
                                <div className="careers-board">

                                
                                <article>                        
                                        In your application, include a motivation letter (one page), recommendation letter from current or previous work and a detailed curriculum vitae with three referees.
                                </article>
                                <article className="jobDetails">
                                    

                                    Attach the required documents through the form below.

                                    Deadline Lapse! We are no longer accepting applications.

                                    <p><button ref={btnRef} onClick={seeMore}>
                                        See job details
                                    </button></p>
                                    <div id="listed" className="with-none">
                                        <article>
                                            {career.length > 0 ? career[0].body:""}
                                        </article>


                                    </div>

                                </article>
                                <div  className="short">

                                </div>

                                

                                <div className="bodyFrame">
                                    <article>Send your applications with CV, referees and attatchments to procurement@collabowid.org</article>
                                    {/* <form
                                        ref={formRef}
                                        onSubmit={handleSubmit}
                                        className='body-form'
                                    >
                                    <div className="body-cell">
                                        <label className='body-label text-black-500 font-semibold'>
                                            Name
                                        </label>
                                        <input
                                            type='text'
                                            name='name'
                                            className='input'
                                            placeholder='Name'
                                            required
                                            value={form.name}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="body-cell">
                                        <label className='body-label text-black-500 font-semibold'>
                                            Email
                                        </label>
                                        <input
                                            type='email'
                                            name='email'
                                            className='input'
                                            placeholder='late-developer@hotmail.com'
                                            required
                                            value={form.email}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="body-cell">
                                        <input
                                            name='subject'
                                            className='input'
                                            placeholder='subject'
                                            value="VACANCY"
                                            onChange={handleChange}
                                            readonly
                                        />
                                    </div>
                                    <div className="body-cell">
                                        <label className='body-label text-black-500 font-semibold'>
                                            Your Message
                                        </label>
                                        <textarea
                                            name='message'
                                            rows='4'
                                            className='textarea'
                                            placeholder='Write your thoughts here...'
                                            value={form.message}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <button
                                        type='submit'
                                        disabled={loading}
                                        className='btn'
                                    >
                                        {loading ? "Sending..." : "Submit"}
                                    </button>
                                </form> */}
                            </div>
                            </div>

                        {/* </div> */}
                <Footer/>
            </div>
        </div>
    )
}

export default CAREERS