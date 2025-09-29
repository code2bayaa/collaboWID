// import LazyLoad from 'react-lazy-load';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useRef, useState } from 'react';
import gsap from 'gsap';

const PEOPLE = ({img, description, id, index}) => {

    const person = useRef(null)
    const [scale, setScale] = useState({
        "one":true,
        "two":true,
        "three":true,
        "four":true,
        "five":true,
        "six":true,
        "seven":true
    })
    const scaleImg = (id) => {

        if(scale[id]){
            gsap.to(person.current,{
                scaleX:2,
                scaleY:2,
                // duration:3
            })
            
        }else{
            gsap.to(person.current,{
                scaleX:1,
                scaleY:1
            })
        }

        setScale(() => {
            return ({ ...scale, [id]:!scale[id]})
        })

    }

    return (
        <>
            <div id={id} className = "testimony" ref={person} onMouseEnter={() => scaleImg(id)} onMouseLeave={() => scaleImg(id)} key = {index}>
                {/* <LazyLoad offset={400} threshold={0.95} onContentVisible={() => {console.log('loaded!')}}>
                    <img 
                    src={img}
                    alt="testimonial image"
                    className='testimonyFrame'
                    sizes="(max-width: 600px) 480px, (max-width: 900px) 800px, 1200px"
                    />
                </LazyLoad> */}
                              <LazyLoadImage
                                                                        // key={index}
                                                                        alt="late-developers.com"
                                                                        height={200}
                                                                        // scrollPosition={index}
                                                                         className='testimonyFrame'
                                                                        src={img}
                                                                        width={200} />  

                <article>
                    {description}
                </article>
            </div>
        </>
    )
}

export default PEOPLE