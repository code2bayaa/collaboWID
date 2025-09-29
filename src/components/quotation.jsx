
import load from "../assets/home/load.gif"
import Footer from "./footer"
import NavBar from "./navBar"
import { useLayoutEffect, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Flip, Draggable, MotionPathPlugin } from "gsap/all";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import $ from "jquery"
import { select_quotation } from "../constants/about";
import parse from 'html-react-parser'

const QUOTATION = () => {

    const [quotation, setQuotation] = useState([])
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

        select_quotation().then(list => {
            setQuotation([...list])
        })

    },[])

    const [clicked, setClicked] = useState(false)


      const seeMore = (e) => {
        const station = e.target.attributes["station"].value
        if(!clicked){
            document.querySelector("#listed" + station).classList.remove("with-none")
            $("#listed" + station).slideDown("slow")
            e.target.innerHTML = "view less"
        }else{
            document.querySelector("#listed" + station).classList.add("with-none")
            $("#listed" + station).slideUp("slow")
            e.target.innerHTML = "View Specifications"
        }
        setClicked(!clicked)
      }


    return (
        <div className = "component">
            <div id="careers" className="inner-components">
            <NavBar page = "#home"/>
            {/* <div className="inner-component"> */}
                            <div className = "headers-line"><div className="education-left"></div><h1>QUOTATIONS</h1><div className="education-right"></div></div>
                                <div className="career-title" style={{display:"grid",justifyItems:"center"}}>
                                    <h1>-CALL FOR QUOTATIONS !-</h1>
                                    <div className="loadFrame" style={{marginLeft:"25%"}}>
                                        <LazyLoadImage src={load} alt="career image" loading="lazy"/>
                                    </div>
                                    
                                    <p>                        
                                        {/* Collaboration of Women In Development -CWID is now accepting applications for its internship and volunteer program
                                        Eligibility
                                        Collaboration of Women In Development -CWID Internship/Volunteer Programme offers qualified and eligible local, international, and diaspora students office-based, online, and in the field the unique opportunity to acquire direct practical experience both in the organization and with partner organizations under the direct supervision of experienced staff and/or adviser. Highly-skilled young professionals, students, and recent graduates who are interested in undertaking an internship at Collaboration of In Women In Development-CWID.
                                        Application period 
                                        <span className="currently"> Currently open</span> */}
                                         Please submit your quotation for the equipment listed below with the specifications attached using the form provided.
                                    </p>
                                    {/* <div style={{width:"40%"}}>


                                    </div>
                                    <div style={{width:"58%",backgroundColor:"#FCF4FA"}}> */}
                                    {/* <LazyLoadImage src={career1} alt="career image" className='teamFrame' loading="lazy"/>

                                        <h1><FontAwesomeIcon icon={faRibbon} /> CAREERS</h1>
                                    </div> */}
                                    
                                </div>
                                <div className="with-row with-full">
                                    {
                                        quotation.map(({img,title,article},key) => 
                                            <div className="with-half with-height-350 with-space-one" key={key} style={{display:"grid",justifyItems:"center",justifyContent:"center",textAlign:"center"}}>
                                                <LazyLoadImage src={img} alt="quotation image" className="with-image with-height-medium" loading="lazy"/>
                                                <h3>{title}</h3>
                                                <button onClick={seeMore} station={key + 1} className={(window.screen.width > 800 ? "with-width-40" : "with-width-auto") + "with-height-btn with-border-none with-color-white  theme-background-mix-two"}>View Specifications</button>
                                                <div id={"listed" + (key + 1)} station={key + 1} className="listed with-none">
                                                    {parse(article)}
                                                </div>

                                            </div>
                                        )
                                    }

                                </div>


                                <div className="quoteFrame">
                                <p>Send your applications with the quotation and attatchments to procurement@collabowid.org</p>

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

                        {/* </div> */}
                <Footer/>
            </div>
        </div>
    )
}

export default QUOTATION