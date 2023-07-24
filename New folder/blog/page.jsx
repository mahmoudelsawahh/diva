import dynamic from 'next/dynamic'
import { getArticleData } from '../lib/DataFetching';
 
const BlogTitle = dynamic(() => import('../components/blog-Page/BlogTitle'), {
  ssr: true,
})
const SubBlog = dynamic(() => import('../components/blog-Page/SubBlog'), {
  ssr: true,
})
const InstagramBanner = dynamic(() => import('../components/InstagramBanner/InstagramBanner'), {
  ssr: true,
})
export default async function Blog (){
  const data = await getArticleData();

  return (
   <>
     <section className='blog-title'>
      <BlogTitle/>
    </section>
    <section className='sub-blog'>
       <SubBlog data={data.data}/>
    </section>
    <section className='instagram-banner'>
      <InstagramBanner/>
    </section>
   </>
  )
}

