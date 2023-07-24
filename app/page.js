import dynamic from 'next/dynamic'
import { getArticleData, getCategoryData } from './lib/DataFetching';

const AboutUs = dynamic(() => import('./components/home-page/AboutUs'), {
  ssr: false,
})
const Service = dynamic(() => import('./components/Service/Service'), {
  ssr: false,
})
const Goals = dynamic(() => import('./components/Goals/Goals'), {
  ssr: false,
})
const LatestNews = dynamic(() => import('./components/latestNews/LatestNews'), {
  ssr: false,
})
const InstagramBanner = dynamic(() => import('./components/InstagramBanner/InstagramBanner'), {
  ssr: false,
})
const HomeCarousel = dynamic(() => import('./components/HomeCarousel/HomeCarousel'), {
  ssr: false,
})

// const DevaStudioVideo = dynamic(() => import('./components/DevaStudioVideo/DevaStudioVideo'), {
//   ssr: false,
// })
const Category = dynamic(() => import('./components/Category/Category'), {
  ssr: false,
})
const Distinguishes = dynamic(() => import('./components/Distinguishes/Distinguishes'), {
  ssr: false,
})





export default async function Home () {
  const data = await getArticleData();
  const CategoryData = await getCategoryData();

   
  return (
         <>
              <HomeCarousel/>
               <section  className='about-us'>
                <AboutUs/>
            </section>
             <section >
               <Service/>
             </section>
             <section >
               <Goals/>
            </section>
            {/* <section>
               <DevaStudioVideo/>
            </section> */}
            <section>
              <Category CategoryData={CategoryData.data}/>
            </section>
            <section>
              <Distinguishes/> 
            </section>
           <section>
            <LatestNews data={data}/>
           </section>
            <section className='instagram-banner'>
              <InstagramBanner/>
            </section>
         </>     
  )
}

