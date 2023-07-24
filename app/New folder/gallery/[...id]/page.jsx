import { getCategoryDetail } from '@/app/lib/DataFetching'
import dynamic from 'next/dynamic'

const SubCategory = dynamic(() => import('@/app/components/Category/SubCategory/SubCategory'), {
    ssr: true,
  })

  export const metadata = {
    title: "اتيليه فساتين زفاف وافراح",
  
  }
  


  export default async function  SubCategoryPage ({params}) {
    const data = await getCategoryDetail(Number(params.id[0]))
    metadata.title = data.name
 
  return (
    <section style={{marginTop : '120px'}}>
      <SubCategory data={data}/>
    </section>
  )
}

