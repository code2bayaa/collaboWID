const images_folder = process.env.REACT_APP_environment === "development" ? process.env.REACT_APP_host_url + "/assets" : process.env.REACT_APP_host_url_live + "/assets"
const api_url = process.env.REACT_APP_environment === "development" ? process.env.REACT_APP_api_url : process.env.REACT_APP_api_url_live

const governance_constants = [
    {
        wall:images_folder + "/home/slide15.png",
        wall2:images_folder + "/home/governance.jpg",
        title:"",
        body:`
            <article>
                <h2>Change In Governance</h2>
                A key contributing factor to women's lack of political participation is women's marginalization in civic and political spaces. Despite 50 years of women's movement advocacy and quotas in local government bodies, women's representation, particularly that of young women and WWDs is poor and the necessary impact has not been achieved. Elected women are frequently unprepared, lack a feminist perspective or become proxies of male political actors. Social norms and traditions ensure that women voices and leadership are minimal even in customary spaces and decision making process.

            </article>
            <article>
                <h2>Strategic Objective:</h2> To enhance Women's Voice and Agency to participate in decision making processes
                <h3>Context</h3>
                Women Gaining Ground consortium works with women and girls in ensuring opportunities for young women to become political actors and paying particular attention to the meaningful inclusion and leadership of Women With Disabilities (WWD's). The UN convention on the rights of Person With Disabilities (CRPD) has been ratified by over 150 states. However, Fewer than 50 countries have anti-discrimination and other disability -specific laws. WWDs are disproportionately affected by SGBV including forced institutionalization, denial of legal capacity, and forced abortion and sterilization. as well as psychological and emotional abuse. Women Rights Organizations have undertaken limited lobbying and advocacy in policy spaces that address the rights of WWDs.

                A key contributing factor to women's lack of political participation is women's marginalization in civic and political spaces. Despite 50 years of women's movement advocacy and quotas in local government bodies, women's representation, particularly that of young women and WWDs is poor and the necessary impact has not been achieved. Elected women are frequently unprepared, lack a feminist perspective or become proxies of male political actors. Social norms and traditions ensure that women voices and leadership are minimal even in customary spaces and decision making process.
                National plans, policies, institutions and budgets are where governments begin to translate commitments to women into practical progress towards gender equality. Too often, however, they overlook measures to ensure that public services respond to women’s needs and priorities. Viewing these dimensions of governance through a gender equality lens means putting aside the conventional assumption that they are gender-neutral. It entails comprehensively assessing gender gaps and identifying actions to close them. Changes to promote gender equality need to be backed by adequate funds, and systematically monitored for progress in reducing gender discrimination. focuses on providing technical support to county governments, conduct policy advocacy, and guidance in gender responsive responsive governance and development planning and implementation including budgeting processes.
                Context
                <h3>1. Social Accountability</h3>

                CWID works to ensure an enabling environment through advocating for access to information, a vibrant civil society, freedom of expression and association, free and independent media, civic education, mechanisms for state-public consultation, and public redress systems such as public complaints and feedback processes, public petitions and public interest litigation mechanisms.

                <h3>2. Leadership and Political Participation</h3>

                CWID Gender and Governance Program is guided by national and county commitments to women’s representation since the promulgation of the Constitution 2010. To this end, CWID focus on capacity building of grassroots women aspirants, movement building, offer voter and civic education and sensitization campaigns on gender equality. In addition, CWID advocates for legislative and constitutional reforms to ensure women’s fair access to political spheres—as voters, candidates, elected officials and civil service members

            </article>
            <article>   
                Despite 50 years of women’s movement advocacy and quotas in local government bodies, young women especially Women with Disability (WWD) are underrepresented at all decision making levels worldwide which contributes to lack of women in political participation. Elected women are frequently unprepared, lack a feminist perspective or become proxies of male political actors. Social norms and traditions have largely contributed to suppressing women voices even in customary spaces and decision making processes. Through the Women Gaining Ground (WGG) program, we have sensitized young women and WWDs to know their rights, champion for their rights and advocate for more women representation and involvement in decision making processes. 

                We also champion the rights of People Living with Disability (PLWDs) by advocating for accessibility in government buildings. CWID has capacity built grassroots women aspirants, offer voter and civic education and sensitization campaigns on gender equality, observe and monitor cycles of gender based violence before during and after the general elections. In addition, CWID advocates for legislative and implementation of the laws and policies that promote women’s rights and fair access to services with the women rights organizations not limited to the political commitments spheres as voters, candidates, elected officials and civil services members.


            </article>
            <article>
                                                <h2>Empowering Women through Enhanced Governance: A Strategic Imperative</h2>
                                        Governance forms the backbone of any society, dictating how decisions are made, resources are allocated, and voices are heard. However, despite strides in promoting gender equality, women continue to face barriers to meaningful participation in governance structures worldwide. Addressing these challenges is not just a matter of equity but a strategic imperative for sustainable development and social progress.
                                        One of the central challenges hindering women's participation in governance is the persistent marginalization they face in civic and political spaces. Despite decades of advocacy and the implementation of quotas in local government bodies, women, especially young women and those with disabilities, remain severely underrepresented. This lack of representation not only undermines the principles of democracy but also perpetuates systemic inequalities.
                                        Elected women often encounter hurdles such as lack of preparedness, absence of a feminist perspective, or becoming proxies for male political actors. Additionally, entrenched social norms and traditions further suppress women's voices and leadership roles, even in customary decision-making processes. These multifaceted challenges create a hostile environment that stifles women's agency and perpetuates their exclusion from governance mechanisms.
                                        Recognizing the urgency of this issue, efforts must be directed towards enhancing women's voice and agency in decision-making processes. This strategic objective entails a holistic approach that addresses both systemic barriers and societal attitudes. Here are some key strategies to consider:

            </article>
            <article>
                                        <ol>
                                            <li>Education and Training: Investing in programs that equip women with the necessary skills and knowledge to navigate political landscapes is essential. This includes training on governance processes, public speaking, negotiation, and leadership development.</li>
                                            <li>Advocacy and Awareness: Raising awareness about the importance of gender-inclusive governance and challenging discriminatory norms is crucial. Advocacy efforts should target policymakers, community leaders, and the broader public to garner support for gender equality initiatives.</li>
                                            <li>Advocacy and Awareness: Raising awareness about the importance of gender-inclusive governance and challenging discriminatory norms is crucial. Advocacy efforts should target policymakers, community leaders, and the broader public to garner support for gender equality initiatives.</li>
                                            <li>Mentorship and Support Networks: Establishing mentorship programs and support networks can provide women with the mentorship and guidance needed to navigate male-dominated political spheres effectively.</li>
                                            <li>Intersectional Approach: Recognizing the intersecting identities and experiences of women is vital. Efforts should be inclusive of women from diverse backgrounds, including those with disabilities, indigenous women, and LGBTQ+ individuals.</li>
                                        </ol>
            </article>
            <article>
                Empowering women to participate meaningfully in governance is not just a matter of social justice but a prerequisite for building inclusive and resilient societies. By dismantling systemic barriers and challenging entrenched norms, we can create a future where women's voices are heard, and their leadership is valued in shaping the policies that affect their lives. Together, let us work towards a world where governance reflects the diversity and equality of its population.
            </article>
        `
    }
]

    export const select_governance = async() => {
        try{
            const res = await fetch(api_url + "/wireframe",
                {
                    method:"POST",
                    headers : {'Content-type': 'application/json; charset=UTF-8'},
                    body:JSON.stringify({component:"projects",list:governance_constants,count:3})
                }
            )
        
            const {status, data} = await res.json()
        
            if(status)
                return data[0]
            else
                return governance_constants[0]
        }catch(error){
            console.log(error)
            return governance_constants[0]
        }

    }
    
export default governance_constants