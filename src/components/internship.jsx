
import load from "../assets/home/load.gif"
import Footer from "./footer"
import NavBar from "./navBar"
import { useLayoutEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Flip, Draggable, MotionPathPlugin } from "gsap/all";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressBook, faClock } from '@fortawesome/free-solid-svg-icons'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { faStackpath } from "@fortawesome/free-brands-svg-icons";
import parse from 'html-react-parser'
import internships from "../constants/internship";
// import { select_internships } from "../constants/internship";
const INTERNSHIP = () => {

    // const [_, setInternships] = useState([])
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
                trigger:".currently",
                start:"top 30%",
                scrub:true,
                end:"bottom bottom",
            }
        })

        // select_internships().then(list => {
        //     setInternships([...list])
        // })

    },[])

    return (
        <div className = "component">
            <div id="careers" className="inner-components">
            <NavBar page = "#home"/>
            {/* <div className="inner-component"> */}
                            <div className = "headers-line"><div className="education-left"></div><h1>Internships</h1><div className="education-right"></div></div>
                                <div className="career-title" style={{display:"grid",justifyItems:"center"}}>
                                    <h1>-AVAILABLE OPPORTUNITIES !-</h1>
                                    <div className="loadFrame" style={{marginLeft:"25%"}}>
                                        <LazyLoadImage src={load} alt="career image" loading="lazy"/>
                                    </div>
                                </div>
                                <article>                        
                                        Dedicated interns are an important part of our team. We offer internship opportunities to both undergraduate and graduate students who have just or completed their studies.
                                        All intern placements require a commitment of a minimum of 3 months and maximum of 6 months. The objectives of the Internship at CWID guided by the Policy are:
                                        <div style={{textAlign:"left"}}>
                                    <ul>
                                        <li>To create an opportunity for graduates who have just completed their studies and/ or those in the process of completing to familiarize themselves within the working environment and gain practical experience in civil society;</li>
                                        <li>To assist CWID in its effort and mission of capacity building young people to gain experience and prepare themselves for the labour market;</li>
                                        <li>To assist in the development of young professionals joining civil society.</li>
                                    </ul>
                                    </div>
                                </article>
                                <article className="jobDetails">

                                    <div className="with-full">
                                        {
                                            internships.map(({title, address, type, department, body, qualifications},index) => 
                                                <div className="with-full" key={index}>
                                                    <h2 style={{color:"#EE8C46"}}>{title}</h2>
                                                    <div className={(window.screen.width > 800 ? "with-row" : "with-column") + " internshipFrame"}>
                                                        <div style={{width: (window.screen.width > 800 ? "50%" : "100%"),height:(window.screen.width > 800 ? "100%" : "auto")}}>
                                                            <p><FontAwesomeIcon icon={faAddressBook} />{address}</p>
                                                            <p><FontAwesomeIcon icon={faClock} />{type}</p>
                                                            <p><FontAwesomeIcon icon={faStackpath} />{department}</p>
                                                        </div>
                                                        <div style={{width:(window.screen.width > 800 ? "50%" : "100%"),height:(window.screen.width > 800 ? "100%" : "auto")}}>
                                                            <article style={{textAlign:"left"}}>
                                                                {parse(body)}

                                                            </article>
                                                        </div>
                                                    </div>

                                                    
                                                </div>
                                                
                                            )
                                        }
                                        
                                        


                                    </div>
                                    <p>Send your applications with CV, referees and attatchments to procurement@collabowid.org</p>


                                </article>
                                <div  className="short">
                                    
                                    <article>
                                        <h2>DISCLAIMER!</h2>
                                        
                                        Only shortlisted candidates will be contacted for interviews. CWID is an equal opportunity employer and does not solicit any fees for employment or internship opportunities.

                                        CWID is committed to ensuring that wherever we work in Kenya and beyond there is no tolerance for the abuse of power, privilege or trust. CWID reinforces a culture of zero tolerance towards any form of inappropriate behaviour, abuse, harassment, or exploitation of any kind. The safeguarding of our beneficiaries, staff, interns, volunteers and anyone working on our behalf, is our top priority, and we take our responsibilities extremely seriously. All staff, interns and volunteers are required to share in this commitment through our Code of Conduct. We will conduct the most appropriate pre-employment references and checks to ensure high standards are maintained.

                                        CWID is an equal opportunities employer and positively encourages applications from suitably qualified and eligible candidates regardless of sex, race, disability, age, religion or belief or marital status.

                                    </article>
                                </div>


                                <div className="bodyFrame">
                                {/* 
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

export default INTERNSHIP