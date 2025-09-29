const images_folder = process.env.REACT_APP_environment === "development" ? process.env.REACT_APP_host_url + "/assets" : process.env.REACT_APP_host_url_live + "/assets"
const api_url = process.env.REACT_APP_environment === "development" ? process.env.REACT_APP_api_url : process.env.REACT_APP_api_url_live

const tuinuane_constants = [
    {
        wall:images_folder + "/projects/goat2.jpeg",
        wall2:images_folder + "/projects/goat1.jpeg",
title:`                    <h2>Tuinuane Project</h2>
                            <h3>Tuinuane Project Initiative: Meat Goat-Rearing in Matano Manne</h3>`,
        body:`
                            The Tuinuane Project (uplifting each other), initiated by the Collaboration of Women In Development (CWID), is a transformative effort aimed at empowering women at the grassroots level. Originating as a micro-credit program, Tuinuane provides soft loans to women groups, fostering improved livelihoods and economic stability. These loans have enabled women to support their families, pay school fees, and expand their small businesses, leading to significant socio-economic advancements.
                    In a remarkable partnership with Wyndham International, CWID has expanded the scope of the Tuinuane Project to both Kisumu and Siaya by continuing to introduce the meat goat-rearing initiative apart from the Vitengeni in Matano Manne area. This collaboration has opened new avenues for the women of Vitengeni, Kisumu and Siaya promoting not only economic independence but also leadership opportunities within their communities.
                    The meat goat-rearing project is designed to leverage the agricultural strengths of the Vitengeni, Kisumu and Siaya area, providing women with the resources and knowledge needed to rear goats for meat production. This initiative serves multiple purposes:

                        <ol>
                            <li><h3>Economic Empowerment: </h3>By engaging in goat-rearing, women generate a steady income stream, enhancing their financial stability and reducing reliance on external aid.</li>
                            <li><h3>Skill Development: </h3>Participants receive training in animal husbandry, business management, and sustainable agricultural practices, equipping them with valuable skills that extend beyond goat-rearing.</li>
                            <li>
                                <h3>Community Leadership</h3>
                                Traditionally, leadership positions in the community are linked to ownership of assets. By acquiring goats, women not only improve their economic status but also gain the eligibility to take on leadership roles, thus challenging and transforming local gender norms.
                                The impact of the meat goat-rearing project has been profound. Women in Vitengeni, Kisumu and Siaya have reported increased household incomes, better nutrition for their families, and enhanced social standing within their communities. The project's success is a testament to the potential of collaborative efforts in fostering sustainable development and gender equality.
                                Looking ahead, CWID and Wyndham International continues to expand the meat goat-rearing initiative to other regions, replicating the successful model in Vitengeni, Kisumu and Siaya. By continuing to support and empower women through innovative projects, the Tuinuane Project aims to create a ripple effect of positive change across the grassroots communities.
                                The Tuinuane Project's meat goat-rearing initiative is more than just an economic venture; it is a beacon of hope and empowerment for the women of Vitengeni, Kisumu and Siaya. Through this project, CWID and Wyndham International are not only improving livelihoods but also paving the way for a more equitable and prosperous future. The success of this initiative underscores the importance of supporting women at the grassroots level, ensuring that they have the resources and opportunities needed to thrive as leaders and entrepreneurs towards Sustainable Development Goal2 (SDG2) that states “End hunger, achieve food security and improved nutrition and promote sustainable agriculture”.
                            </li>
                        </ol>
        `
    }
]

            export const select_tuinuane = async() => {
                try{
                    const res = await fetch(api_url + "/wireframe",
                        {
                            method:"POST",
                            headers : {'Content-type': 'application/json; charset=UTF-8'},
                            body:JSON.stringify({component:"projects",list:tuinuane_constants,count:9})
                        }
                    )
                
                    const {status, data} = await res.json()
                
                    if(status)
                        return data[0]
                    else
                        return tuinuane_constants[0]
                }catch(error){
                    console.log(error)
                    return tuinuane_constants[0]
                }
        
            }

export default tuinuane_constants