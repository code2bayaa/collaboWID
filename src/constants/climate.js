const images_folder = process.env.REACT_APP_environment === "development" ? process.env.REACT_APP_host_url + "/assets" : process.env.REACT_APP_host_url_live + "/assets"
const api_url = process.env.REACT_APP_environment === "development" ? process.env.REACT_APP_api_url : process.env.REACT_APP_api_url_live


const climate_constants = [
    {
        wall:images_folder + "/home/climate.jpg",
        wall2: images_folder + "/home/climate.jpg",
        title:"",
        body:`
            <article>
                <h2>Community Empowerment, Resilience & Adaptation</h2>
                Climate Change (CC) is not a distant threat; it's impacting communities worldwide, particularly those already vulnerable due to economic disparities and geographical location. Mombasa, a coastal gem, is facing its own set of challenges exacerbated by climate change. From erratic rainfall to rising sea levels, the effects are felt deeply, especially in areas like Nyali, Likoni, Kisauni, Changamwe, Mvita and Jomvu constituencies.

            </article>
            <article>
                The repercussions of climate change are multifaceted, affecting not just environmental stability but also food security, livelihoods, and infrastructure. Floods, coastal erosion, and heatwaves are becoming more frequent, threatening industries like tourism and fisheries, as well as the lives and homes of the local population.
            </article>
            <article>
                In response to these challenges, there's a pressing need for adaptation and resilience-building measures that are not only effective but also sustainable. This is where traditional knowledge plays a crucial role. The wisdom passed down through generations can offer insights into environmental adaptation strategies that are rooted in local context and experience.
            </article>
            <article>
                At the heart of our approach is Climate Smart Agriculture (CSA), a framework endorsed by international organizations like the FAO. CSA aims to transform agricultural systems to enhance productivity, resilience, and sustainability in the face of climate change. By integrating traditional practices with modern techniques, we can empower communities to mitigate risks and safeguard their food and nutritional security.

            </article>
            <article>
                But building climate resilience is not just about agricultural practices; it's about holistic development. It requires collaborative efforts from governments, Public Benefit Organizations (PBOs), development partners, and local communities. The National Climate Change Action Plan (NCCAP) provides a roadmap for integrating climate adaptation into development planning, emphasizing the need for synergy between adaptation and sustainable development goals.

            </article>
            <article>
                Through initiatives like Wajibu Wetu, CWID is committed to mainstreaming climate change adaptation into environmental actions and development plans in Mombasa. By harnessing traditional knowledge, promoting climate-smart practices, and fostering community resilience, we aim to mitigate the impacts of climate change and build a more sustainable future for all that contributes to an enhanced adaptive capacities of communities to cope with the effects of climate change and other shocks from unprecedented disasters.
            </article>
            <article>
Together, let's embrace innovation, respect tradition, and work towards a climate-resilient Mombasa. The journey won't be easy, but with collective action and determination, we can weather the storm and emerge stronger, more resilient than ever before and work under the Sustainable Development Goal 13 (SDG 13), which focuses on climate urgent action combat climate change and its impacts.
            </article>

            <article>
                                            <h2>WATER & SANITATION</h2>
                                    <h3>Empowering Kenya: The Urgent Need for Improved Water and Sanitation Infrastructure</h3>
                                        Water and sanitation are fundamental human rights, yet millions of people in Kenya still lack access to clean water and proper sanitation facilities. While this issue affects the entire population, its impact is particularly harsh on vulnerable groups such as women, young girls, and persons with disabilities. CWID delves into the pressing need for improved water and sanitation infrastructure in Kenya, focusing on the specific challenges faced by these marginalized communities.
                                        In Kenya, women and girls are disproportionately affected by the lack of access to clean water and sanitation. They often bear the responsibility of collecting water for their families, which can be a time-consuming and physically demanding task. According to UNICEF, women and girls in Kenya spend an estimated 16 million hours each day collecting water. This not only limits their educational and economic opportunities but also exposes them to safety risks, as they may have to travel long distances to fetch water, leaving them vulnerable to harassment and violence.
                                        Moreover, inadequate sanitation facilities pose additional challenges for women and girls, particularly during menstruation. The absence of private and hygienic toilets in schools, for example, often forces girls to miss classes during their periods, affecting their education and overall well-being.
                                        For young girls in Kenya, the lack of access to clean water and sanitation facilities can have profound consequences on their health and dignity. Poor sanitation increases the risk of waterborne diseases such as diarrhea, which remains one of the leading causes of death among children under five in the country. Additionally, the absence of adequate menstrual hygiene management facilities in schools can lead to embarrassment, stigma, and even dropout rates among girls once they reach puberty.
                                        Persons with disabilities face unique challenges in accessing water and sanitation services in Kenya. Many existing facilities are not designed to accommodate their needs, making it difficult for them to maintain personal hygiene and dignity. According to WaterAid, an estimated 80% of people with disabilities in Kenya lack access to clean water and sanitation services. This not only exacerbates their vulnerability to health issues but also perpetuates social exclusion and discrimination.
                                        Addressing the water and sanitation crisis in Kenya requires a concerted effort from governments, Public Benefit Organizations (PBOs), and the international community. Investments must be made in the construction of sustainable water supply systems and the improvement of sanitation facilities, with a particular focus on marginalized communities. Moreover, efforts should be made to ensure that these interventions are inclusive and accessible to persons with disabilities.
                                        Furthermore, raising awareness about the importance of proper hygiene practices and menstrual health management is essential, particularly among women, young girls, and persons with disabilities. By empowering these communities with the knowledge and resources they need, we can work towards a future where every individual in Kenya has access to clean water and sanitation, regardless of their gender, age, or ability up to the grassroots level.
                                        Inadequate access to clean water and sanitation is a pressing issue in Kenya, with far-reaching implications for women, young girls, and persons with disabilities. By prioritizing investments in water and sanitation infrastructure and promoting inclusive policies and practices, we can make significant strides towards achieving Sustainable Development Goal 6 – ensuring availability and sustainable management of water and sanitation for all. It's time to act decisively and ensure that no one is left behind in the journey towards water and sanitation justice in Kenya as championed by CWID.

            </article>

            <article>
                                            <h2>WASTE MANAGEMENT</h2>
                                    <h3>Addressing Waste Management: </h3>
                                        Waste management is a critical issue that affects communities worldwide, with significant implications for various demographic groups, including women, young girls, vulnerable populations, and persons with disabilities. In Mombasa, Kenya, the challenges associated with waste management are particularly pronounced, posing numerous social, economic, and environmental concerns. Understanding the specific impacts on these marginalized groups is essential for developing effective solutions and promoting inclusivity in waste management practices.
                                        In Mombasa, women often bear the brunt of inadequate waste management practices. They are disproportionately involved in waste collection and sorting, exposing them to health hazards such as respiratory illnesses, skin infections, and injuries. Additionally, the time spent on waste-related activities detracts from opportunities for education, employment, and personal development, perpetuating cycles of poverty and gender inequality.
                                        Young girls in Mombasa face unique challenges stemming from inadequate waste management. They may be required to assist their families in waste collection and disposal, compromising their education and exposing them to safety risks. Lack of proper sanitation facilities and waste disposal infrastructure also jeopardizes their health and well-being, hindering their ability to thrive and reach their full potential.
                                        Vulnerable groups, including the elderly, impoverished individuals, and marginalized communities, are disproportionately affected by poor waste management practices in Mombasa. Limited access to clean water, sanitation, and healthcare exacerbates the health risks associated with improper waste disposal, leading to higher rates of disease transmission and mortality. Moreover, the economic burden of managing waste falls heavily on these populations, further entrenching their vulnerability and marginalization.
                                        Persons with disabilities encounter numerous barriers to effective waste management in Mombasa. Inaccessible infrastructure, such as poorly designed waste disposal facilities and inadequate transportation options, restricts their mobility and independence. Moreover, the lack of inclusive waste management policies and programs excludes persons with disabilities from participating fully in community efforts to address waste-related challenges, perpetuating social exclusion and marginalization.
                                        To address the multifaceted challenges of waste management in Mombasa and promote inclusivity, concerted efforts are needed at the community, governmental, and organizational levels. This entails implementing sustainable waste management practices, investing in infrastructure development, and promoting education and awareness campaigns. Additionally, incorporating the perspectives and needs of women, young girls, vulnerable populations, and persons with disabilities into policy-making and planning processes is crucial for fostering equitable and inclusive solutions.
                                        Effective waste management is essential for promoting public health, environmental sustainability, and social equity in Mombasa, Kenya. By recognizing and addressing the specific impacts on women, young girls, vulnerable populations, and persons with disabilities, we can work towards building a more inclusive and resilient waste management system that benefits all members of the community. Together, we can create a cleaner, healthier, and more equitable future for Mombasa and its residents.

            </article>
        `
    }
]

    export const select_climate = async() => {
        try{
            const res = await fetch(api_url + "/wireframe",
                {
                    method:"POST",
                    headers : {'Content-type': 'application/json; charset=UTF-8'},
                    body:JSON.stringify({component:"projects",list:climate_constants,count:4})
                }
            )
        
            const {status, data} = await res.json()
        
            if(status)
                return data[0]
            else
                return climate_constants[0]
        }catch(error){
            console.log(error)
            return climate_constants[0]
        }

    }

export default climate_constants