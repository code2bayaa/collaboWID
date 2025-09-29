
const images_folder = process.env.REACT_APP_environment === "development" ? process.env.REACT_APP_host_url + "/assets" : process.env.REACT_APP_host_url_live + "/assets"
const api_url = process.env.REACT_APP_environment === "development" ? process.env.REACT_APP_api_url : process.env.REACT_APP_api_url_live

const images = [
    {
        image:images_folder + "/gallery/gallery30.webp",
        title:"Advisory group on anti corruption feminist movements; by Global Fund For Women"
    },
    {
        image:images_folder + "/gallery/gallery28.jpeg",
        title:""
    },
    {
        image:images_folder + "/gallery/gallery29.jpeg",
        title:"Welcoming Queen Elizabeth the II in Mombasa during the 16 days activism"
    },
    {
        image:images_folder + "/gallery/gallery30.jpeg",
        title:"Women can and do play a significant role in CVE but they need to be supported and empowered to do so"
    },
    {
        image:images_folder + "/gallery/gallery2.jpeg",
        title:"Beach Clean Up Exercise"
    },
    {
        image:images_folder + "/gallery/gallery3.jpg",
        title:"Beach Clean Up Exercise organized by UN-Habitat and UNEP under the go blue project"
    },
    {
        image:images_folder + "/gallery/gallery4.webp",
        title:"Community integration, safe landing and support for the GBV reformist"
    },
    {
        image:images_folder + "/gallery/gallery5.jpg",
        title:"Tuinuane goat rearing project by CWID"
    },
    {
        image:images_folder + "/gallery/gallery6.jpg",
        title:"Jijenge Jiboreshe Initiative Briquette making by CWID"
    },
    {
        image:images_folder + "/gallery/gallery12.jpeg",
        title:"Briquette making"
    },
    {
        image:images_folder + "/gallery/gallery9.jpg",
        title:"Peace & Security Initiative"
    },
    {
        image:images_folder + "/gallery/gallery11.jpg",
        title:"Public Participation"
    },
    {
        image:images_folder + "/gallery/gallery19.jpeg",
        title:"16 Days of Activism Campaign"
    },
    {
        image:images_folder + "/gallery/gallery21.jpg",
        title:"Supporting Sports & Arts"
    },
    {
        image:images_folder + "/gallery/gallery22.jpg",
        title:"Public Awareness Forums and citizen participation by CWID."
    },
    {
        image:images_folder + "/gallery/gallery23.jpg",
        title:"SubCounty Peace Committee;"
    },
    {
        image:images_folder + "/gallery/gallery24.jpeg",
        title:"Coast Civil Society Network for Human Rights"
    },
    {
        image:images_folder + "/slides/slide6.jpeg",
        title:"Mombasa County Adolescent & Young People Strategy on Health"
    },
    {
        image:images_folder + "/gallery/gallery26.jpg",
        title:"Wajibu Wetu:Jumuika, Sikika! Programme by ForumCiv"
    },
    {
        image:images_folder + "/gallery/gallery27.jpg",
        title:"Tabasamu ya wamama initiative by CWID"
    }

]


export const select_images = async() => {
    try{
        const res = await fetch(api_url + "/wireframe",
            {
                method:"POST",
                headers : {'Content-type': 'application/json; charset=UTF-8'},
                body:JSON.stringify({component:"insights",list:images,count:3})
            }
        )
    
        const {status, data} = await res.json()
    
        if(status)
            return data
        else
            return images
    }catch(error){
        console.log(error)
        return images
    }
}

export default images