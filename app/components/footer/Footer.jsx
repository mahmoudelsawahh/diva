"use client"
import Logo from '/public/divanice-logo.webp'
import Image from 'next/image'
import Link from 'next/link'
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DeltawyLogo from '/public/deltawy-logo.webp'
import { LazyLoadComponent } from 'react-lazy-load-image-component'
import { useRouter } from 'next/navigation'
import { Box, Container, Grid, IconButton, Typography} from '@/app/lib/MuiSsr';
import { useEffect , useState} from 'react';

const mainPage = [
  {
    id : 1,
    title : 'الرئيسية',
    slug : '/',
  },
  {
    id : 2,
    title : 'من نحن',
    slug : '/about' 
  },
  {
    id : 3,
    title : 'خدماتنا',
    slug : '/gallery' 
  },
  {
    id : 4,
    title : 'المقالات',
    slug : '/blog' 
  },
  {
    id : 5,
    title : 'اتصل بنا',
    slug : '/contact' 
  },
]

const Footer = () => {
  const [loadingComponent , setLoadingComponent] = useState(true);
  useEffect(()=>{
    setLoadingComponent(false)
  },[])

  const router = useRouter()
  return (
   <>
     {loadingComponent ? null:
      <LazyLoadComponent>
      <Box sx={{padding : '0px 20px'}}>
      <Grid container >
        <Grid item xs={12} xl={3} sx={{display : 'flex', flexDirection : 'column', justifyContent : 'center', alignItems : 'center'}}>
          <LazyLoadComponent>
             <Image src={Logo} onClick={()=> router.push('/')} alt='ديفا' width={250} style={{marginBottom : '20px'}} loading='lazy'/>
          <Typography variant='body1' sx={{color : '#808080', lineHeight : '40px', fontSize : '20px', textAlign : 'center'}}>
              بإدارة مدام ديفا يسمح لك ديفا بإظهار جمالك الخاص وإطلاق العنان لشخصيتك الفريدة بغض النظر عن عمرك عن طريق إستخدام فن المكياج المحترف. وهو أكثر من مجرد إستخدام منتجات ذات جودة عالية. تتميز منتجات &quot; ديفا &quot; بألوانها الثابتة والأجمل أنها مموجة أي تعطيكي ألوان جديدة ومميزة ولها لمعة مميزة جداً وناعمة جداً على البشرة . مهمتنا هي تشجيعك على إستكشاف جوانب في شخصيتك وجمالك بطرق مختلفة لم تكتشفيها من قبل. لدينا مجموعة كبيرة من الألوان والإستايلات لخلق تأثيرات فريدة من نوعها تبرز جمالك وتعكس شخصيتك.
        </Typography>
          </LazyLoadComponent>
        </Grid>
        <Grid item xs={12} xl={3} sx={{padding : '0px 40px'}}>
            <Typography className='footer-titles' variant='h5' sx={{fontSize : '26px', marginBottom : '40px',fontWeight : 'bold', textAlign : 'center', position : 'relative', marginTop : {xs : '30px', lg : '0'}}}>الصفحات  الرئيسية</Typography>
            {mainPage.map((item)=>{
              return (
                
                   <Box key={item.id}>
                      <LazyLoadComponent>
                        <ul>
                          <li>
                          <Typography variant='h1' sx={{margin : '25px 0px 25px 0px', fontSize : '30px', fontWeight : 70 , textAlign : 'center'}}>
                             <Link href={item.slug} style={{color : '#808080', fontWeight : 500}} >{item.title}</Link>
                          </Typography>
                          </li>
                        </ul>
                      </LazyLoadComponent>
                   </Box>
              
              )
            })}
        </Grid>
        <Grid item xs={12} xl={3} sx={{padding : '0px 40px'}}>
              <LazyLoadComponent>
                 <Typography className='footer-titles' variant='h5' sx={{fontSize : '26px', fontWeight : 'bold', textAlign : 'center', position : 'relative',  marginBottom : '40px', marginTop : {xs : '10px', lg : '0'}}}>الصفحات  الداخلية</Typography>
                   {mainPage.map((item)=>{
                return (
                <Box key={item.id}>
                        <ul>
                          <li>
                          <Typography variant='h1' sx={{margin : '25px 0px', fontSize : '30px', fontWeight : 70 , textAlign : 'center'}}>
                             <Link href={item.slug} style={{color : '#808080', fontWeight : 500}} >{item.title}</Link>
                          </Typography>
                          </li>
                        </ul>
                   </Box>
              
              )
            })}
              </LazyLoadComponent>
        </Grid>
        <Grid item xs={12} xl={3} >
        <LazyLoadComponent>
          <Typography className='footer-titles' variant='h5' sx={{fontSize : '26px', fontWeight : 'bold', textAlign : 'center', position : 'relative', marginBottom : '40px', marginTop : {xs : '10px', lg : '0'}}}>معلومات التواصل</Typography>
            <Box sx={{display : 'flex', alignItems : 'center', margin : '25px 0px', borderBottom : '1px solid #ddd', padding : '10px 0px'}}>
            <IconButton sx={{ color : '#E60263', borderRadius : 0}} size='large'>
                    <PhoneIcon/>
                </IconButton>
                        <Link href={'tel:01200001315'} style={{color : '#808080', fontSize : '25px'}} >01200001315</Link>
            </Box>
            <Box sx={{display : 'flex', alignItems : 'center', margin : '25px 0px', borderBottom : '1px solid #ddd', padding : '10px 0px'}}>
            <IconButton sx={{ color : '#E60263', borderRadius : 0}} size='large'>
                    <EmailIcon/>
                </IconButton>
                        <Link href={'https://divaniceatelier@gmail.com'} style={{color : '#808080', fontSize : '25px'}} >divaniceatelier@gmail.com</Link>
            </Box>  
            <Box sx={{display : 'flex', alignItems : 'center', margin : '25px 0px', borderBottom : '1px solid #ddd', padding : '10px 0px'}}>
                <IconButton sx={{ color : '#E60263', borderRadius : 0}} size='large'>
                    <LocationOnIcon/>
                </IconButton>
                        <Link href={''} style={{color : '#808080', fontSize : '20px'}} >
                        المحلة الكبرى شكري القوتلي اعلى فودافون
                        </Link>
            </Box>
        </LazyLoadComponent>
        </Grid>
      </Grid>
      </Box>
       <LazyLoadComponent>
        <Box sx={{backgroundColor : '#1B1B1B', textAlign : 'center', height : '120px', overflow : 'hidden',
                margin : {xs : '25px 0px', md: '50px 0px 0px 0px'},
      display : 'flex', justifyContent : 'center', alignItems : 'center'
      }}>
            <Container maxWidth="xxl" fixed>
              <Box sx={{display : 'flex', justifyContent : 'center', alignItems : 'center', margin : '30px 0px'}}>
              <Typography variant='h4' style={{color : '#fff', fontSize : '25px', marginLeft : '10px'}}>
                <Link style={{color : '#fff'}} href={'https://deltawy.com/'}> جميع الحقوق محفوظة , دلتاوي نت </Link>
              </Typography>
              <Image onClick={()=> router.push('https://deltawy.com/')} src={DeltawyLogo} alt='شركة برمجيات دلتاوي' width={150} height={150} loading='lazy'/>
              </Box>
            </Container>
      </Box>
      </LazyLoadComponent>
    </LazyLoadComponent>
     }
   </>
  )
}

export default Footer