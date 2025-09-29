// const images_folder = process.env.REACT_APP_environment === "development" ? process.env.REACT_APP_host_url + "/assets" : process.env.REACT_APP_host_url_live + "/assets"
const api_url = process.env.REACT_APP_environment === "development" ? process.env.REACT_APP_api_url : process.env.REACT_APP_api_url_live

const internships = [
    {
        title:"PROGRAMS INTERN",
        address:"Mombasa, Kenya",
        type:"Contract",
        department:"Programs Department",
        body:`
                    <h2>Internship Offer and Purpose</h2>
            

            CWID undertakes Democracy, Citizen Participation and Demand, Governance Sector CSOs Coordination and Strengthening and Institutional Wellbeing. CWID seeks to engage an Intern to be part of the Programmes team on a fulltime basis for 3 months with a possibility of extension for another non-renewable 3 months.

            We offer internship opportunities to qualified fresh university graduates who have just or recently completed their studies. All intern placements require a commitment of a minimum of 3 months and maximum of 6 months.

            <h2>Key Duties and Responsibilities</h2>
            <ol>
                <li>Assist to execute administrative project management tasks related to project plans and documentations</li>
                <li>Assist in coordinating logistics for project-related events</li>
                <li>Support on administrative aspects of proposal development</li>
                <li>Assist in report writing and presentation</li>
                <li>Assist to organise and maintain project-related diaries and ensure relevant administrative preparations for project meetings and activities are made</li>
                <li>Assist with capturing monitoring, evaluation and learning data</li>
                <li>Assist to schedule production requests for projects with the communication team</li>
                <li>Assist to carry out research or summarise information on projects and present findings</li>
                <li>Assist in the dissemination of information and advocacy through CWID’s social media pages (Twitter, Facebook, Instagram  & linkedIn)</li>
                <li>Assist in the organization of CWID meetings, forums, workshops and conferences by sending invitations, and mobilizing participants and the media. </li>
            </ol>
                                                                <h2>Desirable Qualifications and Attributes</h2>
                                                    <article>
                                                                                                                        <ul>
                                            <li>-Must have a Basic Degree in Development Studies or Community Development from a recognized University;</li>
                                            <li>-Must be computer literate (working knowledge of word processing, PowerPoint and Excel);</li>
                                            <li>-Must demonstrate an ability to write reports and news story articles;</li>
                                            <li>-Must demonstrate professionalism, ready to learn and take initiative;</li>
                                            <li>-Must be committed to community service excellence</li>
                                            <li>-An effective communicator, both written and oral;</li>
                                            <li>-Ability to communicate in a professional manner with citizens and civil society contacts;</li>
                                            <li>-Self-motivated, good organizational skills, detail-oriented, ability to prioritize, multi-task and meet deadlines;</li>
                                            <li>-Enthusiast to the mission and vision of CWID.</li>
                                        </ul>
                                                    </article>

        `,

    }
]

export const select_internships = async() => {
    const res = await fetch(api_url + "/wireframe",
        {
            method:"POST",
            headers : {'Content-type': 'application/json; charset=UTF-8'},
            body:JSON.stringify({component:"about",list:internships,count:7})
        }
    )

    const {status, data} = await res.json()

    if(status)
        return data
    else
        return []
}


export default internships