'use client'
import {Box, Button, Typography } from '@/app/lib/MuiSsr';

const WhyUs = () => {
  return (
    <Box sx={{marginTop : {xs : '50px', md : '0px'}}}>
        <Typography variant='body2' sx={{color : '#E60263', fontSize : '20px', fontWeight : 'bold'}}>
           لماذا نحن ؟ 
        </Typography>
        <Typography variant='h2' sx={{fontSize : '3rem', position : 'relative', lineHeight : "75px", fontWeight : 'bold'}}  className='title-before'>
           من نحن  
        </Typography>
        <Typography sx={{margin : '25px 0px',fontWeight : 'bold'}} variant='h4'>مركز تجميل عرائس وميك اب Diva</Typography>
        <Typography variant='body2' sx={{lineHeight : '60px',fontWeight : 'bold' ,color : '#808080', letterSpacing : '1px',fontSize : '25px', marginBottom : "20px"}}  >  لقد ساعد ديفا العديد من النساء أن يتألقوا في اللحظات الخاصة في حياتهم، فنحن نريد أن نجعلك مذهلة في يومك. حيث أننا نقدم لكِ أكبر تشكيلة فساتين، كما نقدم لكِ مجموعة واسعة من الإستايلات، المقاسات، والألوان المختلفة بأسعار معقولة حتى تتمكني من الحصول على فستان أحلامك. كما أننا نقدم لكِ خدمة &quot; الميك أب أستوديو &quot; بادارة ميك اب ارتيست / مدام ديفا والتي تقوم بعمل ميك اب العرايس وفورمة الشعرلكي تطل باطلالة مميزة في يوم الزفاف &quot;.</Typography>
         <Button variant='contained' color='error' sx={{backgroundColor : '#E60263', padding : '10px 25px', fontSize : '1rem', ":hover" : {backgroundColor : '#E60263'}}}>اقرأ المزيد</Button>
    </Box>
  )
}

export default WhyUs