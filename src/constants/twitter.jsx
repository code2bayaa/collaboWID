import { useEffect, useState } from "react"
import swal from "sweetalert"
const TWITTER = () => {
    const [data, setData] = useState({})
    const [windowWidth, setWindowWidth] = useState(0)
    useEffect(() => {
        async function runLikes(){

            const api_url = process.env.REACT_APP_api_url
            const res = await fetch(`${api_url}/social/twitter/tweets`)
              const {body, status} = await res.json()
              console.log(body)
              if(!status){
                swal("oops","could not fetch tweets","error")
              }
              setData(() => ({...body}))
        }
        runLikes()
        const handleResize = () => setWindowWidth(window.screen.width)
        handleResize()
    },[])

    return (
        <div className="with-full" style={{background:"#000",color:"#fff"}}>
            {
                data.hasOwnProperty("data") ? 
                    <div style={windowWidth > 800 ? {width:"80%",marginLeft:"10%",borderLeft:"1px solid #fff"}:{width:"95%",marginLeft:"2.5%",borderLeft:"1px solid #fff"}}>
                        {
                            data?.data.map(({text, id, attachments, created_at, author_id},index) => (
                                <div key={index} style={windowWidth > 800 ? {borderBottom:"1px solid #fff",width:"100%",display:"flex",flexDirection:"row"}:{borderBottom:"1px solid #fff",width:"100%",display:"flex",flexDirection:"column"}}>
                                    <div style={windowWidth > 800 ? {width:"50%",margin:"1%"}:{width:"98%",margin:"1%"}}>
                                        {
                                            attachments ? 
                                                <img src = {data.includes.media.find(({media_key}) => media_key === attachments?.media_keys[0])?.url} alt={id} width={200} height={200} style={{width:"60%",objectFit:"contain"}}/>
                                            :
                                                <img src = "/assets/social.svg" alt={id} width={200} height={200} style={{width:"60%",objectFit:"contain"}}/>

                                        }
                                    </div>
                                    <div className={windowWidth > 800 ? {width:"48%"}:{width:"98%",margin:"1%"}}>
                                        {text}
                                        <p>{created_at}</p>
                                        <a
                                            href={`https://twitter.com/${author_id}/status/${id}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            style={{ color: "blue", textDecoration: "underline" }}
                                        >
                                            View Tweet on Twitter
                                        </a>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                :
                ""
            }

        </div>
    )
}

export default TWITTER