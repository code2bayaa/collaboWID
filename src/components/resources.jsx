
  import gsap from "gsap";

//   import "react-vertical-timeline-component/style.min.css";
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
import { select_resources, select_resources_walls } from "../constants/resources";

const Resources = () => {

    const resourceRef = useRef(null)
    const [resources, setResources] = useState([])
    const [walls, setWalls] = useState({})

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
        select_resources().then(list => {
            setResources([...list].sort((a,b) => b - a))
            console.log(list)
        })
        select_resources_walls().then(list => {
            setWalls({...list})
        })

    },[resourceRef])

    // if (!VerticalTimeline || !VerticalTimelineElement) {
    //     return <div>Loading Timeline...</div>;
    // }

    return (
        <div className = "component">
            <div id = "resources" ref={resourceRef} className="inner-components">
            <NavBar page = "#resources"/>
            <div id="projects">
                <article>
                    {walls.hasOwnProperty("body") ? walls?.body : ""}
                </article>
            </div> 
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
            {/* <VerticalTimeline>
                {resources.map(({name, file, date, type, img, description},index) => (
                    <VerticalTimelineElement
                        key={ index }
                        date={date}
                        // iconStyle={{ background: institution.iconBg }}
                        icon={
                        <div className='flex justify-center items-center w-full h-full'>
                            <FontAwesomeIcon icon={faGlobeAfrica} />
                        </div>
                        }
                        contentStyle={{
                        borderBottom: "8px",
                        borderStyle: "solid",
                        // borderBottomColor: institution.iconBg,
                        boxShadow: "none",
                        background:"transparent"
                        }}
                    >
                        <div>
                            <img
                                src={img}
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
                            <article>{description}</article>
                            <span style={{fontSize:"180%"}}><FontAwesomeIcon icon={faFilePdf} /></span>
                            <a href = {file} download>Download {name}</a>
                        </div>

                        
                    </VerticalTimelineElement>
                    ))}
                </VerticalTimeline> */}
            <Footer/>
        </div>
        </div>
    );
}

export default Resources