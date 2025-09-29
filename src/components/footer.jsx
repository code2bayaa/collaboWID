import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebook, faInstagram, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'
import cwid from '../assets/footer/footer2.jpeg'
import { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import swal from 'sweetalert';

const Footer = () => {

    const formRef = useRef();
    const [form, setForm] = useState({ email: "", name:"" });
    const [loading, setLoading] = useState(false);
  
    const handleChange = ({ target: { name, value } }) => {
      setForm({ ...form, [name]: value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
    
        setLoading(true);
        
        const date = new Date()
        const time = date.toLocaleTimeString()

        let body = { email:form.email, name:form.name, time, date : `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}` }

        const apiUrl = process.env.REACT_APP_api_url
        fetch(
            apiUrl + "/newsletter",
            {
                method : "POST",
                headers : {'Content-type': 'application/json; charset=UTF-8'},
                body : JSON.stringify(body)
            }
        )
        .then(res => res.json())
        .then(({ status, error, response }) => {
            
            if(status){
                setLoading(false);
                swal("Thank you for submitting 😃")
                // showAlert({
                //     show: true,
                //     text: ,
                //     type: "success",
                //     });

            }


            if(error){
                setLoading(false);
                swal("Could not submit 😢")
        
                // showAlert({
                //     show: true,
                //     text: "Could not submit 😢",
                //     type: "danger",
                // });
            }

            setTimeout(() => {
                // hideAlert(false);
                setLoading(false);
                setForm({
                    name: "",
                    email: ""
                });
                }, [1500]);
        }).catch(error => {
            console.log(error)
            setLoading(false);
            swal("Could not submit 😢")
    })

      };

    return (
        <div id = "footer">
            <section>
                <div className = "footer-component">
                    <h2>Address</h2>
                    <p>P.O. BOX 12327 - 80117, Mtopanga, Mombasa</p>
                    <p>Opposite Kiembeni, Catholic Church. Within Green Estate Phase II</p>
                    <div style={{background:"#fff",width:"98%",height:window.screen.width > 800 ? "65%" : "auto",margin:"1%"}}>
                        <NavLink
                            to="/home"
                        >
                        <img src={cwid} alt="logo" className='late-dev'/>
                        </NavLink>
                        {/* <article> */}
                            <span style={{color:"#000",textAlign:"justify",width:"90%",margin:"2%",display:"inline-block"}}>
                                Collaboration of Women in Development (CWID) is among the Public Benefit Organisations (PBOs) that support women and other vulnerable groups in Kenya.
                            </span>                                   
                        {/* </article> */}
                    </div>
                    
                </div>
                <div className="footer-component">
                    <h2>Contacts</h2>
                    <p>+254(0770013432)</p>
                    <p>+254(412242000)</p>
                    <p>info@collabowid.org</p>
                    <p>cwid@collabowid.org</p>

                </div>
                <div className="footer-component">
                    <h2>Quick Links</h2>
                    
                        <NavLink
                            to="/about"
                            className="theme-color-six links"

                        >
                            <FontAwesomeIcon icon={faArrowRightLong}/> ABOUT US
                        </NavLink>
                        <NavLink
                            to="/projects"
                            className="theme-color-six links"

                        >
                            <FontAwesomeIcon icon={faArrowRightLong}/> PROJECTS
                        </NavLink>
                        <NavLink
                            to="/resources"
                            className="theme-color-six links"

                        >
                            <FontAwesomeIcon icon={faArrowRightLong}/> INSIGHTS
                        </NavLink>
                        <NavLink
                            to="/coalition"
                            className="theme-color-six links"

                        >
                            <FontAwesomeIcon icon={faArrowRightLong}/> MOVEMENT BUILDING
                        </NavLink>
                        <NavLink
                            to="/newsletters"
                            className="theme-color-six links"

                        >
                            <FontAwesomeIcon icon={faArrowRightLong}/> NEWSLETTERS
                        </NavLink>



                        <NavLink
                            to="/opportunity"
                            className="theme-color-six links"

                        >
                            <FontAwesomeIcon icon={faArrowRightLong}/> CONTACT US
                        </NavLink>
                    {/* <p><a href = "#feedback">Subscribe To Our NewsLetter</a></p> */}
                    {/* <p><a href = "#feedback"></a></p> */}
                    {/* <p><a href = "#gallery" onClick={chosen}>Gallery</a></p> */}

                    <div className="footer-component-link">
                        <a href = "https://twitter.com/Cwid4Cwid" target = "_blank"  without="true" rel="noreferrer" >
                            <FontAwesomeIcon icon={faTwitter}/>
                        </a>
                        <a href = "https://www.facebook.com/profile.php?id=1188980791" target = "_blank"  without="true" rel="noreferrer" >
                            <FontAwesomeIcon icon={faFacebook}/>
                        </a>
                        <a href = "https://www.youtube.com/channel/UCGNOPsGsy07--f884Cy3WBw" target = "_blank"  without="true" rel="noreferrer" >
                            <FontAwesomeIcon icon={faYoutube}/>
                        </a>
                        <a href = "https://ke.linkedin.com/in/cwid4cwid2?original_referer=https%3A%2F%2Fke.linkedin.com%2Fin%2Fcwid4cwid2" target = "_blank"  without="true" rel="noreferrer" >
                            <FontAwesomeIcon icon={faLinkedin}/>
                        </a>
                        <a href = "https://www.instagram.com/cwid4cwid/" target = "_blank"  without="true" rel="noreferrer" >
                            <FontAwesomeIcon icon={faInstagram}/>
                        </a>
                    </div>
                </div>
                <div className='footer-component'>
                    <h2>Sign Up For Our Email NewsLetter</h2>
                        <form
                            ref={formRef}
                            onSubmit={(e) => handleSubmit(e)}

                            className='newsletter-body-form theme-background-four'
                        >
                                <div className="newsletter-body-cell with-row">
                                    <input
                                        type='text'
                                        name='name'
                                        className='newsletter-input'
                                        placeholder='NAME'
                                        required
                                        value={form.name}
                                        onChange={(e) => handleChange(e)}
                                    />
                                    <input
                                        type='email'
                                        name='email'
                                        className='newsletter-input'
                                        placeholder='EMAIL'
                                        required
                                        value={form.email}
                                        onChange={(e) => handleChange(e)}
                                    />
                                </div>
                            <button
                                type='submit'
                                name="SUBSCRIBE"
                                disabled={loading}
                                className='newsletter-btn'
                            >
                                {loading ? "sending..." : "subscribe"}
                            </button>
                        </form>
                        {/* <p>Report Suspicion of Corruption. Click Below</p> */}
                        <NavLink
                            to="/report"
                            style={{
                                width:"100%",height:"60px",fontSize:"150%",marginTop:(window.screen.width > 800)?"30%":""
                            }}
                            className="with-center with-block with-color-white with-quarter theme-background-six"

                        >
                            REPORT FRAUD OR ABUSE
                            CLICK HERE
                        </NavLink>
                </div>
                {/* <div className='footer-component'>

                </div> */}
                <div className="footer-bottom">

                    <div style={{textAlign:"right"}}>
                        <a href = "https://late-developers.com" target="_blank" without rel="noreferrer" style={{color:"#fff"}}>website: late developers</a>
                        <NavLink
                            to="/privacy"
                            className="privacy"
                            style={{marginLeft:"10%",textAlign:"center"}}

                        >
                            Privacy Statement
                        </NavLink>
                    </div>
                    <div style={{textAlign:"right"}}>
                        © 2024 CWID Kenya. All Rights Reserved.
                    </div>
                    
                    {/* <a href = "https://late-developer.web.app" target="_blank"><h3>website developer</h3></a> */}

                    {/* <img src={logo} alt="late developer" className='late-dev'/> */}
                </div>
            </section>

            {/* <div className="footer-component">
                
            </div> */}
            {/* <div className="footer-component">

            </div> */}
            {/* <div className="footer-component-link">

            </div> */}


        </div>
    )
}

// const mapStateToProps = (state) => ({
//     url: state.session,
//   });
  
//   const mapDispatchToProps = { updateMyState };
  
//   export default connect(mapStateToProps, mapDispatchToProps)(foo);

  export default Footer