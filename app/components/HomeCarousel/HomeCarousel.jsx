"use client"
import Slider from "react-slick";
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import {Fade, Typography } from '@/app/lib/MuiSsr';
const HomeCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 3000,
        autoplaySpeed: 6000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        lazyLoad: true

      };
  return (
     <LazyLoadComponent>
          <Slider {...settings}>
            <LazyLoadComponent>
            <div style={{width : '100%', height : '100vh', objectFit : 'cover' }} className='carsoul-bg1' >
             <div className="center">
                  <LazyLoadComponent>
                  <Fade left>
                    <Typography variant='h1' sx={{fontSize : '22px', fontWeight : 'bold', textAlign : 'center'}}>أتيليه وميك أب أستوديو ديفا</Typography>
			        <Typography sx={{fontSize : {xs : '2.3rem', md : '3.3rem'} , fontWeight : 'bold', marginBottom : '12px', textAlign : 'center'}}>أكبر أتيليه وميك أب ستوديو في المحلة الكبرى</Typography>
			        <Typography variant='body1' sx={{fontSize : {xs : '20ox', md : '25px'}, textAlign : 'center'}}>مرحباً بكم في &quot; ديفا &quot; أتيليه وميك أب أستوديو</Typography>
                 </Fade>
                  </LazyLoadComponent>
			</div>
            </div>
            </LazyLoadComponent>
            <LazyLoadComponent>
            <div style={{width : '100%', height : '100vh', objectFit : 'cover' }} className='carsoul-bg2'>
            <div className="center">
                 <LazyLoadComponent>
                 <Fade left>
			         <Typography sx={{fontSize : {xs : '2.3rem', md : '3.5rem'} , fontWeight : 'bold', marginBottom : '12px', textAlign : 'center'}}>نحن فخورون بتقديم خدماتنا للنساء في المحلة الكبرى بشكل خاص وجمهورية مصر العربية بشكل عام</Typography>
                 </Fade>
                 </LazyLoadComponent>
			</div>
            </div>
            </LazyLoadComponent>
        </Slider>
     </LazyLoadComponent>
      )
}

export default HomeCarousel