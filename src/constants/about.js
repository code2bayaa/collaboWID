const images_folder = process.env.REACT_APP_environment === "development" ? process.env.REACT_APP_host_url + "/assets" : process.env.REACT_APP_host_url_live + "/assets"
const api_url = process.env.REACT_APP_environment === "development" ? process.env.REACT_APP_api_url : process.env.REACT_APP_api_url_live

const about = [
    {
        wall2:images_folder + "/home/slide19.png",
        wall3:images_folder + "/team/teamAll.png"
    },
    {
        title:"vision",
        body:`
            <h2>VISION</h2>
            <p>Improve Lives of Vulnerable Women Living in Grassroot Level</p>
        `
    },
    {
        title:"mission",
        body:`
            <h2>MISSION</h2>
            <p>Identifying and Reinforcing Women's Role in Education, Development and Governance.</p>
        `
    },
    {
        title:"who",
        body:`
            Welcome to Collaboration of Women in Development (CWID), a dynamic grassroots, women-led non-profit organization based in the heart of Mombasa County's Kisauni Constituency. Established in 2005 and officially registered in 2010 by the (PBO) Public Benefit Organisations Regulatory Authority of Kenya, CWID has been steadfast in its commitment to empowering women, advocating for their rights, and fostering inclusive development.

            Formerly known as Coast Women in Development, CWID underwent a strategic transformation in August 2019, expanding its scope beyond the coastal regions of Kenya. This change not only reflects our commitment to broader impact but also underscores our dedication to reaching marginalized women at the grassroots level across the nation.

        `
    },
    {
        title:"who",
        body:`
            At CWID, our mission is clear: to identify and enhance the role of women in governance, health, leadership development, and education. We believe in creating a society where vulnerable women, children, youth, persons with disabilities, minorities, and other marginalized groups have equal access to opportunities for growth and empowerment.

            Our track record speaks for itself. CWID has received prestigious accolades such as the African PBO Leadership Awards in multiple consecutive years (2019, 2018, 2017, and 2016), highlighting our commitment to excellence and impact. In 2021, we were honored as the 2nd Finalist in the Gender Mainstreaming category for Empowerment of Women in the Community. Additionally, CWID proudly received the 2020 NGO Global Leadership and Excellence Award, further solidifying our position as a leader in the non-profit sector.

        `
    },
    {
        title:"What We Do:",
        body:`
            Through our programs and initiatives, CWID directly supports vulnerable women, adolescent girls, youth, Persons With Disabilities and male in accessing opportunities for economic justice, leadership, peace and security, sexual and reproductive health rights, climate Change resilience and adaptation, and education. We firmly believe in the power of gender-responsive approaches to create lasting change and foster inclusive societies.
            <h2>Promotion of Gender Equality and Access to Justice:</h2>
            
            Gender equality is not only a fundamental human right but a necessary foundation for a peaceful, prosperous, and sustainable world. Empowering women and girls drives economic growth and development. CWID has made gender equality and mainstreaming central to its work in programming, projects, and research, realizing remarkable progress over the past 18 years. We continue to strengthen capacities of young women and girls on leadership and advocacy for gender equality and improved access to justice for victims of gender-based violence.

            <h2>Promotion of Peace and Security:</h2>
            
            CWID leads the Gender Pillar of the Mombasa County Action Plan (MCAP), sensitizing communities on the importance of women's participation in Preventing and Countering Violent Extremism (PCVE) to curb insecurity and promote peaceful coexistence, mobilize and support peace and security initiatives. We fully support equal representation and involvement of women in all peace processes and security efforts.

            <h2>Health Promotion Interventions:</h2>
            CWID works to increase access to affordable and comprehensive healthcare services, collaborating with Civil Society Organizations (CSOs) and networks to push for reforms in the Mombasa County Health Sector. Through various programs, we reach out to adolescent girls at the grassroots level, women, adolescent girls, vulnerable groups within the community, sensitizing them on their Sexual Reproductive Health Rights (SRHR) and services and policies.

            <h2>Promotion of Governance:</h2> 
            Despite years of advocacy, young women and women with disabilities (WWDs) remain underrepresented at all decision-making levels worldwide. Through the Women Gaining Ground (WGG) program, we sensitize young women and WWDs to know and champion their rights, advocating for more women representation in decision-making processes.

            <h2>Climate Change Adaptation and Resilience:</h2> 
            CWID helps communities develop adaptation measures to respond to climate change impacts, supporting the planting of over 10,000 mangrove trees and promoting environmentally friendly practices such as briquette making, kitchen gardening, waste management. We participate in environmental conservation and conscious efforts, including beach cleaning and national tree planting initiatives.

            Policy, Research, and Advocacy: Our policy, research, and advocacy efforts aim to strengthen CWID’s programs and initiatives in policy influencing, partnership development, and grassroots-level advocacy. We conduct groundbreaking research to recommend specific policy and regulatory actions reflective of county-specific contexts on gender equality, access to justice, health, peace and security, livelihoods promotion, and climate change.

            Join us in our journey towards a more equitable and empowered future for all. Together, we can make a difference. Welcome to Collaboration of Women in Development.
        `
    },
    {
        title:"Our Approaches",
        body:`
                                <h2>Theory of Change </h2>
                        CWID believes that empowerment and the promotion of gender equality for vulnerable women living at grassroots groups are key to achieving sustainable development. Since its formation, the centerpiece of CWID’s work remains grounded in the following assumptions levels:
                        <h3>Level  1 Assumption</h3>
                        To end vulnerability of women and girls living at grassroots level, their capacity must be built to enable them engage in decision making process for enhancement of service delivery Level.
                        <h3>Level 2 Assumption</h3>
                        With sufficient capacity, the women and girls will take active role in decision making processes and hold duty bearers to account to account with the aim of ensuring improved service delivery and safe structures for continued engagement.
                        <h3>Level 3 Assumption</h3>
                        Through active engagement, the government will make deliberate efforts to improve service delivery and support structures for women and girls’ continued participation in decision making processes. 
                        <h2>Strategic Approaches</h2>
                        <h3>Public Policy Influencing</h3>
                        CWID’s policy arm supports County and National Governments to provide in-depth analysis of gaps in laws, policies and institutional infrastructure on political governance, health, access to justice, economic empowerment as well as peace and security. The aim of this arm is to contribute to strengthened policy/legal frameworks for service delivery to vulnerable women and girls.
                        <h3>Research & Knowledge Creation</h3>
                        At CWID, we conduct rigorous, ground-breaking research in all program areas. The main objective is always to use this evidence-based research to recommend specific policy and regulatory asks that are reflective of county-specific context and needs. All research projects are guided by CWID’s Technical Committee (drawn from Secretariat, Board members, Like-minded partners, and Academic institutions).
                        <h3>Artivism  (Music for Activism)</h3>
                        CWID works with local youth, women and girls to identify and tap local talents in MUSIC for both community outreaches and advocacy for good governance and service delivery. Specifically, CWID builds capacity of young and potential MUSIC Artists through a MUSIC MENTORSHIP program. Here known musician are linked with upcoming artists for support. CWID thereafter develops contents based on local needs which the musicians will translate into music. 
                        <h3>Local and Community Media</h3>
                        CWID works with local and community media in many projects with the objective of reaching specific atrget audience to generate debate on current affairs affecting them. This approach has been very succesful due to the growing love for local and venacular content by kenyans. The platform is utilized for both public education and advocacy on key issues. 
                        <h3>Working With Non-Traditional Partners</h3>
                        CWID partners with a wide range of non-traditional partners in project implementation for purposes of building synergy to minimize resources and maximize outputs. Though the list is not exhaustive, CWID continues to partner with private sector organizations (PSOs), State agencies (bothnational and county government), faith-based organization (FBOs), Academic institutions, Artists, Social media influencers among others.
                        <h3>Community Engagement and Mobilization</h3>
                        CWID’s main beneficiaries are the community members and therefore all projects (both on-going and those at conceptual stage) must focus towards engaging the community. Communities are identified through community mobilizers and leaders. Engagements may be in form of open community forums, barazas, or through dissemination of key IEC materials. 
                    
        `,
        wall:images_folder + "/team/about3.jpeg",
        wall2:images_folder + "/home/testimonials1.png"
    },
    {
        title:"Our Core Objective:",
        body:`
            At the core of Collaboration of Women In Development (CWID) lies a steadfast dedication to uplifting vulnerable women at the grassroots level. Guided by a vision of enhancing the lives of these women and a mission centered on reinforcing their roles in education, leadership development, and governance, CWID has identified five key core objective pillars to drive its efforts forward.
            Promoting Access to Justice:  CWID works tirelessly to ensure that survivors of Gender-Based Violence (GBV) and Sexual and Gender-Based Violence (SGBV) have access to the legal aid services they need. By providing comprehensive support encompassing justice, health services, and psychosocial assistance, CWID empowers women and girls to reclaim their lives and dignity.
            Securing Gender Responsive Laws:  Advocating for the consolidation of women's gains in the Constitution and the effective implementation of gender-responsive laws is a cornerstone of CWID's mission. By creating a legal environment that consistently protects and upholds women's rights, CWID aims to foster lasting change.
            Building Knowledge on Women's Leadership:   CWID endeavors to develop a robust body of knowledge on women's political leadership and good governance at all levels. By highlighting and supporting female leaders and diverse women, CWID seeks to inspire and cultivate future generations of women in leadership roles.
            Enhancing Organizational Capacity and Visibility:  Strengthening CWID's capacity and visibility is essential for ensuring sustainability in the pursuit of gender equality. From women's socioeconomic empowerment to access to health services, CWID focuses on various facets to create a more equitable society.
            Influencing Institutional Structures:  CWID proactively engages in influencing institutional structures to recognize, comply with, and respond to women's rights across all levels of society. By embedding gender equality into the fabric of institutions, CWID strives to ensure that women's rights are universally acknowledged and upheld.
            CWID is committed to fostering an environment where women at the grassroots level can thrive, lead, and contribute to a more just and equitable society
                    
        `,
        wall:images_folder + "/team/about2.jpeg"
    },
    {
        title:"who",
        body:`
            Through our programs and initiatives, CWID directly supports vulnerable women, girls, and male youth in accessing opportunities for economic justice, political participation, peace and security, sexual and reproductive health rights, and education. We firmly believe in the power of gender-responsive approaches to create lasting change and foster inclusive societies.

            Join us in our journey towards a more equitable and empowered future for all. Together, we can make a difference. Welcome to Collaboration of Women in Development
        `
    },

]

