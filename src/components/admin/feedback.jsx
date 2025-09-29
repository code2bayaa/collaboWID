import { useEffect, useState } from "react"
import LAYOUT from "./layout"
import { useNavigate } from "react-router-dom"
// import LazyLoad from "react-lazy-load"
import {LazyLoadImage} from "react-lazy-load-image-component"
const images_folder = process.env.REACT_APP_host_url + "/assets"
const api_url = process.env.REACT_APP_api_url
const GET_FEEDBACK = () => {
    const [feedback, setFeedback] = useState([])
    const navigate = useNavigate();

    const no_records = images_folder + "/home/no_data.svg"

    useEffect(() => {
        async function runFeedback(){
            const res = await fetch(api_url + "/feedback/get")
            const {data, status} = await res.json()
            // console.log(data)
            setFeedback([...data])
        }
        runFeedback()
        
    },[])

    return (
        <div className="with-full  with-row" style={{height:"100%",backgroundColor:"#FCFCFA"}}>
            <div style={{width:"20%",height:"100%",background:"linear-gradient(#411342, #000, #000)"}}>
                <LAYOUT/>
            </div>
            <div className="admin-components">
                <h2>FEEDBACK</h2>
                {
                    feedback.length > 0 ?

                    feedback.map(({name, email, subject, message},index) => 
                        <div style={{width:"95%",marginLeft:"2.5%",textAlign:"left"}} key={index}>
                            <strong>{name}</strong>
                            <p>{email}</p>
                            <strong>{subject}</strong>
                            <section style={{textAlign:"justify", backgroundColor:"#FDF8F2",width:"100%",minHeight:"250px"}}>
                                {message}
                            </section>
                        </div>
                    )
                    :
                    <div style={{display:"grid",justifyContent:"center"}}>
                        <h3>NO RECORDS</h3>
                        {/* <LazyLoad offset={400} threshold={0.95} onContentVisible={() => {console.log('loaded!')}}>
                            <img src={no_records} alt="late developers https://late-developers.com"/>
                        </LazyLoad> */}
                        <LazyLoadImage
                            // key={index}
                            alt="late-developers.com"
                            height={200}
                            // scrollPosition={index}
                            src={no_records}
                            width={200} />  
                    </div>

                }
            </div>
        </div>
    )
}
export default GET_FEEDBACK