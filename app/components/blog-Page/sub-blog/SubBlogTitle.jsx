"use client"
import { Typography } from '@mui/material'
import { LazyLoadComponent } from 'react-lazy-load-image-component'
import { Slide  } from '@/app/lib/MuiSsr';

const SubBlogTitle = () => {
  return (
     <LazyLoadComponent>
       <Slide left>
            <Typography variant='h1' sx={{textAlign : 'center', fontSize : '40px', fontWeight : 'bold', position : 'relative'}} className='category-title'>احدث اخبار الموضة والجمال</Typography>

       </Slide>
     </LazyLoadComponent>
  )
}

export default SubBlogTitle