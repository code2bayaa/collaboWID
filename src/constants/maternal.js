const images_folder = process.env.REACT_APP_environment === "development" ? process.env.REACT_APP_host_url + "/assets" : process.env.REACT_APP_host_url_live + "/assets"
const api_url = process.env.REACT_APP_environment === "development" ? process.env.REACT_APP_api_url : process.env.REACT_APP_api_url_live

const maternal_constants = [
    {
        wall:images_folder + "/home/project5.png",
        wall2: images_folder + "/home/project6.png",
        title:"Maternal Child Health Project:",
        body:`
            <section>
                The general objective of the Project was to reduce maternal and newborn morbidity and mortality by increasing the community access to and uptake of quality Maternal and Child Health services in Mombasa - Machafukoni informal settlement. Specific Core Activities included;
                1) Conduct community mobilization activities on best practices in maternal health
                2) Train 90 Community Health Workers (CHWs) and 8 Community Health Extension Workers (CHEWs) in promoting Maternal Health.
                3) Provide light rehabilitation to Mlaleo and Junda health Centres.
                4) Provide key maternal health care equipment for the two health facilities.
                5) Two tricycle ambulances, new health records information system hardware as well as drugs and medical supplies were also donated to health facilities as part of capacity enhancement.
            </section>
            <section>
                <h2>Reducing Child & Maternal Mortality</h2>
                        CWID aims to reduce maternal and child mortality through increasing access to and uptake of quality health services for the population living in informal and rural areas
                <h3>Access To Family Planning Services</h3>
                CWID aims to builld a capacity of health facilities, increase religious leaders' jnow how of family planning, mobilize communities, improve family planning access and referrals for services, and advocate for improved family planning commdity security from the public sector.  
                <h3>Access to Menstrual Health Services</h3>
                CWID works to enhance to information on menstrual hygiene, and funding by government for sustainable sanitary kits distribution to vulnerable women and adolescent girls.
            </section>
            `
    }
]

    export const select_maternal = async() => {
        try{
            const res = await fetch(api_url + "/wireframe",
                {
                    method:"POST",
                    headers : {'Content-type': 'application/json; charset=UTF-8'},
                    body:JSON.stringify({component:"projects",list:maternal_constants,count:12})
                }
            )
        
            const {status, data} = await res.json()
        
            if(status)
                return data[0]
            else
                return maternal_constants[0]
        }catch(error){
            console.log(error)
            return maternal_constants[0]
        }

    }

export default maternal_constants