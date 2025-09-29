import LAYOUT from "./layout"
import { useNavigate } from "react-router-dom"
import {LazyLoadImage} from "react-lazy-load-image-component"
import { Undo, IndentBlock, Indent, TodoList, CodeBlock, BlockQuote, Alignment, Link, Code, Heading, Image, ImageToolbar, ImageUpload, Font, List, Superscript, Subscript, Strikethrough, DecoupledEditor, Bold, Essentials, Italic, Paragraph, Autoformat
} from 'ckeditor5';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import 'ckeditor5/ckeditor5.css';
import {useEffect, useState, useRef} from "react"
import swal from "sweetalert"

const GET_NEWSLETTER = () => {

    const images_folder = process.env.REACT_APP_host_url + "/assets"
    const api_url = process.env.REACT_APP_api_url

    const [emails, setEmail] = useState([])
    const [loading, setLoading] = useState(false)
    const [form, setForm] = useState({body:"",subject:""})
    const [ isMounted, setMounted ] = useState( false );
    const navigate = useNavigate();
    const editorToolbarRef = useRef( null );
    const no_records = images_folder + "/home/no_data.svg"

    useEffect(() => {
        async function runEmails(){
            const res = await fetch(api_url + "/newsletter/get")
            const {data, status} = await res.json()
            if(status)
                setEmail([...data])
        }
        runEmails()
        setMounted(true);


        return () => {
            setMounted(false);
        };
        
    },[])

    const sendMail = async(e) => {
        setLoading(true)
        try{
            e.preventDefault()

            if(!form.body || !form.subject){
                swal("oops","input required","error")
                setLoading(false)
                return false
            }

            const res = await fetch(api_url + "/newsletter/send",{
                method:"POST",
                body:JSON.stringify(form),
                headers : {'Content-type': 'application/json; charset=UTF-8'},
            })
            const {status,message} = await res.json()

            if(status){
                swal(message,"success")
            }else{
                swal("oops",message,"error")
            }
        }catch(error){
            console.log(error)
            swal("oops",error.message,"error")
        }
        setLoading(false)
    }

    return (
        <div className="with-full  with-row" style={{height:"100%",backgroundColor:"#FCFCFA"}}>
            <div style={{width:"20%",height:"100%",background:"linear-gradient(#411342, #000, #000)"}}>
                <LAYOUT/>
            </div>
            <div className="admin-components">
                <h2>NEWSLETTERS</h2>
                <p>Send daily mails to your subscribers</p>
                <div className="with-row with-full">
                    <div style={{width:"70%",height:"100%"}}>
                        <p>Send mail below</p>
                        <form
                            onSubmit={(e) => sendMail(e)}
                        >
                            <input
                            type="text"
                            className='newsletter-input'
                            placeholder="SUBJECT"
                            name="subject"
                            required
                            value={form.subject}
                            onChange={(e) => setForm({ ...form, "subject" : e.target.value})}
                            />
                            { isMounted && (
                                <>
                                    <div ref={ editorToolbarRef } className='w-[100%] h-[70%]'></div>
                                    <div className="with-fulll">
                                        <CKEditor
                                            editor={ DecoupledEditor }
                                            // data={article || body}
                                            config={ {
                                                toolbar: ["bold", "italic", "link"],
                                                placeholder:"Write Your newsletter here...",
                                                plugins: [ 
                                                    Essentials, Autoformat, Bold, Italic, Strikethrough, Subscript, Superscript, Code, Paragraph, Heading, Font, List, Alignment, Link, Image, ImageToolbar, ImageUpload, BlockQuote, CodeBlock, TodoList, Indent, IndentBlock, Undo 
                                                ],
                                                toolbar: [ 
                                                    'undo', 'redo', '|', 'bold', 'italic', 'numberedList', 'bulletedList', '|', 'heading', '|', 'fontfamily', 'fontsize', 'fontColor', 'fontBackgroundColor', '|', 'bold', 'italic', 'strikethrough', 'subscript', 'superscript', 'code', '-', '|', 'alignment', 'link', 'uploadImage', 'blockQuote', 'codeBlock', '|', 'bulletedList', 'numberedList', 'todoList', 'outdent', 'indent' 
                                                ]
                                            } }
                                            onReady={ ( editor ) => {
                                                if ( editorToolbarRef?.current ) {
                                                    editorToolbarRef?.current?.appendChild( editor.ui.view.toolbar.element );
                                                }
                                            }}
                                            onChange={(event, editor) => {
                                                const data = editor.getData();
                                                setForm({ ...form, "body": data });
                                            }}
                                            onAfterDestroy={ ( editor ) => {
                                                if ( editorToolbarRef?.current ) {
                                                    Array.from( editorToolbarRef?.current?.children ).forEach( child => child.remove() );
                                                }
                                            }}
                                        />
                                    </div>
                                </>
                            ) }
                            <button
                                disabled={loading}
                                style={{height:"40px",width:"80%",marginLeft:"10%",background:"#000",color:"#fff"}}
                            >
                                {loading ? "sending..." : "SEND NEWSLETTER" }
                            </button>
                        </form>
                    </div>
                    <div style={{width:"30%",height:"100%",overflow:"auto"}}>
                        {
                            emails.length > 0 ?

                            emails.map(({name, email, date},index) => 
                                <div style={{width:"95%",marginLeft:"2.5%",marginBottom:"2%",textAlign:"left", background: index%2 ? "#F5F5F5" : "#fff"}} key={index}>
                                    <strong>{name}</strong>
                                    <p>{email}</p>
                                    <strong>{date}</strong>
                                </div>
                            )
                            :
                                <div style={{display:"grid",justifyContent:"center"}}>
                                    <h3>NO RECORDS</h3>
                                    <LazyLoadImage
                                        alt="late-developers.com"
                                        height={200}
                                        src={no_records}
                                        width={200} />  
                                </div>

                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GET_NEWSLETTER
