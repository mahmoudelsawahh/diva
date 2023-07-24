import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import { useRouter } from 'next/navigation';
import { Box, Button, Typography } from '@/app/lib/MuiSsr';


const AboutIframe = () => {
  const router = useRouter();
  return (
    <Box sx={{display : 'flex', flexDirection : 'column' , alignItems : 'center', justifyContent : 'center'}}>
        <Typography variant='h2' sx={{color : '#E60263', fontSize : '2rem', fontWeight : 500}}>الصفحة الرسمية لميك اب واتيليه ديفا</Typography>
        <Button onClick={()=> router.push('https://www.facebook.com/Divaniicce?ref=embed_page')} endIcon={<KeyboardDoubleArrowDownIcon sx={{marginRight : '5px'}}/>} variant='outlined' color='secondary' sx={{borderColor : '#E60263', color : '#333', marginTop : '30px', fontSize : '18px', fontWeight : 500}}>
        اضغط هنا للدخول على الصفحة
        </Button>
        {/* <Suspense fallback={<Loading/>}>
        <iframe  src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FDivaniicce%3Fref%3Dembed_page&tabs=timeline&width=350&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="350" height="500" style={{border : 'none', overflow : 'hidden'}} scrolling="no" allowFullScreen={true} allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" loading='lazy'></iframe>
        </Suspense> */}
        
    </Box>
  )
}

export default AboutIframe