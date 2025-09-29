const images_folder = process.env.REACT_APP_environment === "development" ? process.env.REACT_APP_host_url + "/assets" : process.env.REACT_APP_host_url_live + "/assets"
const api_url = process.env.REACT_APP_environment === "development" ? process.env.REACT_APP_api_url : process.env.REACT_APP_api_url_live

const east_constants = [
    {
        wall:images_folder + "/home/project6.png",
        wall2:images_folder + "/home/east.webp",
        title:"East Africa Young Women’s Leadership Mentorship Initiative (EAYWLMI):",
        body:`
                                The project is born out of the realization that active involvement for women and girls in leadership positions and policy makings is minimal hence the project seeks to strengthen, mentor, empower and build movements of young women and girls between the ages of (18-33 years). This enabled the opportunity to be presented to the beneficiaries on empowerment towards having voices on Leadership, decision making, and Policy-making skills. The project is responding in addressing the issues around leadership and advocating for the implementation of women policies including 2/3 gender rule that has stalled in the Kenyan parliament.

                        Young women and girls continued to have minimal safe spaces and opportunities within their environments, this presents a danger on the low engagements in leadership positions, inappropriate involvements in elective representations, decision-making levels and lack of role models for young women and girls to mentor and provide strategic vision.

                        If these are not addressed, then the young women and girls will continuously be faced with other related challenges such as early marriage, inadequate educational opportunities, and poor problem-solving skills, poor entrepreneurial skills and unemployment of women and girls resulting from gender inequalities and lack of visionary leaders to provide safe spaces for women and girls.
        `
    }
]
    export const select_east = async() => {
        try{
            const res = await fetch(api_url + "/wireframe",
                {
                    method:"POST",
                    headers : {'Content-type': 'application/json; charset=UTF-8'},
                    body:JSON.stringify({component:"projects",list:east_constants,count:14})
                }
            )
        
            const {status, data} = await res.json()
        
            if(status)
                return data[0]
            else
                return east_constants[0]
        }catch(error){
            console.log(error)
            return east_constants[0]
        }

    }

export default east_constants