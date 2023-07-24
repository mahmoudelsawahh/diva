import dynamic from 'next/dynamic'
import { getArticleData } from '../lib/DataFetching';
 
const BlogTitle = dynamic(() => import('../components/blog-Page/BlogTitle'), {
  ssr: false,
})
const SubBlog = dynamic(() => import('../components/blog-Page/SubBlog'), {
  ssr: false,
})
const InstagramBanner = dynamic(() => import('../components/InstagramBanner/InstagramBanner'), {
  ssr: false,
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

