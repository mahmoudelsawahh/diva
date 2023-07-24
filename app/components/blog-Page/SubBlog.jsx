"use client"
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import { baseUrl } from '@/app/lib/baseUrl';
import Loading from '@/app/loading';
import { Slide , Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, Grid} from '@/app/lib/MuiSsr';

const SubBlog = ({data}) => {
  const router = useRouter();
  return (
      <LazyLoadComponent>
          <Container maxWidth={'xxl'} fixed>
         <Grid container spacing={3} >
         {data ?
          data.map((item)=>{
            return (
      <Grid item xs={12} md={6} lg={4} key={item.id}>
            <LazyLoadComponent>
            <Slide bottom>
              <Card onClick={()=> router.push(`/blog/${item.id}/${item.name.split(' ').join('-')}`)}>
                 <CardActionArea>
                     <CardMedia >
                         <Image src={`${baseUrl}/images?id=${item.imageId}`} width={350} height={350} alt="" style={{ objectFit: 'cover', width : "100%" }}/>
                 </CardMedia>
                 <CardContent sx={{height : '300px', overflow : 'hidden', margin : '5px 0px'}}>
                  <div className='api-blog-data' dangerouslySetInnerHTML={{__html: item.description}}/>
                 </CardContent>
               </CardActionArea>
                  <CardActions sx={{margin : '0px 10px'}}>
                      <Button size="large" sx={{backgroundColor : '#555555', color : '#fff', fontWeight : 'bold', padding : '10px 25px', ":hover" : {backgroundColor : '#555555'}}}>اقرأ المزيد</Button> 
                </CardActions>
              </Card>
            </Slide>
            </LazyLoadComponent>
          </Grid>         
            )
          })
          : <Loading/>}
   
         </Grid>
        </Container>
      </LazyLoadComponent>
  )
}

export default SubBlog