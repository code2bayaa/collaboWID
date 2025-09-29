
import { useLayoutEffect } from "react"
import Footer from "./footer"
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Flip, Draggable, MotionPathPlugin } from "gsap/all";
import NavBar from "./navBar"

const PRIVACY = () => {

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
            <div id = "privacy" className="inner-components">
            <NavBar page = "#privacy"/>
            {/* <div id = "opportunity-component"> */}

                <div className = "inner-opportunity-component">
                <div className = "headers-line"><div className="education-left"></div><h1 className="with-danger">PRIVACY</h1><div className="education-right"></div></div>

                    <article>
                        <h1 className="with-underline">CWID PRIVACY POLICY</h1>
                        <h1>DATED: 18th  June, 2023</h1>
                    </article>

                    <article>
                        Collaboration of women in development (CWID “we,” or “us”) wants you to be familiar with how we collect, use and disclose information. This Privacy Policy describes our practices in connection with information that we collect through: The website operated by us from which you are accessing this Privacy Policy (the “Website”).
                        <ul>
                            <li>
                            	Our social media pages and apps, including (but not limited to) those located at:
                            </li>
                            <li>
                            	<a href="https://www.facebook.com/Cwid4Cwid?mibextid=ZbWKwL">https://www.facebook.com/Cwid4Cwid?mibextid=ZbWKwL</a>
                            </li>
                            <li>
                                <a href="https://twitter.com/cwid4cwid?lang=en">https://twitter.com/cwid4cwid?lang=en</a>
                            </li>
                            <li>
                                <a href="https://instagram.com/cwid4cwid/?hl=af">https://instagram.com/cwid4cwid/?hl=af</a>;
                            </li>
                            <li>
                                <a href="https://www.youtube.com/@CWID4CWID7046">https://www.youtube.com/@collaborationofwomenindeve7046</a>; 
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/cwid4cwid2">https://www.linkedin.com/in/cwid4cwid2</a>
                            </li>
                            <li>
                                <a href="https://collabowid.org/">https://collabowid.org/</a>
                            </li>
                            <li>
                                (collectively, our "Social Media Pages").Offline business interactions you have with us.
                            </li>
                            <li>
                            	HTML-formatted email messages that we send to you that link to this Privacy Policy or other communications with you.
                            </li>
                        </ul>
                        Collectively, we refer to the Website, Social Media Pages, offline business interactions, and emails as the “Services.” This Privacy Policy does not apply to our job applicants, employees, contractors, owners, directors, or officers where the Personal Information we collect about those individuals relates to their current, former, or potential role with us.

                    </article>

                    <article>
                        <h3>Personal Information</h3>
                        “Personal Information” is information that identifies you as an individual or relates to an identifiable individual.  The Services collect Personal Information, including:
                        <ol>
                            <li>Your name.</li>
                            <li>Your contact information, including your phone number, email address and postal address.</li>
                            <li>If you make a donation, your credit/debit card number and expiration date.</li>
                            <li>Certain technical and usage data in connection with our use of cookies. This will include your internet protocol (IP) address, browser type and version, time zone setting and location, operating system and platform, and other technology on the devices you use to access the Website and information about how you use the Website. Further details on our use of cookies can be found below and within our Cookies Policy.</li>
                            <li>Information provided in response to movement-related surveys conducted either (i) alone, or (ii) in partnership with, or on behalf of, local partners or charitable organizations.</li>
                        </ol>
                    </article>

                    <article>
                        <h1>Collection of Personal Information</h1>
                        We and our service providers collect Personal Information in a variety of ways, including:
                        <ul>
                            <li>Through the Services.</li>
                            <li>We collect Personal Information through the Services, for example, when you sign up to receive emails from us, fill out a petition or online form, make a donation, or otherwise communicate with us online.</li>
                            <li>From Other Sources. We receive your Personal Information from other sources, for example:</li>
                            <li>Local partners or charitable organizations that we partner with in relation to specific movement-related research, mapping and trend analysis.</li>
                            <li>If you engage with our Services using your social media account (e.g. if you choose to share something directly from our Website), you will share certain Personal Information from your social media account with us, for example, your name, email address, photo, list of social media contacts, and any other information that may be or you make accessible to us when you engage with us.</li>
                        </ul>
                    </article>

                    <article>
                        We need to collect Personal Information in order to provide the requested Services to you.  If you do not provide the information requested, we may not be able to provide the Services. If you disclose any Personal Information relating to other people to us or to our service providers in connection with the Services, you represent that you have the authority to do so and to permit us to use the information in accordance with this Privacy Policy.
                    </article>
                    <article>
                        <h1>Use of Personal Information</h1>

                        We and our service providers process Personal Information for the following purposes:
                        Purpose: Providing the functionality of the Services and fulfilling your requests.
                        ASSOCIATED ACTIVITIES:
                        <ul>
                            <li>To provide the Services’ functionality to you, such as providing you with related customer service.</li>
                            <li>To respond to your inquiries and fulfill your requests, when you contact us via one of our online contact forms or otherwise, for example, when you send us questions, suggestions, comments or complaints.</li>
                            <li>To process your donations (including sending you a donations/tax receipt for billing purposes), and verify your information.</li>
                            <li>To send administrative information to you, such as changes to our terms, conditions, and policies.</li>
                        </ul>

                    </article>

                    <article>
                        <h1>APPROPRIATE LEGAL BASES UNDER THE KENYAN CONSTITUTION (2010) AND DATA PROTECTION ACT (2019):</h1>

                        <p>•	In order to take steps at your request prior to entering into a contract or for the performance of a contract to which you are a party</p>
                        <p>•	Necessary to comply with our legal obligations</p>
                        Purpose: Providing you with our newsletter and/or other marketing materials and facilitating social sharing
                    </article>

                    <article>
                        <h1>ASSOCIATED ACTIVITIES:</h1>

                        <p>•	To send you marketing related emails and other messages, to take action, stay informed, join us for events, and support global women’s rights movements, and with other information about our services.</p>

                        <p>•	To facilitate social sharing functionality that you want to use.</p>
                    </article>
                    <article>
                        <h1>APPROPRIATE LEGAL BASES UNDER THE KENYAN CONSTITUTION (2010) AND DATA PROTECTION ACT (2019):</h1>

                        <p>•	Where we have your consent to do so or where we have legitimate interest (to make it easier for you to get the benefit of your social sharing functionalities)</p>
                        Purpose: Analyzing Personal Information for business reporting and providing personalized services.
                        <h3>ASSOCIATED ACTIVITIES:</h3>
                        <ul>
                            <li>To analyze or predict our users’ preferences in order to prepare aggregated trend reports on how our digital content is used, so we can improve our Services.</li>
                            <li>To better understand your interests and preferences, so that we can personalize our interactions with you and provide you with information and/or content tailored to your interests.</li>
                            <li>To better understand your preferences so that we can deliver content via our Services that we believe will be relevant and interesting to you.</li>
                        </ul>
                        <p>APPROPRIATE LEGAL BASES UNDER THE KENYAN CONSTITUTION (2010) AND DATA PROTECTION ACT (2019):</p>
                        <ul>
                            <li>Where we have your consent to do so</li>
                            <li>Necessary for our legitimate interests (to keep the Website updated and relevant and to inform our general marketing strategy)</li>
                        </ul>
                        Purpose: Conducting movement mapping surveys
                    </article>
                    <article>
                        <h1>ASSOCIATED ACTIVITIES:</h1>
                        To administer surveys (on behalf of Collaboration of women In Development (CWID)and/or local partners or charitable organizations) to understand movement-related ecosystems, relationships and trends to provide Collaboration of women in development (CWID)(and selected partners) to obtain a deeper understanding of how specific movements are developing in certain regions; to assess movement support, viability, strength, and capacity; and understand potential support needs.

                        <h1>APPROPRIATE LEGAL BASES UNDER THE KENYAN CONSTITUTION (2010) AND DATA PROTECTION ACT (2019):</h1>
                        <p>•	Necessary for our legitimate interests (movement research, conducting mapping exercises and trend analysis)</p>

                        <p>•	Where we have your consent to do so</p>
                        Purpose: Conducting contests and promotions

                        <h1>ASSOCIATED ACTIVITIES:</h1>

                        <p>•	To contact you about certain promotions or contests that we are running.</p>

                        <p>•	(Note that some of these promotions have additional rules containing information about how we will use and disclose your personal information.  Please read those additional rules before choosing to participate.)</p> 
                            The clause shall read as follows:

                        <h1>APPROPRIATE LEGAL BASES UNDER THE KENYAN CONSTITUTION (2010) AND DATA PROTECTION ACT (2019):</h1>
                            <p>•	In order to take steps at your request prior to entering into a contract or for the performance of a contract to which you are a party</p>
                        Purpose: Aggregating and/or anonymizing Personal Information.

                        <h1>ASSOCIATED ACTIVITIES:</h1>
                        <p>•	To aggregate and/or anonymize Personal Information so that it will no longer be considered Personal Information. We do so to generate other data for our use, which we may use and disclose for any purpose, as it no longer identifies you or any other individual.</p>
                    
                        <h1>APPROPRIATE LEGAL BASES UNDER THE KENYAN CONSTITUTION (2010) AND DATA PROTECTION ACT (2019):</h1>
                        <p>•	Necessary for our legitimate interests (to anonymize and aggregate for business purposes)</p>
                    
                        Purpose: Carrying out general organizational activities.

                        <h1>ASSOCIATED ACTIVITIES:</h1>

                        <p>•	For data analysis, for example, to improve the efficiency of our Services.</p>
                        <p>•	For audits, to verify that our internal processes function as intended and to address legal, regulatory, or contractual requirements.</p>
                        <p>•	For fraud prevention and fraud security monitoring purposes, for example, to detect and prevent cyberattacks or attempts to commit identity theft.</p>
                        <p>•	For enhancing, improving, repairing, maintaining, or modifying our current services.</p>
                        <p>•	For identifying usage trends, for example, understanding which parts of our Services are of most interest to users.</p>
                        <p>•	For operating and expanding our organization’s activities, for example, understanding which parts of our Services are of most interest to our users so we can focus our energies on meeting our users’ interests.</p>

                        <h1>APPROPRIATE LEGAL BASES UNDER THE KENYAN CONSTITUTION (2010) AND DATA PROTECTION ACT (2019):</h1>

                        <p>•	In order to take steps at your request prior to entering into a contract or for the performance of a contract to which you are a party</p>
                        <p>•	Necessary for our legitimate interests (to keep the Website updated and relevant, to develop our organization)</p>
                        <p>•	Necessary to comply with our legal obligations</p>
                    </article>
                    <article>
                        <h1>Disclosure of Personal Information</h1>
                        We disclose Personal Information to various third parties as set out below:
                        <ul>
                            <li>Our service providers who provide services such as website hosting, data analysis, payment processing, information technology and related infrastructure provision, customer service, email delivery, and other services.</li>
                            <li>Professional advisers including lawyers, bankers, auditors and insurers who provide consultancy, banking, legal, insurance and accounting services.</li>
                            <li>Fraud prevention agencies in order to detect and prevent fraud.</li>
                            <li>Public and government authorities, including authorities outside your country of residence, where we are legally required to do so.</li>
                            <li>Third parties in the event of any reorganization, merger, sale, joint venture, assignment, transfer, or other disposition of all or any portion of our organization, assets, or stock (including in connection with any bankruptcy or similar proceedings).CWID’s Anti-Fraud, Bribery & Corruption Policy;</li>
                            <li>By using the Services, you may elect to disclose Personal Information:</li>
                            <li>On message boards, chat, profile pages, blogs, and other services to which you are able to post information and content (including, without limitation, our Social Media Pages). Please note that any information you post or disclose through these services will become public and may be available to other users and the general public.</li>
                            <li>Through your social sharing activity, when you share information with your friends associated with your social media account, with other users, and with your social media account provider. By doing so, you authorize us to facilitate this sharing of information, and you understand that the use of shared information will be governed by the social media provider’s privacy policy.</li>
                            <li>Survey partners, where (i) Personal Information has been provided in response to movement mapping survey, (ii) Collaboration of women in development (CWID)is processing such Personal Information on behalf of a partner, (iii) Collaboration of women in development (CWID)is acting on the instructions of the partner, and (iv) Collaboration of women in development (CWID)is providing survey response data to the relevant partner(s).</li>
                            <li>Fundraising partners, where you choose to use the Services to donate to their causes.</li>
                        </ul>
                        We also use or disclose Personal Information, as necessary or appropriate: (a) to comply with applicable law, including other laws outside your country of residence; (b) to comply with legal process; (c) to respond to requests from public and government authorities, including authorities in other countries; (d) to enforce our Terms of Use available here; (e) to protect our operations; (f) to protect yours and our rights, property or safety, and/or that of others; and (g) to allow us to pursue available remedies or limit the damages that we may sustain.
                    </article>
                    <article>
                        <h1>Security</h1>
                        to protect Personal Information within our organization.  Unfortunately, no data transmission or storage system can be guaranteed to be completely secure.  If you have reason to believe that your interaction with us is no longer secure, please immediately notify us in accordance with the “Contacting Us” section below.
                    </article>
                    <article>
                        <h1>Choices and Access</h1>
                        <h3>Your choices regarding our use and disclosure of your Personal Information</h3>
                        We give you choices regarding our use and disclosure of your Personal Information for marketing purposes.  You may opt out from receiving marketing-related emails from us.  If you no longer want to receive marketing related emails from us on a going-forward basis, you may opt out by clicking the “unsubscribe” button located in the footer of any email that we send to you, or contacting us at privacy@collabowid.org.
                        We will try to comply with your request(s) as soon as reasonably practicable.  Please note that if you opt out of receiving marketing related emails from us, we may still send you important administrative messages, from which you cannot opt out.

                        <h3>How you can access, change, or delete your Personal Information </h3>
                        If you would like to request to access, correct, update, suppress, restrict, or delete Personal Information, object to or opt out of the processing of Personal Information, or if you would like to request to receive a copy of your Personal Information for purposes of transmitting it to another organization (to the extent these rights are provided to you by applicable law), you may contact us in accordance with the “Contacting Us” section below.  We will respond to your request consistent with applicable law.
                        <h3>Retention Period</h3>
                        We retain Personal Information for as long as needed or permitted in light of the purpose(s) for which it was obtained and consistent with applicable law.
                        The criteria used to determine our retention periods include:

                        <p>•	The length of time we have an ongoing relationship with you and provide the Services to you (for example, for as long as you have an account with us or keep using the Services);</p>
                        <p>•	Whether there is a legal obligation to which we are subject (for example, certain laws require us to keep records of your transactions for a certain period of time before we can delete them); or</p>
                        <p>•	Whether retention is advisable in light of our legal position (such as in regard to applicable statutes of limitations, litigation or regulatory investigations).</p>

                        <h3>Third Party Services</h3>
                        This Privacy Policy does not address, and we are not responsible for, the privacy, information, or other practices of any third parties, including any third party operating any website or service to which the Services link.  The inclusion of a link on the Services does not imply endorsement of the linked site or service by us or by our affiliates.
                        In addition, we are not responsible for the information collection, use, disclosure, or security policies or practices of other organizations, such as Facebook, Apple, Google, Microsoft, RIM, or any other app developer, app provider, social media platform provider, operating system provider, wireless service provider, or device manufacturer, including with respect to any Personal Information you disclose to other organizations through or in connection with our Social Media Pages.

                        <h1>Use of Services by Minors</h1>
                        The Services are not directed to individuals under the age of sixteen (16), and we do not knowingly collect Personal Information from individuals under 16.

                        <h1>Jurisdiction and Cross-Border Transfer</h1>
                        Your Personal Information may be stored and processed in any country where we have facilities or in which we engage service providers, and by using the Services you understand that your information will be transferred to countries outside of your country of residence, including the United States, which may have data PROTECTION ACT (2019) rules that are different from those of your country.  In certain circumstances, courts, law enforcement agencies, regulatory agencies or security authorities in those other countries may be entitled to access your Personal Information.

                        <h3>Sensitive Information</h3>
                        Unless we request it, we ask that you not send us, and you not disclose, any sensitive Personal Information (e.g., social security numbers, information related to racial or ethnic origin, political opinions, religion or other beliefs, health, biometrics or genetic characteristics, criminal background, or trade union membership) on or through the Services or otherwise to us.
                        <h3>Third Party Payment Service</h3>
                        We may use a third party payment service to process payments made through the Services. If you wish to make a payment or donation through the Services, your Personal Information will be collected by such third party and will be subject to the third party’s privacy policy, rather than this Privacy Policy.  We have no control over, and are not responsible for, this third party’s collection, use, and disclosure of your Personal Information.
                        <h3>Updates to this Privacy Policy</h3>
                        The “Last Updated” legend at the top of this Privacy Policy indicates when this Privacy Policy was last revised.  Any changes will become effective when we post the revised Privacy Policy on the Services.
                    
                        <h3>Contact Us</h3>
                        Collaboration of Women In Development (CWID), located Opposite Kiembeni Catholic Church, within Green Estate Phase2, in the heart of Mombasa County's Kisauni Constituency is the entity responsible for collection, use, and disclosure of your Personal Information under this Privacy Policy. If you have any questions about this Privacy Policy, please contact us at privacy@collabowid.org. Because email communications are not always secure, please do not include credit card or other sensitive information in your emails to us.
                    </article>

                    
                </div>
            {/* </div> */}
            <Footer/>
        </div>
        </div>
    );
}

export default PRIVACY