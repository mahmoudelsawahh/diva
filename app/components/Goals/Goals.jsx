"use client"
import RightGoals from './RightGoals'
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import { Fade , Reveal , Container, Grid, Typography} from '@/app/lib/MuiSsr';
import { useEffect, useState } from 'react';

const Goals = () => {
  const [loadingComponent , setLoadingComponent] = useState(true);
  useEffect(()=>{
    setLoadingComponent(false)
  },[])
  return (
     <>
      {loadingComponent ? null : 
        <LazyLoadComponent>
      <Container maxWidth="xxl" fixed>
        <Grid container>
          <LazyLoadComponent>
          <Grid item xs={12} md ={6} sx={{display : {xs : 'block', md : 'flex'}, justifyContent : 'center',  flexDirection : 'column'}}>
             <Fade left>
             <Typography variant='h1' sx={{color : '#E60263', fontWeight : 700, fontSize : '18px', marginBottom : '5px', width : '100%', }}>مايهمنا ان نسعي نحو الأفضل دائما</Typography>
            <Typography variant='h1' sx={{position : 'relative', paddingBottom : '20px', fontWeight : 700, fontSize : '55px', lineHeight : '70px'}} className='goals-title'>اهداف ديفا التي تسعي الي تحقيقها</Typography>
             </Fade>
          </Grid>
          </LazyLoadComponent>
           <LazyLoadComponent>
           <Grid item xs={12} md={6}>
             <Fade right>
             <RightGoals/>
             </Fade>
          </Grid>
           </LazyLoadComponent>
        </Grid>
         <Reveal >
         <Typography variant='h4' sx={{textAlign : 'center' , fontWeight : 400 , lineHeight : '60px'}}>
             بإدارة مدام ديفا يسمح لك ديفا بإظهار جمالك الخاص وإطلاق العنان لشخصيتك الفريدة بغض النظر عن عمرك عن طريق إستخدام فن المكياج المحترف. وهو أكثر من مجرد إستخدام منتجات ذات جودة عالية. تتميز منتجات &quot; ديفا &quot; بألوانها الثابتة والأجمل أنها مموجة أي تعطيكي ألوان جديدة ومميزة ولها لمعة مميزة جداً وناعمة جداً على البشرة . مهمتنا هي تشجيعك على إستكشاف جوانب في شخصيتك وجمالك بطرق مختلفة لم تكتشفيها من قبل. لدينا مجموعة كبيرة من الألوان والإستايلات لخلق تأثيرات فريدة من نوعها تبرز جمالك وتعكس شخصيتك.
         </Typography>
         <Typography variant='h4' sx={{textAlign : 'center' , marginTop : '25px' , fontWeight : 600}}>
           هدفنا الأول والأخير هو جعلك تبرزين جمالك بوضع المكياج الذي يليق بكِ.
         </Typography>
         </Reveal>
    </Container>
     </LazyLoadComponent>
      }
     </>
  )
}

export default Goals