export const select_about = async() => {
    const res = await fetch(api_url + "/wireframe",
        {
            method:"POST",
            headers : {'Content-type': 'application/json; charset=UTF-8'},
            body:JSON.stringify({component:"about",list:about,count:0})
        }
    )

    const {status, data} = await res.json()

    if(status)
        return data
    else
        return about
}

// import value1 from "../assets"
// import values2 from "../assets"
// import values3 from "../assets"
// import values4 from "../assets"
// import values5 from "../assets"
// import values6 from "../assets"
// import values7 from "../assets"
// import values8 from "../assets"
// import values9 from "../assets"

const values = [
    {
        title:"Empowerment",
        body:`
            We are dedicated to fostering independence through sustainable programs and projects, enabling women, youth, and children to achieve self-reliance.

        `,
        img:images_folder + "/home/values2.webp"
    },
    {
        title:"Individual Support",
        body:`
            CWID prioritizes the needs of women, girls, youth, children, minorities, people living with disabilities, and the broader community.

        `,
        img:images_folder + "/home/values1.webp"
    },
    {
        img:images_folder + "/home/values3.webp",
        title:"Equality, Justice, and Human Rights",
        body:"CWID envisions a society where everyone lives in peace and dignity, with equal access to resources and opportunities for sustainable growth."
    },
    {
        title:"Active Participation",
        body:"Our policies, advocacy, and lobbying efforts are grounded in the real-life experiences of grassroots communities.",
        img:images_folder + "/home/values4.webp"
    },
    {
        title:"Respect for Personal Dignity",
        body:"We maintain a non-judgmental approach that honors the dignity and rights of all individuals we engage with.",
        img:images_folder + "/home/values5.webp"
    },
    {
        title:"Professionalism",
        body:"Our work is characterized by integrity, openness, honesty, and professionalism.",
        img:images_folder + "/home/values6.jpg"
    },
    {
        img:images_folder + "/home/values7.png",
        title:"Openness to Learning",
        body:"CWID remains open-minded and eager to learn from stakeholders, collaborators, and the community, while maintaining passion and enthusiasm for our service work."
    },
    {
        img:images_folder + "/home/values8.png",
        title:"Networking, and Partnership",
        body:"We believe in the strength of networking and partnerships, drawing on local, regional, and global experiences to enhance our impact."
    },
    {
        img:images_folder + "/home/values9.jpeg",
        title:"Accountability and Transparency",
        body:"CWID is committed to being accountable and transparent in all our engagements, ensuring the effectiveness and efficiency of our work."
    }
]

