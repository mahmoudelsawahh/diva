"use client"
import { Box } from '@/app/lib/MuiSsr';
import { InfinitySpin } from 'react-loader-spinner'

const Loading = () => {
  return (
    <Box sx={{width : '100%', backgroundColor : '#fff', height : '100vh', zIndex : 55555, display : 'flex', justifyContent : 'center', alignItems : 'center'}}>
      <InfinitySpin 
          width='200'
          color="#E60263"      />   

 </Box>
  )
}

export default Loading