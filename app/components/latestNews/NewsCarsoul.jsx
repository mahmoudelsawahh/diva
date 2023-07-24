import Slider from "react-slick";
import Image from 'next/image';
import { baseUrl } from '@/app/lib/baseUrl';
import Loading from '@/app/loading';
import { useRouter } from "next/navigation";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import {Card, CardContent, CardMedia, Button, CardActionArea, CardActions } from '@/app/lib/MuiSsr';


const NewsCarsoul = ({data}) => {
  const router = useRouter()
  const dataItems = data.data
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
  return (
    <>
  <LazyLoadComponent >
        <Slider {...settings} className='mainSlider'>
        {data ? 
          dataItems.map((item)=>{
            return (
            <Card  key={item.id} onClick={()=> router.push(`/blog/${item.name.replace(/\s+/g, '-')}?id=${item.id}`)}>
                <CardActionArea>
                <CardMedia >
                    <Image  src={`${baseUrl}/images?id=${item.imageId}`} height={350} width={350} alt={item.name} style={{ objectFit: 'cover', width : "100%" }} loading='lazy' />
                </CardMedia>
            <CardContent sx={{height : '300px', overflow : 'hidden', margin : '5px 0px'}}>
            <div className='api-blog-data' dangerouslySetInnerHTML={{__html: item.description}}/>
            </CardContent>
            </CardActionArea>
            <CardActions sx={{display : 'flex', justifyContent : 'center', padding : '20px 0px'}}>
            <Button size="large" sx={{backgroundColor : '#555555', color : '#fff', fontWeight : 'bold', padding : '10px 25px', ":hover" : {backgroundColor : '#555555'}}}>اقرأ المزيد</Button> 
            </CardActions>
            </Card>
            )
        })
        : <Loading/>}
      </Slider>
      </LazyLoadComponent>
    </>
  )
}

export default NewsCarsoul