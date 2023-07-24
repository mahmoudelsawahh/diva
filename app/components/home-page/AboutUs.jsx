"use client"
import WhyUs from './whyUs'
import AboutIframe from './AboutIframe'
import { LazyLoadComponent } from 'react-lazy-load-image-component'
import { Fade, Container, Grid } from '@/app/lib/MuiSsr';

const AboutUs = () => {
  return (
     <Container maxWidth="xxl" fixed>
        <Grid container rowSpacing={0} sx={{flexDirection : {xs : 'column-reverse', md : 'row'}}}>
            <Grid item xs={12} md={6} >
                <Fade left>
                    <WhyUs/>
                 </Fade>
            </Grid>
            <Grid item xs={12} md={6}>
              <Fade right>
                <AboutIframe/>
              </Fade>
            </Grid> 
        </Grid>
    </Container>
  )
}

export default AboutUs