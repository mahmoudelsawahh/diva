"use client"
import ContactForm from './ContactForm'
import { Box, Container, Grid, Typography , Slide} from '@/app/lib/MuiSsr';

const FormWrapper = () => {
  return (
    <>
      <Container maxWidth="xxl" fixed>
        <Grid container rowSpacing={3}>
          <Grid item xs={12} lg={6}>
            <Slide right>
              <ContactForm />
            </Slide>
          </Grid>
          <Grid item xs={12} lg={6} >
            <Slide left>
              <Box sx={{ borderBottom: '1px solid #ddd', paddingBottom: '25px' }}>
                <Typography variant='h3' sx={{ color: '#E60263', fontSize: '30px', fontWeight: 'bold' }}>العنوان</Typography>
                <Typography variant='body1' sx={{ fontSize: '30px', color: '#808080', margin: '15px 0px' }}> شارع البحر - بجوار مستشفى 6 أكتوبر - أسفل مطعم كزا روزا </Typography>
              </Box>
              <Box sx={{ borderBottom: '1px solid #ddd', paddingBottom: '25px', margin: '30px 0px' }}>
                <Typography variant='h3' sx={{ color: '#E60263', fontSize: '30px', fontWeight: 'bold' }}>معلومات التواصل</Typography>
                <Typography variant='body1' sx={{ fontSize: '30px', color: '#808080', margin: '15px 0px' }}>info@deltawy.com</Typography>
                <Typography variant='body1' sx={{ fontSize: '30px', color: '#808080', margin: '15px 0px', direction: 'ltr', textAlign: 'end' }}>+20111 165 0556</Typography>

              </Box>
              <Box sx={{ borderBottom: '1px solid #ddd', paddingBottom: '25px', margin: '30px 0px' }}>
                <Typography variant='h3' sx={{ color: '#E60263', fontSize: '30px', fontWeight: 'bold' }}>ساعات العمل</Typography>
                <Typography variant='body1' sx={{ fontSize: '30px', color: '#808080', margin: '15px 0px' }}> يوميا من 12:00 م الي 01:00 ص </Typography>
                <Typography variant='body1' sx={{ fontSize: '30px', color: '#808080', margin: '15px 0px' }}>  يوم الجمعة من 03:00 م الي 01:00 ص </Typography>

              </Box>
            </Slide>
          </Grid>

        </Grid>
      </Container>
    </>
  )
}

export default FormWrapper