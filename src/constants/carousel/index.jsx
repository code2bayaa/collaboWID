
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight, faHeartPulse } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
// import { CSSTransition, TransitionGroup } from 'react-transition-group';
// import './index.css';
import { Swiper, SwiperSlide } from "swiper/react"
import {Navigation, Pagination, Autoplay, EffectCoverflow, EffectCards, Scrollbar, Thumbs, Controller, A11y } from "swiper/modules"
// SwiperCore.use([Navigation, Pagination, Autoplay])
// import LazyLoad from 'react-lazy-load';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import "swiper/css"
import "swiper/css/bundle"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"
import "swiper/css/navigation"
// import { select_images } from '../photo';
// import { EffectCoverflow } from 'swiper/modules';

// Direct React component imports
// import { Swiper, SwiperSlide } from 'swiper/swiper-react.mjs';

// Styles must use direct files imports
// import 'swiper/swiper.scss'; // core Swiper
// import 'swiper/modules/navigation.scss'; // Navigation module
// import 'swiper/modules/pagination.scss'; // Pagination module

const Carousel = ({ images, autoplayInterval = 5000, gallery }) => {
  // const [activeIndex, setActiveIndex] = useState(0);

  // const nextSlide = () => {
  //   setActiveIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  // };

  // const prevSlide = () => {
  //   setActiveIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  // };
  
  const [new_images] = useState([])

  useEffect(() => {
    // gsap.registerPlugin(ScrollTrigger, Draggable, Flip, MotionPathPlugin);

        
    // if(gallery == "1"){
    //   const loadSelectImages = async () => {
    //     const module = await import('../photo');
    //     return module.select_images;
    //   };
      
    //   loadSelectImages().then(select_images => {
    //     select_images().then(list => {
    //       console.log(list)
    //       setImage([...list])
    //     })
    //   }); 

    // }

  }, [autoplayInterval]);

  // const [_, setFirstSwiper] = useState(null);
  const [secondSwiper] = useState(null);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  // const [descriptionRole, setDescriptionRole] = useState(null)

  const runImages = ({image,page,title,description,index}) => {
    return (
      <SwiperSlide key={image} virtual={index}>
        { 
          gallery === "awards" ? 
            <div className= "awardFrame">
              <h2>{title}</h2>
              <LazyLoadImage
                                                        // key={index}
                                                        alt="late-developers.com"
                                                        height={200}
                                                        // scrollPosition={index}
                                                         className='awardImageFrame'
                                                        src={image}
                                                        width={200} />  
              {/* <LazyLoad offset={400} threshold={0.95} onContentVisible={() => {console.log('loaded!')}}> */}
              {/* <LazyLoad offset={400} threshold={0.95} onContentVisible={() => {console.log('loaded!')}}>
                <img src={image} alt="slide image" loading="lazy"/>
              </LazyLoad> */}
              <article id = {"awardArticle" + index}>
                <h1><FontAwesomeIcon icon = {faHeartPulse}/></h1>
                {description}
              </article>

            </div>
          :
          gallery ? 
          <div className= "galleryFrame" style={{backgroundImage:`url(${image})`}}>
            <h2>{title}</h2>
          </div>
          : 
          <div className= "imageFrame" style={{backgroundImage:"linear-gradient(rgba(0,0,0,0.85),rgba(0,0,0,0.45),rgba(0,0,0,0.65)),url(" +image+ ")"}}>
              <div className="read-pin">
                <h1>{title}</h1>
                <p className="read-btn"><Link to = {page} style={{color:"#fff"}}>Learn More <FontAwesomeIcon icon={faCaretRight}/></Link></p>
              </div>
          </div>

        }                                  
      </SwiperSlide>
    )
  }
  return (
    <>
    {
      images.length > 0 ?
      <>
      <Swiper
        modules={[Navigation, Pagination, EffectCards, EffectCoverflow, Autoplay, Scrollbar, A11y, Thumbs, Controller]}
        thumbs={{ swiper: thumbsSwiper }}
        onSwiper={() => {
          // setFirstSwiper()
          setThumbsSwiper()

          // const loop = swiper.loopedSlides
          // console.log("loop:"+loop)
          // document.querySelector("#awardArticle" + loop + 1).style.opacity = 1
          // // if(loop > 1)
          //   document.querySelector("#awardArticle" + loop).style.opacity = 0
        }}
        controller={{ control: secondSwiper }}
        effect={'coverflow'}
        grabCursor={gallery === "awards" ?false:true}
        // onSwiper={swiper => console.log(swiper)}
        centeredSlides={true}
        spaceBetween={gallery === "awards" ? 175 : 5}
        navigation={gallery === "awards" ?false:true}
        autoplay={{delay:10000, disableOnInteraction:true}}
        loop={true}
        slidesPerView={window.screen.width < 800 ? 1 : gallery === "awards" ? 4 : gallery ? 3 : 1}
        coverflowEffect={
          {
            rotate:gallery === "awards" ? 10 : 40,
            stretch:0,
            depth:100,
            modifier:1,
            slideShadows:true
          }
        }
        pagination={{clickable:true}}
        scrollbar={{draggable:true}}
        // navigation={{
        //   nextEl:'.swiper-button-next',
        //   prevEl:'.swiper-button-prev',
        //   clickable:true
        // }}
        // modules={[EffectCoverflow, Pagination, Navigation]}
        // className="swiper_container"
       >

        {console.log(new_images)}

        {
          new_images.length > 0 ?
          new_images.map(({image,page,title,description},index) => runImages({image,page,title,description,index})) :
          images.map(({image,page,title,description},index) => runImages({image,page,title,description,index}))
        }

       </Swiper>
      </>
      :
      ""
    }
    </>
  );
};

export default Carousel;