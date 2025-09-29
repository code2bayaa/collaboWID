import { useState, useEffect } from "react"
import Footer from "./footer"
import {select_images} from "../constants/photo";
import NavBar from "./navBar"
import Carousel from "../constants/carousel";

const PHOTO = () => {

    const [images, setImages] = useState([])
    useEffect(() => {
        select_images().then(list => {
            setImages([...list])
        })
    },[])

    return (
        <div id = "gallery" className = "component">
            <div className="inner-components">
            <NavBar page = "#gallery"/>
            <div id="inner-slides">
                <Carousel images={images} gallery="1"/>
            </div>
            <Footer/>
        </div>
        </div>
    )
}

export default PHOTO