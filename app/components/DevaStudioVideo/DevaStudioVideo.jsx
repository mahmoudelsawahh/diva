"use client"
import Slider from "react-slick";
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import Image from 'next/image';
import bgDiva from "/public/divanice.com_imgs_video-background.webp"

import { Slide , Container, Typography} from '@/app/lib/MuiSsr';

const DevaStudioVideo = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          }
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };
  return (
    <LazyLoadComponent>
    <div style={{position : 'relative', height : "950px", clipPath: 'inset(0 0 0 0)',}} className='deva-studio'>
      <Image src={bgDiva} alt='bgDiva' style={{position : 'fixed'}} objectFit='cover' />
      <div className='overlay'>
      <Container maxWidth="xxl" fixed >
<LazyLoadComponent>
<Slide right>
<Typography variant='h1' sx={{margin : '40px 0px', textAlign : 'center', color : '#fff', fontSize : '45px', fontWeight : 'bold'}}>ديفا أتيليه وميك أب أستوديو</Typography>
</Slide>
</LazyLoadComponent>
<LazyLoadComponent>
<div className='deva-studio-video'>
<Slide left>
<Slider {...settings}>
  <div>
  <iframe style={{border : '10px solid #fff'}}
   className="main-frame" loading='lazy' src="https://www.youtube.com/embed/RySyL5xKN7A"></iframe>
 </div>
   <div>
  <iframe 
    style={{border : '10px solid #fff'}}
    className="main-frame" loading='lazy' src="https://www.youtube.com/embed/IaLkcwBOmOk"></iframe>        
  </div>
  <div>
  <iframe 
    style={{border : '10px solid #fff'}}
    className="main-frame" loading='lazy' src="https://www.youtube.com/embed/f5eQ9yZk3Vc"></iframe>        
  </div>
  <div>
  <iframe 
    style={{border : '10px solid #fff'}}
    className="main-frame" loading='lazy' src="https://www.youtube.com/embed/98YGdA4LVjU"></iframe>        
  </div>
</Slider>
</Slide>
</div>
</LazyLoadComponent>
</Container>
      </div>
    </div>
    </LazyLoadComponent>

  )
}

export default DevaStudioVideo