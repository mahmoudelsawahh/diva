"use client"
import NewsCarsoul from './NewsCarsoul'
import { LazyLoadComponent } from 'react-lazy-load-image-component'
import {Slide, Container, Typography, Box } from '@/app/lib/MuiSsr';

const LatestNews = ({data}) => {
  return (
   <LazyLoadComponent>
   <Box component={'section'} sx={{height : '130vh', overflow : 'hidden'}} className='services'>
      <div className='top-wave'></div>
      <div className='overlay'>
         <div className='category-content'> 
         <Container maxWidth="xxl" fixed>
<LazyLoadComponent>
          <Slide left>
             <Typography variant='subtitle1' sx={{textAlign : 'center', color : '#E60263', fontSize : '20px', fontWeight : 'bold'}}>احدث اخبار ديفا</Typography>
          </Slide>
          <Slide right>
              <Typography variant='h1' sx={{textAlign : 'center', fontSize : '40px', fontWeight : 'bold', position : 'relative'}} className='category-title'>احدث اخبار الموضة والجمال</Typography>
          </Slide>
</LazyLoadComponent>
 <Box sx={{margin : '80px 0px'}}>
    <LazyLoadComponent>
       <Slide left>
          <NewsCarsoul data={data}/>
       </Slide>
    </LazyLoadComponent>
 </Box>
</Container>
         </div>
         <div className='bottom-wav'></div>
      </div>
    </Box>
   </LazyLoadComponent>
  )
}

export default LatestNews