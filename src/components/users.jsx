
import { useLayoutEffect, useRef, useState } from "react"
import Footer from "./footer"
import Header from "./header"
import Alert from "./Alert";
import useAlert from "../hooks/alert";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Flip, Draggable, MotionPathPlugin } from "gsap/all";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBarsProgress, faGlobe, faPhone, faEnvelope, faRibbon } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from "react-router-dom";
import NavBar from "./navBar"
import logo from '../assets/footer/footer2.jpeg'
import swal from 'sweetalert';

const USERS = () => {

    useLayoutEffect(() => {

        // NAVIGATION(navBar, "#opportunity")

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

    },[])
    const formRef = useRef();
    const [form, setForm] = useState({
        email:"", 
        concern:"Financial Misconduct",
        stopped:"YES",
        names:"",
        investigated:"",
        describe:"",
        place:"",
        involved:"",
        organisation:"",
        jobs:"",
        agree:false 
    });
    // const { alert, showAlert, hideAlert  } = useAlert();
    const [loading, setLoading] = useState(false);
    const [agreed, setAgreed] = useState(true)
    const [three, setThree] = useState(false)
  
    const handleChange = ({ target: { name, value } }) => {
      setForm({ ...form, [name]: value });
    };

    const handleChangeThree = ({ target: { name, value } }) => {

        if (value.length < 301) {
            setThree(false)
            setForm({ ...form, [name]: value })
        } else
            setThree(true)
    }

    // const getStopped = ({ target : {name,value}}) => {
    //     setForm({ ...form, [name]: value });
    // }

    const agreeForm = ({target:{name}}) => {
        // if(name === "agree"){
            setAgreed(false)
        // }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    
        if(agreed || three){
            setAgreed("click")
            return false;
        }
        
        fetch(
            (window.location.origin.match("localhost")) ? "http://localhost:8888/newsletter/report" : "https://late-developers-uko.netlify.app/newsletter/report",

            {
                method : "POST",
                headers : {'Content-type': 'application/json; charset=UTF-8'},
                body : JSON.stringify(form)
            }
        )
        .then(res => res.json())
        .then(({ status, error }) => {
            
            console.log(error)
            if(status){
                setLoading(false);
                swal("Form submitted successfully 😃")

                    setTimeout(() => {
                        setForm({
                            email:"", 
                            concern:"Financial Misconduct",
                            stopped:"YES",
                            names:"",
                            investigated:"",
                            describe:"",
                            place:"",
                            involved:"",
                            organisation:"",
                            jobs:"",
                            agree:false 
                        });
                    }, [3000]);
            }


            if(error){
                setLoading(false);
                swal("Could not send the form 😢")
            }
        }).catch(error => {
            console.log(error)
            setLoading(false);
            swal("Could not send the form 😢")
        })

      };

    return (
        <div className = "component">
            <div id = "users" className="inner-components">
            <NavBar page = "#users"/>
            {/* <div id = "opportunity-component"> */}

                <div className = "inner-opportunity-component">

                    <article>
                        <div className = "headers-line"><div className="education-left"></div><h1 className="with-danger">REPORT FRAUD/ABUSE</h1><div className="education-right"></div></div>
                        <h2 className="with-underline">Report instances of misuse of resources, safeguarding and other abuses relating to our work.</h2>

                    </article>

                    <article>
                        CWID’s report fraud and abuse mechanism exists to help us identify instances of misuse of resources, safeguarding violations, and other abuses relating to our work. On this page, we describe the type of concerns we want to hear about and how we will respond to these concerns. It is NOT a mechanism for the submission of prejudicial report regarding any staff, supplier or consultants.
                    </article>

                    <article>
                        CWID expects its staff and partners (including sub-grantees, hosted organizations, network members, consultants, vendors, and other agents) to: observe high standards of administrative and financial probity; and have a strong commitment to safeguarding practices. CWID respects the independence of its partners, who frequently work in complex and difficult environments. Funding is made available on the basis of trust in their expertise and integrity to properly navigate those complexities, including consideration for the reputation and standing of CWID.
                    </article>

                    <article>
                        CWID encourages all staff, CSO Members, partners, hosted organizations, sub-grantees, service-users, and their staff to report concerns. CWID will take all reasonable measures to ensure that no person who makes a report in good faith will be subject to retaliation.
                    </article>

                    <article>
                        Concerns may be submitted on a confidential basis and will be investigated to the extent possible. CWID will make the strongest effort possible to protect your identity. However, please be aware that serious allegations may require thorough investigation by authorities outside of CWID, which may make it impossible for CWID to guarantee confidentiality in all cases. In addition, anonymous submissions may impede the designated officer’s ability to thoroughly investigate the allegations.
                    </article>

                    <article>
                        <h3 className="with-underline">What to report</h3>

                        You can use this mechanism to report any concerns that fall short of our expectations (above), whether they be current, past, or anticipated. The attached policies give guidance on particular types of concern, but are not exhaustive.
                    </article>

                    <article>
                        <h3 className = "with-underline">Review our policies for guidance</h3>

                        The attached policies give guidance on particular types of concern, but are not exhaustive.
                    </article>

                    <article>
                        <h3 className = "with-underline">What not to report</h3>

                        CWID discourages individuals from using this mechanism to pursue individual staff grievances, which should ordinarily be resolved through internal procedures provided in the Human Resource Manual or of the employing partner organisation. Such matters should only be raised through this mechanism where there is a management or governance failure to address them.
                    </article>
                    <article>
                        <h3 className = "with-underline">How to report</h3>

                        You can either report through email (info@collabowid.org) or through our online form below. (Also read our privacy policy below)
                    </article>
                    <article>
                        <div className="with-full with-row">
                            <NavLink
                                to="/policy"
                                className="report-btn"

                            >
                                Safeguarding Policy
                            </NavLink>
                            <NavLink
                                to="/risk"
                                className="report-btn"

                            >
                                Risk Management
                            </NavLink>
                            {/* <NavLink
                                to="/privacy"
                                className="report-btn"

                            >
                                Privacy Policy
                            </NavLink> */}
                        </div>
                    </article>

                </div>
                <div id = "feedback" className = "inner-opportunity-component">
                    <div className = "headers-line"><div className="career-left"></div><h1 className="theme-color-six">Fill the form to report:</h1><div className="career-right"></div></div>
                    <form
                        ref={formRef}
                        onSubmit={handleSubmit}
                        className='body-form'
                    >
                            <div className="body-cell">
                                <label className='body-label text-black-500 font-semibold'>
                                    Type of concern <span className="with-danger">*</span>
                                </label>
                                <select 
                                    name="concern"
                                    onChange={handleChange}
                                    className="select"
                                    value={form.concern}
                                    required
                                >
                                    <option>Financial Misconduct</option>
                                    <option>Other misconduct</option>
                                    <option>Risk of threat to CWID standing</option>
                                    <option>Breach of CWID policy for safeguarding vulnerable persons</option>
                                </select>

                            </div>
                            <div className="body-cell">
                                <label className='body-label text-black-500 font-semibold'>
                                    Please describe the concern you are reporting. What took place? <span className="with-danger">*</span>
                                </label>
                                <textarea
                                    type='textarea'
                                    name='describe'
                                    rows='4'
                                    className='textarea'
                                    placeholder='write here...'
                                    required
                                    value={form.describe}
                                    onChange={handleChangeThree}
                                />
                            <p>1 of 300 max words.</p>
                            {
                                three ?
                                    <p className="with-danger">do not exceed 300 words</p>
                                    :
                                    ""
                            }
                            </div>
                            <div className="body-cell">
                                <label className='body-label text-black-500 font-semibold'>
                                    Why do you think it should be investigated? <span className="with-danger">*</span>
                                </label>
                                <textarea
                                    type='textarea'
                                    name='investigated'
                                    rows='4'
                                    className='textarea'
                                    placeholder='write here...'
                                    required
                                    value={form.investigated}
                                onChange={handleChangeThree}
                                />
                            <p>1 of 300 max words.</p>
                            {
                                three ?
                                    <p className="with-danger">do not exceed 300 words</p>
                                    :
                                    ""
                            }
                            </div>
                            <div className="body-cell">
                                <label className='body-label text-black-500 font-semibold'>
                                    Where did it take place? <span className="with-danger">*</span>
                                </label>
                                <textarea
                                    name='place'
                                    rows='4'
                                    className='textarea'
                                    placeholder='Write your thoughts here...'
                                    value={form.place}
                                    onChange={handleChange}
                                    type='textarea'
                                />
                            </div>
                            <div className="body-cell">
                                <label>
                                    Has it stopped? <span className="with-danger">*</span>

                                </label>
                                <div>
                                    <input 
                                        name = "stopped"
                                        onClick={handleChange}
                                        type="radio"
                                        value="YES"
                                        className="radio"
                                        
                                    />
                                    <label>
                                        YES
                                    </label>

                                </div>
                                <div>
                                    <input 
                                        name = "stopped"
                                        onClick={handleChange}
                                        type="radio"
                                        value="NO"
                                        className="radio"
                                    />
                                    <label>
                                        NO
                                    </label>

                                </div>
                                <div>
                                    <input 
                                        name = "stopped"
                                        className="radio"
                                        onClick={handleChange}
                                        type="radio"
                                        value="UNAWARE"
                                    />
                                    <label>
                                        UNAWARE
                                    </label>

                                </div>



                            </div>
                            <div className="body-cell">
                                <label>
                                    People involved in the incident <span className="with-danger">*</span>
                                    <textarea
                                        name='involved'
                                        rows='4'
                                        className='textarea'
                                        placeholder='Please indicate the name and job titles of all the people that were involved in the incident, whether they were subject, witness or other party'
                                        value={form.involved}
                                        onChange={handleChange}
                                        type='textarea'
                                    />
                                </label>
                            </div>
                            <div className="body-cell">
                                <label className='body-label text-black-500 font-semibold'>
                                    Your full names
                                </label>
                                <input 
                                    placeholder="Leave blank if you prefer anonymity"
                                    name = "names"
                                    onChange={handleChange}
                                    type="text"
                                    value={form.names}
                                />
                            </div>
                            <div className="body-cell">
                                <label className='body-label text-black-500 font-semibold'>
                                    What is your job title?
                                </label>
                                <input 
                                    placeholder="Leave blank if you prefer anonymity"
                                    name = "jobs"
                                    onChange={handleChange}
                                    type="text"
                                    value={form.jobs}
                                />
                            </div>
                            <div className="body-cell">
                                <label>
                                    What is the name of the organisation you work for? <span className="with-danger">*</span>
                                    <input
                                        name='organisation'
                                        // rows='4'
                                        className='textarea'
                                        // placeholder='Please indicate the name and job titles of all the people that were involved in the incident, whether they were subject, witness or other party'
                                        value={form.organisation}
                                        onChange={handleChange}
                                        type='text'
                                        required
                                    />
                                </label>
                            </div>
                            <div className="body-cell">
                                <label>
                                    Your Email? <span className="with-danger">*</span>
                                    <input
                                        name='email'
                                        // rows='4'
                                        className='textarea'
                                        // placeholder='Please indicate the name and job titles of all the people that were involved in the incident, whether they were subject, witness or other party'
                                        value={form.email}
                                        onChange={handleChange}
                                        type='text'
                                        required
                                    />
                                </label>
                            </div>
                            <div className="body-cell">
                                <label>
                                    I agree to the website privacy policy. <span className="with-danger">*</span>

                                </label>
                                {
                                    agreed == "clicked" ? 
                                    <p className="with-danger">You have to agree to policy</p>
                                    :
                                    ""
                                }
                                <input 
                                    name="agree"
                                    onClick={agreeForm}
                                    type="radio"
                                    className="radio"
                                    value="AGREE"
                                />
                            </div>
                        <button
                            type='submit'
                            disabled={loading}
                            className='btn'
                            // onFocus={handleFocus}
                            // onBlur={handleBlur}
                        >
                            {loading ? "sending..." : "REPORT"}
                        </button>
                    </form>

                </div>
            {/* </div> */}
            <Footer/>
        </div>
        </div>
    );
}

export default USERS