
import { useLayoutEffect } from "react"
import Footer from "./footer"
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Flip, Draggable, MotionPathPlugin } from "gsap/all";
import NavBar from "./navBar"

const RISK = () => {

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

    const blocks = [
        {
            left:"Types of internal risks",
            right:"Types of external risks",
            // tag:h3
        },
        {
            left:"Strategic",
            right:"Political",
            //tag:p
        },
        {
            left:"Operations/business processes",
            right:"Economic",
            //tag:p
        },
        {
            left:"Management & Information",
            right:"Socio-cultural",
            //tag:p
        },
        {
            left:"Organizational/General administration",
            right:"Technological",
            //tag:p
        },
        {
            left:"Human capital/people",
            right:"Legal/ Regulatory",  
            //tag:p
        },
        {
            left:"Integrity",
            right:"Environmental",
            //tag:p
        },
        {
            left:"Information technology",
            right:"Security",
            //tag:p
        },
        {
            left:"Financial",
            right:"",
            //tag:p
        }
    ]

    return (
        <div className = "component">
            <div id = "policy" className="inner-components">
            <NavBar page = "#policy"/>
            {/* <div id = "opportunity-component"> */}

                <div className = "inner-opportunity-component">

                    <article>
                        <div className = "headers-line"><div className="education-left"></div><h1 className="with-danger">REPORT FRAUD/ABUSE</h1><div className="education-right"></div></div>
                        <h1 className="with-underline">RISK MANAGEMENT POLICY.</h1>
                        

                    </article>

                    <article>
                        <h3>1.0 Background and Rationale</h3>
                        Like every other organization, CWID faces numerous risks and the risks have the potential to disrupt achievement of its strategic and operational objectives. CWID is subject to certain risks that affects the ability to operate, provide service and protect assets. Controlling these risks through a formal program is necessary for the wellbeing of the organization and everyone in it. CWID aims to use risk management to take better informed decisions and improve the probability of achieving its objectives. The process involves identifying risks, evaluating them and deciding on the necessary action. Risk management, like other management activities, must be practical, cost effective, and help the organization survive and prosper.
                        Risk refers to the uncertainty that surrounds future events and outcomes. It is an expression of the likelihood and impact of an event with potential to influence achievement of an institution’s objectives.
                        <h4>Hence risk is:</h4>  
                        <p>– Anything that could prevent the achievement of a Corporate objective, whether they be in the nature of strategic, operating, compliance and reporting objectives.</p>

                        <p>– Anything that could negatively impact on the interest of stakeholders. Risk is measured in terms of likelihood and consequence. While risk is an exposure to the chance of a loss, risk is not inherently bad and any one has to take risks to operate a successful organization. The important thing is to ensure that the organization takes calculated risks, which reduce the likelihood that a loss will occur and minimises the impact of the loss should it occur.</p>                  
                    </article>

                    <article>
                    CWID cannot completely eliminate its exposure to risk; any effort to do so would be prohibitively expensive, probably beyond the potential losses that it would be seeking to mitigate. Consequently, the institution will seek to strike an appropriate balance between the ‘cost’ of the risk and the cost of the actions instituted to respond to the risk.
                    The purpose of the risk management policy is to provide guidance regarding the management of risk to support the achievement of corporate objectives, protect staff and business assets and ensure financial sustainability.
                    </article>

                    <article>
                    This Risk Management Policy explains CWID’s underlying approach to risk management. It gives key aspects of the risk management process and identifies the main reporting procedures. The Policy shall be approved by the Board. It will guide the implementation of the Risk Management process at CWID for the posterity of the organization.
                    </article>

                    <article>
                        <h4>In this regard, CWID has set up mechanisms to ensure that:</h4>
                        <p>– All material risks that could adversely affect the achievement of the organization’s strategic and operating goals and objectives are continually recognised and assessed.
                        </p>
                        <p>– CWID has implemented an effective risk management and control system designed to:
                        </p>
                        <p>– Identify the relative risks of each operational area of activity;
                        </p>
                        <p>– Assist the institution to focus appropriate attention in terms of time and resources on the higher risk issues.
                        </p>
                    </article>


                    <article>


                        <h3>2.0 Purpose</h3>

                        <p>– The policy forms part of the CWID’s internal control and governance practices.</p>

                        <p>– It is a formal acknowledgment of the commitment of the organization to Risk Management.</p>

                        <p>– The policy explains CWID’s underlying approach to risk management. It gives key aspects of the risk management process, and identifies the main reporting procedures.</p>

                        <p>– It describes the process used to evaluate the effectiveness of the CWID’s internal control procedures.</p>

                    </article>

                    <article>


                        <h3>3.0 Policy Objectives</h3>

                        The general objective of the Risk Management policy and procedures is to ensure that CWID has a formal process of involvement of all stakeholders in the continuous identification, assessment, management and control of potential risks
                        and hazards that can impact or threaten safety of people and properties. CWID aims to make risk management integral to its culture, strategic planning, decision making and resource allocation.


                        CWID’s objectives in relation to risk management are to:

                        <p>-Ensure risk management is adopted through CWID as a prudent management practice.</p>
                        <p>– Ensure achievement of program objectives by ensuring that negative risks are appropriately managed and that positive risks are managed for opportunity.</p>
                        <p>– Ensure compliance with all relevant internal policies, procedures and controls.</p>
                        <p>– To ensure that all CWID employees are made aware of the need to manage risk and promote a culture of participation in that process.</p>
                        <p>– To protect CWID from adverse incidents, to reduce its exposure to loss and to mitigate and control loss should it occur.</p>
                        <p>– Ensure responsibility for the management of risks is assigned to staff who have the authority to ensure that they are managed.</p>
                        <p>– Assure CWID donors/investors that there is a robust approach in place to assess and manage risk.</p>
                        <p>– To ensure the ongoing unimpeded capacity of CWID to fulfill its mission, perform its key functions, meet its objectives and serve its customers.</p>
                        <p>– Facilitate CWID Management to deal effectively with future events that create uncertainty.</p>
                        <p>– Ensure that resources are assigned to the management of risks in such a way to optimize value for money.</p>
                        <p>– To reduce the costs of risk to CWID, members and partners.</p>
                        <p>– To adhere to Kenyan and International Risk Management Standards.</p>

                    </article>

                    <article>
                        <h3>4.0 Types of Risks</h3>
                        {
                            blocks.map(({left, right}, key) => 
                                <div className="blocks" key={key} style={{background: (key%2 ? "#fff" : "rgba(234,234,234,0.75")}}>
                                    <div className="left-block">
                                        {left}
                                    </div>
                                    <div className="right-block">
                                        {right}
                                    </div>
                                </div>

                            )
                        }
                    </article>
                    <article>


                        <h3>5.0 Policy Statements</h3>

                        <h4>The following principles guide CWID’s risk management policy and procedures:</h4>

                        <p>– Risk management applies to all aspects of the CWID’s business and activity.</p>
                        <p>– Risk management is a shared responsibility of all Members, Board and Secretariat.</p>
                        <p>– Risk management facilitates the achievement of our objectives.</p>
                        <p>– Risk management is a continuous improvement process where CWID continually strives to reduce and manage the likelihood and negative impact of risks.</p>
                        <p>– Staff, Board members, volunteers and students are provided with training and other support to assist them in managing risk in their roles.</p>
                        <p>– Internal audit will be required to perform appropriate reviews and provide the Board with independent opinion on the application and effectiveness of policies, procedures and controls designed to mitigate risks.</p>

                    </article>
                    <article>


                        <h3>6.0 Outcomes</h3>

                        <h4>The outcomes of this policy are that CWID:</h4>
                        <p>– Makes informed operational and service delivery decisions while remaining fully aware of risks and impact.</p>
                        <p>– Members, Board and the Secretariat understand their roles and responsibilities in relation to risk management.</p>
                        <p>– Risks and risk impact are minimised through compliance with relevant regulatory, legal and financial obligations, and implementation of risk treatments.</p>

                    </article>
                    <article>


                        <h3>7.0 Ownership of Risk Policy</h3>

                        The risk policy and framework shall be owned by CWID which shall set the appropriate tone and influence the culture of risk management within its ranks. This Policy outlines CWID’s commitment to facilitating strategic and operational goals and objectives through risk management, enabling continuous improvement in decision making and performance. 

                        CWID will promote continuous improvement and review of risk management through regular training, monitoring, audit and reporting processes. Employees in all areas and activities are responsible for applying risk management principles and practices in their work areas; employees in supervisory and managerial positions are responsible for ensuring that risk management principles and practices are applied by those under their supervision.

                    </article>
                    <article>
                        

                        <h3>7.1 Role of the Members</h3>

                        The Members of CWID have significant roles to play in the management of risk.

                        Their roles are:

                        <p>– Setting the tone and influencing the culture of risk management. This includes: determining which risks are acceptable and which are not acceptable and setting the standards and expectations of staff with respect to conduct and probity.</p>

                        <p>– Comply with the Risk Management Policy.</p>

                        <p>– Ensuring that significant strategic, operational, compliance and financial risks have been identified and prioritized.</p>
                        <p>– Confirming that appropriate strategies are in place to manage risks, or that there is a plan and timeline for  implementing those strategies and the requisite policies, procedures and controls.</p>
                        <p>– Reviewing management reports and information from internal and external auditors.</p>
                        <p>– Holding management accountable for continuously identifying and managing
                        emerging risks and for implementing CWID risk management framework
                        within CWID.</p>

                    </article>
                    <article>
                        

                        <h3>7.2 Role of the Board of Directors (BoD)</h3>

                        The BoD has a significant role to play in the management of risk by setting the tone and influencing the culture of risk management within CWID. 

                        <h4>This includes:</h4>


                        <p>i. Determining what types of risks are acceptable and which are not.</p>
                        <p>ii. Setting the standards and expectations of staff with respect to conduct.</p>
                        <p>iii. Determine the level of exposure for CWID.</p>
                        <p>iv. Approve major decisions affecting CWID’s risk profile or exposure.</p>
                        <p>v. Monitor the management of fundamental risks.</p>
                        <p>vi. Satisfy itself that the less fundamental risks are being actively managed, with the appropriate controls in place and effective.</p>
                        <p>vii. Annually review CWID’s approach to Risk Management and approve changes or improvements to key elements of its processes and procedures.</p>
                        <p>viii. Ensure orientation of new Board and staff members to the Organization’s risk management processes and activities</p>
                        <p>ix. Be familiar with the Organization’s legislative requirements regarding risk management.</p>
                        <p>x. Monitor and update identified risks and risk treatments.</p>
                        <p>xi. Implement and review risk management plans.</p>
                        <p>xii. Contribute to internal risk treatment strategies and activities.</p>
                        <p>xiii. Comply with the Risk Management Policy.</p>
                        <p>xiv. Document risk management discussions and decisions from Board meetings</p>

                    </article>
                    <article>
                        

                        <h3>7.3 CWID Risk Management Committee</h3>

                        CWID Risk Management Committee is an operational committee appointed by the Board to oversee the risk  management process. The Risk Management Committee shall comprise the Executive Director (ED), Deputy Executive Director (D. ED), and four members appointed by the ED. Its roles will be to ensure that:


                        <p>i. Risks arising from the CWID’s strategies and activities are identified and prioritized.</p>
                        <p>ii. Appropriate risk management activities are designed and implemented to reduce or otherwise manage risk to a level that the Board has determined to be acceptable.</p>
                        <p>iii. Ongoing monitoring activities are conducted on Monthly basis to re-assess risks and effectiveness of controls to manage risks.</p>
                        <p>iv. There shall be an annual report of risks, risk strategies and controls to all stakeholders.</p>
                        <p>v. Inform the Audit Committee on risks and controls that should be included in the Audit reports, ensuring the integration of Internal Audit into risk management.</p>
                        <p>vi. Help embed a risk management culture into all major decisions, through risk education, high level controls and procedures.</p>
                        <p>vii. Recommend to the Board identified need for review of the College Risk Management Policy.</p>

                    </article>
                    <article>
                        

                        <h3>7.4 Internal Audit</h3>

                        <p>i. Internal Audit is an independent, objective assurance and consulting activity. Its roles with regard to risk management are to provide an independent and objective assurance to the Board of Directors on the effectiveness of risk
                        management framework and recommending appropriate mitigation factors.</p>

                        <p>ii. Internal Audit will be required to review the risk management process as part of the audit cycle based on the risk registers in place and provide an opinion as to the adequacy and effectiveness of the risk management arrangements and propose improvements where necessary.</p>

                    </article>
                    <article>
                        

                        <h3>8.0 Implementation Date</h3>


                        This Policy takes effect on the date it is approved by the CWID Board of Directors.

                    </article>
                    <article>
                        

                        <h3>9.0 Monitoring and Evaluation</h3>

                        CWID shall conduct monitoring and evaluation of the effectiveness of this Policy in
                        line with the Monitoring, Evaluation and Reporting framework. CWID shall:

                        <p>i. Develop and maintain strategies and mechanisms for monitoring and evaluation of this Policy.</p>
                        <p>ii. Undertake regular check on implementation of the Policy.</p>
                        <p>iii. Carry out annual evaluation on the implementation of the Policy.</p>
                        <p>iv. Use the information for planning and management.</p>
                        <p>v. Propose potential areas for review.</p>

                    </article>
                    <article>
                        

                        <h3>10.0 Review of The Policy</h3>

                        This policy shall be reviewed from time to time to incorporate the emerging risk issues, but not later than five (5) years.

                    </article>
                    <article>
                        

                        <h3>11.0 Effective Date of Implementation</h3>


                        This policy takes effect once approved by the CWID Board of Directors.

                    </article>

                    
                </div>
            {/* </div> */}
            <Footer/>
        </div>
        </div>
    );
}

export default RISK