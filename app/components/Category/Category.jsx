"use client"
import React, { useState } from 'react'
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import Image from 'next/image';
import Link from 'next/link';
import Loading from '@/app/loading';
import { baseUrl } from '@/app/lib/baseUrl';
import { useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { Box, Button, Container, Grid, Typography , Slide} from '@/app/lib/MuiSsr';
const Category = ({CategoryData}) => {
  const router = useRouter()
    const [getId , setGetId] = useState(3);
    const weddingData =  CategoryData.filter((item)=> item.catId === 1)
    const celebritiesData = CategoryData.filter((item)=> item.catId === 2)
    const engagementData = CategoryData.filter((item)=> item.catId === 3)
    const [filterData , setFilterData] = useState(engagementData);
    const data = [
        {
            id : 3,
            name : "خطوبة"
        },

        {
            id : 2,
            name : 'مشاهير'
        },
        {
            id : 1,
            name : "زفاف"
        },
       
    ]

    useEffect(()=>{
        {getId === 1 ? setFilterData(weddingData) : getId === 2 ?  setFilterData(celebritiesData) : setFilterData(engagementData)} 
     },[getId, celebritiesData , engagementData , weddingData])

     const slug = usePathname();

     const resultData = slug === "/" ? filterData.slice(0,6) : filterData

    return (
    <LazyLoadComponent>
    <Box sx={{ overflow : 'hidden'}} className='services'>
       <div className='top-wave'></div>
       <div className='overlay'></div>
        <Box sx={{position : 'relative'}}>
        <Box className='category-content' sx={{height : '100%', margin : '80px 0px'}}> 
          <Container maxWidth="xxl" fixed>
 <Slide left>
    <Typography variant='subtitle1' sx={{textAlign : 'center', color : '#E60263', fontSize : '20px', fontWeight : 'bold'}}>المعرض</Typography>
 </Slide>
 <Slide right>
 <Typography  variant='h1' sx={{textAlign : 'center', fontSize : '40px', fontWeight : 'bold', position : 'relative'}} className='category-title'>من اهم مايميزنا هو معرضنا</Typography>

 </Slide>
  <Slide right>
  <Box sx={{display : 'flex', justifyContent : 'center', alignItems : 'center', margin : '70px 0px'}} >
     {data.map((item)=>{
         return (
             <Button onClick={()=> setGetId(item.id)} key={item.id} variant='contained' 
             sx={{width : '200px',  fontSize : '20px', fontWeight : 'bold', ":hover" : {backgroundColor : '#E60263', color : '#fff'}, margin : '0px 10px'}} 
              className={getId === item.id ? "active" : "no-active"}
             >
                 {item.name}
             </Button>
         )
     })}
  </Box>
  </Slide>
         <LazyLoadComponent>
      <Grid container spacing={3}>
         {data ? 
            resultData.map((item)=>{
            return (
              <Grid item xs={12} lg={4} key={item.id}>
              <LazyLoadComponent>
           <Slide bottom>
          <Box sx={{display : 'flex', justifyContent : 'space-between', alignItems : 'baseline', flexDirection : 'column', position : 'relative', height : '380px'}}>
          <Image onClick={()=> router.push(`/gallery/${item.id}/${item.name.replace(/\s+/g, '-')}`)}  className='category-list' src={`${baseUrl}/images?id=${item.imageId}`} fill alt={item.name} style={{ border : '10px solid #fff', minHeight : '350px'}} loading='lazy' />
          </Box>
                <Box>
                <Typography variant='body1' sx={{ textAlign : 'center', width : '100%' ,fontSize : '20px', fontWeight : 'bold', padding : '20px'}}>
              <Link className='category-link' href={`/gallery/${item.id}/${item.name.replace(/\s+/g, '-')}`}>{item.name}</Link>
            </Typography>
                </Box>
              </Slide>
             </LazyLoadComponent>
            </Grid>
            )
          })
          
         : <Loading/>}
      </Grid>
               <Box sx={{display : slug === "/" ? "flex": "none", flexDirection : 'column', alignItems : 'center', margin : '50px 0px'}}>
                 <Button 
                 onClick={()=> router.push('/gallery')} variant='contained' 
                    sx={{width : '200px',  fontSize : '20px', fontWeight : 'bold', backgroundColor : '#E60263', color : '#fff', margin : '0px 10px',
                    }} 
                      >
                 المزيد
             </Button>
               </Box>
         </LazyLoadComponent>
</Container>
          </Box>
        </Box>
       <div className='bottom-wav'></div>
     </Box>
  </LazyLoadComponent>
  )
}

export default Category