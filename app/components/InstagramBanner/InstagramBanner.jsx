"use client"
import { useRouter } from 'next/navigation'
import { LazyLoadComponent } from 'react-lazy-load-image-component'
import {Slide, Button, Container, Typography } from '@/app/lib/MuiSsr';

const InstagramBanner = () => {
  const router = useRouter()
  return (
   <LazyLoadComponent>
     <Container maxWidth="xxl" fixed>
         <Slide right>
             <Typography variant='h1' sx={{fontSize : '50px', fontWeight : 'bold', margin : '40px 0px', lineHeight : '90px'}}>تابع احدث الصور والعروض علي صفحتنا علي <br/> Instagram </Typography>
         </Slide>
        <Slide left>
            <Button onClick={()=> router.push('https://www.instagram.com/diva_atelier100/')} variant='contained' sx={{backgroundColor : "#E60263", color : '#fff', fontWeight : 'bold', fontSize : '25px', ":hover" : {backgroundColor : '#E60263'}}}>الانتقال الي الصفحة</Button>
        </Slide>
    </Container>
   </LazyLoadComponent>
  )
}

export default InstagramBanner