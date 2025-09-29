
  import gsap from "gsap";
  import "react-vertical-timeline-component/style.min.css";
  import { useLayoutEffect, useRef, useState } from "react";
import Footer from "./footer"
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import Typography from '@mui/material/Typography';
import NavBar from "./navBar"
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {select_newsletters} from "../constants/newsletter";
const Resources = () => {

    const resourceRef = useRef(null)
    const [resources, setResources] = useState([])
    useLayoutEffect(() => {

        document.querySelectorAll("#NavBar a").forEach(wrapper => {
            gsap.to(wrapper,{
                color:"#000",
            })
        })


        gsap.to(".header-info",{
            color:"#000",
        })

        gsap.to("#NavBar span",{
            color:"#000",
        })
        const handlePopstate = () => {
            console.log(document.location.hash)
            if(document.location.hash === "#resources"){
                console.log(resourceRef)
                resourceRef.current.scrollIntoView({ behaviour : 'smooth' })
            }
        }
        window.addEventListener('popstate', handlePopstate);
        select_newsletters().then(list => {
            setResources([...list])
        })
    },[resourceRef])


    return (
        <div className = "component">
            <div id = "resources" ref={resourceRef} className="inner-components">
            <NavBar page = "#resources"/>
            {/* <img src={logo} alt="logo" className='logo'/> */}
            <Timeline position="alternate">
                {resources.map(({name, file, date, type, img, image, description},index) => (
                    <TimelineItem key={index}>
                        <TimelineOppositeContent
                        sx={{ m: 'auto 0' }}
                        align="right"
                        variant="body2"
                        color="text.secondary"
                        >
                            {date}
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                        <TimelineConnector />
                        <TimelineDot>
                            <FastfoodIcon />
                        </TimelineDot>
                        <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent sx={{ py: '12px', px: 2 }}>
                        <Typography variant="h6" component="span">
                            <div>
                                <img
                                    src={img || image}
                                    alt="resources images"
                                    className='w-[60%] h-[60%] resource-image'
                                />
                                <h3 className='text-black text-xl font-poppins font-semibold'>
                                    {name}
                                </h3>
                                <h3
                                    className='text-black-500 font-medium text-base'
                                    style={{ margin: 0 }}
                                >
                                    {type}
                                </h3>
                                <section>{description}</section>
                                <span style={{fontSize:"180%"}}><FontAwesomeIcon icon={faFilePdf} /></span>
                                <a href = {file} download>Download {name}</a>
                            </div>
                        </Typography>
                        <Typography>Because you need strength</Typography>
                        </TimelineContent>
                    </TimelineItem>
    
                ))}
                </Timeline>
            <Footer/>
        </div>
        </div>
    );
}

export default Resources