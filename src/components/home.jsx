
import Footer from "./footer"
import { useEffect, useState } from "react";
import gsap from "gsap";

import ScrollTrigger from "gsap/ScrollTrigger";
import { Flip, Draggable, MotionPathPlugin } from "gsap/all";
import {LazyLoadImage} from "react-lazy-load-image-component"
import Carousel from "../constants/carousel/index";
import partner1 from "../assets/partners/partner1.jpeg"
import partner2 from "../assets/partners/partner2.jpg"
import partner5 from "../assets/partners/partner5.webp"
import partner6 from "../assets/partners/partner6.jpg"

import partner9 from "../assets/partners/partner1.png"
import partner11 from "../assets/partners/partner10.jpeg"
import partner12 from "../assets/partners/partner11.jpeg"
import partner13 from "../assets/partners/partner12.jpeg"
import partner14 from "../assets/partners/urgent.png"
import partner15 from "../assets/partners/partner14.png"
import showaward from "../assets/awards/trophy.jpeg"
import load from "../assets/home/load.gif"


import NavBar from "./navBar"
import { NavLink } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { select_home_images, select_people, select_stats, select_award, select_news, select_all_news } from "../constants/home.js";
import PEOPLE from "../constants/people.jsx";
import MapComponent from "../constants/map/index.jsx";
const Home = () => {

    // console.log(home_images)
    const [params] = useState({})
    const [home_images, setHomeImages] = useState([])
    const [people, setPeople] = useState([])
    const [stats, setStats] = useState([])
    const [awards, setAwards] = useState([])
    const [news, setNews] = useState([])
    const [main_news, setMain] = useState([])

    const settings = {
        dots: true,
        infinite: true,
        autoplaySpeed: 5,
        speed:5000,
        swipeToSlide:true,
        draggable:true,
        slidesToShow: 7,
        slidesToScroll: 7,
        autoplay:true,
        arrows:false,
        pauseOnHover:true,
        // dots:false,
        cssEase:"ease",
        responsive: [{
 
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              infinite: true
            }
       
          }, {
       
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              dots: true
            }
       
          }, {
       
            breakpoint: 300,
            settings: "unslick" // destroys slick
       
          }]
      };

    function runNavBar(){
        document.querySelectorAll("#NavBar a").forEach(wrapper => {
            gsap.to(wrapper,{
                color:"#fff",
            })
        })
        
        gsap.to("#NavBar",{
            backgroundColor:"transparent",
            // height:"40%"
        })

        gsap.to("#NavBar p",{
            color:"#fff"
        })
    }

    useEffect(() => {


        // don't forget to register plugins
        gsap.registerPlugin(ScrollTrigger, Draggable, Flip, MotionPathPlugin); 
        
        gsap.to("article", {
            y:-20,
            duration:3
        })

        gsap.to(".header-strip", {
            opacity:0
        })

        if(window.screen.width > 800)
            runNavBar()

        
        // runPartners()
        // setInterval(() => {
        //     runPartners()
        // },5000)

        // runInterval()
        // setAwards = setInterval(() => {
        //     runInterval()
        // },10000)
        // gsap.to("#home-partners section",{
        //     // x:10,
        //     duration:0.5,
        //     scrollTrigger:{
        //         scroller : "#home",
        //         trigger:"#awards",
        //         start:"top 60%",
        //         // markers:true,
        //         scrub:true,
        //         end:"bottom bottom",
        //         // end:`+=${container.scrollWidth}`,
        //         // pin:"#home-partners",
        //         // pinSpacing:false,
        //         onEnter: (self) => {
                    
        //             console.log(container)
        //             // const progress = self.progress;
        //             // Update the scrollLeft property based on scroll progress
        //             container.scrollLeft += 100;
        //           },
        //     }
        // })
        // gsap.to("#awards section",{
        //     xPercent:"100%",
        //     duration:3,
        //     scrollTrigger:{
        //         scroller : "#home",
        //         trigger:"#awards",
        //         start:"top 60%",
        //         markers:true,
        //         scrub:true,
        //         end:"bottom bottom",
        //         // end:`+=${container.scrollWidth}`,
        //         // pin:"#home-partners",
        //         // pinSpacing:false,
        //         onEnter: (self) => {
                    
        //             const container = document.querySelector("#awards section")
        //             console.log(container)
        //             // const progress = self.progress;
        //             // Update the scrollLeft property based on scroll progress
        //             container.scrollLeft -= 100;
        //           },
        //     }
        // })

        gsap.fromTo("article",{
            y : "50%",
            delay:1.5
        },{
            y:"0%"
        })
        gsap.utils.toArray("#statistics h1").forEach( (wrapper, index) => {
            gsap.to(wrapper,{
                y:30,
                duration:4,
                scrollTrigger:{
                    trigger : "#statistics",
                    scrub:true,
                    // markers:true,
                    scroller:"#home",
                    start:"top 50%",
                    bottom:"bottom bottom",
                    onEnter:() => {
                        
                        const total = wrapper.attributes["total"].value
                        let speed = 10
                        let seq = 100
                        if(index === 1){
                            speed = 1000
                            seq = 1
                        }else if(index === 2){
                            speed = 500
                            seq = 1
                        }else if(index === 3){
                            speed = 1
                            seq = 100
                        }

                        function turn(x){
                            setTimeout(() => {
                                wrapper.innerHTML = (x + seq)
                                x += seq
                                if(x < (Number(total) + 1))
                                    turn(x)
                            },speed)
                        }
                        turn(1)
                        
                    }
                }
            })
        })

        gsap.fromTo("#titles div",{
            opacity:0,
            skewX : 30,
            y:-20
        },{
            opacity:1,
            scale:1,
            duration:4,
            skewX:0,
            y:10
        })
        gsap.fromTo("#titles h3",{
            opacity:0,
            x:0
        },{
            opacity:1,
            scale:1,
            duration:2,
            delay : 0.8,
            x:50
        })

        // document.querySelectorAll(".animated").forEach(wrapper => {

        //     const animation = gsap.fromTo(["h3","h2","h1","h4"],{
        //         opacity:0,
        //         delay:0.5,
        //         duration:3,
        //         y:250
        //     },{
        //         opacity:1,
        //         duration:3,
        //         y:0,

        //     })

        //     ScrollTrigger.create({
        //         trigger:wrapper,
        //         start:"top top",
        //         end:"bottom bottom",
        //         animation,
        //         marker:true
            
        //     })

        //     const animationTwo = gsap.fromTo(["span","p"],{
        //         opacity:0,
        //         delay:1,
        //         duration:3,
        //         x:250
        //     },{
        //         opacity:1,
        //         duration:3,
        //         x:0
        //     })

            
        //     ScrollTrigger.create({
        //         trigger:wrapper,
        //         start:"top top",
        //         end:"bottom bottom",
        //         animation:animationTwo
            
        //     })
        // })

        // gsap.fromTo(".home-section",{
        //     x:document.querySelector(".home-section").clientWidth
        // },{
        //     x:0,
        //     duration:15,
        //     ease:"smooth"
        // })

        // gsap.utils.toArray(".inner-component").forEach( wrapper => {
            // console.log(wrapper)

            gsap.fromTo(".education-right",{
                width:"0%"
            },{
                width:"40%",
                duration:1,
                delay:1,
                scrollTrigger:{
                    trigger:"#testimonials",
                    start:"top 70%",
                    bottom : "bottom bottom",
                    scroller:"#home",
                    scrub:true,
                    toggleActions : "play none none reverse",
                    // markers:true
                }
            })
    
            gsap.fromTo(".education-left",{
                width:"0%"
            },{
                width:"40%",
                duration:1,
                scrollTrigger:{
                    scrub:true,
                    trigger:"#testimonials",
                    start:"top 70%",
                    bottom : "bottom bottom",
                    scroller:"#home",
                    toggleActions : "play none none reverse",
                }
            })

            // gsap.fromTo( wrapper.querySelector("button"), {
            //         width : "0%",
            //     },{
            //         width : "40%",
            //         delay : 4,
            //         duration : 1,
            //         scrollTrigger : {
            //             trigger : wrapper,
            //             scrub : true,
            //             start : "top 60%",
            //             end:"bottom 75%",
            //             toggleActions : "play none none reverse",
            //             scroller : "#home",
            //             // markers : true
            //         }
            //     }
            // )

            // gsap.fromTo( wrapper.querySelector("img"), {
            //     opacity:0
            // },{
            //     opacity:1,
            //     duration:4,
            //     scrollTrigger : {
            //         trigger : wrapper,
            //         scrub : true,
            //         start : "top 60%",
            //         end:"bottom 75%",
            //         toggleActions : "play none none reverse",
            //         scroller : "#home",
            //         // markers : true
            //     }
            // })
        //     gsap.fromTo( wrapper.querySelector("article"), {
        //         opacity : 0,
        //         x : 200,
        //         // skewX : 30
        //     },{
        //         opacity : 1,
        //         // delay : 5,
        //         duration : 2,
        //         x:0,
        //         // skewX : 0,
        //         scrollTrigger : {
        //             trigger : wrapper,
        //             // scrub : true,
        //             start : "top 60%",
        //             end:"bottom 75%",
        //             toggleActions : "play none none none",
        //             scroller : "#home",
        //             // markers : true
        //         }
        //     }
        // )
        // })


        // console.log(params)
        if(params && params.hasOwnProperty("section"))
            document.getElementById(params.section).scrollIntoView({behaviour:"smooth"})

        // const loader = new Loader({
        //     apiKey: "AIzaSyB781kvTVLruwdbBJw4eagIiTVU_Q9JPc0",
        //     version: "weekly",
        //     // options,
        //   });
          

        //   loader.load().then(async () => {
        //     const { Map } = await google.maps.importLibrary("maps");
        //     const { AdvancedMarkerElement, PinElement } = await google.maps.importLibrary("marker");

        //     let position = {lat:-3.9968431767133388,lng:39.699020416678195}

        //     let map = new Map(document.getElementById("map"), {
        //       center: position,
        //       zoom: 18,
        //       mapId: "late_developer_1"
        //     });

        //                 // Define the custom icon
        //                 var customIcon = {
        //                     url: logo, // URL to your custom image
        //                     scaledSize: new google.maps.Size(60, 60), // Desired size
        //                     origin: new google.maps.Point(0, 0), // Origin point (0, 0)
        //                     anchor: new google.maps.Point(25, 50) // Anchor point (center of the image)
        //                 };
            
        //                 // Create a marker with the custom icon
        //                 var marker = new google.maps.Marker({
        //                     position,
        //                     map,
        //                     icon: customIcon,
        //                     title: 'collaboration of women in development'
        //                 });

        //   });
        //   select_home().then(list => {
        //     setHome([...list])
        //   })
          select_home_images().then(list => {
            setHomeImages([...list])
            console.log(list)
            
          })
          select_people().then(list => {
            setPeople([...list])
            
          })
          select_stats().then(list => {
            setStats([...list])
            
          })
          select_award().then(list => {
            setAwards([...list])
            
          })
          select_news().then(list => {
            setNews([...list])
            
          })
          select_all_news().then(list => {
            setMain([...list])
          })
    },[params])
 

    const homePage = () => {
        if((params && params.hasOwnProperty("section") && params.section === "home") || (!params.hasOwnProperty("section")))
            return true
        else 
            return false
    }
    
    return (
        <div className = "component">
            <div id = "home" className="inner-components">
            <NavBar page = "#home"/>
            
                    <div id="slider" className="inner-component">
                        <div id="inner-slides">

                            <div id = "presents">
                                <Carousel images={home_images}/>
                            </div>
                            <div id = "titles">
                                <div>
                                    <h1>Investing in Women, Youth & Children</h1>
                                </div>
                                <h3>Leave No One Behind</h3>
                            </div> 

                        </div>


                    </div>
                    {/* { params && params.hasOwnProperty("section") && params.section === "health"
                      ?

                        :
                        ""
                    } */}

                    {/* {
                        params && params.hasOwnProperty("section") && params.section === "peace"
                        ?

                        :
                        ""
                    } */}
                    {/* {
                        params && params.hasOwnProperty("section") && params.section === "education"
                        ? 

                        :
                        ""
                    } */}
                    {/* {
                        params && params.hasOwnProperty("section") && params.section === "climate"
                        ? 

                        :
                        ""
                    } */}
                    {
                        (homePage())
                        ?
                            <div id = "statistics" className="animated">
                                <div className="stats theme-color-seven">
                                    {
                                        stats.map(({total,img,title},index) => 
                                            <div key={index}>
                                                <div>
                                                    <h1 total = {total}>{total}</h1>
                                                </div>
                                                <div className="statsFrame">
                                                {/* <LazyLoad offset={400} threshold={0.95} onContentVisible={() => {console.log('loaded!')}}> */}
                                                    {/* <img src={img} alt="statistics"/> */}
                                                    {/* </LazyLoad> */}
                                                    <LazyLoadImage
                                                        key={index}
                                                        alt="late-developers.com"
                                                        height={200}
                                                        scrollPosition={index}
                                                        src={img}
                                                        width={200} />        
                                                </div>
                                                <div>
                                                {/* <p><FontAwesomeIcon icon={faEyeLowVision} /></p> */}
                                                    <h4>{title}</h4>
                                                </div>
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                        :
                            ""
                    }
                    {
                        (homePage())
                        ?
                            <div id = "awards" className="animated">
                                
                                <div className="hold-award">
                                    
                                    <div style={{width:(window.screen.width > 800) ? "80%" : "100%"}}>
                                        <div style={{width:(window.screen.width > 800) ? "48%" : "100%",display:"grid",justifyItems:"center",float:"left"}}>
                                            <img src={load} className="load" alt="load trophy"/>
                                            <img src={showaward} className="showawards" alt="award trophy"/>
                                            
                                        </div>
                                        <div style={{width:(window.screen.width > 800) ? "50%" : "100%",textAlign:"left",float:"right"}}>
                                            <h3>Award-Winning Non-Profit Organization With Years of Experience</h3>
                                            <span>We are proud to share that our organization has been recognized for its outstanding achievements and contributions to the community. These awards are a testament to our dedication, hard work, and the positive impact we strive to make. Below is a list of the prestigious awards we have received:</span>

                                        </div>
                                    </div>
                                </div>
                                <section id = "section-hold">

                                    <Carousel gallery = "awards" images={awards}/>

                                </section>
                                

                            </div>
                        :
                        ""
                    }
                    <div id="impact" className="inner-component animated">
                        <div className = "holdImpact">
                            <div className="mainImpact">
                                <h1>LATEST NEWS</h1>
                                <img src={main_news.length > 0 ?  main_news[main_news.length - 1].img : ""} alt="partner" className="impactIcon"/>
                                <section>
                                    <h2>{main_news.length > 0 ?  main_news[main_news.length - 1].date : ""}</h2>
                                    <NavLink
                                        to="/news"
                                        style={{
                                            width:"100%"
                                        }}

                                    >
                                        {main_news.length > 0 ?  main_news[main_news.length - 1].title : ""}
                                    </NavLink>
                                </section>

                            </div>
                            <div className="otherImpact">
                                {
                                    news.map(({description,date},index) => 
                                        <div key={index}>
                                            <section>
                                                <p>{date}</p>
                                                {description.substr(40)}
                                                <p>                                   
                                                <NavLink
                                                    to="/newsletters"
                                                    className={({ isActive, isPending }) =>
                                                        isPending ? "pending" : isActive ? "active" : ""
                                                    }
                                                >
                                                    <span>Read More</span>
                                                </NavLink></p>
                                                
                                            </section>
                                        </div>
                                    )
                                }


                            </div>
                        </div>
                        <div className="goToImpact">

                        </div>
                    </div>
                {
                    (homePage())
                    ?
                        <div id = "testimonials" className="inner-component animated">
                            <div className = "headers-line">
                                <div className="education-left"></div><h1>Testimonials</h1><div className="education-right"></div>
                            </div>
                            <section className="with-row with-full">
                                {
                                    people.map(({img,description,id},index) => 
                                        (
                                            <PEOPLE img={img} description={description} id={id} index={index} key={index}/>

                                        )
                                    )
                                }
                            </section>
                        </div>

                    :
                    ""
                }
                <div id = "home-partners" className="animated">
                    {/* <section>
                        <div style={{width:"40%"}}>
                            <h3>Partnered with the following groups;</h3>

                        </div>
                        <div style={{width:"60%",backgroundColor:"#FCF4FA"}}>
                            <h1><FontAwesomeIcon icon={faUsers} /> PARTNERS</h1>
                        </div>
                        
                    </section> */}
                    <section className="home-section">
                        {
                            (window.screen.width > 800) ? 
                                <Slider {...settings}>
                                    <div id = "home-sections">
                                        <a href="https://creaworld.org/our-work/wgg/">
                                            <img src={partner1} alt="partner" className="partnerIcon"/>

                                        </a>
                                    </div>
                                    <div id = "home-sections">
                                        
                                            <img src={partner2} alt="partner" className="partnerIcon"/>
                                    </div>
                                    {/* <div id = "home-sections">
                                        <a href="https://late-developer.web.app/">
                                            <img src={partner3} alt="partner" className="partnerIcon"/>
                                        </a>
                                        {/* <img src={partner3} alt="partner" className="partnerIcon"/> */}
                                    {/* </div>  */}

                                    <div id = "home-sections">
                                        <a href="https://www.forumciv.org/">
                                            <img src={partner5} alt="partner" className="partnerIcon"/>
                                        </a>
                                    </div>
        
                                    <div id = "home-sections">
                                        <a href="https://ccsnhr.org//">
                                            <img src={partner6} alt="partner" className="partnerIcon"/>
                                        </a>
                                    </div>
                                    <div id = "home-sections">
                                    <img src={partner13} alt="partner" className="partnerIcon"/>
                                    </div>
                                    <div id = "home-sections">
                                        
                                        {/* <label> */}
                                            <a href="https://www.uaf-africa.org/">
                                                <img src={partner14} alt="partner" className="partnerIcon"/>
                                            </a>
                                        {/* </label> */}
                                    </div>
                                    {/* <div>
                                    <img src={partner8} alt="partner" className="partnerIcon"/>
                                    </div> */}
                                    <div id = "home-sections">
                                        
                                            <a href="https://akilidada.org/">
                                                <img src={partner9} alt="partner" className="partnerIcon"/>
                                            </a>
                                    </div>
                                    {/* <div>
                                        <img src={partner10} alt="partner" className="partnerIcon"/>
                                    </div> */}
                                    <div id = "home-sections">
                                        <a href="https://www.rightsandsecurity.org/">
                                            <img src={partner15} alt="partner" className="partnerIcon"/>
                                        </a>
                                    </div>

                                    <div id = "home-sections">
                                        <a href="https://www.globalfundforwomen.org/">
                                            <img src={partner12} alt="partner" className="partnerIcon"/>
                                        </a>
                                        
                                    </div>
                                    <div id = "home-sections">
                                        <a href="https://www.forumciv.org/">
                                            <img src={partner11} alt="partner" className="partnerIcon"/>

                                        </a>

                                    </div>
                                </Slider>
                            :
                            <>
                                <div id = "home-sections">
                                    <a href="https://creaworld.org/our-work/wgg/">
                                        <img src={partner1} alt="partner" className="partnerIcon"/>

                                    </a>
                                </div>
                                <div id = "home-sections">
                                    
                                        <img src={partner2} alt="partner" className="partnerIcon"/>
                                </div>
                                {/* <div id = "home-sections">
                                    <a href="https://late-developer.web.app/">
                                        <img src={partner3} alt="partner" className="partnerIcon"/>
                                    </a>
                                    {/* <img src={partner3} alt="partner" className="partnerIcon"/> */}
                                {/* </div>  */}

                                <div id = "home-sections">
                                    <a href="https://www.forumciv.org/">
                                    <img src={partner5} alt="partner" className="partnerIcon"/>
                                    </a>
                                </div>
        
                                <div id = "home-sections">
                                <img src={partner6} alt="partner" className="partnerIcon"/>
                                </div>
                                <div id = "home-sections">
                                <img src={partner13} alt="partner" className="partnerIcon"/>
                                </div>
                                <div id = "home-sections">
                                    
                                    {/* <label> */}
                                        <a href="https://www.uaf-africa.org/">
                                            <img src={partner14} alt="partner" className="partnerIcon"/>
                                        </a>
                                    {/* </label> */}
                                </div>
                                {/* <div>
                                <img src={partner8} alt="partner" className="partnerIcon"/>
                                </div> */}
                                <div id = "home-sections">
                                    
                                        <a href="https://akilidada.org/">
                                            <img src={partner9} alt="partner" className="partnerIcon"/>
                                        </a>
                                </div>
                                {/* <div>
                                    <img src={partner10} alt="partner" className="partnerIcon"/>
                                </div> */}
                                <div id = "home-sections">
                                    <a href="https://www.rightsandsecurity.org/">
                                        <img src={partner15} alt="partner" className="partnerIcon"/>
                                    </a>
                                </div>

                                <div id = "home-sections">
                                    <a href="https://www.globalfundforwomen.org/">
                                        <img src={partner12} alt="partner" className="partnerIcon"/>
                                    </a>
                                    
                                </div>
                                <div id = "home-sections">
                                    <a href="https://www.forumciv.org/">
                                        <img src={partner11} alt="partner" className="partnerIcon"/>

                                    </a>

                                </div>
                            </>
                        }
                        

                    </section>

                </div>
                {/* <div style={{width:"100%",fontSize:"200%",color:"#fff",height:(window.screen.width > 800) ? "10%" : "auto",background:"#411342"}}>

                    
                    
                </div> */}
                <div id = "bottom-page" className="theme-background-seven animated">
                    <div className="wide-map">
                        <MapComponent/>
                        <div style={{width:(window.screen.width > 800 ) ? "50%":"100%"}}>
                            <h3 style={{color:"#aab95796"}}>Hours Of Operation</h3>
                            <h3>Open Mon - Fri 8AM - 5 PM</h3>
                            <h3 style={{color:"#aab95796"}}>Address</h3>
                            <p>P.O. BOX 12327 - 80117, Mtopanga, Mombasa</p>
                            <p>Opposite Kiembeni, Catholic Church. Within Green Estate Phase II</p>

                            <h3 style={{color:"#aab95796"}}>EMAIL</h3>
                            <p>info@collabowid.org</p>

                            <h3 style={{color:"#aab95796"}}>Telephone</h3>
                            <p>+254(0770013432)</p>
                        </div>
                    </div>
                    

                    
                        {/* <APIProvider apiKey="">
                            <Map
                                style={{width: '100%', height: '100%'}}
                                defaultCenter={{lat: 22.54992, lng: 0}}
                                defaultZoom={3}
                                gestureHandling={'greedy'}
                                disableDefaultUI={true}
                            >
                                <AdvancedMarker
                                    key="collaboration of women in development"
                                    position={{lat:-4.043477,lng:39.668206}}
                                >

                                {/* <Pin background={'#FBBC04'} glyphColor={'#000'} borderColor={'#000'} /> *

                                </AdvancedMarker>
                            </Map>
                        </APIProvider> */}
                    
                    <div id="contact">
                        {/* <img src={slide19} alt="partner" className="mainIcon"/> */}
                    </div>
                </div>

            {/* </div>             */}
            <Footer/>
        </div>
        </div>
    );
}

// export default Main;
// const mapStateToProps = (state) => ({
//     navigation: state.navigation,
//   });
    
//   export default connect(mapStateToProps, { updateMyState })(Home);
// const WrappedHome = () => (
//     <BrowserRouter>
//       <Home />
//     </BrowserRouter>
//   );
export default Home