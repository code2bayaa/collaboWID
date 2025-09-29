import { useEffect, useState } from "react"
import TWITTER from "../constants/twitter.jsx"
import { faFacebook, faInstagram, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import NavBar from "./navBar.jsx"
import YOUTUBE from "../constants/youtube.jsx"

export default function SOCIAL(){

    const [pane, setPane] = useState("twitter")

    
    useEffect(() => {
        // gsap.to(document.getElementById("NavBar"), {
        //     background:"#000",
        //     color:"#fff",
        //     duration:2
        // });
    },[])
    return(
        <div className="component">
            <div id = "socials" className="inner-components">
                <NavBar page = "#socials"/>
                <div style={{minHeight:"100%",width:"100%",background:"#000",color:"#fff"}}>
                    <div style={{width:"80%",height:"20%",marginLeft:"10%",display:"flex",flexDirection:"row"}}>
                        <button
                            type="button"
                            onClick={() => setPane("twitter")}
                            style={{backgroundImage:"linear-gradient( #900C3F , #900c85bd, #900c85bd)",width:"25%",height:"60px"}}
                        >
                            <FontAwesomeIcon style={{fontSize:pane === "twitter" ? "350%" : "150%"}} icon={faTwitter}/> TWITTER
                        </button>
                        <button
                            type="button"
                            onClick={() => setPane("facebook")}
                            style={{backgroundImage:"linear-gradient( #900C3F , #900c85bd, #900c85bd)",width:"25%",height:"60px"}}
                        >
                            <FontAwesomeIcon style={{fontSize:pane === "facebook" ? "350%" : "150%"}} icon={faFacebook}/> FACEBOOK
                        </button>
                        <button
                            type="button"
                            onClick={() => setPane("instagram")}
                            style={{backgroundImage:"linear-gradient( #900C3F , #900c85bd, #900c85bd)",width:"25%",height:"60px"}}
                        >
                            <FontAwesomeIcon style={{fontSize:pane === "instagram" ? "350%" : "150%"}} icon={faInstagram}/> INSTAGRAM
                        </button>
                        <button
                            type="button"
                            onClick={() => setPane("youtube")}
                            style={{backgroundImage:"linear-gradient( #900C3F , #900c85bd, #900c85bd)",width:"25%",height:"60px"}}
                        >
                            <FontAwesomeIcon style={{fontSize:pane === "youtube" ? "350%" : "150%"}} icon={faYoutube}/> YOUTUBE
                        </button>
                    </div>
                    <div style={{width:"100%",minHeight:"100%"}}>
                        {
                            pane === "twitter" ? 
                                <TWITTER />
                            :
                                pane === "youtube" ?
                                <YOUTUBE/>
                            :
                                <TWITTER />
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}