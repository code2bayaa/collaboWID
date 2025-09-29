import { useParams } from "react-router-dom";
import LAYOUT from "./layout"
import { useEffect, useState, useRef } from "react";
import FORMONE from "../../constants/wireframe";
import { useNavigate } from "react-router-dom"
import swal from "sweetalert";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { 
    Undo, IndentBlock, Indent, TodoList, CodeBlock, BlockQuote, Alignment, Link, Code, Heading, Image, ImageToolbar, ImageUpload, Font, List, Superscript, Subscript, Strikethrough, DecoupledEditor, Bold, Essentials, Italic, Paragraph, Autoformat
   } from 'ckeditor5';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import 'ckeditor5/ckeditor5.css';
const images_folder = process.env.REACT_APP_host_url + "/assets"
const api_url = process.env.REACT_APP_api_url

const WIREFRAME = () => {

    const navigate = useNavigate();
    const [wireframe, setWireframe] = useState([])
    const [isMounted, setMounted] = useState(false)
    const [open, setOpen] = useState(false)
    const { COMPONENT, COUNT } = useParams(); // Get dynamic 'id' from URL
    const [loading, setLoading] = useState(false)
    const [form, setForm] = useState({title:"",image:null,img:null,total:"",article:null,body:"",date:"",wall:null,wall2:null,wall3:null,name:"",description:"",file:null,file2:null,file_name:null,file_name2:null})
    const [uploading, setUpload] = useState(false)
    const [uploading2, setUpload2] = useState(false)
    const [uploading3, setUpload3] = useState(false)
    const [uploading4, setUpload4] = useState(false)
    const [uploading5, setUpload5] = useState(false)
    const [uploading6, setUpload6] = useState(false)

    const [previewImage, setImage] = useState(null)
    const [previewImage2, setImage2] = useState(null)
    const [previewImage3, setImage3] = useState(null)
    const [previewImage4, setImage4] = useState(null)

    const uploadFile = useRef(null)
    const uploadFile2 = useRef(null)
    const uploadFile3 = useRef(null)
    const uploadFile4 = useRef(null)
    const uploadFile5 = useRef(null)
    const uploadFile6 = useRef(null)

    const editable = [
        {component:"home", count:4},
        {component:"about",count:5},
        {component:"about",count:3},
        {component:"about",count:2},
        {component:"networks",count:0},
        {component:"insights",count:3},
        {component:"insights",count:1},
        {component:"home",count:5}
    ]
    const insertRef = useRef(null)
    const formRef = useRef(null)
    const editorToolbarRef = useRef( null );
    useEffect(() => {

        async function runWireframe(){
            const res = await fetch(api_url + "/wireframe/update",
                {
                    method:"POST",
                    body:JSON.stringify({COMPONENT, COUNT}),
                    headers : {'Content-type': 'application/json; charset=UTF-8'},
                }
            )
            const {status, data} = await res.json()
            if(status){
                setWireframe([...JSON.parse(data.data)])
            }
            console.log(data)
        }
        runWireframe()

        return () => setMounted(true)
    },[])

    const reloadFrame = (new_wireframe) => {
        // console.log(new_wireframe)
        setWireframe(() => [...new_wireframe])
    }

    const openInsert = (e) => {
        // console.log(insertRef)
        if(open){
            //close
            insertRef?.current?.classList.add("with-none")
            e.target.innerText = "CLICK TO ADD ITEM"
        }else{
            //open
            insertRef?.current?.classList.remove("with-none")
            e.target.innerText = "View Less"
        }
        setOpen(!open)
    }

    const insertData = async(e) => {
        e.preventDefault()

        try {
            setLoading(true)
            // Create FormData to send file
            const formData = new FormData();
            if(form.title)
                formData.append("title", form.title);
            if(form.date)
                formData.append("date", form.date);
            if(form.name)
                formData.append("name", form.name);
            if(form.description)
                formData.append("description", form.description);
            if(form.img)
                formData.append("img", form.img);
            if(form.image)
                formData.append("image", form.image);
            if(form.wall)
                formData.append("wall", form.wall);
            if(form.wall2)
                formData.append("wall2", form.wall2);
            if(form.wall3)
                formData.append("wall3", form.wall3);
            if(form.total)
                formData.append("total", form.total);
            if(form.article)
                formData.append("article", form.article);
            if(form.body)
                formData.append("body", form.body);
            if(form.file)
                formData.append("file", form.file);
            if(form.file2)
                formData.append("file2", form.file2);
            if(form.file_name)
                formData.append("file_name", form.file_name);
            if(form.file_name2)
                formData.append("file_name2", form.file_name2);
            if(COMPONENT)
                formData.append("component", COMPONENT);
            if(COUNT)
                formData.append("count", COUNT);
            
            // console.log(formData,"formData")
            // console.log(form,"form")
            // Upload to the server
            const response = await fetch(api_url + "/insert", {
                method:"POST",
                body:formData,
                // headers: { "Content-Type": "multipart/form-data" },
            });
      
            const {status} = await response.json()
            if(status){
                swal("success")
                window.location.reload()
            }
          } catch (error) {
            console.error("Error uploading image:", error);
            swal("oops",error.message,"error")
          }
      
          setLoading(false);
    }

    const handleInput = (e) => {
        setForm({...form, [e?.target?.name] : e?.target?.value})
    }   

    const saveImg = (n) => {
        if(n === 1){
            setUpload(true)
            uploadFile?.current?.click()
        }else if(n === 2){
            setUpload2(true)
            uploadFile2?.current?.click()
        }else if(n === 3){
            setUpload3(true)
            uploadFile3?.current?.click()
        }else if(n === 4){
            setUpload4(true)
            uploadFile4?.current?.click()
        }else if(n === 5){
            setUpload5(true)
            uploadFile5?.current?.click()
        }else if(n === 6){
            setUpload6(true)
            uploadFile6?.current?.click()
        }

    }

    const handleChange = (n) => {
        if(n === 1){
            const file = uploadFile?.current.files[0];
            console.log(file)
            if (file) {
                const reader = new FileReader();
                reader.readAsDataURL(file); // Convert to Base64 for preview
                reader.onload = () => setImage(reader.result);
                if(wireframe.length > 0 && wireframe[0].hasOwnProperty("image") && wireframe[0].image)
                    setForm({ ...form, image: file });
                if(wireframe.length > 0 && wireframe[0].hasOwnProperty("img") && wireframe[0].img)
                    setForm({ ...form, img: file });
            }
            setUpload(false)
        }else if(n === 2){
            const file = uploadFile2?.current.files[0];
            if (file) {
                const reader = new FileReader();
                reader.readAsDataURL(file); // Convert to Base64 for preview
                reader.onload = () => setImage2(reader.result);
    
                // Store the file in the form state
                setForm({ ...form, wall: file });
            }
            setUpload2(false)
        }else if(n === 3){
            const file = uploadFile3?.current.files[0];
            if (file) {
                const reader = new FileReader();
                reader.readAsDataURL(file); // Convert to Base64 for preview
                reader.onload = () => setImage3(reader.result);
    
                // Store the file in the form state
                setForm({ ...form, wall2: file });
            }
            setUpload3(false)
        }else if(n == 4){
            const file = uploadFile4?.current.files[0];
            if (file) {
                const reader = new FileReader();
                reader.readAsDataURL(file); // Convert to Base64 for preview
                reader.onload = () => setImage4(reader.result);
    
                // Store the file in the form state
                setForm({ ...form, wall3: file });
            }
            setUpload4(false)
        }else if(n === 5){
            const file = uploadFile5?.current.files[0];
            setForm({ ...form, file: file });
            setUpload5(false)
        }else if(n === 6){
            const file = uploadFile6?.current.files[0];
            setForm({ ...form, file: file });
            setUpload6(false)
        }

    };

    return (
        <div className="with-full with-row" style={{height:"100%",backgroundColor:"#FCFCFA"}}>
            <div style={{width:"20%",height:"100%",background:"linear-gradient(#411342, #000, #000)"}}>
                <LAYOUT/>
            </div>
            <div className="admin-components">
                <h2>{COMPONENT}</h2>
                {
                    editable.find(({component,count}) => component == COMPONENT && count == COUNT) ? 
                    <>
                        <button
                            onClick={(e) => openInsert(e)}
                            type="button"
                            style={{height:"40px",width:"80%",marginLeft:"10%",background:"#000",color:"#fff"}}
                        >
                            CLICK TO ADD ITEM
                        </button>
                        <div className="with-full with-none" ref={insertRef}>
                            <form
                                ref={formRef}
                                onSubmit={(e) => insertData(e)}
                                style={{width:"100%"}}
                            >
                            {
                                wireframe.length > 0 && wireframe.map(({title,image,img,total,article,body,wall,wall2,wall3,name,description,file,file2,file_name,file_name2,date},index) => {

                                    if(index)
                                        return
                                    return (
                                        <div className="with-full" key={index}>
                                    {
                                        date ? 
                                        <>
                                            <label>date</label>
                                            <input
                                                onChange={(e) => handleInput(e)}
                                                placeholder="date"
                                                name="date"
                                                value={form.date}
                                                style={{border:"1px solid #ccc"}}
                                            />
                                        </>
                                        :
                                        ""
                                    }
                                    {
                                        title ? 
                                        <>
                                            <label>title</label>
                                            <input
                                                onChange={(e) => handleInput(e)}
                                                placeholder="title"
                                                name="title"
                                                value={form.title}
                                                style={{border:"1px solid #ccc"}}
                                            />
                                        </>
                                        :
                                        ""
                                    }
                                    {
                                        name ? 
                                        <>
                                            <label>name</label>
                                            <input
                                                onChange={(e) => handleInput(e)}
                                                placeholder="name"
                                                name="name"
                                                value={form.name}
                                                style={{border:"1px solid #ccc"}}
                                            />
                                        </>
                                        :
                                        ""
                                    }
                                    {
                                        description ? 
                                        <>
                                            <label>description</label>
                                            <textarea
                                                onChange={(e) => handleInput(e)}
                                                placeholder="description"
                                                name="description"
                                                value={form.description}
                                                style={{border:"1px solid #ccc"}}
                                            />
                                        </>
                                        :
                                        ""
                                    }
                                    {
                                        total ? 
                                        <>
                                            <label>total</label>
                                            <input
                                                onChange={(e) => handleInput(e)}
                                                placeholder="total"
                                                name="total"
                                                value={form.total}
                                                style={{border:"1px solid #ccc"}}
                                            />
                                        </>
                                        :
                                        ""
                                        
                                    }
                                    <div className="with-row with-full" style={{overflow:"auto"}}>
                                        {
                                            image || img ?
                                            <div style={{width:"30%"}}>
                                                <LazyLoadImage
                                                    // key={index}
                                                    alt="late-developers.com"
                                                    height={200}
                                                    // scrollPosition={index}
                                                    src={previewImage}
                                                    width={200} />  
                                                <input type="file" ref={uploadFile} hidden onChange={() => handleChange(1)}/>
                                                <button
                                                    onClick={() => saveImg(1)}
                                                    type="button"
                                                    disabled={uploading}
                                                    style={{height:"40px",width:"80%",marginLeft:"10%",background:"#000",color:"#fff"}}
                                                >
                                                    {uploading ? "uploading..." : "INSERT IMAGE" }
                                                </button>
                                            </div>
                                            :
                                            ""
                                        }
                                        {
                                            wall ?
                                                <div style={{width:"30%"}}>
                                                    <LazyLoadImage
                                                    // key={index}
                                                    alt="late-developers.com"
                                                    height={200}
                                                    // scrollPosition={index}
                                                    src={previewImage2}
                                                    width={200} />  
                                                    <input type="file" ref={uploadFile2} hidden onChange={() => handleChange(2)}/>
                                                    <button
                                                        onClick={() => saveImg(2)}
                                                        type="button"
                                                        disabled={uploading2}
                                                        style={{height:"40px",width:"80%",marginLeft:"10%",background:"#000",color:"#fff"}}
                                                    >
                                                        {uploading2 ? "uploading..." : "INSERT IMAGE" }
                                                    </button>
                                                </div>
                                            :
                                            ""
                                        }
                                        {
                                            wall2 ? 
                                                <div style={{width:"30%"}}>
                                                    <LazyLoadImage
                                                    // key={index}
                                                    alt="late-developers.com"
                                                    height={200}
                                                    // scrollPosition={index}
                                                    src={previewImage3}
                                                    width={200} /> 
                                                    <input type="file" ref={uploadFile3} hidden onChange={() => handleChange(3)}/>
                                                    <button
                                                        onClick={() => saveImg(3)}
                                                        type="button"
                                                        disabled={uploading3}
                                                        style={{height:"40px",width:"80%",marginLeft:"10%",background:"#000",color:"#fff"}}
                                                    >
                                                        {uploading3 ? "uploading..." : "INSERT IMAGE" }
                                                    </button>
                                                </div>
                                            :
                                            ""
                                        }
                                        {
                                            wall3 ? 
                                                <div style={{width:"30%"}}>
                                                    <LazyLoadImage
                                                    // key={index}
                                                    alt="late-developers.com"
                                                    height={200}
                                                    // scrollPosition={index}
                                                    src={previewImage4}
                                                    width={200} /> 
                                                    <input type="file" ref={uploadFile4} hidden onChange={() => handleChange(4)}/>
                                                    <button
                                                        onClick={() => saveImg(4)}
                                                        type="button"
                                                        disabled={uploading4}
                                                        style={{height:"40px",width:"80%",marginLeft:"10%",background:"#000",color:"#fff"}}
                                                    >
                                                        {uploading4 ? "uploading..." : "INSERT IMAGE" }
                                                    </button>
                                                </div>
                                            :
                                            ""
                    
                                        }
                    
                                    </div>
                                    {
                                        file ? 
                                            <>
                                                <label>file name</label>
                                                <input
                                                    onChange={(e) => handleInput(e)}
                                                    placeholder="file_name"
                                                    name="file_name"
                                                    value={form.file_name}
                                                    style={{border:"1px solid #ccc"}}
                                                />
                                                <input type="file" ref={uploadFile5} hidden onChange={() => handleChange(5)}/>
                                                <button
                                                    onClick={() => saveImg(5)}
                                                    type="button"
                                                    disabled={uploading5}
                                                    style={{height:"40px",width:"80%",marginLeft:"10%",background:"#000",color:"#fff"}}
                                                >
                                                    {uploading5 ? "uploading..." : "INSERT FILE" }
                                                </button>
                                            </>
                                        :
                                        ""
                    
                                    }
                                                    {
                                        file2 ? 
                                            <>
                                                <label>file name two</label>
                                                <input
                                                    onChange={(e) => handleInput(e)}
                                                    placeholder="file_name2"
                                                    name="file_name2"
                                                    value={form.file_name2}
                                                    style={{border:"1px solid #ccc"}}
                                                />
                                                <input type="file" ref={uploadFile6} hidden onChange={() => handleChange(6)}/>
                                                <button
                                                    onClick={() => saveImg(6)}
                                                    type="button"
                                                    disabled={uploading6}
                                                    style={{height:"40px",width:"80%",marginLeft:"10%",background:"#000",color:"#fff"}}
                                                >
                                                    {uploading6 ? "uploading..." : "INSERT FILE" }
                                                </button>
                                            </>
                                        :
                                        ""
                    
                                    }
                                    {
                                        article || body ? 
                                        <>
                                            <div ref={ editorToolbarRef } className='w-[100%] h-[70%]'></div>
                                            <div className='w-[100%] h-[70%]'>
                                                { isMounted && (
                                                    <CKEditor
                                                        editor={ DecoupledEditor }
                                                        config={ {
                                                            toolbar: ["bold", "italic", "link"],
                                                            placeholder:"Write Your feedback here...",
                                                            plugins: [ 
                                                                Essentials, Autoformat, Bold, Italic, Strikethrough, Subscript, Superscript, Code, Paragraph, Heading, Font, List, Alignment, Link, Image, ImageToolbar, ImageUpload, BlockQuote, CodeBlock, TodoList, Indent, IndentBlock, Undo 
                                                            ],
                                                            toolbar: [ 
                                                                'undo', 'redo', '|', 'bold', 'italic', 'numberedList', 'bulletedList', '|', 'heading', '|', 'fontfamily', 'fontsize', 'fontColor', 'fontBackgroundColor', '|', 'bold', 'italic', 'strikethrough', 'subscript', 'superscript', 'code', '-', '|', 'alignment', 'link', 'uploadImage', 'blockQuote', 'codeBlock', '|', 'bulletedList', 'numberedList', 'todoList', 'outdent', 'indent' 
                                                            ]
                                                        } }
                                                        onReady={ ( editor ) => {
                                                            if ( editorToolbarRef.current ) {
                                                                editorToolbarRef?.current?.appendChild( editor.ui.view.toolbar.element );
                                                            }
                                                        }}
                                                        onChange={(event, editor) => {
                                                            const data = editor.getData();
                                                            // console.log(data,"data")
                                                            // console.log(wireframe)
                                                            if(wireframe.length > 0 && wireframe[0].hasOwnProperty("article") && wireframe[0].article)
                                                                setForm({ ...form, "article": data });
                                                            if(wireframe.length > 0 && wireframe[0].hasOwnProperty("body") && wireframe[0].body)
                                                                setForm({ ...form, "body": data });
                                                        }}
                                                        onAfterDestroy={ ( editor ) => {
                                                            if ( editorToolbarRef.current ) {
                                                                Array.from( editorToolbarRef?.current?.children ).forEach( child => child.remove() );
                                                            }
                                                        }}
                                                    />
                                                ) }
                                            </div>
                                        </>
                                        :
                                        ""
                                    }

                                    </div>
                                )}
                                )
                            }
                            <button
                                style={{height:"40px",width:"80%",marginLeft:"10%",background:"#000",color:"#fff"}}
                                disabled={loading}
                            >
                               {loading ? "inserting..." : "INSERT ITEM"} 
                            </button>
                            </form>
                        </div>
                    </>
                    :
                    ""
                }

                <div style={{width:"80%", marginLeft:"10%", display:"grid",justifyItems:"center",justifyContent:"center",flexWrap:"wrap"}}>
                    {
                        (wireframe.length > 0 ) ?
                            wireframe.map(({title,image,img,total,date,article,body,wall,wall2,wall3,name,description,file,file2,file_name,file_name2},index) => 
                                <FORMONE editable={editable} date={date} file={file} file2={file2} file_name={file_name} file_name2={file_name2} title={title} article={article} name={name} description={description} wall={wall} wall2={wall2} wall3={wall3} body={body} wireframe={wireframe} reload={reloadFrame} total={total} image={image || img} key={index} index={index} component={COMPONENT} count={COUNT}/>
                            )
                        :
                        ""
                    }
                </div>
            </div>
        </div>
    )
}

export default WIREFRAME