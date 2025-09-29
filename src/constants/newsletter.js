
const images_folder = process.env.REACT_APP_environment === "development" ? process.env.REACT_APP_host_url + "/assets" : process.env.REACT_APP_host_url_live + "/assets"
const api_url = process.env.REACT_APP_environment === "development" ? process.env.REACT_APP_api_url : process.env.REACT_APP_api_url_live

const resources = [
    {
        name:"Da'Voice",
        file:images_folder + "/newsletter/daVoice.pdf",
        type:"newsletter",
        date:"06-14-2024",
        img:images_folder + "/resources/davoice.png",
        description:`Welcome to our quarterly
                    newsletter! We are thrilled to
                    share with you the latest
                    developments in our mission to
                    make a positive impact in our
                    community.
                    Firstly, we would like to express
                    our gratitude to all of our
                    development partners and
                    communities who have
                    continued to support us d`
    },
    {
        name : "CWID-NEWSLETTER2",
        file : images_folder + "/pdf/publication/CWID-NEWSLETTER2-1.pdf",
        type : "newsletter",
        date : "05-23-2024",
        img : images_folder + "/resources/report.png",
        description : "Da’ VoiceThe Premier Grassroots Women Newsletter by Collaboration of Women in Development (CWID). It is important to ensure that diverse women participate in decision making tables which is possible through trainings on National and International frameworks which will help them advocate for their rights"
    }
    
]


    export const select_newsletters = async() => {
        try{
            const res = await fetch(api_url + "/wireframe",
                {
                    method:"POST",
                    headers : {'Content-type': 'application/json; charset=UTF-8'},
                    body:JSON.stringify({component:"insights",list:resources,count:0})
                }
            )
        
            const {status, data} = await res.json()
        
            if(status)
                return data
            else
                return resources
        }catch(error){
            console.log(error)
            return resources
        }

    }

export default resources