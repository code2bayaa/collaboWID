const images_folder = process.env.REACT_APP_environment === "development" ? process.env.REACT_APP_host_url + "/assets" : process.env.REACT_APP_host_url_live + "/assets"
const api_url = process.env.REACT_APP_environment === "development" ? process.env.REACT_APP_api_url : process.env.REACT_APP_api_url_live

const ground_constants = [
    {
        wall:images_folder + "/projects/tabasamu3.jpeg",
        wall2: images_folder + "/projects/tabasamu3.jpeg",
        title:"",
        body:`
                    
            <h2>Women Gaining Ground Project:</h2>
            <section>
                Women Gaining Ground (WGG) is applying under the Power of Women grant instrument of the Dutch Ministry of Foreign Affairs (MFA), with the two main objectives of; 1) preventing and eliminating sexual and gender-based violence (SGBV) against women and girls
                strengthening women’s leadership and women’s political participation in decision-making.

                WGG is a new Global South-led consortium of three organizations with deep experience in feminist leadership, movement-building, advocacy and working with marginalized groups: CREA as the lead organization; Akili Dada; and International Women's Rights Action Watch Asia Pacific (IWRAW). WGG works in five priority countries: Bangladesh, India, Kenya, Rwanda and Uganda. WGG builds the capacity and transformative leadership of young women and girls and women with disabilities (WWDs). This includes creating cross-movement alliances between these new women leaders and with diverse women’s rights movements to develop a shared vision and common agenda. Together with women’s rights movements, new women leaders collectively lobby and advocate with both state and non-state duty bearers from the local to global levels to change norms, attitudes, laws, and policies around the interconnected issues of SGBV and the lack of women’s political empowerment. Overall, WGG contributes to the strategic objective of equipping the most marginalized women and girls with the necessary tools and skills to become architects of a society free from violence. Young women and WWDs will design their own solutions and lead a political and social transformation to redefine, prevent and eliminate SGBV. Given the COVID-19 context, the WGG program centers women and girls at the margins while connecting its strategies to the increasing conversations led by feminist movements on the ground on how to rethink civic space, practice self-care, build resilient communities, and advance feminist digital organizing. Now more than ever, our
                strategies of building inclusive cross-movements and alliances and creating counternarratives that reframe the way we think about human rights are especially pertinent in ensuring the voices and leadership of young women and WWDs are amplified during this time.
            </section>
        `
    }
]

        export const select_grounds = async() => {
            try{
                const res = await fetch(api_url + "/wireframe",
                    {
                        method:"POST",
                        headers : {'Content-type': 'application/json; charset=UTF-8'},
                        body:JSON.stringify({component:"projects",list:ground_constants,count:6})
                    }
                )
            
                const {status, data} = await res.json()
            
                if(status)
                    return data[0]
                else
                    return ground_constants[0]
            }catch(error){
                console.log(error)
                return ground_constants[0]
            }
    
        }

export default ground_constants