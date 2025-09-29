const images_folder = process.env.REACT_APP_environment === "development" ? process.env.REACT_APP_host_url + "/assets" : process.env.REACT_APP_host_url_live + "/assets"
const api_url = process.env.REACT_APP_environment === "development" ? process.env.REACT_APP_api_url : process.env.REACT_APP_api_url_live

const jijenge_constants = [
    {
        wall:images_folder + "/home/jijenge1.jpeg",
        wall2: images_folder + "/home/jijenge1.jpeg",
        title:"Jijenge Jiboreshe Youth Initiative;",
        body:`
            The Jijenge Jiboreshe Youth Initiative Project was supported by the Australian Government as a Direct Aid Program (DAP) and implemented by the Collaboration of Women In Development (CWID). The project aimed to complement Australia's broader aid program by contributing to sustainable economic growth and poverty reduction. 
            Objectives of the Initiatives;
            Skill Development: Strengthening 40 reformed youths with necessary skills and knowledge, organized into 4 groups of 10 members each.

            Poverty Alleviation: Serving as a means of reducing poverty among the youth.
            Environmental Protection: Fostering practices that protect and preserve the environment.
            Economic Justice:  Promoting fairness in economic opportunities and outcomes.
            Gender Equality: Ensuring equal opportunities and treatment for all genders.

            Outcomes:
            Enhanced Community Relations: Improved relationships and collaboration between the community, police, and reformed youths.
            Reduced Insecurity: Lowered levels of insecurity within the community.
            Empowered Youth: Empowered, skilled, and educated reformed youths and community members.
            The project catalyzed positive change, addressing critical issues while promoting sustainable development and social justice.

        `
    }
]

    export const select_jijenge = async() => {
        try{
            const res = await fetch(api_url + "/wireframe",
                {
                    method:"POST",
                    headers : {'Content-type': 'application/json; charset=UTF-8'},
                    body:JSON.stringify({component:"projects",list:jijenge_constants,count:11})
                }
            )
        
            const {status, data} = await res.json()
        
            if(status)
                return data[0]
            else
                return jijenge_constants[0]
        }catch(error){
            console.log(error)
            return jijenge_constants[0]
        }

    }

export default jijenge_constants