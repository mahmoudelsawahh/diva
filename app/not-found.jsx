"use client"
import Link from 'next/link'
import { Box } from '@/app/lib/MuiSsr';

const NotFound = () => {
  return (
    <Box sx={{width : '100%', backgroundColor : '#fff', height : '100vh', zIndex : 55555, display : 'flex', justifyContent : 'center', alignItems : 'center'}}>
        <Link href={'/'} style={{fontSize : '25px', fontWeight : 'bold', color : 'blue'}}>الصفحة غير موجوده للذهاب الي الصفحة الرئيسية اضغط هنا</Link>
    </Box>
  )
}

export default NotFound