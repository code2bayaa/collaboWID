
import load from "../assets/home/load.gif"
import Footer from "./footer"
import NavBar from "./navBar"
import { useLayoutEffect, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Flip, Draggable, MotionPathPlugin } from "gsap/all";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import parse from 'html-react-parser'
import { select_attachments } from "../constants/attachments";
const ATTATCHMENTS = () => {

    const [attachments, setAttachments] = useState([])
    // don't forget to register plugins
    gsap.registerPlugin(ScrollTrigger, Draggable, Flip, MotionPathPlugin);

    useLayoutEffect(() => {

        select_attachments().then(list => {
            setAttachments([...list])
        })
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

        gsap.fromTo(".career-right",{
            width:"0%"
        },{
            width:"40%",
            duration:1,
            delay:2
        })

        gsap.fromTo(".career-left",{
            width:"0%"
        },{
            width:"40%",
            duration:1,
            delay:1
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
                trigger:".currently",
                start:"top 30%",
                scrub:true,
                end:"bottom bottom",
            }
        })

    },[])

    return (
        <div className = "component">
            <div id="careers" className="inner-components">
            <NavBar page = "#home"/>
            {/* <div className="inner-component"> */}
                            <div className = "headers-line"><div className="education-left"></div><h1>Industrial</h1><div className="education-right"></div></div>

                            <div className = "headers-line"><div className="career-left"></div><h1>Attachments</h1><div className="career-right"></div></div>
                                <div className="career-title">
                                    
                                    <div className="loadFrame" style={{marginLeft:"25%"}}>
                                        <LazyLoadImage src={load} alt="career image" loading="lazy"/>
                                    </div>
                                    
                                </div>
                                <h1 style={{textAlign:"center"}}>-AVAILABLE OPPORTUNITIES !-</h1>
                                <div className="jobDetails">

                                <div className={(window.screen.width > 800 ? "with-row" : "with-column") + " consultancyFrame"}>
                                    <div style={{width:(window.screen.width > 800 ? "50%" : "100%"),height:(window.screen.width > 800 ? "100%" : "auto")}}>
                                        <LazyLoadImage src={attachments.length > 0 ? attachments[0].wall : ""} alt="career image" className='with-image with-height-350' loading="lazy"/>

                                    </div>
                                    <div style={{width:(window.screen.width > 800 ? "50%" : "100%"),height:(window.screen.width > 800 ? "100%" : "auto")}}>
                                        <article>
                                        CWID recognizes the significance of hands-on experience in the professional development of aspiring individuals in various fields. By providing opportunities for industrial attachments, we aim to create a dynamic learning environment that bridges the gap between theoretical knowledge and practical application. Joining our team for an industrial attachment will not only allow participants to gain valuable insights into their chosen field but also provide them with the chance to contribute meaningfully to real-world projects. We welcome enthusiastic individuals to embark on this mutually beneficial journey with us, fostering growth and collaboration in the ever-evolving industrial landscape.

                                        </article>
                                    </div>
                                </div>

                                    <article>Send your applications with CV, referees and attatchments to procurement@CWID.org</article>

                                </div>

                                <div className = "jobDetails">
                                    {attachments.length > 0 ? parse(attachments[0].body) : ""}
                                </div>


                                <div className="bodyFrame">
                                {/* 
                                    <p>Send your applications with CV, referees and attatchments to info@CWID.org</p>
                                    <p classNAme = "currently">CLOSED</p>
                                    <form
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

                        {/* </div> */}
                <Footer/>
            </div>
        </div>
    )
}

export default ATTATCHMENTS