import { NavLink } from "react-router-dom"
// import { useSession, signOut } from "next-auth/react";
import swal from "sweetalert";
import {useNavigate } from "react-router-dom"
import { useEffect } from "react";
const LAYOUT = () => {
    const router = useNavigate()
    // const { data:session, status } = useSession();
    // if (status === "loading") {
    //     return <p>Loading...</p>;
    // }
    
    // if(session == null || !session.hasOwnProperty("user")){
    //     router("/admin")
    //     return null
    // }
    const api_url = process.env.REACT_APP_api_url
        useEffect(() => {

          async function authentication(){
            const res = await fetch(api_url + "/authentication",{credentials: "include"})
            const {status} = await res.json()
            if(!status){
                router('/admin')
            }
          }
          authentication()
        },[])

    

    
    const customSignout = async() => {
        try {

            const response = await fetch(api_url + "/signout",{credentials: "include"});
        
            const {status,message} = await response.json()
            if(status){
                router("/admin")
                return null
            }
            swal("Oops!", message, "error");
            return null
            // if (!response.ok) {
            //     // throw new Error("Failed to update logout status in the database");
            //     swal("Oops!", "Something went wrong!", "error");
            //     return null;
            // }
        
            
            // // Call NextAuth's signOut function after updating the database
            // await signOut({ callbackUrl: "/admin"});
            // router.push("/users/signin")
        
        } catch (error) {
            console.error("Error during sign-out:", error);
            swal("Oops!", error.message, "error");
        }
    }
    return (
        <div className="with-full with-column" style={{height:"100%"}}>
            <NavLink
             to="/admin/wireframes"
                className={({ isActive, isPending }) =>
                    isPending ? "not_Admin" : isActive ? "admin" : ""
                }
            >
                <p>WIREFRAMES</p>
            </NavLink>
            <NavLink
             to="/admin/feedback"
                className={({ isActive, isPending }) =>
                    isPending ? "not_Admin" : isActive ? "admin" : ""
                }
            >
                <p>FEEDBACK</p>
            </NavLink>
            <NavLink
             to="/admin/newsletter"
                className={({ isActive, isPending }) =>
                    isPending ? "not_Admin" : isActive ? "admin" : ""
                }
            >
                <p>NEWSLETTERS</p>
            </NavLink>
            <NavLink
             to="/admin/reports"
                className={({ isActive, isPending }) =>
                    isPending ? "not_Admin" : isActive ? "admin" : ""
                }
            >
                <p>REPORTS</p>
            </NavLink>
            <button
                onClick={customSignout}
                style={{background:"transparent",height:"40px",color:"#fff",background:"#000",textDecoration:"underline"}}
            >
                SIGNOUT
            </button>
            <img src="/assets/footer/footer3.png" style={{margin:"1%",marginTop:"100%"}}/>
        </div>
    )
}
export default LAYOUT