import Image from 'next/image';
import Slider from 'react-slick';
import Link from 'next/link';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import Loading from '@/app/loading';
import { baseUrl } from '@/app/lib/baseUrl';
import { Slide,  Box, Container, Typography} from '@/app/lib/MuiSsr';

const SimilarCategoryTwo = ({data}) => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 5000,
        autoplaySpeed: 5000,
        cssEase: "linear",
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 5,
                infinite: true,
                dots: true
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
      console.log(data)
  return (
    <>

      <LazyLoadComponent>
      <Container maxWidth="xl" fixed sx={{border : '2px solid #eee', padding : '15px'}}>
            <Box>
                 <Typography variant='h1' sx={{fontSize : '25px', margin : '50px 0px', position : 'relative'}} className='gallery-title'>البومات اخري</Typography>
            </Box>
            <Slide right>
            <Slider {...settings} className=''>
              {data ? 
                data.map((item)=>{
                    return (
                        <Box sx={{ textAlign : 'center', margin : '0px 40px'}} key={item.id}>
                            <Image className='category-slider-photo' 
                            src={`${baseUrl}/images?id=${item.imageId}`}
                             alt={item.name} layout='fill'/>
                              <Link style={{textDecoration : 'underline', fontSize : '20px', textAlign : 'center'}}  
                              href={`/gallery/${item.id}/${item.name.replace(/\s+/g, '-')}`}> {item.name} </Link>
                       </Box>
                    )
                })

              : <Loading/>}
            </Slider>
            </Slide>
       </Container>
      </LazyLoadComponent>
    </>
  )
}

export default SimilarCategoryTwo