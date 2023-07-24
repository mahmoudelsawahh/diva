"use client"
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import {Fade , Slide , Box, Container, Grid, Typography } from '@/app/lib/MuiSsr';
import mainBg from '/public/divanice.com_imgs_section-bg.webp'
import topWave from '/public/divanice.com_imgs_waves.png'
import Image from 'next/image';
import { useState } from 'react';
import { useEffect } from 'react';
const Service = () => {
    const [loadingComponent , setLoadingComponent] = useState(true);
    useEffect(()=>{
        setLoadingComponent(false)
    },[])

    const serviceData  = [
        {
            title : "قسم خاص بفساتين الزفاف",
            description : 'موجود في ديفا فريق متخصص واقف معاكي يساعدك على إختيار الفستان المناسب لجسمك وشكلك ولون بشرتك عشان تقدري تتجنبي ظهور أي ديفوهات وتطلعي ملكة في ليلة العمر. متوفر في ديفا فساتين زفاف للمحجبات وغير المحجبات وفساتين زفاف بذيل وذيل متوسط أو بدون ديل. كل فساتين الزفاف في ديفا مستوردة. متوفر في ديفا فساتين زفاف لأشهر مصممي الأزياء.            '
        },
        {
            title : 'قسم خاص بـ " ميك أب الزفاف " للعروسة',
            description : 'جميع الماتريال المستخدمة في الميكب أب أوريجينال وماركات عالمية مشهورة مثل " شانيل – ديور – ماك – أنستازيا – فور إيفير " وغيرهم من البراندات العالمية الأخرى الكثيرة. متوفر في ديفا أيضاً عدسات لاصقة لأشهر البراندات العالمية مثل " ذهب - أنستازيا – بيلا ". كما نقوم بإستيراد الإكسسوارات والتاجات والطرح كي تكوني مميزة مع ديفا. ولأننا نعرف أهمية اليوم بالنسبة للعروسة، نتعهد بالحفاظ على أعلى مستوى ممكن في كل الخدمات المقدمة من ديفا لعرائسها. وفيما يلي رأي بعض العرائس والفنانات اللي شرفونا في السيشن.'
        },
        {
            title : "برنامج تنظيف البشرة و الشعر ",
            description : "يتطلب حضور العروسة قبلها بـ 5 أيام. تقوم مدام ديفا بتحديد طرق لف الطرحة وإستايل الميك أب المعتمد ولون العدسات وإختيار الإكسسوارات والتاجات وتحديد اللوك النهائي للعروسة. كما تقوم مدام ديفا بعمل فورمة الشعر الخاص بالعروسة. توجد أشكال كثيرة للفة الطرح في ديفا كما يوجد لدينا تجهيز خاص للمنتقبات ... يتم تجهيز العروسة المنتقبة بأعلى المواصفات كما يتم تطريز النقاب بنفس تطريز الفستان."
        },
        {
            title : "قسم خاص بفساتين السواريه و السهرة ",
            description : "يوجد تشكيلة رائعة من الفساتين في ديفا المجمعة من أكثر من دولة لضمان ظهورك بمظهر شيك ورقيق للمناسبة. كما يساعدك فريق العمل في ديفا على إختيار فستانك المناسب للمناسبة. كما يوجد في ديفا فساتين سواريه للمحجبات وغير المحجبات."
        },
        {
            title : "قسم خاص بفساتين الخطوبة والشبكة ",
            description : "يوجد فريق عمل مختص في ديفا يساعدك على إختيار الفساتين ذات الألوان المميز والإستايلات المناسبة لجسمك. متوفر كوليكشن من الفساتين المنفوشة والسك للمحجبات وغير المحجبات.            "
        },
        {
            title : "احدث واقوى برنامج تنظيف البشرة",
            description : "ديفا تقدم لكي احدث واقوى الكريمات والماسكات والاسكريبات الخاصة بالبشرة المستخدمة في خلال الخمسة ايام قبل موعد الفرح طبقا لبرنامج تنظيف البشرة            "
        }
    ]
  return (
   <>
    {loadingComponent ? null : 
    <LazyLoadComponent>
     <Box sx={{ overflow : 'hidden', position : 'relative'}}>
       <Image src={mainBg} fill alt='diva' objectFit='cover' objectPosition='center' />
       <Image src={topWave} loading='lazy' height={75} alt='diva' style={{zIndex : 100 , top : 0 , left : 0, position : 'absolute', transform : ' rotate(180deg)', width : '100%'}}/>
       <div className='overlay'></div>
        <Box sx={{position : 'relative'}}>
        <Box className='category-content' sx={{height : '100%', margin : '80px 0px'}}> 
        <LazyLoadComponent>
        <Container maxWidth="xxl"  sx={{textAlign : 'center'}}>
        <Slide bottom>
              <Typography variant='h1' sx={{fontSize : '18px', fontWeight : 'bold' , color : '#E60263', marginBottom : '5px'}}>الخدمات المميزة</Typography>
              <h1 style={{fontWeight : 'bold' , paddingBottom : '25px', position : 'relative', fontSize : '2.5rem'}} className='Service-title'>ما الذي نقدمه من خدمات ؟</h1>
        </Slide>
        <Grid container spacing={3}>
            {serviceData.map((item , id)=>{
                return (
                   // eslint-disable-next-line react/jsx-key
                   <LazyLoadComponent key={id}>
                   <Grid item xs={12} lg={4} key={id}>
                    <Fade left>
                       <Slide bottom>
                             <Typography variant='h4' sx={{fontWeight : 'bold' , margin : '20px 0px' ,textAlign : 'center', fontSize : '1.5rem'}}>{item.title}</Typography>
                       </Slide>
                        <Typography  sx={{fontSize : '22px', margin : 'auto', lineHeight : '40px', width : '90%', fontWeight : 500}}>{item.description}</Typography>
                       </Fade>
                    </Grid>
                   </LazyLoadComponent>
                )
            })}
        </Grid>
    </Container>
    </LazyLoadComponent>
         </Box>
        </Box>

    </Box>
   </LazyLoadComponent>
    }
   </>
  )
}

export default Service