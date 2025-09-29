const images_folder = process.env.REACT_APP_environment === "development" ? process.env.REACT_APP_host_url + "/assets" : process.env.REACT_APP_host_url_live + "/assets"
const api_url = process.env.REACT_APP_environment === "development" ? process.env.REACT_APP_api_url : process.env.REACT_APP_api_url_live

const badilika_constants = [
    {
        wall:images_folder + "/projects/tabasamu4.jpeg",
        wall2: images_folder + "/projects/tabasamu4.jpeg",
        file:images_folder + "/reports/Family_Safety.pdf",
        file_name:"Family Safety",
        file_name2:"SHED manual",
        file2: images_folder + "/pdf/reports/SHED_Manual.pdf",
        title:`
                            <h2>BADILIKA</h2>
                            <h3>The Badilika Project: Pioneering Change in GBV </h3>
                            <h3>Prevention</h3>
        `,
        body:`
                                Welcome to the Badilika Project, where the power of change meets the commitment to ending Gender-Based Violence (GBV). In Kiswahili, "Badilika" means change, and that's precisely what this project aims to achieve - transformation, not just in individuals, but in entire communities.
                                This project is a collaborative effort between Dr. Chris Laming, a Lecturer and Researcher at Monash University, Australia, Pwani Gender-Based Violence Network and Collaboration of Women In Development (CWID). The project builds on insights gained from the Engendering Violence Conference held at Uppsala University, Sweden, in 2009, where Betty Sharon represented CWID and learned about strategies for engaging abusive men in efforts to challenge violence against women and children. 
                                At the Engendering Violence Conference, a significant presentation on "The Community Walk Against Family Violence" by Dr. Karen Crinall, Ms. Daphne Yarram, Ms. Kerry Hamer, and Dr. Chris Laming introduced a model of collaborative research and community awareness. This model has inspired the development of the Badilika Project, which focuses on behavioral change among male perpetrators of GBV in Kenya. 
                                At the heart of the Badilika Project are male perpetrators of GBV, undergoing rehabilitation at the Shimo La Tewa Rehabilitation Centre and the Borstal institution. These individuals have taken the crucial step of acknowledging their offenses and are now on a journey of correction by law. But the Badilika Project doesn't stop there; it goes beyond punishment to focus on healing, reintegration, and prevention.
        
                                <h3>Key Objectives: </h3>The Badilika Project operates on four key objective pillars:
                                <ol>
                                    <li>Behavioral Observation: Monitoring the behavioral changes of offenders as they undergo correction.</li>
                                    <li>Reintegration: Finding effective methods to reintegrate these individuals back into society and their families.</li>
                                    <li>Prevention: Ensuring that former offenders do not reoffend and that vulnerable victims remain safe.</li>
                                    <li>Mentorship: Encouraging reformed offenders to become ambassadors of GBV change in their communities.</li>
                                </ol>
                                <h3>Impact Achieved: </h3>
                                Since its inception, the Badilika Project has made significant strides, impacting various levels:
                                Organizational Impact: Organizations in Kenya, Mombasa, have embraced inclusive approaches by incorporating male offenders into their GBV prevention programs, enhancing effectiveness.
                                Societal Impact: There's been a noticeable decrease in abusive families, contributing to breaking the cycle of violence. Moreover, more men are holding themselves and others accountable for their actions, denouncing violence and challenging others to do the same.
                                Cultural Relevance: Adapting tools like Dr. Chris Laming’s Family Safety Toolkits to ensure they resonate with the Kenyan context has been crucial. Comprehensive training sessions for facilitators and prison wardens have further bolstered cultural understanding and sensitivity.
                                Community Engagement: Through plenary talks, counseling sessions, and the creation of communication materials, the project has fostered dialogue, understanding, and support within communities. Utilizing various platforms, the project spreads awareness and educates the community about GBV prevention.
                                The Badilika Project represents a beacon of hope in the fight against GBV in Kenya, Mombasa. Its success has garnered attention beyond borders, with Zimbabwe's UNFPA team benchmarking its strategies. By focusing on behavioral change among male perpetrators and their reintegration into society, the project not only creates safer communities but also fosters a culture of accountability and non-violence.
                                Through collaboration, education, and mentorship, the Badilika Project continues to make strides towards its goal of lasting impact on individuals, families, and society as a whole including the rehabilitation centers. Together, let's embrace change and build a future free from the scourge of GBV. Join us in making a difference with the Badilika Project.
        
        `
    }
]

            export const select_badilika = async() => {
                try{
                    const res = await fetch(api_url + "/wireframe",
                        {
                            method:"POST",
                            headers : {'Content-type': 'application/json; charset=UTF-8'},
                            body:JSON.stringify({component:"projects",list:badilika_constants,count:8})
                        }
                    )
                
                    const {status, data} = await res.json()
                
                    if(status)
                        return data[0]
                    else
                        return badilika_constants[0]
                }catch(error){
                    console.log(error)
                    return badilika_constants[0]
                }
        
            }

        
export default badilika_constants