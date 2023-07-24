import dynamic from 'next/dynamic'
import './globals.css'
import './globals2.css'

import {Cairo } from 'next/font/google'
import MuiTheme from './lib/muiThem'
import { Suspense } from 'react'
const NavBar = dynamic(() => import('./components/navbar/NavBar'), {
  ssr: false,
})
const Footer = dynamic(() => import('./components/footer/Footer'), {
  ssr: false,
})
const Loading = dynamic(() => import('./loading'), {
  ssr: false,
})
const SocialFooter = dynamic(() => import('./components/footer/SocialFooter'), {
  ssr: false,
})

const cairo = Cairo({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
})


export const metadata = {
  title: "اتيليه فساتين زفاف وافراح",
  description : `  
        اتيليه فساتين زفاف و  افراح وسواريه وخطوبة وحنة  و تفصيل و  بيع وايجار  مستوردة تركي وفرنساوي موديلات لعام 2018  احدث صيحات الموضة 
      يوجد فساتين زفاف وسواريه وسهرة للمحجبات وكذلك فساتين سواريه وسهرة وزفاف قصيرة بناتي  
      ميك اب ديفا على يد خبيرة التجميل ميك اب ارتيست ديفا 
      جميع المواد المستخدمة في التجميل اوريجينال و براندات عالمية مثل ماك وانستازيا وغيرها
      يوجد  ماكياج زفاف و خطوبة وسواريه وسهرة وحنة وبروتين وتنظيف وعناية البشرة وكيراتين 
      يوجد احدث لفات الطرح لعام 2018 للمحجبات  وشنيوهات الشعر كما يوجد ميك اب خفيف ويومي و يغير الشكل و يكبر ويصغر العيون 
      احدث رسومات العيون لعام 2018   
  `
}

export default function RootLayout({ children }) {
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
          <NavBar/>
        </nav>
        <main>
          <Suspense fallback={<Loading/>}>
              {children}
          </Suspense>
        </main>
        <footer>
          <Footer/>
          <SocialFooter/>
        </footer>
       </MuiTheme>
      </body>
    </html>
  )
}
