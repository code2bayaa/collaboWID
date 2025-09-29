
import { useEffect, useState } from "react"
import LAYOUT from "./layout"
import { NavLink } from "react-router-dom"
import { useNavigate } from "react-router-dom"
const images_folder = process.env.REACT_APP_host_url + "/assets"
const api_url = process.env.REACT_APP_api_url
const WIREFRAMES = () => {
    const [wireframe, setWireframe] = useState([])
    const navigate = useNavigate();

    useEffect(() => {

        async function runWireframes(){
            const res = await fetch(api_url + "/wireframes/get")
            const {status, data} = await res.json()
            if(status){
                setWireframe([...data])
            }
        }
        runWireframes()
    },[])

    return (
        <div className="with-full with-row" style={{height:"100%",backgroundColor:"#FCFCFA"}}>
            <div style={{width:"20%",height:"100%",background:"linear-gradient(#411342, #000, #000)"}}>
                <LAYOUT/>
            </div>
            <div className="admin-components">
                <h2>EDIT WIREFRAME</h2>
                <div style={{width:"100%",display:"flex",flexDirection:"row",flexWrap:"wrap",textAlign:"center",justifyItems:"center"}}>
                    {
                        wireframe.map(({component, count},index) => 
                            <NavLink
                            key={index}
                                to={`/admin/wireframes/${component}/${count}`}
                                style={{width:"22%",height:"60px",background:"#fff",border:"1px solid #ccc",margin:"1%"}}
                            >
                                <p>{component}</p>
                                <p>{count}</p>
                            </NavLink>
                        )
                    }
                </div>
            </div>
        </div>
    )
}
export default WIREFRAMES