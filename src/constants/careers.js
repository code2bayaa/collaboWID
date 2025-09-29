// const images_folder = process.env.REACT_APP_environment === "development" ? process.env.REACT_APP_host_url + "/assets" : process.env.REACT_APP_host_url_live + "/assets"
const api_url = process.env.REACT_APP_environment === "development" ? process.env.REACT_APP_api_url : process.env.REACT_APP_api_url_live

const careers = [
    {
        title:"job",
        body:`
            JOB COMING SOON
        `
    }
]

export const select_careers = async() => {
    const res = await fetch(api_url + "/wireframe",
        {
            method:"POST",
            headers : {'Content-type': 'application/json; charset=UTF-8'},
            body:JSON.stringify({component:"about",list:careers,count:4})
        }
    )

    const {status, data} = await res.json()

    if(status)
        return data
    else
        return []
}

export default careers