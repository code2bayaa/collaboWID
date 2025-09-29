const images_folder = process.env.REACT_APP_environment === "development" ? process.env.REACT_APP_host_url + "/assets" : process.env.REACT_APP_host_url_live + "/assets"
const api_url = process.env.REACT_APP_environment === "development" ? process.env.REACT_APP_api_url : process.env.REACT_APP_api_url_live

const healths = [
    {
        title:"",
        body:`
            <h2>Reproductive Health</h2>
            <article>
                Reproductive health is a state of complete physical, mental and social well-being in all matters relating to the reproductive system. It implies that their is capability to reproduce, and the freedom to decide if, when, and how often to do so. To maintain one’s sexual and reproductive health, people need access to accurate information and the safe, effective, affordable and acceptable contraception method of their choice. 
            </article>
            <article>
                CWID works to increase access to affordable and comprehensive healthcare services through collaborating with other Civil Society Organizations (CSOs) to push for reforms in the Mombasa County Health Sector. We have made some healthcare recommendations to the current Mombasa County Government through the Mombasa County Women Charter to ensure implementation of the Mombasa County Reproductive Health Care Act 2017 and the implementation of the recommendations of the scorecard on access to comprehensive services for SGBV survivors. Through the Tiko program, we have been able to reach out to adolescent girls at grassroots level and sensitized them on the importance of knowing their Sexual Reproductive Health Rights (SRHR) and the designated medical facilities where they can seek Sexual Reproductive Health Services (SRHS). CWID works with the Mombasa County Health Advocacy Network (MCHANE) to review health budgets and support in the development of gender responsive health policies and laws.
            </article>
            <article>
                Persons with Disabilities: Individuals with disabilities face additional barriers, including physical inaccessibility of healthcare facilities, lack of tailored information, and discrimination. These challenges prevent them from receiving comprehensive reproductive health care.
            </article>
        `,
        wall: images_folder + "/home/HEALTH.jpg",
        wall2:images_folder + "/carreers/agriculture.jpg",

    },
    {
        body:
            `
                <h2>Strategic Objectives:</h2>
                <ul>
                    <li>To enhance qawareness on reproductive health rights.</li>
                    <li>To ensure responsive and supportive policy frameworks.</li>
                </ul>
                <h3>Strategies</h3>
                <ol>
                    <li>Research</li>
                    <li>Policy advocacy</li>
                    <li>Sensitization forums</li>
                </ol>
            `

        
    },
    {
        body:
        `
            <h2>Improving Reproductive Health in Mombasa: A Strategic Objective by CWID</h2>
            <article>
                Reproductive health is a state of complete physical, mental, and social well-being in all matters relating to the reproductive system. It implies the capability to reproduce and the freedom to decide if, when, and how often to do so. To maintain one’s sexual and reproductive health, people need access to accurate information and safe, effective, affordable, and acceptable contraception methods of their choice. 
                CWID (Collaboration of Women in Development) is committed to increasing access to affordable and comprehensive healthcare services in Mombasa. Our strategic objective is to collaborate with Public Benefit Organizations (PBOs) to push for reforms in the Mombasa County Health Sector. By engaging with these organizations, we aim to ensure that every individual in Mombasa, regardless of gender, age, or disability, has access to the reproductive health services they need.
            </article>
            <h2>Challenges Faced</h2>
            <article>
                <ol>
                    <li>Women: Women in Mombasa face significant challenges in accessing reproductive health services due to cultural stigma, lack of information, and economic barriers. Many women are unable to afford contraception or do not have access to accurate information about their reproductive health rights.</li>
                    <li>Youth and Adolescents: Young people, particularly adolescents, often lack knowledge about sexual and reproductive health rights (SRHR) and services. There is a cultural taboo surrounding discussions about sex and reproductive health, which prevents them from seeking the necessary information and services.</li>
                    <li>Young Men: Young men are often excluded from reproductive health discussions, which traditionally focus on women. This exclusion limits their understanding and involvement in reproductive health, which is essential for fostering a supportive environment for women and reducing the spread of sexually transmitted infections (STIs).</li>
                    <li>Persons with Disabilities: Individuals with disabilities face additional barriers, including physical inaccessibility of healthcare facilities, lack of tailored information, and discrimination. These challenges prevent them from receiving comprehensive reproductive health care.</li>
                </ol>
            </article>
        `
    }
]

    export const select_healths = async() => {
        try{
            const res = await fetch(api_url + "/wireframe",
                {
                    method:"POST",
                    headers : {'Content-type': 'application/json; charset=UTF-8'},
                    body:JSON.stringify({component:"projects",list:healths,count:0})
                }
            )
        
            const {status, data} = await res.json()
        
            if(status)
                return data
            else
                return healths
        }catch(error){
            console.log(error)
            return healths
        }

    }

export default healths