export const select_values = async() => {
    const res = await fetch(api_url + "/wireframe",
        {
            method:"POST",
            headers : {'Content-type': 'application/json; charset=UTF-8'},
            body:JSON.stringify({component:"about",list:values,count:1})
        }
    )

    const {status, data} = await res.json()

    if(status)
        return data
    else
        return values
}


const members = [
    {
        name:"M. Maureen Mudi",
        img:images_folder + "/team/team1 (10).jpg",
        title:"Chairperson-"
    },
    {
        name:"M. Betty Sharon",
        img:images_folder + "/team/frame.png",
        title:"Secretary-"
    },
    {
        name:"M Judy Githatchi",
        img:images_folder + "/team/frame.png",
        title:"Board Member-"
    },
    {
        name:"M Peris Baya",
        img:images_folder + "/team/frame.png",
        title:"Treasury"
    },
    {
        name:"M Azimiya Fathima",
        img:images_folder + "/team/frame.png",
        title:"Board Member-"
    },
    {
        name:"Mr. Nixon Sekoh Nyadiero",
        img:images_folder + "/team/frame.png",
        title:"Board Member-"
    },
    {
        name:"M Alimata Kharim",
        img:images_folder + "/team/frame.png",
        title:"Board Member-"
    },
    {
        name:"Mr. Lwanda Bonface",
        img:images_folder + "/team/frame.png",
        title:"Board Member-"
    }

]

