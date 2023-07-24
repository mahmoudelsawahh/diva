"use client"
import {  Container, Typography , Slide} from '@/app/lib/MuiSsr';
const ContactTitle = () => {
  return (
    <>
     <Container maxWidth="xxl" fixed sx={{textAlign : 'center'}}>
        <div className='contact-head'>
          <Slide bottom>
               <Typography variant='h4' sx={{fontWeight : 700, fontSize : '45px', lineHeight : '65px'}}>تواصل معنا</Typography>
                 <Typography variant='subtitle1' sx={{marginTop : '10px', color : '#808080', fontSize : '30px'}}>هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ</Typography>
          </Slide>
        </div>
    </Container>
    </>
  )
}

export default ContactTitle