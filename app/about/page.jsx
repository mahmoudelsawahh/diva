import dynamic from 'next/dynamic'
 
const Service = dynamic(() => import('../components/Service/Service'), {
  ssr: false,
})

const About = () => {
  return (
    <>
        <section>
            <Service/>
        </section>
    </>
  )
}

export default About