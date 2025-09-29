const images_folder = process.env.REACT_APP_environment === "development" ? process.env.REACT_APP_host_url + "/assets" : process.env.REACT_APP_host_url_live + "/assets"
const api_url = process.env.REACT_APP_environment === "development" ? process.env.REACT_APP_api_url : process.env.REACT_APP_api_url_live

const gender_constants = [
    {
        title:"",
        body:`
            <h1>Gender Equality</h1>
            <h2>Advancing Gender Equality: Improving Access to Justice for Women in Kenya</h2>
                                        At the heart of gender equality lies the fundamental right to access justice, especially for women who have experienced gender-based violence. While the conventional approach often revolves around criminal justice responses, it's essential to recognize that justice for survivors encompasses more than just prosecuting perpetrators. For many women, justice means the ability to seek safety, access quality healthcare services for physical and mental recovery, and secure effective protection orders.
                                        In Kenya, the journey towards gender equality receives a significant boost through initiatives like Advancing Gender Equality through Civil Society (AGEC) implemented by the Collaboration of Women In Development (CWID). Supported by the Department of Foreign Affairs, Trade and Development (DFAID) of the government of Canada, and facilitated by the Aga Khan Foundation Canada (AKFC), AGEC aimed at enhancing equitable development and empower women, girls, and their communities across Africa.
                                        One of AGEC's strategic objectives was an improved access to justice for victims of gender-based violence in Kenya. This objective was realized through collaboration with various stakeholders, including communities and other implementing partner organizations that had been actively involved in projects aiming at enhancing capacity for local women groups for gender equality in Mombasa County conducted by CWID.
                                        The focus of these efforts is clear: to contribute to gender equality and agency through strong Public Benefit Organizations(PBOs) in Mombasa, with a priority on vulnerable women, girls, and persons with disabilities living in informal settlements. The expected outcomes were ambitious yet achievable, including enhanced knowledge generation, strengthened capacity of local CSOs, and improved inter-agency coordination towards responding to gender-based violence.
                                        Critical to the success of these initiatives that got a boost innthe same line supported by Global Funds for Women through Akili Dada was the formation of networks and linkages that amplified this impact. One such example was the East Africa Young Women's Leadership Mentorship Initiative (EAYWLMI), which empowered young women across Kenya and Tanzania to lead community projects driving social change, leadership and gender equality.
                                        In essence, achieving gender equality requires a multifaceted approach that goes beyond legal frameworks. It demands concerted efforts to address systemic barriers, empower marginalized groups, and foster inclusive partnerships. Through collaborative endeavors like AGEC, we will pave the way towards a more just and equitable society for all building on Sustainable Development Goal (SDG5) of Ending all forms of discrimination against all women and girls everywhere; and Eliminating all forms of violence against all women and girls in the public and private spheres, including trafficking and sexual and other types of exploitation
            <article>
                <h2>Empowering Women: CWID's Initiative Towards Gender Equality and Access to Justice in Kenya</h2>
                In today's world, the pursuit of gender equality isn't just a moral imperative; it's a strategic necessity for fostering peace, prosperity, and sustainable development. At Collaboration of Women In Development (CWID), we firmly believe in this principle and have dedicated ourselves to promoting gender equality and access to justice, particularly for victims of gender-based violence (GBV) in Kenya.
                Over the past 18 years, CWID has been at the forefront of advocating for gender equality, embedding it into our programming, projects, and research initiatives. Through our efforts, we've witnessed significant strides in women's rights movements, an increase in women's representation in decision-making roles, and a growing commitment to women's human rights across all levels of society. However, we also recognize that there's still much work to be done, especially in ensuring that public policies are inclusive of women's diverse needs and circumstances.
                One of CWID's strategic objectives is to improve access to justice for victims of GBV in Kenya. We understand that addressing GBV requires a multi-faceted approach that involves collaboration with various stakeholders. Therefore, CWID has established partnerships with civil society organizations (CSOs), networks, community paralegals, faith-based organizations, the National and County Government, the Gender Technical Working Group, and development partners.
                Through these collaborations, CWID aims to strengthen the capacities of young women and girls in leadership and advocacy for gender equality. We provide training and support to empower local groups, including community health promoters and women's groups, as well as educational institutions, to ensure that our efforts yield quality outcomes.
                One of our flagship projects, "Ending Double Tragedy for Women and Girls in Mombasa County," has had a significant impact on raising awareness about GBV and enhancing the reporting and referral pathways for GBV cases. Through this project, CWID reached over 6,000 participants across six sub-counties in Mombasa County, sensitizing them on GBV reporting mechanisms and providing support to survivors.
                Furthermore, CWID has been instrumental in the development of the Mombasa County Guideline for the Provision of Essential Services for GBV survivors during pandemics. This initiative underscores our commitment to ensuring that victims of GBV have access to the necessary support and services, even in challenging circumstances such as the COVID-19 pandemic.
                In addition to our project-based interventions, CWID actively engages in policy advocacy and capacity-building initiatives to address systemic issues that perpetuate gender inequality and GBV. We have contributed to the development of the County SGBV Policy in Mombasa County, advocating for measures to prevent, coordinate, and respond to GBV effectively.
                As we continue our journey towards gender equality and access to justice, CWID remains steadfast in our commitment to empowering women and girls, amplifying their voices, and creating a society free from violence. Through collaboration, movement building, research and advocacy, and grassroots interventions, we believe that meaningful change is possible, and together, we can build a more equitable and just world for all.

                Join us in our mission to promote gender equality and access to justice in Kenya and beyond. Together, we can make a difference.

            </article>
        `,
        wall:images_folder + "/home/slide7.png",
        wall2:images_folder + "/home/gender.jpg"
    }
]

        export const select_gender = async() => {
            try{
                const res = await fetch(api_url + "/wireframe",
                    {
                        method:"POST",
                        headers : {'Content-type': 'application/json; charset=UTF-8'},
                        body:JSON.stringify({component:"projects",list:gender_constants,count:1})
                    }
                )
            
                const {status, data} = await res.json()
            
                if(status)
                    return data[0]
                else
                    return gender_constants[0]
            }catch(error){
                console.log(error)
                return gender_constants[0]
            }
    
        }


export default gender_constants