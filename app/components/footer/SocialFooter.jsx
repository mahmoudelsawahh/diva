"use client"
import { Box, IconButton } from '@mui/material'
import PhoneIcon from '@mui/icons-material/Phone';
import Image from 'next/image';
import massengerLogo from '/public/messenger.png.png'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import { useRouter } from 'next/navigation';

const SocialFooter = () => {
  const router = useRouter()
  return (
    <LazyLoadComponent>
      <Box sx={{display : {xs : 'none', md : 'block'}}}>
         <ul style={{position : 'fixed', right : '20px', bottom : 0, paddingBottom : '20px', zIndex : 454545454545, marginBottom : '1rem'}}>
            <li style={{listStyle : 'none', marginBottom : '10px'}}>
                <LazyLoadComponent>
                <IconButton type='button' title='btn-phoneNumber' onClick={()=> router.push('tel:01200001315')}>
                    <PhoneIcon 
                     sx={{fontSize : '50px', color : '#fff', borderRadius : '50%',
                      textAlign : 'center', boxShadow : '2px 2px 3px #999', height : '60px',
                       width : '60px', lineHeight : '50px', backgroundColor : '#379d00' ,border : '1px solid #379d00', padding : '10px', 
                       }}

                       />
                </IconButton>
                </LazyLoadComponent>
            </li>
            <li style={{listStyle : 'none', marginBottom : '10px'}}>
                <LazyLoadComponent>
                <IconButton type='button' title='btn-whatsapp' onClick={()=> router.push('https://wa.me/+201200001315')}>
                    <WhatsAppIcon
                     sx={{fontSize : '50px', color : '#fff', borderRadius : '50%',
                      textAlign : 'center', boxShadow : '2px 2px 3px #999', height : '60px',
                       width : '60px', lineHeight : '50px', backgroundColor : '#379d00' ,border : '1px solid #379d00', padding : '10px'
                       }}

                       />
                </IconButton>
                </LazyLoadComponent>
            </li>
            <li style={{listStyle : 'none', marginBottom : '10px'}}>
                <LazyLoadComponent>
                <IconButton type='button' title='btn-massenger' onClick={()=> router.push('https://www.messenger.com/t/Divaniicce/')}>
                    <Image  src={massengerLogo} alt='massengerLogo' loading='lazy'
                    style={{fontSize : '50px', color : '#fff', borderRadius : '50%',
                      textAlign : 'center', boxShadow : '2px 2px 3px #999', height : '60px',
                       width : '60px', lineHeight : '50px', backgroundColor : '#007bff' ,border : '1px solid #007bff', padding : '10px'}}
                    />
                </IconButton>
                </LazyLoadComponent>
            </li>
          </ul>
        </Box>
        <Box sx={{display : {xs : 'block', md : 'none'}}}>

        <Box sx={{position : 'fixed' , width : '100%', zIndex : 1, bottom : 0, backgroundColor : '#ddd', display : 'flex', justifyContent : 'space-between', alignItems : 'center'}}>
             <Box onClick={()=> router.push('https://www.messenger.com/t/Divaniicce/')} sx={{backgroundColor : '#007bff', width : '100%', textAlign : 'center', height : '100%',  padding : '4px 0px'}}>
                <Image  src={massengerLogo} alt='الصفحة الرسمية لميك اب واتيليه ديفا'  loading='lazy'
                 style={{color : '#fff',width : '24px', height : '24px', fontSize : '1.5rem'}}
                />
            </Box>
            <Box  onClick={()=> router.push('tel:01200001315')} sx={{backgroundColor : '#379d00', width : '100%', textAlign : 'center', padding : '4px 0px'}}>
            <PhoneIcon sx={{color : '#fff', fontSize : '24px'}}/>
            </Box>
            <Box onClick={()=> router.push('https://wa.me/+201200001315')} sx={{backgroundColor : 'rgb(37, 211, 102)', width : '100%', textAlign : 'center',  padding : '4px 0px'}}>
                <WhatsAppIcon sx={{color : '#fff', fontSize : '24px'}}/>
            </Box>
        </Box>
        </Box>
    </LazyLoadComponent>
  )
}

export default SocialFooter