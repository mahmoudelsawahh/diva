import dynamic from 'next/dynamic'

const ContactTitle = dynamic(() => import('../components/ContactPage/ContactTitle'), {
  ssr: false,
})
const FormWrapper = dynamic(() => import('../components/ContactPage/FormWrapper'), {
  ssr: false,
})
const InstagramBanner = dynamic(() => import('../components/InstagramBanner/InstagramBanner'), {
  ssr: false,
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