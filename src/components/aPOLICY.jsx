
import consult1 from "../assets/quotation/attachments.svg"
import load from "../assets/home/load.gif"
// import career6 from "../assets/carreers/DSC_6258.JPG"
// import career7 from "../assets/carreers/DSC_6278.JPG"
// import career8 from "../assets/carreers/DSC_6309.JPG"
import Footer from "./footer"
import NavBar from "./navBar"
import { Suspense, useLayoutEffect, useRef, useState, lazy } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Alert from "./Alert";
import useAlert from "../hooks/alert";
import { Flip, Draggable, MotionPathPlugin } from "gsap/all";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faAward, faEyeLowVision, faGlobe, faGlobeAfrica, faTrophy, faRibbon, faUsers, faAddressBook, faClock } from '@fortawesome/free-solid-svg-icons'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import $ from "jquery"
import { faStackpath } from "@fortawesome/free-brands-svg-icons";
import { NavLink } from "react-router-dom";

const POLICYa = () => {

    // don't forget to register plugins
    gsap.registerPlugin(ScrollTrigger, Draggable, Flip, MotionPathPlugin);

    useLayoutEffect(() => {

        // import('../assets/carreers/carreer1.jpg')
        // .then((image) => {
        //     setCareer({...career, one : image.default})
        // })

        // import("../assets/carreers/DSC_6250.jpg")
        // .then((image) => {
        //     setCareer({...career, one : image.default})
        // })

        // import("../assets/carreers/DSC_6253.jpg")
        // .then((image) => {
        //     setCareer({...career, one : image.default})
        // })

        // import("../assets/carreers/DSC_6256.jpg")
        // .then((image) => {
        //     setCareer({...career, one : image.default})
        // })

        // import("../assets/carreers/DSC_6258.jpg")
        // .then((image) => {
        //     setCareer({...career, one : image.default})
        // })

        // import("../assets/carreers/DSC_6278.jpg")
        // .then((image) => {
        //     setCareer({...career, one : image.default})
        // })

        // import("../assets/carreers/DSC_6309.jpg")
        // .then((image) => {
        //     setCareer({...career, one : image.default})
        // })

        // import("../assets/carreers/DSC_6248.jpg")
        // .then((image) => {
        //     setCareer({...career, one : image.default})
        // })

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

        gsap.fromTo(".career-right",{
            width:"0%"
        },{
            width:"40%",
            duration:1,
            delay:2
        })

        gsap.fromTo(".career-left",{
            width:"0%"
        },{
            width:"40%",
            duration:1,
            delay:1
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

    },[])

    return (
        <div className = "component">
            <div id="careers" className="inner-components">
            <NavBar page = "#home"/>
            {/* <div className="inner-component"> */}
                            <div className = "headers-line"><div className="education-left"></div><h1>CWID INDUSTRIAL ATTACHMENT POLICY</h1><div className="education-right"></div></div>

                            {/* <div className = "headers-line"><div className="career-left"></div><h1></h1><div className="career-right"></div></div>
                            <div className = "headers-line"><div className="education-left"></div><h1></h1><div className="education-right"></div></div> */}
    
                                <div className="career-title">
                                    <div className="loadFrame" style={{marginLeft:"25%"}}>
                                        <LazyLoadImage src={load} alt="career image" loading="lazy"/>
                                    </div>
                                    
                                </div>

                                <div className = "jobDetails">

                                 {/* <h1>CWID INDUSTRIAL ATTACHMENT POLICY</h1> */}
                                    <h2>FUNDAMENTAL STATEMENTS</h2>
                                    <h4>Vision Statement</h4>
                                    <p>Improve Lives of Vulnerable Women Living in Grassroots Level</p>

                                    <h4>Mission Statement</h4>

                                    <p>Identifying and Reinforcing Women's Role in Education, Development and Governance.</p>

                                    <h4>Core Values</h4>
                                    <p>Empowerment: We are dedicated to fostering independence through sustainable programs and projects, enabling women, youth, and children to achieve self-reliance.</p>

                                    <article>
                                        Individual Support: CWID prioritizes the needs of women, girls, youth, children, minorities, people living with disabilities, and the broader community.
                                        Equality, Justice, and Human Rights: CWID envisions a society where everyone lives in peace and dignity, with equal access to resources and opportunities for sustainable growth.
                                        Active Participation: Our policies, advocacy, and lobbying efforts are grounded in the real-life experiences of grassroots communities.
                                        Respect for Personal Dignity: We maintain a non-judgmental approach that honors the dignity and rights of all individuals we engage with.
                                        Professionalism: Our work is characterized by integrity, openness, honesty, and professionalism.
                                        Openness to Learning: CWID remains open-minded and eager to learn from stakeholders, collaborators, and the community, while maintaining passion and enthusiasm for our service work.
                                        Networking, and Partnership: We believe in the strength of networking and partnerships, drawing on local, regional, and global experiences to enhance our impact.
                                        Accountability and Transparency: CWID is committed to being accountable and transparent in all our engagements, ensuring the effectiveness and efficiency of our work.

                                    </article>


                                    <h1>DEFINITION OF TERMS</h1>
                                    <article>
                                        The terms in subsequent sub-paragraphs shall have meanings specifically assigned to them as
                                        follows:
                                        Industrial Attaché: Is a trainee on attachment.
                                        Industrial Attachment: A “work- based experience programme” providing a real-life organizational context for students to develop specific or generic skills, valuable to their professional development.
                                        Monitoring and Evaluation: Mechanisms put in place to ensure adherence to quality, standards, cost effectiveness and relevance of an attachment programme.
                                        Programmes: A plan or schedule of activities, procedures, etc., to be followed.
                                        Supervisor: An employee under whom an attaché is placed for purposes of allocating work and overseeing their work performance.
                                    </article>
                                    <article>
                                        <h2>CHAPTER ONE</h2>
                                        <h3>INTRODUCTION TO CWID INDUSTRIAL ATTACHMENT POLICY</h3>

                                        <p>1.1 Background Information about CWID
                                    (CWID), a dynamic grassroots, women-led non-profit organization based in the heart of Mombasa County's Kisauni Constituency. Established in 2005 and officially registered in 2010 by the (PBO) Public Benefit Organisations Regulatory Authority of Kenya, CWID has been steadfast in its commitment to empowering women, advocating for their rights, and fostering inclusive development. Formerly known as Coast Women in Development, CWID underwent a strategic transformation in August 2019, expanding its scope beyond the coastal regions of Kenya. This change not only reflects our commitment to broader impact but also underscores our dedication to reaching marginalized women at the grassroots level across the nation. At CWID, our mission is clear: to identify and enhance the role of women in governance, health, leadership development, and education. We believe in creating a society where vulnerable women, children, youth, persons with disabilities, minorities, and other marginalized groups have equal access to opportunities for growth and empowerment. Our track record speaks for itself. CWID has received prestigious accolades such as the African PBO Leadership Awards in multiple consecutive years (2019, 2018, 2017, and 2016), highlighting our commitment to excellence and impact. In 2021, we were honored as the 2nd Finalist in the Gender Mainstreaming category for Empowerment of Women in the Community. Additionally, CWID proudly received the 2020 NGO Global Leadership and Excellence Award, further solidifying our position as a leader in the non-profit sector. Through our programs and initiatives, CWID directly supports vulnerable women, girls, and male youth in accessing opportunities for economic justice, political participation, peace and security, sexual and reproductive health rights, and education. We firmly believe in the power of gender-responsive approaches to create lasting change and foster inclusive societies. Join us in our journey towards a more equitable and empowered future for all. Together, we can make a difference. Welcome to Collaboration of Women in Development</p>
                                    <p>1.2 Industrial Attachment Policy
                                    This Industrial Attachment Policy aims at enabling college/university students acquire practical workplace experience. It seeks to establish a mechanism for managing an effective and efficient industrial attachment programme that aims to bridge the gap between students and the world of work. Implementation of this Policy in CWID will provide a standardized and harmonized approach in the engagement and management of industrial attachés. In addition, it will offer a framework for monitoring, evaluation and reporting of all attachment programmes.</p>
                                    <p>                                    1.3 Purpose
                                    – Producing practically oriented graduates that meet the job-related competences of their future employers.
                                    – Providing each student, the opportunity to apply acquired skills and knowledge both in college/university and CWID.
                                    – Establishing a permanent and effective system that would provide valuable work experience to college/university students.
                                    – Providing a clearly defined framework that will guide and give direction in management of attachment programmes at CWID.
                                    – Creating a bridge between the world of study and the work place for young professionals.</p>
                                    <p>

                                    1.4 Objectives of Industrial Attachment Policy
                                    i. To establish standards for attachment training, coaching and mentorship.
                                    ii. To facilitate effective industrial attachment training, coaching and mentorship.
                                    iii. To guide the students on the available attachment training options at CWID.
                                    iv. To develop a procedure for industrial attachment, coaching and mentorship.
                                    v. To prepare a mechanism for monitoring and evaluating attachment process for college/university students.
                                    </p>

                                    <p>
                                    1.5 Scope
                                    Article 55 of the Constitution of Kenya, 2010 requires the state to take measures to ensure the youth have access to education, training and employment opportunities. The National Industrial Training Authority links institutions for placement of students at the work place for acquisition of practical skills and appropriate work ethics.
                                    This policy shall apply to all students required to undertake the industrial attachment training as part of their programme at CWID.
                                    </p>

                                    <p>

                                    1.6 Policy Statement
                                    CWID is committed to providing and availing information and opportunities to students who have partially completed their courses to acquire work place experience to enhance their employability. The minimum duration of industrial attachment is 8 weeks and maximum 12 weeks. Each student on industrial attachment at CWID shall be assigned a qualified supervisor for training, coaching and mentorship.
                                    </p>

                                    <h2>CHAPTER TWO</h2>
                                    <h3>ROLES AND RESPONSIBILITIES OF THE STAKEHOLDERS</h3>
                                    The roles and responsibilities of various actors in the industrial attachment programme shall be
                                    as follows:
                                    <h4>2.1 The Executive Director</h4>
                                    <p>The Executive Director shall:</p>




                                    
                                    

                                    
                                    
                                    <p>i. Provide guidelines with regard to engagement of Industrial attachés;</p>
                                    <p>ii. Plan and budget for industrial attachment programmes;</p>
                                    <p>iii. Provide a much possible and diversified experience to students on industrial attachment;</p>
                                    <p>iv. Provide the necessary facilities to enable industrial attachés to acquire the required skills and knowledge;</p>
                                    <p>v. Assign supervisors for the industrial attachés;</p>
                                    <p>vi. Ensure that industrial attachés are properly engaged in relevant work assignments;</p>
                                    <p>vii. To provide safe working conditions;</p>
                                    <p>viii. Monitor and Evaluate the progress of the attachment programmes in CWID;</p>
                                    <p>ix. Report to the Board, on a quarterly and annual basis, on industrial attachment programmes undertaken in CWID and any challenges experienced; and</p>
                                    <p>x. Provide an assessment report on the attaché to the learning institution at the end of the attachment period.</p>
                                    <h4>2.2 Finance & Administration Manager</h4>
                                    <p>The Human Resource and Administration Manager shall:</p>
                                    <p>i. Facilitate and coordinate industrial attachment programmes across the organization;</p>
                                    <p>ii. Coordinate selection and engagement of industrial attachés based on set criteria;</p>
                                    <p>iii. Liaise with other departmental heads in setting criteria for selection of attachés and supervisors;</p>
                                    <p>iv. Develop capacity for mentoring and supervision of attachés, and management programmes for attachment activities;</p>
                                    <p>v. Conduct induction programmes for attachés;</p>
                                    <p>vi. Facilitate payment of the prescribed stipend to industrial attachés in accordance with the guidelines subject to availability of funds;</p>
                                    <p>vii. Coordinate the monitoring, assessment and evaluation of the performance of industrial attachés; and</p>
                                    <p>viii. Compile and disseminate quarterly and annual reports on progress and challenges of industrial attachment programmes and submit to the Executive Director.</p>
                                    <h4>2.3 The Supervisor</h4>
                                    <p>The Supervisor shall be responsible for:</p>
                                    <p>i. Assigning work to the industrial attaché;</p>
                                    <p>ii. Overseeing the day to day work performance;</p>
                                    <p>iii. Setting performance targets with the attaché;</p>
                                    <p>iv. Providing experiential learning activities to the attaché;</p>
                                    <p>v. Appraising the industrial attaché; and</p>
                                    <p>vi. Arranging for college/university supervision of the industrial attaché at CWID.</p>
                                    <h4>2.4 The Industrial Attachés</h4>
                                    <p>The Industrial attachés shall be required to:</p>
                                    <p>i. Abide by rules and regulations of CWID;</p>
                                    <p>ii. Demonstrate commitment and willingness to fully and actively participate in the learning experiences of the attachment;</p>
                                    <p>iii. Be ready to be deployed to any relevant department unit at CWID;</p>
                                    <p>iv. Make effort to acquire relevant skills in the area of specialization;</p>
                                    <p>v. Develop the day to day work plans with their supervisors;</p>
                                    <p>vi. Complete assignments given by the supervisor;</p>
                                    <p>vii. Obtain permission for all leaves of absence;</p>
                                    <p>viii. Complete the attachment programme as per guidelines provided;</p>
                                    <p>ix. Adhere to the CWID’s attachment code of conduct;</p>
                                    <p>x. Provide regular feedback to the supervisor on the progress he/she is making and any challenges thereto with regard to the attachment programme;</p>
                                    <p>xi. Observe confidentiality of information and security of tools/equipment that are placed in their possession in the course of the programme;</p>
                                    <p>xii. Hand over all materials and equipment/tools belonging to CWID at the end of the attachment period;</p>
                                    <p>xiii. Submit a copy of the report on attachment to CWID and their learning institutions; and</p>
                                    <p>xiv. Clear with relevant authorities before leaving CWID.</p>
                                    
                                    <h2>CHAPTER THREE</h2>
                                    <h3>SECURING PLACEMENT AT CWID AND CHRONOLOGY OF
                                    INDUSTRIAL ATTACHMENT PROCEDURES</h3>
                                    
                                    <h4>3.1 Requirements for Industrial Attachment at CWID</h4>
                                    <p>a) The applicant should be a Kenyan citizen.</p>
                                    <p>b) Each application should be backed up by a supporting letter from the educational institution.</p>
                                    <p>c) Applicants should be pursuing a diploma or degree course relevant to CWID operations from a recognized/reputable government/private institution of higher learning.</p>
                                    <p>d) The attachment should meet the mandatory duration.</p>
                                    <p>e) Application or motivation letter from the student.</p>
                                    <p>f) Curriculum Vitae (CV) with at least 3 referees.</p>
                                    <p>g) Copy of National Identity Card</p>
                                    <p>h) Copies of transcripts and KCSE Certificate</p>
                                    <h4>3.1.1 Application Procedure</h4>
                                    <p>1) All applications for industrial attachment be addressed to the Finance & Administration Manager..</p>
                                    <p>2) The Finance & Administration Manager. will seek to confirm availability of vacancy for industrial attachment in consultation with the Executive Director.</p>
                                    <p>3) Once approval is granted, the Finance & Administration Manager. will issue a notification and letter of offer to the applicant signed by the Executive Director.</p>
                                    <p>4) The industrial attaché will then be deployed in the respective department and attachment schedule prepared to ensure that the Industrial attaché is inducted on all the relevant operations of CWID.</p>
                                    <p>5) Fill CWID Bio-data form and map of residence to CWID office.</p>
                                    <h4>3.2 Periods for Attachment</h4>
                                    <p>Each industrial attaché shall undertake industrial attachment training for the period stipulated.</p>
                                    <h4>3.3 Student Supervision and Assessment</h4>
                                    <p>i. Every industrial attaché at CWID shall be assessed at least once during the attachment period.</p>
                                    <p>ii. There will be two distinct levels of supervision: level day to day supervision by CWID supervisor and the academic supervisor from the learning institution.</p>
                                    <p>iii. During the visit, the academic supervisor will interact with the student on industrial attachment, CWID supervisor / other relevant officials and also visit CWID offices to acquaint himself/herself with the activities of the attaché.</p>
                                    <p>iv. Attachés must fill in log reports for work and activities, completed each day, in legible handwriting. The log reports must be signed and verified by the supervisor at the end of every week of attachment.</p>
                                    <h4>3.4 Code of Conduct</h4>
                                    <p>All industrial attachés shall be governed by the rules and regulations of CWID which includes:</p>
                                    <p>i. Show constant self-discipline and conduct, professionalism and creativity.</p>
                                    <p>ii. Obey and respect everyone at CWID.</p>
                                    <p>iii. Not to speak or write on behalf of CWID without prior consent of the Executive Director.</p>
                                    <p>iv. Not to make any claim against CWID for sickness and accident nor claim any compensation.</p>
                                    <p>v. Abide by the confidentiality rule.</p>
                                    <p>vi. Not commit any resources of CWID.</p>
                                    <p>vii. Not misuse CWID’s position for personal advantage.</p>
                                    <p>viii. Abide by the rules and regulations set forth by CWID throughout the duration of the industrial attachment.</p>
                                    <p>ix. Avoid damage to property or misappropriating any property belonging to CWID.</p>
                                    <p>x. Abide by Standards Operating Procedures (SOPs) and provisions of engagement in the signed contract.</p>
                                    <p>Failure to adhere to this will lead to disciplinary process as per CWID Human Resource Policy.</p>
                                    <h4>3.5 Reading resources for Industrial Attachment at CWID</h4>
                                    <p>i. The Constitution of Kenya, 2010 (both in English and Kiswahili)</p>
                                    <p>ii. CWID Strategic Plan</p>
                                    <p>iii. CWID Industrial Attachment Policy.</p>
                                    <p>iv. End of Project Report for any relevant project at CWID.</p>
                                    <p>v. Policy Brief for Advocacy.</p>
                                    <p>vi. Project Proposal and Concept Note.</p>
                                    <p>vii. CWID Internship Policy.</p>
                                    <p>viii. CWID Safeguarding Policy.</p>
                                    <p>ix. CWID Gender Policy.</p>
                                    <p>x. CWID Procurement Policy.</p>
                                    <h4>3.6 Industrial Attaché Materials, Tools and Equipment.</h4>
                                    <p>i. Official work email address.</p>
                                    <p>ii. Laptop connected to office internet and printer.</p>
                                    <p>iii. All reading resource materials mentioned in this policy.</p>
                                    <p>iv. Spring file.</p>
                                    <p>v. CWID Logbook.</p>
                                    <p>vi. CWID notebook and pen.</p>
                                    <p>vii. Work station/chair.</p>
                                    <p>viii. Access to office telephone services.</p>
                                    <h4>3.7 Evaluation of Attachment Programme</h4>
                                    <p>Upon completion of industrial attachment, the attaché will submit a brief report about their experience at CWID and provide ideas/suggestions that may help the programme. The Supervisor will evaluate the attachés performance using the Performance Appraisal Form. A confidential report will then be forwarded to the relevant college/university. The attaché records will be kept and maintained in the industrial attachment file for future reference.</p>
                                    <h4>3.8 Policy Implementation</h4>
                                    <p>The Executive Director shall be responsible for managing the implementation of the policy and procedures.</p>
                                    <h4>3.9 Policy Review</h4>
                                    <p>This Industrial Attachment Policy will be subject to regular review and amendments after 5 years.</p>

                                    </article>


                                    


                                </div>


                                <div className="bodyFrame">
                                {/* 
                                    <p>Send your applications with CV, referees and attatchments to info@CWID.org</p>
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

export default POLICYa