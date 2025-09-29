
import { useLayoutEffect } from "react"
import Footer from "./footer"
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Flip, Draggable, MotionPathPlugin } from "gsap/all";
import NavBar from "./navBar"

const POLICY = () => {

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

    return (
        <div className = "component">
            <div id = "policy" className="inner-components">
            <NavBar page = "#policy"/>
            {/* <div id = "opportunity-component"> */}

                <div className = "inner-opportunity-component">

                    <article>
                        <div className = "headers-line"><div className="education-left"></div><h1 className="with-danger">REPORT FRAUD/ABUSE</h1><div className="education-right"></div></div>
                        <h1 className="with-underline">POLICY FOR SAFEGUARDING VULNERABLE PERSONS.</h1>
                        

                    </article>

                    <article>
                        <h1>I. INTRODUCTION</h1>
                        The programmes that CWID implements through grants address the needs of vulnerable communities and groups. There is potential for abuse to take place in the context of these programmes. Through its mission, CWID is well positioned to promote and ensure good practice by its staff and by with those of its members who directly or indirectly work with Vulnerable Persons. 
                    </article>

                    <article>
                        <h3>The aim of this policy is:</h3>
                        <p>– To promote and ensure the safeguarding of Vulnerable Persons directly served by CWID and its members.</p>
                        <p>– To ensure that any abuse of Vulnerable Persons that occurs in the context of CWID’s projects and programmes is reported and addressed.</p>
                    </article>

                    <article>
                        At CWID we believe that safeguarding Vulnerable Persons is an inherent part of the work that we do. CWID respects the dignity of every individual and advocates the welfare and safety of the most vulnerable in society.
                        We undertake a coordinated approach to protect Vulnerable Persons who may be impacted or affected by our work. We live by this safeguarding policy, advocate it in our dealings with third parties, and expect all our internal and external stakeholders to abide by these principles.
                    </article>

                    <article>
                        In this policy, Vulnerable Persons are understood to mean:
                        <p>– Children under the age of 18, irrespective of the age of adulthood in the country where they live; and</p>
                        <p>– Persons over the age of 18 who, for any reason (disability, age, illness or social context), are or may be unable to protect themselves from significant harm or exploitation.</p>                    </article>

                    <article>
                        <h1>II. VULNERABLE PERSONS COVERED BY THE POLICY</h1>

                        All children and young people below the age of eighteen years should be protected from all forms of abuse, neglect, exploitation and violence and adherence to the fundamental rights of the child as spelled out in the UN Convention on the Rights of the Child of 1989.
                    
                        <p>– Vulnerable adults, persons over the age of eighteen years who are unable to take care of or protect themselves against harm or exploitation for whatever reason, require particular protection.</p>
                        <p>– Both children and vulnerable adults (hereinafter referred to as the “Vulnerable Persons”) have rights as individuals and shall be treated with dignity and respect.</p>
                    </article>

                    <article>
                        <h1>III. KEY PRINCIPLES</h1>

                        <p>- We do not tolerate any form of harm against Vulnerable Persons within our working environments.</p>
                        <p>- All Vulnerable Persons deserve protection from harm, regardless of their age, disability, gender, racial heritage, religious beliefs, sexual orientation, political affiliations or identity.</p>
                        <p>- We have appointed a Safeguarding Officer to coordinate the implementation of this policy, who coordinates with CWID Staff, Board of Directors and Members in project locations in Kenya.</p>
                        <p>- We are committed to offering training to internal and external stakeholders and Members to continuously raise awareness about safeguarding.</p>
                        <p>- We believe that all stakeholders share a common responsibility for increasing awareness and helping to prevent safeguarding issues. We expect all staff to be fully aware of the safeguarding measures implemented at CWID.</p>
                        <p>- We perform appropriate employment checks for safe recruitment to protect Vulnerable Persons from harm.</p>
                        <p>- We do not enter into contracts, grant commitments, grant agreements with subgrantees or hosting like-minded organizations without first conducting a safeguarding assessment.</p>
                        <p>- We engage with CWID Members on the topic of safeguarding, to support them in developing and implementing safeguarding policies.</p>
                        <p>- CWID staff will be viewed as representatives of CWID even when not in working hours and their responsibility to act in accordance with this policy therefore applies at all time.</p>
                        <p>- We expect internal and external stakeholders to be vigilant on matters of safeguarding and encourage anyone to report any violations, suspected violations or concerns to CWID via info@CWIDkenya.org</p>
                    </article>

                    <article>
                        <h1>IV. RESPONSIBILITIES</h1>

                        <h3>4.1 The Board of Directors are responsible for:</h3>

                        <p>a) Ensuring adequate measures are in place to asses and address safeguarding risks</p>

                        <p>b) Putting in place adequate safeguarding policies and procedures, including relevant Human Resource matters.</p>

                        <p>c) Making sure policies and procedures are effectively applied in practice and that mechanisms are in place to provide assurance on compliance.</p>

                        <p>d) Making sure policies and procedures are effectively applied in practice and that mechanisms are in place to provide assurance on compliance.</p>

                        <p>e) Ensuring those safeguarding policies, practice, and performance are robustly and regularly reviewed to ensure there are up to date and fit for purpose.</p>

                        <p>f) Actively promoting a safe culture and strong awareness of everyone’s safeguarding responsibilities.</p>

                        <p>g) Taking steps to help deter and prevent safeguarding issues from occurring.</p>

                        <p>h) Ensuring there are mechanisms in place to promptly identify and act upon emerging safeguarding trends or issues.</p>

                        <p>i) Ensuring that serious incidents are reported to the appropriate authorities.</p>

                        <h3>4.2 The Strategic Management Team is responsible for:</h3>

                        <p>a) Ensuring the policy is implemented.</p>

                        <p>b) Discussing safeguarding matters at Strategic Management Team meetings at periodic intervals to help ensure progress and address any challenges with implementing the policy and any cases arising.</p>

                        <p>c) Presenting an annual safeguarding report on any instances and action taken/lessons learned to the Board of Directors.</p>

                        <h3>4.3 The Safeguarding Officer is responsible for:</h3>

                        <p>a) Ensuring awareness raising/ training is undertaken for staff, members and stakeholders.</p>

                        <p>b) Co-ordinate the implementation of this policy.</p>

                        <p>c) Receive and register reports of abuse of Vulnerable Persons from CWID staff or staff of CWID Members.</p>

                        <p>d) Assess risk.</p>

                        <p>e) Consult with CWID’s leadership and programme staff as appropriate.</p>

                        <h3>4.4 All Managers are responsible for:</h3>

                        <p>a) Ensuring all new employees receive policy training as part of their induction.</p>

                        <p>b) Ensuring measures are implemented within their area of responsibility.</p>

                        <p>c) Following up and addressing issues appropriately.</p>

                        4.5 Human Resource Staff are responsible for:

                        <p>a) Implementing the necessary protective procedures when recruiting new staff.</p>

                        <p>b) Documenting who has signed the policy.</p>

                        <p>c) Ensuring the briefing on this policy is built into induction process.</p>

                        <h3>4.6 All Staff are responsible for:</h3>

                        <p>a) Adhering to this policy and the Code of Conduct.</p>

                        <p>b) Reporting the concerns using Whistleblowing Policy and Procedures set out in the Code of Conduct.</p>
                    </article>
                    <article>
                        <h1>V. CONTEXT</h1>
                        CWID expects a commitment and action by its staff and all Members at national and county levels, to stop and prevent abuse of Vulnerable Persons:

                        <p>Abuse is any behaviour towards a person that causes harm, endangers life or violates rights. Examples of abuse include:</p>
                        <ul>
                            <li>Physical abuse</li>
                            <li>Sexual abuse</li>
                            <li>Sexual exploitation including:<p>– Sexual relations with a person below the age of 18 regardless of the age of consent.</p><p>– Use of prostitutes even if locally legal</p></li>
                            <li>Commercial exploitation, including child labour and modern slavery</li>
                            <li>Financial or material-stealing or denying access to money or possessions, expecting favours of any kind in exchange CWID assets or involvementin a project</li>
                            <li>Emotional abuse</li>
                            <li>Neglect and negligent treatment.</li>
                            <li>Discrimination– abuse motivated by discriminatory attitudes towards age, race, religion, gender, disability, sexual orientation or cultural background.</li>
                        </ul>
                        <p>Promoting and ensuring the protection of Vulnerable Person from abuse and exploitation is an important element of CWID’s mission. CWID staff shall strive to make CWID’s activities safe and caring environment(s) for all people, and in particular Vulnerable Persons</p>
                    </article>
                    <article>
                        <h1>VI. PROTECTING VULNERABLE PEOPLE</h1>
                        <p>a) CWID staff, Board of Directors, Members, Interns, Volunteers and Consultants shall adhere to the key principles of this policy.</p>

                        <p>b) CWID staff shall strive to make CWID’s activities safe and caring environment(s) for all people, and in particular Vulnerable Persons.</p>

                        <p>c) CWID expects its partners to pursue their work in the same spirit and create a Caring Environment for Vulnerable Persons.</p>

                        <p>d) CWID will actively promote its Policy for Safeguarding of Vulnerable Persons by making the Policy publicly available through the CWID website (www.CWIDkenya.org).</p>

                        <p>e) CWID will implement in its template for agreements with partners, hosted organizations, consultants and service providers or sub grantees a clause, which aims to ensure the adherence of CWID’s partners to this Policy for  safeguarding of Vulnerable Persons.</p> 
                            The clause shall read as follows:

                            “CWID believes that all vulnerable persons, meaning children below the age of eighteen year and vulnerable adults, require protection from all forms of abuse and exploitation. Wishing to promote and ensure the highest standards in this regard, CWID expects the Recipient (alternatively: the consultant/the service provider/the partner) to adhere to its
                            Policy for Safeguarding of Vulnerable Persons and to promote the values and standards laid down in this Policy in its work.”

                            A Caring Environment is one:

                            <p>i. In which the health, safety and welfare of Vulnerable Persons have been assessed and catered for.</p>

                            <p>ii. In which staff are aware of the possibility of abuse and take reasonable measures to prevent that possibility.</p>

                            <p>iii. Where there is a sound and known reporting system for any incident.</p>

                            <p>f) Activities undertaken by CWID shall be planned, organized and delivered in accordance with the principles of CWID’s Policy for Safeguarding of Vulnerable Persons.</p>
                    </article>
                    <article>
                        <h1>VII. ASSOCIATED POLICIES</h1>
                        This policy is complementary to the set of standards of behaviour that all CWID staff,
                        Members and Board of Directors are required to adhere to in the:
                        <ul>
                            <li>CWID’s Code of Conduct;</li>
                            <li>CWID’s Grievance Policy;</li>
                            <li>CWID’s Child Protection Policy;</li>
                            <li>CWID’s Conflict of Interest Prevention Policy;</li>
                            <li>CWID’s Anti-Fraud, Bribery & Corruption Policy;</li>
                            <li>CWID’s Policy Against Sexual Exploitation and Abuse;</li>
                            <li>CWID’s Data Protection Policy;</li>
                            <li>CWID’s Anti-Terrorism and Anti-money laundering Policy;</li>
                            <li>CWID’s Environmental Safeguarding Policy;</li>
                            <li>CWID’s procedures, manuals and handbooks;</li>
                            <li>any further codes or related policies defined by the CWID Secretariat, CWID Members, Board of Directors and CWID Affiliates.</li>
                        </ul>
                        This Policy is also a response to CWID’s accountability to the communities it works with and is therefore to be  operationalized as part of the broader CWID Accountability Framework.
                    </article>

                    
                </div>
            {/* </div> */}
            <Footer/>
        </div>
        </div>
    );
}

export default POLICY