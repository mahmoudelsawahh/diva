"use client"
import './globals.css'
import './globals2.css'
import {Cairo } from 'next/font/google'
import MuiTheme from './lib/muiThem'
import { Suspense, useEffect, useState } from 'react'
import Loading from './loading'
import SocialFooter from './components/footer/SocialFooter'
import DrawerAppBar from './components/navbar/NavBar'


const cairo = Cairo({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
})



export default function RootLayout({ children }) {
  const [data , setData] = useState(true);
  useEffect(()=>{
    setData(false)
  },[])
  return (
    <html lang="ar">
     <head>
         <meta name="geo.placename" content="Egypt" />
         <meta name="geo.position" content="30.9685798;31.1664157" />
          <meta name="geo.region" content="egypt" />
          <meta name="black"/>
          <meta name="ICBM" content="30.9685798, 31.1664157" />
          <meta name="robots" content="index,follow" />
          <meta name="keywords" content="    " />
          <meta author="شركة برمجيات دلتاوي"/>
          <meta name="description" content="    اتيليه فساتين زفاف و  افراح وسواريه وخطوبة وحنة  و تفصيل و  بيع وايجار  مستوردة تركي وفرنساوي موديلات لعام 2018  احدث صيحات الموضة 
            يوجد فساتين زفاف وسواريه وسهرة للمحجبات وكذلك فساتين سواريه وسهرة وزفاف قصيرة بناتي  
            ميك اب ديفا على يد خبيرة التجميل ميك اب ارتيست ديفا 
            جميع المواد المستخدمة في التجميل اوريجينال و براندات عالمية مثل ماك وانستازيا وغيرها
            يوجد  ماكياج زفاف و خطوبة وسواريه وسهرة وحنة وبروتين وتنظيف وعناية البشرة وكيراتين 
            يوجد احدث لفات الطرح لعام 2018 للمحجبات  وشنيوهات الشعر كما يوجد ميك اب خفيف ويومي و يغير الشكل و يكبر ويصغر العيون 
            احدث رسومات العيون لعام 2018   " />
        <meta property="og:title" content="اتيليه فساتين زفاف وافراح" />
        <meta property="og:url" rel="canonical" content="https://divanice.com" />
        <meta property="og:image" content="https://divanice.com/images?id=81" />
        <meta property="og:locale" content="ar_AR" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="
        اتيليه فساتين زفاف و  افراح وسواريه وخطوبة وحنة  و تفصيل و  بيع وايجار  مستوردة تركي وفرنساوي موديلات لعام 2018  احدث صيحات الموضة 
      يوجد فساتين زفاف وسواريه وسهرة للمحجبات وكذلك فساتين سواريه وسهرة وزفاف قصيرة بناتي  
      ميك اب ديفا على يد خبيرة التجميل ميك اب ارتيست ديفا 
      جميع المواد المستخدمة في التجميل اوريجينال و براندات عالمية مثل ماك وانستازيا وغيرها
      يوجد  ماكياج زفاف و خطوبة وسواريه وسهرة وحنة وبروتين وتنظيف وعناية البشرة وكيراتين 
      يوجد احدث لفات الطرح لعام 2018 للمحجبات  وشنيوهات الشعر كما يوجد ميك اب خفيف ويومي و يغير الشكل و يكبر ويصغر العيون 
      احدث رسومات العيون لعام 2018   " />
      <meta property="og:site_name" content="اتيليه ديفا " />
      <link rel="canonical" href="https://divanice.com" />
      <meta property="og:type" content="website" />
      <meta property="fb:app_id" content="932636840239088" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@divanice" />
      <meta name="twitter:domain" content="divanice" />
      <meta name="twitter:creator" content="@divanice" />
     </head>
      <body
         className={cairo.className}>
       <MuiTheme>
        <nav>
          <DrawerAppBar/>
        </nav>
        <main>
          {data ? <> <Loading/> </> : 
          <>
          <Suspense fallback={<Loading/>}>
              {children}
          </Suspense>
          </>
          }
        </main>
        <footer>
          {/* <Footer/> */}
          <SocialFooter/>
        </footer>
       </MuiTheme>
      </body>
    </html>
  )
}
