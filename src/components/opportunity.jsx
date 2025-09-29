
import { useLayoutEffect, useRef, useState } from "react"
import Footer from "./footer"
import Alert from "./Alert";
import useAlert from "../hooks/alert";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Flip, Draggable, MotionPathPlugin } from "gsap/all";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRibbon } from '@fortawesome/free-solid-svg-icons'
import NavBar from "./navBar"
import swal from 'sweetalert';

const Opportunity = () => {

    useLayoutEffect(() => {

        // NAVIGATION(navBar, "#opportunity")
        // configDotenv()

        gsap.registerPlugin(ScrollTrigger, Draggable, Flip, MotionPathPlugin);

        document.querySelectorAll("#NavBar a").forEach(wrapper => {
            gsap.to(wrapper,{
                color:"#000",
            })
        })


        gsap.to(".header-info",{
            color:"#000",
        })

        gsap.to("#NavBar span",{
            color:"#000",
        })

        // gsap.to("#NavBar",{
        //     background:"transparent"
        // })
        // gsap.to("#about-box",{
        //     position:"relative"
        // })
        // document.querySelectorAll(".inner-opportunity-component").forEach( (trigger, index) => {

        //     const wrapper = trigger.querySelector("#header-component")
        //     gsap.fromTo(wrapper,{opacity : 0},{
        //         width:"100%",
        //         // stagger:1,
        //         ease:"smooth",
        //         // yoyo:true,
        //         opacity:1,
        //         duration:1,
        //         scrollTrigger : {
        //             trigger,
        //             scroller : "#opportunity",
        //             toggleActions : "play none none reverse",
        //             start : "top 55%",
        //             end : "bottom bottom",
        //             scrub : true,
        //             // markers:true
        //         }
        //     })
        // })
    },[])
    const formRef = useRef();
    const [form, setForm] = useState({ name: "", email: "", message: "", subject : "" });
    const { alert  } = useAlert();
    const [loading, setLoading] = useState(false);
  
    const handleChange = ({ target: { name, value } }) => {
      setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    
        // let body = { email : form.email, subject : form.subject, html : form.message }


        // console.log(url_e)
        // const images_folder = process.env.REACT_APP_host_url + "/assets"
        const api_url = process.env.REACT_APP_api_url

        fetch(
            api_url + "/feedback",
            {
                method : "POST",
                headers : {'Content-type': 'application/json; charset=UTF-8'},
                body : JSON.stringify(form)
            }
        )
        .then(res => res.json())
        .then(({ status, error }) => {
            
            console.log(status)
            if(status){
                setLoading(false);
                swal("Form submitted successfully 😃")

                    setTimeout(() => {
                        setForm({
                            name: "",
                            email: "",
                            message: "",
                            subject:""
                        });
                    }, [3000]);
            }


            if(error){
                setLoading(false);
                swal("Could not send the form 😢")
            }
        }).catch(error => {
            setLoading(false);
            swal("Could not send the form 😢" + error.message)
        })

      };

    return (
        <div className = "component">
            {/* <Header contentHTML = {contentHTML}/> */}
            <div id = "opportunity" className="inner-components">
            <NavBar page = "#opportunity"/>
            {/* <img src={logo} alt="logo" className='logo'/> */}
            <div id = "opportunity-component">

                {/* <div id = "vacancy" className = "inner-opportunity-component">

                    <article>
                        Collaboration of Women In Development -CWID is now accepting applications for its internship and volunteer program
                        Eligibility
                        Collaboration of Women In Development -CWID Internship/Volunteer Programme offers qualified and eligible local, international, and diaspora students office-based, online, and in the field the unique opportunity to acquire direct practical experience both in the organization and with partner organizations under the direct supervision of experienced staff and/or adviser. Highly-skilled young professionals, students, and recent graduates who are interested in undertaking an internship at Collaboration of In Women In Development-CWID.
                        Application period
                        Currently open
                        Internship period The duration of an internship is normally between six and sixteen weeks. The total duration may be extended up to a maximum of six months, when there are special requirements and / or special needs of the receiving Department / office. *Intern should follow the schedule appointed by organization
                        Application requirements
                        Persons who satisfy all the following requirements are eligible to apply.
                        ~Agreeing with the purpose of this program and willing to cooperate with host organizations for promoting internationalization and overseas business development, and building networks with overseas universities etc.
                        ~Holding citizenship of an eligible country or region.
                        ~Proficiency in English language.
                        ~Applicants must be able to submit a school or university enrollment or graduation certificate and/or a letter of recommendation from the (enrolled/graduated) university or company etc.
                        ~Able to undertake required training and full-time or part time internship at the host company.
                        ~Satisfying with any other individual conditions required by each company.
                        Application & selection method
                        ~Registration is acceptable on an online basis by using registration form on Organization's website.
                        ~Selection is conducted through document screening, first interview (English), and secondary interview (English).
                        ~During the selection process, various documents (qualification from university, language skills, passport copy etc.), letters of recommendation, photographs, etc. Main support for interns
                        Allowance: The Youth Cafe doesn’t pay interns. Host companies have different policies for paying interns for the entire duration of the internship. Travel costs and accommodation expenses associated with the internship. Internship insurance.
                        <a href="#feedback">Contact</a>
                    </article>

                </div> */}
                {/* <div id = "consultancy" className = "inner-opportunity-component">

                </div> */}
                <div className = "inner-opportunity-component">

                    <article>
                        
                        {/* <div>
                            <div>
                                <FontAwesomeIcon icon={faPhone}/> 
                                <h3>Phone</h3>
                                <p>0770013432</p>

                            </div>
                            <div>
                                <FontAwesomeIcon icon={faEnvelope}/> 
                                <h3>Email</h3>
                                <p>corruption@collabowid.org</p>

                            </div>
                            <div>
                                <FontAwesomeIcon icon={faGlobe}/> 
                                <h3>Address</h3>
                                <p>Green Estate Kiembeni opposite Kiembeni Catholic Parish</p>

                            </div>
                            <div>
                                <FontAwesomeIcon icon={faBarsProgress}/> 
                                <h3>Working Hours</h3>
                                <p>8 am - 17 pm</p>

                            </div>
                        </div> */}
                        {/* <a href="#feedback">Contact</a>
                        <NavLink
                            to="/report"
                            style={{
                                width:"40%",height:"40px",fontSize:"150%"
                            }}
                            className="theme-color-six"

                        >
                            REPORT
                        </NavLink> */}
                    </article>
                </div>
                <div id = "feedback" className = "inner-opportunity-component">
                    <div id = "header-component">
                        
                        <h1><FontAwesomeIcon icon={faRibbon}/>F<span>eedback</span></h1>
                    </div>
                    <div>
                        {alert.show && <Alert {...alert} />}
                    </div>
                    <p>Get in Touch</p>
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
                                    // onFocus={handleFocus}
                                    // onBlur={handleBlur}
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
                                    // onFocus={handleFocus}
                                    // onBlur={handleBlur}
                                />
                            </div>
                            <div className="body-cell">
                                <label className='body-label text-black-500 font-semibold'>
                                    Your Subject
                                </label>
                                <input
                                    name='subject'
                                    className='input'
                                    placeholder='subject'
                                    value={form.subject}
                                    onChange={handleChange}
                                    // onFocus={handleFocus}
                                    // onBlur={handleBlur}
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
                                    // onFocus={handleFocus}
                                    // onBlur={handleBlur}
                                />
                            </div>
                        <button
                            type='submit'
                            disabled={loading}
                            className='btn'
                            // onFocus={handleFocus}
                            // onBlur={handleBlur}
                        >
                            {loading ? "sending..." : "submit"}
                        </button>
                    </form>
                </div>
            </div>
            <Footer/>
        </div>
        </div>
    );
}

export default Opportunity