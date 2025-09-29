const images_folder = process.env.REACT_APP_environment === "development" ? process.env.REACT_APP_host_url + "/assets" : process.env.REACT_APP_host_url_live + "/assets"
const api_url = process.env.REACT_APP_environment === "development" ? process.env.REACT_APP_api_url : process.env.REACT_APP_api_url_live

const violent_constants = [
    {
        wall:images_folder + "/home/project6.png",
        wall2:images_folder + "/home/project6.png",
        title:"Countering Violent Extremism through Anti-Corruption in Eastern Africa:",
        body:`
                                Countering Violence Extremism through Anti-Corruption in Eastern Africa was an 18-month funded project by UNODC that was piloted in Zanzibar (Mwera and Ngambu Police Stations), Mombasa (Likoni and Changamwe Police Stations) as well as Nairobi (Pangani and Shauri Moyo Police Stations). This Project will focus on the impact of anti-corruption initiatives on acts of violent extremism within the pilot policing communities. This Project will be housed within the Internal Affairs Unit in Kenya and the Zanzibar Police Commission Zanzibar.
                        Main objective:
                        <ol>
                            <li>To improve trust among Police, Media and Community members; and b) Enhance reporting cases of crime, radicalization, bribery</li>
                        </ol>

                        <h3>Partners</h3>
                        <ul>
                            <li>Ethics and Anti-Corruption Commission (EACC)</li>
                            <li>Transparency International (TI)</li>
                            <li>Kenya National Commission on Human Rights (KNCHR)</li>
                            <li>Internal Affairs Unit (IAU) in the National Police Service</li>
                            <li>Independent Police Oversight Authority (IPOA)</li>
                        </ul>
        `
    }
]

    export const select_violent = async() => {
        try{
            const res = await fetch(api_url + "/wireframe",
                {
                    method:"POST",
                    headers : {'Content-type': 'application/json; charset=UTF-8'},
                    body:JSON.stringify({component:"projects",list:violent_constants,count:15})
                }
            )
        
            const {status, data} = await res.json()
        
            if(status)
                return data[0]
            else
                return violent_constants[0]
        }catch(error){
            console.log(error)
            return violent_constants[0]
        }

    }


export default violent_constants