export const select_members = async() => {
    const res = await fetch(api_url + "/wireframe",
        {
            method:"POST",
            headers : {'Content-type': 'application/json; charset=UTF-8'},
            body:JSON.stringify({component:"about",list:members,count:2})
        }
    )

    const {status, data} = await res.json()

    if(status)
        return data
    else
        return members
}

const team = [
    {
        title:"Team",
        description:"Our team would not be complete without the promising team set below,",
        img: images_folder + "/team/teamAll.png"
    },
    {
        title:"Mrs. Betty Sharon",
        description:"Executive Director-CWID",
        img: images_folder + "/team/team 1 (1).png"
    },
    {
        title:"Mr. Livingstone Odero",
        description:"Resource Mobilizer Manager",
        img:images_folder + "/team/team1 (2).png"
    },
    {
        title:"Ms. Doris Ojiambo",
        description:"Program Coordinator",
        img:images_folder + "/team/team1 (3).png"
    },
    {
        title:"Ms. Furaha Priscillar",
        description:"Finance & Administration",
        img:images_folder + "/team/team20.png"
    },
    {
        title:"M. Emmanuel Sadia",
        description:"Farm Advisor",
        img:images_folder + "/team/team17.png"
    },
    {
        title:"Ms. Shirley Juma",
        description:"Project Officer",
        img:images_folder + "/team/team18.png"
    },
    {
        title:"Ms. Rose Ndanu",
        description:"Legal Advisor",
        img:images_folder + "/team/team19.png"
    },
    {
        title:"Ms. Philisiah Sangi",
        description:"Communication Officer",
        img:images_folder + "/team/team16.png"
    },
    {
        title:"Ms. Roselyn Charo",
        description:"Field Officer 1",
        img:images_folder + "/team/team1 (6).png"
    },
    {
        title:"Ms. Edah Chizi",
        description:"Field Officer 2",
        img:images_folder + "/team/team1 (7).png"
    },
    {
        title:"Ms. Salome Achieng",
        description:"Office Support Staff",
        img:images_folder + "/team/team10.png"
    }
]

export const select_team = async() => {
    const res = await fetch(api_url + "/wireframe",
        {
            method:"POST",
            headers : {'Content-type': 'application/json; charset=UTF-8'},
            body:JSON.stringify({component:"about",list:team,count:3})
        }
    )

    const {status, data} = await res.json()

    if(status)
        return data
    else
        return team
}

