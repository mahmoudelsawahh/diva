import dynamic from 'next/dynamic'

const ContactTitle = dynamic(() => import('../components/ContactPage/ContactTitle'), {
  ssr: true,
})
const FormWrapper = dynamic(() => import('../components/ContactPage/FormWrapper'), {
  ssr: true,
})
const InstagramBanner = dynamic(() => import('../components/InstagramBanner/InstagramBanner'), {
  ssr: true,
})

const Contact = () => {
  return (
      <>
          <section className='contact'>
            <ContactTitle/>
          </section>
          <section className='email-form'>
            <FormWrapper/>
          </section>
          <section>
            <InstagramBanner/>
          </section>
      </>
  )
}

export default Contact