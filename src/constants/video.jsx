import {useEffect, useRef} from "react"
import Plyr from 'plyr';

const VIDEOS = ({videoTag}) => {

    const videoRef = useRef(null)

    useEffect(() => {

        try{
            let played = new Plyr(videoRef.current, {
                title : "video gallery videos",
                controls : false,
                settings : ['captions', 'speed', 'loop'],
                seekTime : 10,
                tooltips : { 'controls' : false, seek: true },
                // preload : 'none',
                displayDuration : true,
                muted: false,
                autoplay:false,
                clickToPlay : true,
            })
    
            const source = document.createElement('source');
            source.src = videoTag;
            source.type = "video/mp4"
            played.media.appendChild(source);
    
            played.source = {
                type: 'video',
                title: 'YouTube',
                // poster: image,
                sources: [
                    {
                        src: videoTag,
                        provider: 'youtube',
                    },
                ],
            };
    
            played.play()
        }catch(error){
            console.log(error)
        }

    },[videoTag])

    return (
        <div id = "image-gallery">
            <video ref={videoRef} className = 'with-full' controls allowFullScreen muted autoplay>
            </video>
            {/* <iframe 
                ref={videoRef}
                className = 'with-full'
                // src="https://www.youtube.com/embed/VIDEO_ID" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
            ></iframe> */}
        </div>
    )
}

export default VIDEOS