const quotation = [
    {
        img:images_folder + "/quotation/quot1.webp",
        title:"HP Envy 360 15''",
        article:`
        <p>Quantity = 1<p>
        <p>RAM: 16GB<p>
        <p>ROM: 1 TB<p>
        <p>COLOR: Silver<p>
        <p>SCREEN- 14’’<p>

        <p>Touch- Present<p>
        `


    },
    {
        img:images_folder + "/quotation/quot2.webp",
        title:"RODE PSA1+ Pro Studio Boom/Arm ",
        article:`        
            <p>Quantity = 3<p>
            <p>Smooth, Silent 360-Degree Rotation<p>
            <p>37″ Horizontal Reach<p>

            <p>34″ Vertical Reach<p>

            <p>Integrated Management for USB/XLR Cable<p>

            <p>Supports Mics up to 2.7 lb<p>

            <p>C-Clamp & Desk Insert Hardware Included<p>

            <p>Includes 3/8 to 5/8″ Mic Thread Adapter<p>

        `
    },
    {
        img:images_folder + "/quotation/quot3.webp",
        title:"RODECaster Pro II Integrated Audio Production Studio (Audio Interface)",
        article:`
        
            <p>Quantity = 1<p>

            

            

            <p>4 High-End Mic/Line/Instrument Preamps<p>

            <p>6 Faders and Large Color Touchscreen<p>

            <p>Multitrack Recording to microSD or USB<p>

            <p>Mix-Minus for Phone Call Interviews<p>

            <p>Studio-Quality APHEX Processing<p>

            <p>4 Headphone Outputs for Host and Guests<p>

            <p>8 Programmable Pads for Audio, FX & MIDI<p>

            <p>Dual USB Ports for Two Host Devices<p>

            <p>Bluetooth for Calls & Wireless Playback<p>

        
        `
    },
    {
        img:images_folder + "/quotation/quot4.webp",
        title:"Behringer HPM1000 Headphones",
        article:`
        
            <p>Quantity = 2<p>

            

            <p>-Ultra-wide frequency response<p>

            <p>-High dynamic range<p>

            <p>-High-resolution capsules<p>

            <p>-1/8″ connector plus 1/4″ adapter included<p>

            <p>-Single-sided cord<p>

        `
    },
    {
        img:images_folder + "/quotation/quot5.webp",
        title:"Yolobox Pro Live stream Monitor ",
        article:`
        
            <p>Quantity = 1<p>

            

            <p>-8″ LCD display with 400 cd/m² brightness<p>

            <p>-Built-in simultaneoulsy streaming to up to 3 destinations<p>

            <p>-Stream via Ethernet, Wi-Fi, LTE 4G<p>

            <p>-Live switch up to 8 sources<p>

            <p>-3 x HDMI inputs, 1 x USB video input, 1 x SD card slot, 1 x HDMI output<p>

            <p>-One USB Type-C charging input<p>

            <p>-Mic and Line audio input, 1 x audio output<p>

            <p>-Ability to input PDF<p>

            <p>-Add logos/comments to the stream<p>

            <p>-Import pictures/videos from SD card<p>

            <p>-Records internally to SD card up to 128GB<p>

            <p>-Direct integration with YouTube/Facebook/RTMP(s)<p>

            <p>-Supports up to 1080p60 video<p>

        `
    },
    {
        img:images_folder + "/quotation/quot6.webp",
        title:"DJI RS 3 Gimbal Stabilizer Combo",
        article:`
        
            <p>Quantity = 1<p>

            

            

            <p>Lightweight Design with 6.6 lb Payload<p>

            <p>Combo Includes Focus Motor, Case, Cables<p>

            <p>Advanced 1.8″ OLED Touchscreen<p>

            <p>Instant Mode Switching<p>

            <p>Supports Wireless Image Transmitter<p>

            <p>Motion Control with Smartphone<p>

            <p>12-Hour Operation Time, PD Fast Charging<p>

            <p>Fine-Tuning Knob on Tilt Axis<p>

            <p>Creative Functions Such as Time<p>

        `
    },
    {
        img:images_folder + "/quotation/quot7.webp",
        title:"AKG P120 Recording Microphone",
        article:`
        
            <p>Quantity = 3<p>

            

            

            <p>Type: Balanced XLR<p>

            <p>Gender: Male<p>

            <p>Contacts: 3-pin<p>

            <p>Audio frequency bandwidth 20 - 20000 Hz<p>

            <p>Equivalent noise level 19 dB-A<p>

            <p>Sensitivity 24 mV/Pa<p>

            <p>Signal to Noise 75 dB-A<p>

        `
    }
    
  ]

  export const select_quotation = async() => {
    const res = await fetch(api_url + "/wireframe",
        {
            method:"POST",
            headers : {'Content-type': 'application/json; charset=UTF-8'},
            body:JSON.stringify({component:"about",list:quotation,count:5})
        }
    )

    const {status, data} = await res.json()

    if(status)
        return data
    else
        return quotation
}

const consultancy = {
    wall:images_folder + "/quotation/consultancy.png",
    body:""
}

export const select_consultancy = async() => {
    const res = await fetch(api_url + "/wireframe",
        {
            method:"POST",
            headers : {'Content-type': 'application/json; charset=UTF-8'},
            body:JSON.stringify({component:"about",list:consultancy,count:6})
        }
    )

    const {status, data} = await res.json()

    if(status)
        return data
    else
        return consultancy
}
export default about