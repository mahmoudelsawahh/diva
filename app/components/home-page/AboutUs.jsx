"use client"
import WhyUs from './whyUs'
import AboutIframe from './AboutIframe'
import { LazyLoadComponent } from 'react-lazy-load-image-component'
import { Fade, Container, Grid } from '@/app/lib/MuiSsr';
import { useEffect, useState } from 'react';

const AboutUs = () => {
  const [loadingComponent , setLoadingComponent] = useState(true);
  useEffect(()=>{
    setLoadingComponent(false)
  },[])
  return (
   <>
    {loadingComponent ? null :
      <LazyLoadComponent>
     <Container maxWidth="xxl" fixed>
        <Grid container rowSpacing={0} sx={{flexDirection : {xs : 'column-reverse', md : 'row'}}}>
            <Grid item xs={12} md={6} >
                <LazyLoadComponent>
                <Fade left>
                    <WhyUs/>
                 </Fade>
                </LazyLoadComponent>
            </Grid>
            <Grid item xs={12} md={6}>
              <LazyLoadComponent>
              <Fade right>
                <AboutIframe/>
              </Fade>
              </LazyLoadComponent>
            </Grid> 
        </Grid>
    </Container>
   </LazyLoadComponent>
     }
   </>
  )
}

export default AboutUs