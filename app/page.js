import dynamic from 'next/dynamic'

// import { getArticleData, getCategoryData } from './lib/DataFetching';

const AboutUs = dynamic(() => import('./components/home-page/AboutUs'), {
  ssr: true,
})
const Service = dynamic(() => import('./components/Service/Service'), {
  ssr: true,
})
const Goals = dynamic(() => import('./components/Goals/Goals'), {
  ssr: true,
})
// const LatestNews = dynamic(() => import('./components/latestNews/LatestNews'), {
//   ssr: true,
// })
// const InstagramBanner = dynamic(() => import('./components/InstagramBanner/InstagramBanner'), {
//   ssr: true,
// })
const HomeCarousel = dynamic(() => import('./components/HomeCarousel/HomeCarousel'), {
  ssr: true,
})

// const DevaStudioVideo = dynamic(() => import('./components/DevaStudioVideo/DevaStudioVideo'), {
//   ssr: true,
// })
// const Category = dynamic(() => import('./components/Category/Category'), {
//   ssr: true,
// })
// const Distinguishes = dynamic(() => import('./components/Distinguishes/Distinguishes'), {
//   ssr: true,
// })


export const metadata ={
  title: "اتيليه فساتين زفاف وافراح",
}


export default async function Home () {
  // const data = await getArticleData();
  // const CategoryData = await getCategoryData();


   
  return (
        <>
                    {/* <HomeCarousel/> */}
               <section>
                  <AboutUs/>
                </section>
               <section >
                  <Service/>
                </section>
                <section>
                  <Goals/>
                </section>
        </>
  )
}

