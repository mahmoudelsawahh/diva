"use client"
import { createTheme, ThemeProvider } from '@mui/material/styles';
import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import {  Button, Grid , TextField} from '@/app/lib/MuiSsr';

const theme = createTheme({
  direction: 'rtl', // Both here and <body dir="rtl">
});
// Create rtl cache
const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});

export default function ContactForm() {
  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <div dir="rtl">
          <form>
            <Grid container spacing={5} sx={{width : {xs : '100%', lg: '90%'}}}>
               <Grid item xs={12} lg={6}>
                 <TextField type='email' id="standard-basic" label="البريد الألكتروني" variant="standard"/>
               </Grid>
               <Grid item xs={12} lg={6}>
                 <TextField type='text' id="standard-basic" label="الأسم" variant="standard" />
               </Grid>
               <Grid item xs={12}>
                 <TextField type='text' id="standard-basic" label="الموضوع" variant="standard" />
               </Grid>
               <Grid item xs={12}>
               <TextField  multiline rows={2} maxRows={4} variant='standard' label="الرسالة"/>
               </Grid>
            </Grid>
            <Button variant='contained' sx={{fontWeight : 700 , fontSize : '25px', width : '170px',
            backgroundColor : '#E60263', color : '#fff', margin : '40px 5px', ":hover" : {backgroundColor : '#E60263'}
            }}>ارسال</Button>
          </form>
        </div>
      </ThemeProvider>
    </CacheProvider>
  );
}