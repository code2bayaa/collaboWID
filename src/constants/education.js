const images_folder = process.env.REACT_APP_environment === "development" ? process.env.REACT_APP_host_url + "/assets" : process.env.REACT_APP_host_url_live + "/assets"
const api_url = process.env.REACT_APP_environment === "development" ? process.env.REACT_APP_api_url : process.env.REACT_APP_api_url_live

const education_constants = [
    {
        wall:images_folder + "/home/education.jpeg",
        wall2: images_folder + "/projects/education.jpg",
        title:"",
        body:`
            <article>
                                    <h2>Investing in Women’s Economic Empowerment: A Path to Gender Equality and Inclusive Growth</h2>
                                                  In today's world, investing in women’s economic empowerment is crucial for achieving gender equality, eradicating poverty, and promoting inclusive economic growth. Women contribute significantly to economies through their roles in businesses, agriculture, entrepreneurship, employment, and unpaid care work at home. However, gender discrimination often results in women being relegated to insecure, low-wage jobs and holding a small minority of senior positions. To address these disparities, it is essential for countries to adopt and implement comprehensive regional and national plans, legislations, policies, strategies, budgets, and justice mechanisms that strengthen women’s economic empowerment.
  
                                    </article>
                                        <article>
                                                 <h2>Strategic Objective</h2>:
                                            Our objective is to influence economic structures that promote inclusive and sustainable development for women, youth, and persons living with disabilities.
                                            CWID’s Approach to Business Incubation & Technical and Vocational Education and Training (TVET)

                                        </article>
                                        <article>
                                                    <h2>Business Incubation: </h2>
                                            CWID (Collaboration of Women in Development) is committed to supporting young women and men in developing viable business and livelihood models. 
                                            This involves: 
                                            <ul>
                                                <li><h3>Data-Driven Insights:</h3>Generating data to identify gaps and business opportunities for various groups.</li> 
                                                <li><h3>Direct Support:</h3>Providing capital, skills training, and mentorship for women and youth.</li>
                                            </ul>
                                        </article>
        `
    },
    {
        body:`
                                                                    <h2>Technical and Vocational Education and Training (TVET):</h2>
                                                    CWID aims to enhance the employability of vulnerable and marginalized youth and women through TVET by focusing on:
                                                    <ul>
                                                        <li><h3>Building Partnerships:</h3>Collaborating with county governments, development partners, and the private sector.</li>
                                                        <li><h3>Entrepreneurship Education:</h3>Offering education that fosters entrepreneurial skills and mindsets.</li>
                                                        <li><h3>Labor Market Information and Skills Forecasting:</h3>Providing insights into labor market trends to guide training programs.</li>
                                                        <li><h3>Access to Government Procurement Opportunities:</h3>CWID empowers women entrepreneurs to access government procurement opportunities, capital, and viable markets. This involves building their capacity to navigate procurement processes and secure necessary resources and education.</li>
                                                        <li><h3>Systems Strengthening for County Governments:</h3>CWID collaborates with the private sector and county government departments to develop policy, legal, and institutional frameworks that create a supportive environment for women-led businesses and education.</li>
                                                    </ul>
                                                    CWID collaborates with the private sector and county government departments to develop policy, legal, and institutional frameworks that create a supportive environment for women-led businesses and education.
                                                    <ul>
                                                        <li><h3>Support State Agencies:</h3>In developing and implementing policies on climate change and smart agriculture.</li>
                                                        <li><h3>Provide Mentorship:</h3>For young women in education through STEM, TVET, talent nurturing, and sex education.</li>
                                                        
        
                                                        Investing in women’s economic empowerment and education is not just a moral imperative but also a strategic one. By strengthening the economic roles of women and opening education opportunities and spaces, we pave the way for a more equitable, prosperous, and sustainable future for all. 

                                                    </ul>
        `
    },
    {
        body:`
                                                                    <h2>In developing and implementing policies on climate change and smart agriculture.</h2>
                                                        The Government of Kenya has made significant strides in its commitment to education by allocating substantial budgetary resources for transformative reforms such as the Competency-Based Curriculum (CBC) and the 100% transition policy from primary to secondary education. Despite these efforts, challenges like poor-quality teaching and large class sizes continue to impede the quality of learning for many children. Some counties still grapple with high pupil-to-teacher ratios, which affects individualized attention and overall learning outcomes.
                                                        Before the COVID-19 pandemic, Kenya's primary education enrollment was at an impressive 93%, yet secondary enrollment lagged at 53%. Although there have been notable improvements in reaching remote and disadvantaged communities at the primary and pre-primary levels, significant challenges remain. High dropout rates in pastoral communities, driven by long distances to schools, high rates of child marriage, and a perceived lack of value in schooling, continue to be a concern. The pandemic exacerbated these issues, interrupting the education of over 17 million children for more than six months, exposing them to increased risks of violence, child labor, and mental health issues.
                                                        CWID (Collaboration of Women In Development) is at the forefront of efforts to enhance enrollment, retention, and learning outcomes for children in Kenya most specifically in Mombasa County. By working closely with the Government, development partners, and Public Benefit Organizations (PBOs), CWID focuses on inclusive education for all children, young girls including those with disabilities. We emphasize innovation and alternative methods to deliver basic education, ensuring that no child is left behind.
                                                        In Mombasa County, CWID has made significant contributions by providing learning desks, books, and other resources to improve the quality of pre-primary education. We are also actively involved in strengthening integrated plans for early childhood development, which are crucial for better learning outcomes and supporting the tertiary education linking young women to learning opportunities.
                                                        Furthermore, CWID supports the Government in reviewing and implementing key education policies, particularly those related to water, hygiene, and sanitation, as well as education management information systems. Our initiatives include increasing access to safe water, gender-sensitive sanitation facilities, and hygiene education, including menstrual hygiene management in schools.
                                                        In response to the COVID-19 pandemic, CWID took several measures to support the safe reopening of schools and continuous learning. In collaboration with the key stakeholders in education, we distributed over 100,000 masks to schools and communities, creating awareness by sensitizing communities. Additionally, we provided textbooks to vulnerable families and dignitary kits to facilitate remote learning during school closures and installed hand washing facilities in over 5 schools.
                                                        CWID is also a proud supporter of the "16 Days of Activism" campaign, advocating for the return of children to school and highlighting the safety and rights protection that schools provide compared to being out of school.
                                                        CWID remains committed to advancing inclusive and equitable quality education for every child and woman in Kenya. By addressing the multifaceted challenges facing the education sector and implementing comprehensive support systems, we strive to create a future where every child has the opportunity to learn, grow, and thrive.

        `
    }
]

    export const select_education = async() => {
        try{
            const res = await fetch(api_url + "/wireframe",
                {
                    method:"POST",
                    headers : {'Content-type': 'application/json; charset=UTF-8'},
                    body:JSON.stringify({component:"projects",list:education_constants,count:5})
                }
            )
        
            const {status, data} = await res.json()
        
            if(status)
                return data
            else
                return education_constants
        }catch(error){
            console.log(error)
            return education_constants
        }

    }
export default education_constants