import Footer from "./footer"
import NavBar from "./navBar"
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Flip, Draggable, MotionPathPlugin } from "gsap/all";

import { useLayoutEffect } from "react";

const WHO = () => {

    useLayoutEffect(() => {
        // don't forget to register plugins
        gsap.registerPlugin(ScrollTrigger, Draggable, Flip, MotionPathPlugin);

        // gsap.to("#NavBar",{
        //     backgroundImage:"linear-gradient(#57396fb9,#57396f8a,#57396f8a),url(" + slide19 + ")",
        //     height:"40%"
        // })
    },[])

    return (
        <>
            <div className = "component">
                <div id = "who" className = "inner-components">
                <NavBar/>
            {/* <img src={logo} alt="logo" className='logo'/> */}
                <div className="more-components">
                {/* <img src={slide5} alt="about image" className='moreImg' loading="lazy"/> */}
                <h1>Who We Are:</h1> 
                    <article className="moreArticle">


                        Collaboration of Women in Development (CWID) is a grassroots, women-led non-profit organization that has been at the forefront of championing women's rights and fostering inclusive development since its establishment in 2005. Based in Mombasa County's Kisauni Constituency, CWID is driven by a deep commitment to empower women and marginalized groups across Kenya.

                        Our organization, initially known as Coast Women in Development, was rebranded in August 2019 to reflect our expanded mission and geographic reach. This strategic transformation underscores our dedication to addressing the unique challenges faced by women and marginalized communities at the grassroots level nationwide.

                        Recognized for our impact and leadership, CWID has been honored with multiple African NGO Leadership Awards and the prestigious 2020 NGO Global Leadership and Excellence Award, this includes the Shujaa Award by President  Ruto. These accolades are a testament to our unwavering commitment to creating lasting, positive change in the communities we serve.

                        At CWID, we believe that empowered women are the cornerstone of a just and equitable society. We invite you to join us in our mission to uplift and empower women and marginalized groups across Kenya and beyond. Together, we can build a brighter future for all
                    </article>
                    <article className="moreArticle">
                        CWID's core mission is to elevate the role of women in governance, health, leadership development, and education. We envision a society where vulnerable women, children, youth, persons with disabilities, minorities, and other marginalized groups enjoy equal access to opportunities and are empowered to realize their full potential.

                        Our team is comprised of passionate and dedicated individuals who work tirelessly to implement programs that promote Gender Equality and access to justice, Health Interventions, peace and security, sexual and reproductive health rights, Governance, Climate Change Adaptation and Resilience, policy -research- advcoacy and education for vulnerable women, girls, Person With Disability and male youth.

                    </article>
                    <article className="moreArticle">
                        Recognized for our impact and leadership, CWID has been honored with multiple African NGO Leadership Awards and the prestigious 2020 NGO Global Leadership and Excellence Award, this includes the Shujaa Award by President  Ruto. These accolades are a testament to our unwavering commitment to creating lasting, positive change in the communities we serve.

                        At CWID, we believe that empowered women are the cornerstone of a just and equitable society. We invite you to join us in our mission to uplift and empower women and marginalized groups across Kenya and beyond. Together, we can build a brighter future for all
                    </article>
                    </div>
                    <Footer/>
                </div>
            </div>
        </>
    )
}

export default WHO