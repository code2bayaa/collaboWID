const images_folder = process.env.REACT_APP_environment === "development" ? process.env.REACT_APP_host_url + "/assets" : process.env.REACT_APP_host_url_live + "/assets"
const api_url = process.env.REACT_APP_environment === "development" ? process.env.REACT_APP_api_url : process.env.REACT_APP_api_url_live

const tabasamu_constants = [
    {
        title:"",
        wall:images_folder + "/projects/tabasamu1.jpeg",
        wall2: images_folder + "/projects/tabasamu1.jpeg",
        body:`
            <h2>Tabasamu Ya Wamama - Smiles Of Women (SOW) Initiative Project</h2>
        
                        At CWID, we believe in empowering communities to not only cope but thrive in the face of challenges like climate change and unforeseen disasters. That's why we're excited to announce our latest endeavor, the Tabasamu Ya Wamama - Smiles Of Women (SOW) Initiative Project, aimed at enhancing the adaptive capacities of communities in Mombasa County, particularly in the Kisuani, Nyali, Likoni, and Jomvu Sub-Counties.

                        The SOW initiative project is built upon three key outcomes:
                        <ol>
                            <li>Improved Understanding: We aim to deepen the understanding of the risks and vulnerabilities faced by communities concerning climate change and other shocks.</li>
                            <li>Enhanced Adaptive Capacity: Through the SOW project, we seek to empower communities with the resources and skills necessary to adapt effectively to these challenges.</li>
                            <li>Stronger Partnerships: Collaboration is key. We strive to foster stronger partnerships and collaborations with local organizations and stakeholders to bolster community resilience and build networks.</li>
                        </ol>

                        <h3>Project Approaches</h3>
                        CWID is committed to ensuring that the SOW project yields tangible results. To achieve our objectives, we focus on:
                        Capacity Strengthening: We're dedicated to enhancing the capacities of key rights holders to facilitate coordination, adaptation, and resilience-building efforts.
                        Community Empowerment:  Empowering communities lies at the heart of our approach. We work closely with stakeholders to ensure that communities have the tools they need to thrive.
                        
                        Resilience & Adaptation:  Through targeted interventions, we aim to bolster the resilience and adaptive capacities of communities, enabling them to withstand the impacts of climate change and other shocks.
                        To bring the Tabasamu Ya Wamama - Smiles Of Women (SOW) Initiative Project to life, CWID is funded by Forum CIV – under the Wajibu Wetu III Program to make a meaningful difference in the lives of communities in Mombasa County, paving the way for a more resilient and sustainable future.
                        Join us in our mission to empower communities, build resilience, and foster sustainable development. Together, we can make smiles of hope and resilience bloom across Mombasa County.

        `
    }
]
        export const select_tabasamu = async() => {
            try{
                const res = await fetch(api_url + "/wireframe",
                    {
                        method:"POST",
                        headers : {'Content-type': 'application/json; charset=UTF-8'},
                        body:JSON.stringify({component:"projects",list:tabasamu_constants,count:7})
                    }
                )
            
                const {status, data} = await res.json()
            
                if(status)
                    return data[0]
                else
                    return tabasamu_constants[0]
            }catch(error){
                console.log(error)
                return tabasamu_constants[0]
            }
    
        }

export default tabasamu_constants