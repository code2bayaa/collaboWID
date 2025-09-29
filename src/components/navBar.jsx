import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faGear, faLightbulb, faWandMagicSparkles, faEnvelope, faBars, faBarsStaggered, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import {useState, useLayoutEffect, useRef} from "react"
import { NavLink } from "react-router-dom";
import logo from '../assets/footer/footer2.png'
import $ from "jquery"
import gsap from "gsap"
import { COLLECT } from '../constants/reports/index.jsx'


const NavBar = () => {

    // const [highlight, setHighlight] = useState({"current" : "#home", "next" : ""})
    // const [contentHTML, setContentHTML] = useState("")
    const [mobileOpen, setMobileOpen] = useState(false)
    const [btnChange, setBtnChange] = useState({
        "home" : false,
        "about" : false,
        "projects" : false,
        "insights" : false,
        "network" : false,
        mobile:false
    }) 
    const navBar = useRef(null)
    const homeHeader = useRef(null)
    const aboutHeader = useRef(null)
    const projectsHeader = useRef(null)
    const insightsHeader = useRef(null)
    const networkHeader = useRef(null)
    // const mobileHeader = useRef(null)

    useLayoutEffect(() => {
        // console.log(highlight)
        // if(highlight.next)
        //     document.querySelector("[href = '" + highlight.next + "']").classList.add("with-shadow") 
        // document.querySelector("[href = '" + highlight.current + "']").classList.remove("with-shadow")

        // let url = (highlight.hasOwnProperty("next") && highlight.next) ? highlight.next : (document.location.hasOwnProperty("hash") && document.location.hash) ?document.location.hash : highlight.current
        // // let url = document.location.hash
        // console.log("selected : " + url)
        // document.location.assign(url)
        // setContentHTML(NAVIGATION(navBar, page))
        
        // updateMyState({'navigation' : navBar})
        document.querySelectorAll("img").forEach( (img, index) => {
            gsap.fromTo(img,{ opacity:0,scale:4},{
                // y:0,
                // stagger:1,
                ease:"smooth",
                // yoyo:true,
                scale:1,
                opacity:1,
                duration:1
            })
        })
        COLLECT()

    },[])

    const mobile = () => {


        // const event = mobileHeader.current.attributes["clicked"].value

        if(mobileOpen){
            setBtnChange({ ...btnChange, mobile : false })
            // mobileHeader.current.attributes["clicked"].value = 1 
            document.querySelector("#NavBar").style.display = "none"
            // gsap.to("#NavBar",{
            //     opacity:0,
            //     duration:2,
            //     delay:1,
            //     x:"-10%"
            // })

        }else{
            setBtnChange({ ...btnChange, mobile : true })
            // mobileHeader.current.attributes["clicked"].value = 0
            document.querySelector("#NavBar").style.display = "block"
            // gsap.fromTo("#NavBar",{x:"40%",opacity:0},{
            //     opacity:1,
            //     duration:2,
            //     x:"0%"
            // })
        }

        setMobileOpen(!mobileOpen)
    }

    const hoverHeader = (prop, status) => {
        let props = null
        if(prop === 1){
            props = homeHeader
        }else if(prop === 2){
            props = aboutHeader
        }else if(prop === 3){
            props = projectsHeader
        }else if(prop === 4){
            props = insightsHeader
        }else if(prop === 5){
            props = networkHeader
        }

        const page = props.current.attributes["page"].value
        const btn = props.current.attributes["btn"].value

        if(status){
            setBtnChange({ ...btnChange, [btn] : true })
            props.current.attributes["clicked"].value = 0
            document.querySelector(page).classList.add("with-row")
            $(page).slideDown("2000")
        }else{
            setBtnChange({ ...btnChange, [btn] : false })
            props.current.attributes["clicked"].value = 1 
            document.querySelector(page).classList.remove("with-row")
            $(page).slideUp("slow")   
        }
    }
    const openHeader = (prop) => {
        // console.log(props)
        let props = null
        if(prop === 1){
            props = homeHeader
        }else if(prop === 2){
            props = aboutHeader
        }else if(prop === 3){
            props = projectsHeader
        }else if(prop === 4){
            props = insightsHeader
        }else if(prop === 5){
            props = networkHeader
        }

        const event = props.current.attributes["clicked"].value
        const page = props.current.attributes["page"].value
        const btn = props.current.attributes["btn"].value

        if(event === "1"){
            setBtnChange({ ...btnChange, [btn] : true })
            props.current.attributes["clicked"].value = 0
            document.querySelector(page).classList.add("with-row")
            $(page).slideDown("2000")
        }else{
            setBtnChange({ ...btnChange, [btn] : false })
            props.current.attributes["clicked"].value = 1 
            document.querySelector(page).classList.remove("with-row")
            $(page).slideUp("slow")   
        }
    }

    // const searchPage = () => {

    // }

    // const donateBTN = () => {

    // }

    // const chosen = (selected) => {+-

    //     // console.log(e)
    //     // document.querySelector("[href = '" + selected + "']").classList.add("with-shadow") 
    //     // document.querySelector("[href = '" + highlight + "']").classList.remove("with-shadow")
    //     // const selected =  e.current.attributes["href"].value
    //     console.log("selected : " + selected)
    //     if(highlight.hasOwnProperty("next") && highlight.next)
    //         highlight.current = highlight.next

    //     let url = (selected) ? selected : document.location.hash

    //     setHighlight({ ...highlight, "next" : url})
    // }
//     <div className='header'>
//     <a href = "#home" onClick={() => { chosen("#home") }} >
//         <FontAwesomeIcon icon={faHome}/> { window.screen.width > 800 ? <label>Home</label> : <span>Home</span>}
//     </a>
//     <a href = "#about" onClick={() => { chosen("#about") }} >
//         <FontAwesomeIcon icon={faGear} /> { window.screen.width > 800 ? <label>About</label> : <span>About</span>}
//     </a>
//     <a href = "#projects" onClick={() => { chosen("#projects") }} >
//         <FontAwesomeIcon icon={faLightbulb} /> { window.screen.width > 800 ? <label>Projects</label> : <span>Projects</span>}
//     </a>
//     <a href = "#resources" onClick={() => { chosen("#resources") }} >
//         <FontAwesomeIcon icon={faWandMagicSparkles} /> { window.screen.width > 800 ? <label>Resources</label> : <span>Resources</span>}
//     </a>
//     <a href = "#opportunity" onClick={() => { chosen("#opportunity") }} >
//         <FontAwesomeIcon icon={faEnvelope} /> { window.screen.width > 800 ? <label>Opportunity</label> : <span>Opportunity</span>}
//     </a>
// </div>
    return (
        <>
        {
            (window.screen.width > 800 )
            ?
            ""
            :
            <div style={{width:"100%",height:"40px",position:"relative",background:"#000000",zIndex:40}}>
                <button className = "btn-mobile" onClick={() => mobile()}>
                    {
                        btnChange.mobile ? 
                            <FontAwesomeIcon icon={faBarsStaggered} />
                            :
                                <FontAwesomeIcon icon={faBars} />
                    }
                    
                </button>
            </div>
        }
        

            <div id = "NavBar" ref={navBar}>
                <div className = "header-info">
                    <div className="logoFrame">
                        <NavLink
                            to="/home"
                        >
                            <img src={logo} alt="logo" className='logo'/>
                        </NavLink>
                    </div>
                    <div><p>+254(0770013432)</p></div>
                    <div><p>+254(412242000)</p></div>
                    <div><p>info@collabowid.org</p></div>
                    <div><p>cwid@collabowid.org</p></div>  
                    {/* <div className="searchFrame">
                        <form onSubmit={searchPage} className="seach-form">
                            <input
                                placeholder="search"
                                required
                                // value={form.search}
                                // onChange={handleChange}
                            />
                            <button>
                                <FontAwesomeIcon icon={faSearch} />

                            </button>
                        </form>
                    </div>     
                    <div className="donateFrame">
                        <button onClick={donateBTN} className="donate-btn">
                            DONATE
                        </button>
                    </div>          */}
                </div>
                <div className='header'>
                    <div className="header-box">
                        <div className="header-box-row">
                            <NavLink
                                to="/home"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "active" : ""
                                }
                            >
                                <FontAwesomeIcon icon={faHome}/> <label>Home</label>
                            </NavLink>
                            {/* <button className = "btn-header" ref = {homeHeader} onClick={() => openHeader(1)} clicked = "1" btn = "home" page="#home-header">
                                {
                                    btnChange.home ? 
                                        <FontAwesomeIcon icon={faChevronUp} />
                                        :
                                            <FontAwesomeIcon icon={faChevronDown} />
                                }
                                
                            </button> */}
                        </div>

                    </div>
                    <div className="header-box">
                        <div className="header-box-row">
                            <NavLink
                                to="/about"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "active" : ""
                                }
                            >
                                <FontAwesomeIcon icon={faGear}/> <label>About Us</label>

                            </NavLink>
                            <button className = "btn-header" ref={aboutHeader} onClick={() => openHeader(2)} onMouseEnter={() => hoverHeader(2,true)} btn = "about" clicked = "1" page="#about-header">
                                {
                                    btnChange.about ? 
                                        <FontAwesomeIcon icon={faChevronUp} />
                                        :
                                            <FontAwesomeIcon icon={faChevronDown} />
                                }
                                
                            </button>
                        </div>
                        <div id = "about-header" className="header-box-data"  onMouseLeave={() => hoverHeader(2,false)}>
                            <ul>
                                <li>
                                    <NavLink
                                        to="/about"
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "active" : ""
                                        }
                                    >
                                        <span>Who we are</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/about/values"
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "active" : ""
                                        }
                                    >
                                        <span>Core Values</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/about/objectives"
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "active" : ""
                                        }
                                    >
                                        <span>Core Objectives</span>
                                    </NavLink>
                                </li>
                                {/* <li>
                                    <NavLink
                                        to="/about/work"
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "active" : ""
                                        }
                                    >
                                        Our Work
                                    </NavLink>
                                </li> */}
                                <li>
                                    <NavLink
                                        to="/about/approach"
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "active" : ""
                                        }
                                    >
                                        <span>Our Approaches</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/about/board"
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "active" : ""
                                        }
                                    >
                                        <span>Our Board</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/about/team"
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "active" : ""
                                        }
                                    >
                                        <span>Our Team</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/opportunity"
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "active" : ""
                                        }
                                    >
                                        <span>Contact Us</span>
                                    </NavLink>
                                </li>
                                <h2>Opportunities</h2>
                                <li>
                                    <NavLink
                                        to="/home/careers"
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "active" : ""
                                        }
                                    >
                                        <span>Careers</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/tenders"
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "active" : ""
                                        }
                                    >
                                        <span>Tenders</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/consultancy"
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "active" : ""
                                        }
                                    >
                                        <span>Consultancy</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/internship"
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "active" : ""
                                        }
                                    >
                                        <span>Internship</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/attatchment"
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "active" : ""
                                        }
                                    >
                                        <span>Industrial Attatchment</span>
                                    </NavLink>
                                </li>

                            </ul>
                        </div>
                    </div>
                    <div className="header-box">
                        <div className="header-box-row">
                            <NavLink
                                to="/projects"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "active" : ""
                                }
                            >
                                <FontAwesomeIcon icon={faLightbulb}/> <label>Projects</label>

                            </NavLink>
                            <button className = "btn-header" ref={projectsHeader} onClick={() => openHeader(3)} onMouseEnter={() => hoverHeader(3,true)} btn = "projects" clicked = "1" page="#projects-header">
                                {
                                    btnChange.projects ? 
                                        <FontAwesomeIcon icon={faChevronUp} />
                                        :
                                            <FontAwesomeIcon icon={faChevronDown} />
                                }
                                
                            </button>
                        </div>
                        <div id = "projects-header" className="header-box-data" onMouseLeave={() => hoverHeader(3,false)}>
                            <div style={{margin:"1%"}}>
                                <ul>
                                    <li>
                                        <NavLink
                                            to="/projects"
                                            className={({ isActive, isPending }) =>
                                                isPending ? "pending" : isActive ? "active" : ""
                                            }
                                        >
                                            <span>Focus Areas</span>

                                        </NavLink>
                                    </li>
                                        <li>
                                            <NavLink
                                                to="/home/health"
                                                className={({ isActive, isPending }) =>
                                                    isPending ? "pending" : isActive ? "active" : ""
                                                }
                                            >
                                                <span>Health</span>
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to="/home/gender"
                                                className={({ isActive, isPending }) =>
                                                    isPending ? "pending" : isActive ? "active" : ""
                                                }
                                            >
                                                <span>Gender</span>
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to="/home/peace"
                                                className={({ isActive, isPending }) =>
                                                    isPending ? "pending" : isActive ? "active" : ""
                                                }
                                            >
                                                <span>Peace & Security</span>
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to="/home/governance"
                                                className={({ isActive, isPending }) =>
                                                    isPending ? "pending" : isActive ? "active" : ""
                                                }
                                            >
                                                <span>Governance</span>
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to="/home/climate"
                                                className={({ isActive, isPending }) =>
                                                    isPending ? "pending" : isActive ? "active" : ""
                                                }
                                            >
                                                <span>Climate change adaptation & resilience</span>
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to="/home/education"
                                                className={({ isActive, isPending }) =>
                                                    isPending ? "pending" : isActive ? "active" : ""
                                                }
                                            >
                                                <span>Education</span>
                                            </NavLink>
                                        </li>
                                </ul>
                            </div>
                            <div style={{margin:"1%"}}>
                                <h2>Ongoing Projects</h2>
                                <ul>
                                    <li>
                                        <NavLink
                                            to="/projects/ground"
                                            className={({ isActive, isPending }) =>
                                                isPending ? "pending" : isActive ? "active" : ""
                                            }
                                        >
                                            <span>W.G.G.P</span> <span>(Women Gaining Ground Project)</span>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/projects/tabasamu"
                                            className={({ isActive, isPending }) =>
                                                isPending ? "pending" : isActive ? "active" : ""
                                            }
                                        >
                                            <span>Tabasamu</span>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/badilika"
                                            className={({ isActive, isPending }) =>
                                                isPending ? "pending" : isActive ? "active" : ""
                                            }
                                        >
                                            <span>Badilika</span>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/tuinuane"
                                            className={({ isActive, isPending }) =>
                                                isPending ? "pending" : isActive ? "active" : ""
                                            }
                                        >
                                            <span>Tuinuane</span>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/projects/reproductive"
                                            className={({ isActive, isPending }) =>
                                                isPending ? "pending" : isActive ? "active" : ""
                                            }
                                        >
                                            <span>S.A.S.R.H.P</span> <span>Support Adolescent Sexual Reproductive Health Project in Mombasa and Kilifi</span>
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                            <div style={{margin:"1%"}}>
                                <h2>Past Projects</h2>
                                <ul>
                                    <li>
                                        <NavLink
                                            to="/projects/jijenge"
                                            className={({ isActive, isPending }) =>
                                                isPending ? "pending" : isActive ? "active" : ""
                                            }
                                        >
                                            <span>Jijenge</span>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/projects/maternal"
                                            className={({ isActive, isPending }) =>
                                                isPending ? "pending" : isActive ? "active" : ""
                                            }
                                        >
                                            <span>Maternal Child</span>
                                        </NavLink>
                                    </li>
                                    {/* <li>
                                        <NavLink
                                            to="/projects/priority"
                                            className={({ isActive, isPending }) =>
                                                isPending ? "pending" : isActive ? "active" : ""
                                            }
                                        >
                                            <span>Priority Focus</span>
                                        </NavLink>
                                    </li> */}
                                    <li>
                                        <NavLink
                                            to="/projects/she"
                                            className={({ isActive, isPending }) =>
                                                isPending ? "pending" : isActive ? "active" : ""
                                            }
                                        >
                                            <span>She Trade Project</span>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/projects/east"
                                            className={({ isActive, isPending }) =>
                                                isPending ? "pending" : isActive ? "active" : ""
                                            }
                                        >
                                            <span>E.A.Y.W.L.M.I</span> <span>(East Africa Young Women’s Leadership Mentorship Initiative)</span>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/projects/violent"
                                            className={({ isActive, isPending }) =>
                                                isPending ? "pending" : isActive ? "active" : ""
                                            }
                                        >
                                            <span>C.V.E.A.C.E.A</span> <span>(Countering Violent Extremism through Anti-Corruption in Eastern Africa)</span>
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="header-box">
                        <div className="header-box-row">
                            <NavLink
                                to="/resources"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "active" : ""
                                }
                            >
                                <FontAwesomeIcon icon={faWandMagicSparkles}/> <label>Insights</label>

                            </NavLink>
                            <button className = "btn-header" ref={insightsHeader} onClick={() => openHeader(4)} onMouseEnter={() => hoverHeader(4,true)} btn = "insights" clicked = "1" page="#insight-header">
                                {
                                    btnChange.insights ? 
                                        <FontAwesomeIcon icon={faChevronUp} />
                                        :
                                            <FontAwesomeIcon icon={faChevronDown} />
                                }
                                
                            </button>
                        </div>
                        <div id="insight-header" className="header-box-data" onMouseLeave={() => hoverHeader(4,false)}>
                            <ul>

                                {/* <li>
                                    <NavLink
                                    to="/resources"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "active" : ""
                                    }
                                >
                                Insights

                                </NavLink>
                                </li> */}
                                <li>
                                    <NavLink
                                        to="/gallery"
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "active" : ""
                                        }
                                    >
                                        <span>CWIDPOD</span>
                                    </NavLink>
                                </li>
                                {/* <li>
                                    <NavLink
                                        to="/socials"
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "active" : ""
                                        }
                                    >
                                        <span>Social Media</span>
                                    </NavLink>
                                </li> */}
                                <li>
                                    <NavLink
                                        to="/newsletters"
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "active" : ""
                                        }
                                    >
                                        <span>Newsletters</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/resources"
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "active" : ""
                                        }
                                    >
                                        <span>Reports & Publications</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/photo"
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "active" : ""
                                        }
                                    >
                                        <span>Gallery</span>
                                    </NavLink>
                                </li>
                        
                            </ul>
                        </div>
                    </div>
                    <div className="header-box">
                        <div className="header-box-row">
                            <NavLink
                                to="/coalition"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "active" : ""
                                }
                            >
                                <FontAwesomeIcon icon={faEnvelope}/> <label>Movement Building</label>

                            </NavLink>
                            <button className = "btn-header" ref={networkHeader} onClick={() => openHeader(5)} onMouseEnter={() => hoverHeader(5,true)} btn = "network" clicked = "1" page="#networks-header">
                                {
                                    btnChange.network ? 
                                        <FontAwesomeIcon icon={faChevronUp} />
                                        :
                                            <FontAwesomeIcon icon={faChevronDown} />
                                }
                                
                            </button>
                        </div>
                        <div id = "networks-header" className="header-box-data" onMouseLeave={() => hoverHeader(5,false)}>
                            <ul>

                                <li>
                                    <NavLink
                                        to="/weforshe"
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "active" : ""
                                        }
                                    >
                                        <span>We For She</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/coalition"
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "active" : ""
                                        }
                                    >
                                        <span>Networks & Coalition</span>
                                    </NavLink>
                                </li>
                                {/* <li>
                                    <NavLink
                                        to="/networks"
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "active" : ""
                                        }
                                    >
                                        Networks
                                    </NavLink>
                                </li>                     */}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className = "header-strip"></div>


            </div>
        </>

    );
}

// const mapStateToProps = (state) => ({
//     navigation: state.navigation,
//   });
  
//   const mapDispatchToProps = { updateMyState };
  
//   export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
// const WrappedNavbar = () => (
//     <BrowserRouter>
//       <NavBar />
//     </BrowserRouter>
//   );
export default NavBar