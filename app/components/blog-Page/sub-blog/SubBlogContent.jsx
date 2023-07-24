"use client"
import Image from 'next/image'
import { LazyLoadComponent } from 'react-lazy-load-image-component'
import Loading from '@/app/loading'
import { baseUrl } from '@/app/lib/baseUrl'
import { Slide , Box, Typography } from '@/app/lib/MuiSsr';

const SubBlogContent = ({data}) => {
  return (
         <LazyLoadComponent>
            {
               data ? 
            <Box>
               <Box sx={{display : 'flex', justifyContent : 'center'}}>
               <LazyLoadComponent>
                 <Box sx={{height : '400px', width : '100%',position : 'relative'}}>
              <Image src={`${baseUrl}/images?id=${data.imageId}`} layout='fill' alt='mainImg' style={{height : '100%'}}/>
               <Typography variant='h6' className='sub-blog-Image-title'>{data.name}</Typography>
              </Box>
               </LazyLoadComponent>
               </Box>
               <Slide bottom>
                    <Typography sx={{padding : '40px 0px', fontWeight : 'bold'}} variant='h4'>{data.name}</Typography>
               </Slide>
            <LazyLoadComponent>
               <Slide bottom>
                  <div className='api-blog-data' dangerouslySetInnerHTML={{__html: data.description}}/>
               </Slide>
            </LazyLoadComponent>
      </Box>
               : <Loading/>
            }
         </LazyLoadComponent>
  )
}

export default SubBlogContent