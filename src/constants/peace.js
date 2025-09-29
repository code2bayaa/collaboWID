const images_folder = process.env.REACT_APP_environment === "development" ? process.env.REACT_APP_host_url + "/assets" : process.env.REACT_APP_host_url_live + "/assets"
const api_url = process.env.REACT_APP_environment === "development" ? process.env.REACT_APP_api_url : process.env.REACT_APP_api_url_live


const peace_constant = [
    {
        wall:images_folder + "/slides/peace.jpeg",
        wall2:images_folder + "/carreers/menu1.jpg",
        title:"Promoting Peace",
        body:`
            Peace and security is about promoting peace, gender equality and justice. Systems of inequalities must be addressed to identify the root causes of and challenges to women’s participation in social, economic and political processes. The greatest contemporary threats to Kenya’s peace and security are posed by transnational networks of terrorist groups operating within Kenya’s boundaries and in neighboring Somalia.
            <h2>Strategic Objective</h2>: Reducing vulnerability of Women and Youth to Violent Extremism and Conflicts 
            <ul>
                <li>To prevent conflict and radicalization of youth.</li>
            </ul>
            <h3>Context</h3> 
            Peace and security is about promoting peace, gender equality and justice. Systems of inequalities must be addressed to identify the root causes of and challenges to women’s participation in social, economic and political processes. The greatest contemporary threats to Kenya’s peace and security are posed by transnational networks of terrorist groups operating within Kenya’s boundaries and in neighboring Somalia. Additionally, Kenya is host to a large number of refugees. The gendered impact of displacement on women and host communities is a matter of concern. Internally, conflicts within and between pastoral and agricultural communities periodically lead to outbreaks of violence. These conflicts are exacerbated by fragile ecological conditions and competition for natural resources. Other factors such as political competition among clans and communities, stock theft, human–wildlife conflict, and the availability of illicit small arms have complicated and changed the conflict dynamics Conflicts have devastating consequences, including in widening gaps between women and men. Women often have fewer resources to protect themselves and, with children, frequently make up the majority of displaced and refugee populations. War tactics such as sexual violence specifically target them. Though women have led peace movements and driven community recovery after conflict, they are almost completely missing from peace negotiations. Exclusion from reconstruction limits access to opportunities to recover, to gain justice for human rights abuses, and to participate in shaping reformed laws and public institutions.
            Priority Focus 
            <h3>1. Counter - Violent Extremism (CVE)</h3>
            CWID continues to work with County Action Plan on Prevention and Counter Violent Extremism actors and other development partners to contribute to reduction of violent extremism in Kenya.

            <h3>2. Ethnic and Natural Resource-Based Conflicts</h3>
            CWID works to support County Government to strengthen frameworks that may enhance sustainable peace in Kenya. In addition, CWID supports warring communities to develop people-centric peace building initiatives to avoid relapse into violent conflicts

            <h3>Networks and Collaboration</h3>
            Mombasa County Action Plan on Prevention and Countering Violent Extremism (MCAP-P/CVE)

            CWID is the lead of Women Pillar of MCAP-P/CVE and continues to work with all other Pillar leads to ensure realization of the common goal.

            Mombasa Port CSOs Platform

            CWID is the lead of Gender and Labour and support other CSOs members in ensuring that labour agenda arising from Mombasa Port reform processes are conducted in a participatory manner to ensure peace within Mombasa and along the Northern Corridor.
                                                        Insecurity causes instability with women, children and girls being the most affected. Previously, women were sidelined from security matters yet they hold a lot of valuable information and their involvement in peace processes leads to longer and sustainable peace after conflict.

                                            As the lead of the Gender Pillar which is one the six pillars under the Mombasa County Action Plan (MCAP), CWID has been able to sensitize communities and other stakeholders on the importance of women participation in Preventing and Countering Violent Extremism (PCVE) to cub insecurity and promote peaceful coexistence in Mombasa County. The MCAP through the gender pillar has also provided a platform for the promotion of the role of women and youth in PCVE, it has also enhanced the participation of women on matter of peace and security. 
                                            We fully support equal representation and involvement of women in all spectrums of peace processes and security efforts. CWID also sit at the board of the Shimo la Tewa Borstal Institution mandated to correct juvenile felonies, where we help the young boys get counseling in efforts to help them reform. This prepares them to be reintegrated in the society after serving their time in the institution and ensure that they transform into law abide citizens. 
        `
    }
]
    
    export const select_peace = async() => {
        try{
            const res = await fetch(api_url + "/wireframe",
                {
                    method:"POST",
                    headers : {'Content-type': 'application/json; charset=UTF-8'},
                    body:JSON.stringify({component:"projects",list:peace_constant,count:2})
                }
            )
        
            const {status, data} = await res.json()
        
            if(status)
                return data[0]
            else
                return peace_constant[0]
        }catch(error){
            console.log(error)
            return peace_constant[0]
        }

    }

export default peace_constant