const images_folder = process.env.REACT_APP_environment === "development" ? process.env.REACT_APP_host_url + "/assets" : process.env.REACT_APP_host_url_live + "/assets"
const api_url = process.env.REACT_APP_environment === "development" ? process.env.REACT_APP_api_url : process.env.REACT_APP_api_url_live


const networks = [
    {
        title:"Pwani Gender-Based Violence Network (PGBVN)",
        body:`
                                        <article>
                                <h2>Pwani Gender-Based Violence Network (PGBVN)</h2>
<h4>Vision:</h4>
<p>A just and violence-free society that upholds gender equality and inclusivity.</p>
<h4>Mission:</h4>
<p>United to advocate for a violence-free society on any kind of violence.</p>
<h4>Vision Statement:</h4>
<p>The Pwani Gender-Based Violence Network envisions a future where all individuals, regardless of gender, live in a safe and equitable environment. We strive for a society where gender-based violence is eradicated, and every person can realize their full potential without fear of discrimination or harm.</p>
<h4>About PGBVN</h4>
The Pwani Gender-Based Violence Network (PGBVN) is a collaborative effort of over 54 organizations dedicated to addressing gender-based violence (GBV) and broader gender issues in Kenya's coastal region. Established in July 2008, PGBVN emerged from a Mombasa workshop that highlighted the need for improved referral systems for GBV cases and stronger collaboration in case follow-ups. The network aims to create a platform for joint advocacy, information sharing, and mutual partnerships to foster sustainable development and uphold human rights, specifically focusing on GBV response and case referrals.
PGBVN's membership is diverse, including women grassroots organizations, public benefit organizations (PBOs), international PBOs (IPBOs), community-based organizations (CBOs), faith-based organizations (FBOs), and other non-state actors in Mombasa County. The network also collaborates closely with relevant government institutions and is part of the Mombasa County Health Advocacy Network, where CWID also serves as the secretariat.
 Collaboration of Women in Development (CWID)
Since its inception, the Pwani Gender-Based Violence Network has been hosted by the Collaboration of Women in Development (CWID), which serves as the network's secretariat and convener. CWID plays a crucial role in coordinating the network's activities, fostering collaborations among member organizations, and facilitating advocacy efforts to address GBV and promote gender equality on thematic pillar of health and Gender.


<h4>Impact Created:</h4>
Enhanced Health Services: The network's advocacy efforts have led to significant improvements in healthcare within Mombasa County. Notably, the procurement of "TukTuk" ambulances for Junda and Mlaleo Health Facilities has enhanced maternal and child health services and continuous community mobilization.
Successful Mediation: PGBVN, under CWID's leadership, has successfully mediated between the county government and the Kenya Medical Practitioners, Pharmacists and Dentists Union (KMPDU) during healthcare worker strikes. This mediation addressed critical issues like delayed NHIF and NSSF remittances as required statutory. 
Safe Rescue Center:  The network advocated for the construction of a safe rescue center for SGBV survivors in Mwakirunge ward, Maunguja location, providing a critical resource for survivors in need of protection and support.
Advocacy and Joint Action: PGBVN has been at the forefront of advocacy efforts, organizing events such as the 16 Days of Activism against Gender-Based Violence. These events, in collaboration with members tackling various thematic areas like anti-corruption, education, land rights, governance, youth, peace, and security, have raised awareness and promoted collective action.
The Pwani Gender-Based Violence Network (PGBVN), with CWID at its helm, continues to champion the cause of gender equality and the eradication of gender-based violence in Kenya's coastal region. Through collaborative efforts, strategic advocacy, and unwavering commitment, PGBVN is making significant strides towards creating a safer, more equitable society for all.
</article>
        `,
        img:images_folder + "/network/network2.jpeg",
        link:"/coalition/pgbvn"
    },
    {
        title:"We For She Movement (W4SM)",
        // body:`We are a founding member of W4SM together with Akili Dada, a local movement of young women and girls working towards empowering young women, and adolescents' girls and achieving gender equality at the grassroots level and prevention of GBV. Together, we conduct community-based projects, such as awareness campaigns, skill-building, linkages, and entrepreneurship training, to empower women socially. Through W4SM, we leverage our collective strengths and resources to create a larger impact on women's lives and the prevention of GBV.`,
        img:images_folder + "/network/network2.jpeg",
        link:"/weforshe"
    },
    {
        title:"Gender Technical Working Group (GTWG)",
        body:`
                                        <h2>Gender Technical Working Group (GTWG)</h2>
                                <article>
                                We aim to continue establishing a partnership with GTWG to enhance our advocacy efforts for human rights. By collaborating with GTWG, we jointly address issues related to SGBV/GBV, discrimination, and women's rights violations. We continue to organize capacity-building workshops, mobilization, awareness creation and resource sharing for GTWG Members, we in addition share our research findings, and contribute to policy discussions to strengthen the protection and promotion of human rights, especially for diverse young women and minority and vulnerable persons within the communities we work with.                              
                                </article>
        `,
        img:images_folder + "/network/network5.jpg",
        link:"/coalition/gender"
    },
    {
        title:"Coast Civil Society Network for Human Rights",
        body:`
                                        <h2>Coast Civil Society Network for Human Rights</h2>
                                <article>
                                We intend to explore collaboration with RWRC, a regional coalition network with various organizations working towards defending human rights, health, land and environment, good governance, youth, gender equality. Through this network, we envision sharing resources and expertise and implementing advocacy campaigns across the region. By joining forces with CCSRG, we address cross-cutting issues affecting women's rights and strengthen our collective impact  
                                </article>
        `,
        img:images_folder + "/network/network15.jpeg",
        link:"/coalition/rights"
    },
    {
        title:"Mombasa Development Trust(MCDT)",
        body:`
                                            <h2>Mombasa Development Trust(MCDT)</h2>
                                    <article>
                                    CWID, as a founding member organization of the Mombasa Development Trust (MCDT) among other 22 organizations, plays a pivotal role in leading the health and gender pillar within the network and supports reaching out in working with the communities for better service deliveries and development agendas. Our collaboration with MCDT involves a multifaceted approach aimed at fostering community ownership, participation, empowerment, resource identification and management, and sustainability of programs related to health and gender among other key issues in Mombasa.
                                    </article> 
        `,
        img:images_folder + "/network/network9.jpg",
        link:"/coalition/mcdt"
    },
    {
        title:"Mombasa County Health Advocacy Network (MCHANE)",
        body:`
                                        <h2>Mombasa County Health Advocacy Network (MCHANE)</h2>
                                        <article>
                                        Mombasa County Health Advocacy Network (MCHANE) was established in 2017 through Haki Jamii organization, in collaboration with the Collaboration of Women In Development (CWID). The network's mission is to advocate for health issues within Mombasa County. MCHANE focuses on oversight of health concerns, capacity building for network members, citizens, and stakeholders, media advocacy, and leading county advocacy mechanisms on health and budget cycles. Comprising various organizations based in Mombasa County that work within health thematic areas, MCHANE has notably led the development and implementation of health sector scorecards for all health facilities in Mombasa County, particularly targeting levels 2, 3, and 4.                                
                                        </article> 
        `,
        img:images_folder + "/network/network4.jpg",
        link:"/coalition/mchane"
    },
    {
        title:"Scaling Up Nutrition Civil Society Association (SUNCSA)",
        body:`
                                        <h2>Scaling Up Nutrition Civil Society Association (SUNCSA)</h2>
                                <article>
                                Kenya's SUN Civil Society Alliance (SUN CSA) was established in October 2013 to mobilize civil societies to champion the scaling up of nutrition in Kenya. CWID plays a pivotal role in mobilizing members on nutrition issues within this alliance. SUN CSA primarily focuses on building the capacity of civil society organizations (CSOs) to enhance nutrition and advocacy efforts at both national and local levels. The network supports the government, especially the Ministry of Health, in developing nutrition-related policies and communication documents. CWID is an active member of SUN CSA and contributes significantly to the Mombasa County network.                                
                                </article>  
        `,
        img:images_folder + "/network/DSC_6845.jpg",
        link:"/coalition/suncsa"
    },
    {
        title:"Agriculture Sector Development Support Program (ASDSP)",
        body:`
                                        <h2>Agriculture Sector Development Support Program (ASDSP)</h2>
                                <article>
                                The Agriculture Sector Development Support Programme Phase Two (ASDSP II) is a key initiative by the Ministry of Agriculture, Livestock, Fisheries, and Cooperatives, along with 47 county governments, aimed at addressing food and nutrition security while promoting manufacturing. ASDSP II is designed to enhance the capacity of various Priority Value Chain Actors at different levels to address issues hindering the commercialization of agriculture. This program focuses on developing sustainable agricultural practices and improving the agricultural value chain to boost economic growth and food security.                                
                                </article>
        `,
        img:images_folder + "/network/network8.jpg",
        link:"/coalition/asdsp"
    },
    {
        title:"Every Woman Treaty",
        body:`
            <h2>Every Woman Treaty</h2>
            <article>
                The Collaboration of Women In Development (CWID) is a member of Every Woman Treaty, a global campaign advocating for a treaty to end violence against women and girls. The campaign unites over 1,700 women’s rights advocates, lawyers, scholars, and organizations from 128 countries, working collectively to create a safer world for women and girls. Every Woman Treaty aims to establish comprehensive legal frameworks to protect women and girls from violence and to promote gender equality worldwide.                                
            </article>  
        `,
        img:images_folder + "/network/DSC_1262.jpg",
        link:"/coalition/treaty"
    },
    {
        title:"Kenya Aids NGOs Consortium (KANCO)",
        body:`
                                        <h2>Kenya Aids NGOs Consortium (KANCO)</h2>
                                <article>
                                    KANCO is a leading membership organization of Non-Governmental Organizations committed to improving the health and well-being of communities through capacity building and innovative leadership. The organization focuses on four strategic areas: policy and advocacy; improving access to health services; strengthening KANCO as an institution; and fostering a strong, unified membership along with research, learning, and innovation. CWID is an active member of KANCO, contributing to its mission of enhancing community health and well-being through collaborative efforts and advocacy.                                
                                </article>  
        `,
        img:images_folder + "/network/CONCLUSION GRP PHOTO EDIT.jpg",
        link:"/coalition/kanco"
    },
    {
        title:"",
        body:`
                                        <h2>Kenya Aids NGOs Consortium (KANCO)</h2>
                                <article>
                                KANCO is a leading membership organization of Non-Governmental Organizations committed to improving the health and well-being of communities through capacity building and innovative leadership. The organization focuses on four strategic areas: policy and advocacy; improving access to health services; strengthening KANCO as an institution; and fostering a strong, unified membership along with research, learning, and innovation. CWID is an active member of KANCO, contributing to its mission of enhancing community health and well-being through collaborative efforts and advocacy.                                
                                </article>   
        `,
        img:images_folder + "/network/network4.jpg",
        link:"/coalition/consortium"
    }
]

    export const select_networks = async() => {
        try{
            const res = await fetch(api_url + "/wireframe",
                {
                    method:"POST",
                    headers : {'Content-type': 'application/json; charset=UTF-8'},
                    body:JSON.stringify({component:"networks",list:networks,count:0})
                }
            )
        
            const {status, data} = await res.json()
        
            if(status)
                return data
            else
                return networks
        }catch(error){
            console.log(error)
            return networks
        }

    }

