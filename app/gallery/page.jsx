import dynamic from 'next/dynamic';
import { getCategoryData } from '../lib/DataFetching';
const Category = dynamic(() => import('../components/Category/Category'), {
  ssr: true,
})


export default async function Gallery () {
  const CategoryData = await getCategoryData();

  return (
     <section>
      <Category CategoryData={CategoryData.data}/>
     </section>
  )
}

