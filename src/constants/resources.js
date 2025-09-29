const images_folder = process.env.REACT_APP_environment === "development" ? process.env.REACT_APP_host_url + "/assets" : process.env.REACT_APP_host_url_live + "/assets"
const api_url = process.env.REACT_APP_environment === "development" ? process.env.REACT_APP_api_url : process.env.REACT_APP_api_url_live

const resources_constants = [
        {
            name : "VULNERABIITY ASSESSEMENTS",
            file : images_folder + "/pdf/reports/cwid.pdf",
            type : "reports",
            date : "05-23-2024",
            img : images_folder + "/resources/vulnerability.jpeg",
            description : `Collaboration of Women in Development (CWID) is among the Non-Governmental Organizations 
                            (NGOs) that support women and other vulnerable groups in Kenya. Currently, CWID is working in 
                            partnership with Aga Khan Foundation to enhance the capacity of local women groups for gender 
                            equality in Mombasa County...`
        },
        {
            name : "POLICY",
            file : images_folder + "/pdf/reports/POLICY-BRIEF.pdf",
            type : "reports",
            date : "05-23-2024",
            img : images_folder + "/resources/policy.png",
            description : "Low demand, low sales, and low income: As a result of COVID-19 there has been missed income opportunities caused by the freeze of productive activities, many women traders are suffering economic losses..."
        },
        {
            name : "AWAKENING THE SILENT VOICES",
            file : images_folder + "/pdf/reports/AWAKENING-THESILIENTVOICES.pdf",
            type : "reports",
            date : "05-23-2023",
            img:images_folder + "/resources/awakening.png",
            description: "Strengthening the Implementation of POTA Amendments and PCVE in Mombasa. Baseline Study Report | Awakening The Silent VoicesPG | 4 DISCLAIMER The views expressed by the authors in this publication do not necessarily reflect those of the Collaboration of Women in Development (CWID)..."
        },
        {
            name : "SURVEY DRAFT",
            file : images_folder + "/pdf/reports/BASELINE-SURVEYDRAFTFINALDESIGN.pdf",
            type : "reports",
            date : "05-23-2023",
            img:images_folder + "/resources/baseline.png",
            description:"REDUCED VULNERABILITY TO EXTREMIST NARRATIVES FOR AT RISK YOUTH AMONG JUVENILE GANGS IN MOMBASA COUNTY..."
        },
        {
            name : "GENDER BASELINE SURVEY",
            file : images_folder + "/pdf/reports/Baseline-survey-on-Gender-CVE-Report.pdf",
            type : "reports",
            date : "05-23-2019",
            img:images_folder + "/resources/baseline violent.png",
            description:"Impact of Countering Violent Extremism on Women & Their Roles In Prevention. Women’s vital role in efforts to prevent and resolve conflict desires wide-ranging recognition..."
        },
        {
            name : "EARLY WARNING: MOMBASA",
            file : images_folder + "/pdf/reports/Early-Warning-Early-Response-Framework-for-Mombasa-County.pdf",
            type : "reports",
            date : "05-23-2020",
            img:images_folder + "/resources/early.png",
            description:"relatively underfunded global peace and security architecture, it is important to consider whether existing early warning reporting systems are still relevant, and if so, whether they are equipped to deal with such an evolved security context..."
        },
        {
            name : "GBV SCORECARD",
            file : images_folder + "/pdf/reports/GBV-SCORECARD.pdf",
            type : "reports",
            date : "05-23-2021",
            img:images_folder + "/resources/gbv.jpeg",
            description:"Health data (annonymized )not easily available and/or not being disseminate to stakeholders and decision-makers to enable them identify problems and needs, make evidence-based decisions on SGBV (health) policies and allocate scarce resources optimally..."
        },
        {
            name : "KISWAHILI POLICIES",
            file : images_folder + "/pdf/reports/POLICY-BRIEF-kiswahili.pdf",
            type : "reports",
            date : "05-23-2020",
            img:images_folder + "/resources/policy kiswahili.png",
            description:"Janga la Korona limeathiri mazingira ya wafanyabiashara wote, na tofauti ilioko katika mfumo wa biashara na vizuizi huenda zikaleta athari za tofauti za kijinsia..."
        },
        {
            name : "GBV SURVIVORS",
            file : images_folder + "/pdf/reports/Provision-of-Essential-Services-for-GBV-Survivors-in-Mombasa.pdf",
            type : "reports",
            date : "07-23-2020",
            img:images_folder + "/resources/covid.jpeg",
            description:"Disease outbreaks like COVID-19 threatens the health of all, disrupt the normal functioning of populations and proliferate indiscriminately..."
        },
        {
            name : "RAPID ASSESSEMENTS",
            file : images_folder + "/pdf/reports/Rapid-Assessment-Report-Kilifi-2.pdf",
            type : "reports",
            date : "05-23-2019",
            img:images_folder + "/resources/rapid.jpeg",
            description:"Informal sector remains a signicant source of livelihoods especially in many urban settings in Kili County. It is also important because of its absorption of a signicant proportion of women and other vulnerable populations who have been evidenced to face chronic inequalities..."
        },
        {
            name : "TABASAMU WAMAMA",
            file : images_folder + "/pdf/reports/TABASAMU-YAWAMAMABASELINEREPORTSURVEY2.pdf",
            type : "reports",
            date : "05-23-2023",
            img:images_folder + "/resources/tabasamu.jpeg",
            description:"Resilience to the impacts of climate change has many determinants. Despite having done the least to cause climate crisis, rural and urban disadvantaged women in low and middle-income settlements bear the brunt of climate-related losses and damages..."
        },
        {
            name : "COVID 19 & WOMEN",
            file : images_folder + "/pdf/reports/The-impact-of-COVID-19-on-Women-Informal-Businesses-in-Mombasa-County.pdf",
            type : "reports",
            date : "05-23-2020",
            img:images_folder + "/resources/covid19.jpeg",
            description:"As the economic effects of the coronavirus pandemic continue to unfold, it becomes clear that some will be hit harder than others especially for the women informal traders..."
        }
]

    export const select_resources = async() => {
        try{
            const res = await fetch(api_url + "/wireframe",
                {
                    method:"POST",
                    headers : {'Content-type': 'application/json; charset=UTF-8'},
                    body:JSON.stringify({component:"insights",list:resources_constants,count:1})
                }
            )
        
            const {status, data} = await res.json()
        
            if(status)
                return data
            else
                return resources_constants
        }catch(error){
            console.log(error)
            return resources_constants
        }

    }
export const resource_walls = [
    {
        ttile:"",
        body:`
                            Welcome to CWID, your online repository for publicly available reports and toolkits addressing critical social issues. Our platform is dedicated to fostering collaboration and knowledge-sharing, particularly focusing on gender and CVE, early warning mechanisms, vulnerability assessments, women's economic empowerment, health, policies, leadership, and the environment, among other key areas.
                    Our comprehensive repository offers a wealth of information to support informed decision-making and action.
                    Explore today by clicking the links under the reports and discover valuable resources to drive positive change in your community and beyond.

        `
    }
]

    export const select_resources_walls = async() => {
        try{
            const res = await fetch(api_url + "/wireframe",
                {
                    method:"POST",
                    headers : {'Content-type': 'application/json; charset=UTF-8'},
                    body:JSON.stringify({component:"insights",list:resource_walls,count:2})
                }
            )
        
            const {status, data} = await res.json()
        
            if(status)
                return data
            else
                return resource_walls
        }catch(error){
            console.log(error)
            return resource_walls
        }

    }


export default resources_constants