import LAYOUT from "./layout"
import {useRef,useEffect,useState} from "react"
import { useNavigate  } from "react-router-dom"
import swal from "sweetalert"
// import { useSession, getProviders, signIn, getCsrfToken } from "next-auth/react";

const SIGNIN = () => {

    const [loading, setLoading] = useState(false)
    const [form,setForm] = useState({username:"",password:""})
    const [csrfToken, setCsrfToken] = useState("")
    const [providers, setProviders] = useState({})
    const router = useNavigate()
    const api_url = process.env.REACT_APP_api_url

    useEffect(() => {

      async function authentication(){
        const res = await fetch(api_url + "/authentication",{credentials: "include"})
        const {status,message} = await res.json()
        console.log(message)
        if(status){
            router('/admin/reports')
        }
      }
      authentication()
    },[])
    const handleSubmit = async (e) => {
      try{
        e.preventDefault();
        setLoading(true)
        if(!form.password || !form.username){
          if(!form.username){
            swal("oops","input email","error")
    
            
          }
          if(!form.password){
            swal("oops","input passowrd","error")
          }
          setLoading(false)
          return null
        }
        const response = await fetch(`${api_url}/signin`, {
          method: "POST",
          credentials: "include",
          body:JSON.stringify({
            username:form.username,
            password:form.password
          }),
          headers: {
            'Content-Type': 'application/json', // Indicates the body is JSON
          },
        });
    
        const {status, message} = await response.json()
        if(!status){
          swal("oops!",message,"error");
          setLoading(false)
          return null
        }

        console.log(message)
        router("/admin/reports"); // Redirect to dashboard after successful login
        // const result = await signIn("credentials", {
        //   redirect: false,
        //   username:form.username,
        //   password:form.password,
        // });
    
        // console.log(form.email,result)
        // setLoading(false)
        // if (result.ok) {
        //   router("/admin/wireframes"); // Redirect to dashboard after successful login
        // } else {
        //   swal("oops!","Invalid credentials, please try again.","error");
        // }
      }catch(error){
        console.log(error)
      }

      };

    return (
        <div className="with-full" style={{height:"100%",backgroundColor:"#FCFCFA"}}>
            {/* <div style={{width:"20%",height:"100%",background:"linear-gradient(#411342, #000, #000)"}}>
                <LAYOUT/>
            </div> */}
            {/* <div className="admin-components"> */}
                <h1 style={{textAlign:"center",fontSize:"200%"}}>Admin Login</h1>
                <img src="/assets/footer/footer3.png" style={{marginLeft:"30%",height:"20%",width:"40%",objectFit:"contain",textAlign:"center"}}/>
                <div style={{width:"100%",textAlign:"center",display:"grid",justifyItems:"center"}}>
                    <div style={{width:"45%"}}>
                        <form 
                            // method="post"
                            // action="/api/auth/callback/credentials"
                            onSubmit={(e) => handleSubmit(e)} style={{width:"100%"}}
                        >
                        <fieldset>
                          <input type="hidden" name="csrfToken" value={csrfToken} />
                            <input
                            type="email"
                            placeholder="username"
                            value={form.username}
                            style={{width:"100%",height:"40px",border:"none"}}
                            name="username"
                            onChange={(e) => setForm(() => ({...form, [e.target.name] : e.target.value}))}
                            />
                        </fieldset>
                        <fieldset>
                            <input
                            type="password"
                            placeholder="Password"
                            value={form.password}
                            style={{width:"100%",height:"40px",border:"none"}}
                            name="password"
                            onChange={(e) => setForm(() => ({...form, [e.target.name]:e.target.value}))}
                            />
                        </fieldset>

                        <button 
                            type="submit"
                            disabled={loading}
                            style={{width:"40%",margin:"0.5%",height:"40px",background:"#000",color:"#fff"}}
                            >
                            {loading ? "signing in...":"Login"}
                        </button>
                        </form>
                    </div>
                {/* </div> */}
            </div>
        </div>
    )
}
export default SIGNIN