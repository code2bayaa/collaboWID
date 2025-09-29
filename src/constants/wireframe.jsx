// import LazyLoad from "react-lazy-load"
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useState, useRef, useEffect } from "react"
import swal from "sweetalert"
import { 
    Undo, IndentBlock, Indent, TodoList, CodeBlock, BlockQuote, Alignment, Link, Code, Heading, Image, ImageToolbar, ImageUpload, Font, List, Superscript, Subscript, Strikethrough, DecoupledEditor, Bold, Essentials, Italic, Paragraph, Autoformat
} from 'ckeditor5';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import 'ckeditor5/ckeditor5.css';
// const images_folder = process.env.REACT_APP_host_url + "/assets"
const api_url = process.env.REACT_APP_api_url

const FORMONE = ({file, file2, file_name, file_name2, title, image, date, component, editable, count, index, total, reload, article, body, wall, wall2, wall3, name, description}) => {
    const [loading, setLoading] = useState(false)
    const [uploading, setUpload] = useState(false)
    const [uploading2, setUpload2] = useState(false)
    const [uploading3, setUpload3] = useState(false)
    const [uploading4, setUpload4] = useState(false)
    const [uploading5, setUpload5] = useState(false)
    const [uploading6, setUpload6] = useState(false)
    const [removeLoading, setRemove] = useState(false)
    const [ isMounted, setMounted ] = useState( false );
    const [form, setForm] = useState({title,image,total,article,body,date,wall,wall2,wall3,name,description,file,file2,file_name,file_name2})
    const [previewImage, setImage] = useState(image)
    const [previewImage2, setImage2] = useState(wall)
    const [previewImage3, setImage3] = useState(wall2)
    const [previewImage4, setImage4] = useState(wall3)
    const uploadFile = useRef(null)
    const uploadFile2 = useRef(null)
    const uploadFile3 = useRef(null)
    const uploadFile4 = useRef(null)
    const uploadFile5 = useRef(null)
    const uploadFile6 = useRef(null)
    const formRef=useRef(null)
    const editorToolbarRef = useRef( null );
    

    useEffect(() => {
        setMounted( true );


        return () => {
            setMounted( false );
        };
    },[])
    const changeData = async(e) => {
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
            if(component)
                formData.append("component", component);
            if(count)
                formData.append("count", count);
            if(index)
                formData.append("index", index);
            
      
            // Upload to the server
            const response = await fetch(api_url + "/upload", {
                method:"POST",
                body:formData,
                // headers: { "Content-Type": "multipart/form-data" },
            });
      
            const {status} = await response.json()
            if(status){
                swal("success")
            }
          } catch (error) {
            console.error("Error uploading image:", error);
            swal("oops",error.message,"error")
          }
      
          setLoading(false);
    }

    const removeItem = () => {
        try{
            setRemove(true)
            swal({
                title: "Are you sure?",
                text: "You can add it again below",
                icon: "warning",
                buttons: true,
                dangerMode: true,
              }).then(async(willDelete) => {
                if (willDelete) {
                    const response = await fetch(api_url + "/upload", {
                        method:"POST",
                        body:JSON.stringify({index,remove:true,component,count}),
                        headers : {'Content-type': 'application/json; charset=UTF-8'},
                    });
              
                    const {status,data} = await response.json()
                    if(status){
                        // formRef?.current?.remove()
                        // reload(data)
                        window.location.reload()
                        // Perform the action (e.g., delete an item)
                        swal("Deleted!", "The item has been removed.", "success");
                    }

                } else {
                  swal("Cancelled", "Your item is safe.", "info");
                }
              });
        }catch(error){
            console.log(error)
            swal("Cancelled", error.message, "info");
        }
        setRemove(false)
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

    const handleChange = async(n) => {
        if(n === 1){
            const file = uploadFile.current.files[0];
            if (file) {
                const reader = new FileReader();
                reader.readAsDataURL(file); // Convert to Base64 for preview

                reader.onload = () => setImage(reader.result)
                setForm({ ...form, image: file });
            }
            setUpload(false)
        }else if(n === 2){
            const file = uploadFile2.current.files[0];
            if (file) {
                const reader = new FileReader();
                reader.readAsDataURL(file); // Convert to Base64 for preview
                reader.onload = () => setImage2(reader.result);
    
                // Store the file in the form state
                setForm({ ...form, wall: file });
            }
            setUpload2(false)
        }else if(n === 3){
            const file = uploadFile3.current.files[0];
            if (file) {
                const reader = new FileReader();
                reader.readAsDataURL(file); // Convert to Base64 for preview
                reader.onload = () => setImage3(reader.result);
    
                // Store the file in the form state
                setForm({ ...form, wall2: file });
            }
            setUpload3(false)
        }else if(n == 4){
            const file = uploadFile4.current.files[0];
            if (file) {
                const reader = new FileReader();
                reader.readAsDataURL(file); // Convert to Base64 for preview
                reader.onload = () => setImage4(reader.result);
    
                // Store the file in the form state
                setForm({ ...form, wall3: file });
            }
            setUpload4(false)
        }else if(n === 5){
            const file = uploadFile5.current.files[0];
            setForm({ ...form, file: file });
            setUpload5(false)
        }else if(n === 6){
            const file = uploadFile6.current.files[0];
            setForm({ ...form, file: file });
            setUpload6(false)
        }

    };

    return (
        <>
            <form
                ref={formRef}
                onSubmit={changeData}
                style={{margin:"1%",width:"100%",height:"100%",display:"grid",background:index%2 ? "#FAF3E0 " : "transparent"}}
            >
                {
                    form.date || typeof(form.date) === "string"  ? 
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
                    form.title || typeof(form.title) === "string" ? 
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
                    form.name || typeof(form.name) === "string"  ? 
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
                    form.description || typeof(form.description) === "string" ? 
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
                    form.total || typeof(form.total) === "string"? 
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
                        form.image || typeof(form.image) === "string"  ?
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
                                {uploading ? "uploading..." : "CHANGE IMAGE" }
                            </button>
                        </div>
                        :
                        ""
                    }
                    {
                        form.wall || typeof(form.wall) === "string" ?
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
                                    {uploading2 ? "uploading..." : "CHANGE IMAGE" }
                                </button>
                            </div>
                        :
                        ""
                    }
                    {
                        form.wall2  || typeof(form.wall2) === "string" ? 
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
                                    {uploading3 ? "uploading..." : "CHANGE IMAGE" }
                                </button>
                            </div>
                        :
                        ""
                    }
                    {
                        form.wall3 || typeof(form.wall3) === "string"  ? 
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
                                    {uploading4 ? "uploading..." : "CHANGE IMAGE" }
                                </button>
                            </div>
                        :
                        ""

                    }

                </div>
                {
                    form.file || typeof(form.file) === "string"  ? 
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
                                {uploading5 ? "uploading..." : "CHANGE FILE" }
                            </button>
                        </>
                    :
                    ""

                }
                                {
                    form.file2 || typeof(form.file2) === "string"  ? 
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
                                {uploading6 ? "uploading..." : "CHANGE FILE" }
                            </button>
                        </>
                    :
                    ""

                }
                {
                    editable.find((edit) => edit.count == Number(count) && edit.component == component) ? 
                        <button
                            type="button"
                            disabled={removeLoading}
                            onClick={(e) => removeItem(e)}
                            style={{height:"40px",width:"80%",marginLeft:"10%",background:"#C70039",color:"#fff"}}
                        >
                            {removeLoading ? "removing..." : "REMOVE"}
                        </button>  
                        :
                        ""     
                }
                {
                    form.article || form.body  || typeof(form.article) === "string" || typeof(form.body) === "string"  ?
                    <>
                        <div ref={ editorToolbarRef } className='w-[100%] h-[70%]'></div>
                        <div className='w-[100%] h-[70%]'>
                            { isMounted && (
                                <CKEditor
                                    editor={ DecoupledEditor }
                                    data={article || body}
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
                                        if ( editorToolbarRef?.current ) {
                                            editorToolbarRef?.current?.appendChild( editor.ui.view.toolbar.element );
                                        }
                                    }}
                                    onChange={(event, editor) => {
                                        const data = editor.getData();
                                        if(form.article)
                                            setForm({ ...form, "article": data });
                                        if(form.body)
                                            setForm({ ...form, "body": data });
                                    }}
                                    onAfterDestroy={ ( editor ) => {
                                        if ( editorToolbarRef?.current ) {
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

                <button
                    disabled={loading}
                    style={{height:"40px",width:"80%",marginLeft:"10%",background:"#0096FF",color:"#fff"}}
                >
                    {loading ? "updating..." : "SAVE CHANGES"}
                </button>

            </form>
        </>
    )
}
export default FORMONE