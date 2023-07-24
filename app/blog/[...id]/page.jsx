import dynamic from 'next/dynamic'
import { Container, Grid } from '../../lib/MuiSsr' 
import {getBlogData } from '@/app/lib/DataFetching'

const SimilarBlog = dynamic(() => import('@/app/components/blog-Page/sub-blog/SimilarBlog'), {
  ssr: true,
})
 
const SubBlogContent = dynamic(() => import('@/app/components/blog-Page/sub-blog/SubBlogContent'), {
  ssr: true,
})
 
const SubBlogTitle = dynamic(() => import('@/app/components/blog-Page/sub-blog/SubBlogTitle'), {
  ssr: true,
})




export const metadata = {
  title: "اتيليه فساتين زفاف وافراح",
}




export default async function  BlogId ({params}) {

  const data = await getBlogData(Number(params.id[0]))
  metadata.title = data.name
 
  return (
    <section className='sub-blog'>  
    <Container maxWidth="xl" fixed >
      <Grid container sx={{marginTop : '140px', display : 'flex', flexDirection : {xs : 'column-reverse', lg : 'row'}}}>
         <Grid item xs={12} lg={5}>
               <SimilarBlog data={data}/>
         </Grid>
         <Grid item xs={12} lg={7} sx={{display : 'flex', alignItems : 'center', flexDirection : 'column'}}>
                          <SubBlogTitle/>
               <section style={{width : '100%'}}>
                <SubBlogContent data={data}/>
              </section>
         </Grid>
      </Grid>
    </Container>
  </section>
  )
}


