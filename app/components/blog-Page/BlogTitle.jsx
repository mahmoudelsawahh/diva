"use client"
import { LazyLoadComponent } from 'react-lazy-load-image-component'
import { Slide , Typography , Container} from '@/app/lib/MuiSsr';

const BlogTitle = () => {
  return (
   <LazyLoadComponent>
     <Container maxWidth="xxl" fixed>
        <Slide bottom>
            <Typography variant='subtitle1' sx={{textAlign : 'center', color : '#E60263', fontSize : '20px', fontWeight : 'bold'}}>احدث اخبار ديفا</Typography>
            <Typography variant='h1' sx={{textAlign : 'center', fontSize : '40px', fontWeight : 'bold', position : 'relative'}} className='category-title'>احدث اخبار الموضة والجمال</Typography>
        </Slide>
    </Container>
   </LazyLoadComponent>
  )
}

export default BlogTitle