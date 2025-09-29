import NavBar from "./navBar"
import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import useAlert from "../hooks/alert";
import { Flip, Draggable, MotionPathPlugin } from "gsap/all";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRibbon } from '@fortawesome/free-solid-svg-icons'

const FEEDBACK = () => {

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

        gsap.to(".currently",{
            rotate:20,
            scrollTrigger:{
                scroller : "#careers",
                trigger:"#careers section",
                start:"top 30%",
                scrub:true,
                end:"bottom bottom",
            }
        })

    },[])

    const formRef = useRef();
    const [form, setForm] = useState({ name: "", email: "", message: "", subject : "" });
    const { showAlert, hideAlert  } = useAlert();
    const [loading, setLoading] = useState(false);
  
    const handleChange = ({ target: { name, value } }) => {
      setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    
        let body = { email : form.email, subject : form.subject, html : form.message }


        // console.log(url_e)
        fetch(
            "https://uko.netlify.app/main/email",
            {
                method : "POST",
                headers : {'Content-type': 'application/json; charset=UTF-8'},
                body : JSON.stringify(body)
            }
        )
        .then(res => res.json())
        .then(({ status, error }) => {
            
            console.log(status)
            if(status){
                setLoading(false);
                showAlert({
                    show: true,
                    text: "Thank you for your message 😃",
                    type: "success",
                    });

                    setTimeout(() => {
                    hideAlert(false);
                    setForm({
                        name: "",
                        email: "",
                        message: "",
                    });
                    }, [3000]);
            }


            if(error){
                setLoading(false);
        
                showAlert({
                    show: true,
                    text: "I didn't receive your message 😢",
                    type: "danger",
                });
            }
        }).catch(error => console.log(error))

      };

    return (
        <div className = "component">
            <div id = "home" className="inner-components">
            <NavBar page = "#home"/>
            <div id="careers" className="inner-component">
                            <div className = "headers-line"><div className="education-left"></div><h1>Education</h1><div className="education-right"></div></div>
                                <section>
                                    {/* <div style={{width:"40%"}}>
                                        <h3>                        
                                            Collaboration of Women In Development -CWID is now accepting applications for its internship and volunteer program
                                            Eligibility
                                            Collaboration of Women In Development -CWID Internship/Volunteer Programme offers qualified and eligible local, international, and diaspora students office-based, online, and in the field the unique opportunity to acquire direct practical experience both in the organization and with partner organizations under the direct supervision of experienced staff and/or adviser. Highly-skilled young professionals, students, and recent graduates who are interested in undertaking an internship at Collaboration of In Women In Development-CWID.
                                            Application period
                                            <span className="currently">Currently open</span>
                                        </h3>

                                    </div> */}
                                    <div style={{width:"60%",backgroundColor:"#FCF4FA"}}>
                                        <h1><FontAwesomeIcon icon={faRibbon} /> FEEDBACK</h1>
                                    </div>
                                    
                                </section>
                                <article>
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
                                </article>
                                <div>
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
                                </form>
                            </div>

                        </div>
            </div>
        </div>
    )
}

export default FEEDBACK