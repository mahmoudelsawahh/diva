import Category from '../components/Category/Category'
import { getCategoryData } from '../lib/DataFetching';



export default async function Gallery () {
  const CategoryData = await getCategoryData();

  return (
     <section>
      <Category CategoryData={CategoryData.data}/>
     </section>
  )
}

