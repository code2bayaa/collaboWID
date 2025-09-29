import { useLayoutEffect } from "react"
import Footer from "./footer"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import NavBar from "./navBar"
import gsap from "gsap";
import { faGalacticRepublic } from "@fortawesome/free-brands-svg-icons";
import gallery_constants from "../constants/gallery";
import YOUTUBE from "../constants/youtube";

const Gallery = () => {     

    useLayoutEffect(() => {

        try{

            gsap.fromTo("#image-gallery",{opacity:0,skewY:3},{
                opacity:1,
                skewY:0,
                delay:15,
                duration:2
            })

            gsap.fromTo("#gallery article",{opacity:0,y:300},{
                delay:1,
                opacity:1,
                duration:2,
                y:0
            })
        }catch(error){
            console.log("error : " + error.message)
        }

    },[])


    return (
        <div id = "gallery" className = "component">
            <div className="inner-components">
            <NavBar page = "#gallery"/>
            {/* <img src={logo} alt="logo" className='logo'/> */}
                {/* <div className="scroll-container">
                    <div className = "scroll-items">
                        <button onClick={scrollImage} className="btn-scroll with-left" item = "1">
                            <FontAwesomeIcon icon={faCaretLeft}/>
                        </button>
                        <button onClick={scrollImage} className="btn-scroll with-right" item = "2">
                            <FontAwesomeIcon icon={faCaretRight}/>
                        </button>
                    </div>
                    <h2>Images</h2>
                    <div id = "images" ref={imageRef} class = "with-medium with-column-wrap with-smooth with-overflow with-position-relative">
                        {images.map((image, index) => 
                            <div id = "image-gallery" key = {index}>
                                <img src = {image} alt = 'CWID gallery image'/>                        
                            </div>
                        )}
                    </div>
                </div>
                <div className="scroll-container">
                    <div className = "scroll-items">
                        <button onClick={scrollVideos} className="btn-scroll with-left" item = "1">
                            <FontAwesomeIcon icon={faCaretLeft}/>
                        </button>
                        <button onClick={scrollVideos} className="btn-scroll with-right" item="2">
                            <FontAwesomeIcon icon={faCaretRight}/>
                        </button>
                    </div>

                </div> */}

                    {/* <h2>Videos</h2> */}
                    <div className="with-column">
                        <div style={{width:"50%",backgroundColor:"rgba(207, 177, 177, 0.687)"}}>
                            <h1>CWIDPOD  <span style={{fontSize:"190%"}}><FontAwesomeIcon icon={faGalacticRepublic}/></span></h1>
                        </div>
                        <article>
                            <h1>{gallery_constants[0].title}</h1>

                            {gallery_constants[0].body}
                        </article>
                        {/* <article>
                            <span>CWIDPOD is a podcast series by Collaboration of Women In Development that sheds light on the impact of social, economic, environmental, legal & the technological sector.</span>
                            <span>in Africa and provides learning opportunities for the continent;s development country enthusiasts. We also seek to shift perspectives about our societies through story telling towards impact.</span>
                            {/* <span>Since its inception in December, CWIDPOD has:</span> */}
                            {/* <ul>
                                <li>Mastercard Foundation</li>
                                <li>SIDA</li>
                                <li>Jonathan Meeting</li>
                                <li>Clinton. Deborah</li>
                            </ul> 
                        </article> */}
                    </div>
                    <YOUTUBE/>

                    <Footer/>
        </div>
        </div>
    )
}

export default Gallery