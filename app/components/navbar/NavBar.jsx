"use client"
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Logo from '/public/diva-logo.png'
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import {useSearchParams} from 'next/navigation'
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import {AppBar , Box  , CssBaseline , Divider , Drawer, IconButton , 
  List , ListItem, Toolbar , Button , Container
} from '@/app/lib/MuiSsr';
import { useState } from 'react';

const drawerWidth = 240;
export default function DrawerAppBar(props) {
    const router = useRouter();
    const param = useSearchParams()
  const currentRoute = usePathname();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const navLink = ()=>{
    return (
      <>
         <LazyLoadComponent>
         <Button variant='text'>
                   <Link href="/" style={{color : '#333', width : '100%', height : '100%', }} className={currentRoute === "/" ? "active" : "no-active"}>الرئيسية</Link>
            </Button>
            <Button variant='text'>
                   <Link href="/about" style={{color : '#333',  width : '100%', height : '100%', }} className={currentRoute === "/about" ? "active" : "no-active"}>من نحن</Link>
            </Button>
            <Button variant='text'>
                   <Link href='/gallery' style={{color : '#333',  width : '100%', height : '100%', }} className={currentRoute === "/gallery" ? "active" : "no-active"}>خدماتنا</Link>
            </Button>
            <Button variant='text'>
                   <Link href='/blog' style={{color : '#333',  width : '100%', height : '100%', }} className={currentRoute === "/blog" ? "active" : "no-active"}>المقالات</Link>
            </Button>
            <Button variant='text'>
                   <Link style={{color : '#333',  width : '100%', height : '100%', }} href='/contact' className={currentRoute === "/contact" ? "active" : "no-active"}>اتصل بنا</Link>
            </Button>
         </LazyLoadComponent>
      </>
    )
  }

  const drawer = (
   <LazyLoadComponent>
     <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
                 {/* <Image  onClick={()=> router.push('/')} src={Logo} alt='اتيليه فساتين زفاف وافراح' width={'300'} priority/> */}
                 <div>
                   <div style={{position : 'relative', padding : '10px 60px'}}>
                   <Image priority={true}  onClick={()=> router.push('/')} style={{width : '100%',}} objectFit='cover'  src={Logo} alt='اتيليه فساتين زفاف وافراح'/>
                   </div>
                  </div>
      <Divider />
      <List>
      <ListItem  disablePadding sx={{display : 'flex', flexDirection : 'column'}} className='nav-link'>
            {navLink()}
          </ListItem>
      </List>
    </Box>
   </LazyLoadComponent>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

   
  return ( 
      <LazyLoadComponent>
        <CssBaseline />
      <AppBar sx={{position: 'fixed'}}>
        <Container maxWidth="xxl" fixed>
        <Toolbar sx={{flexDirection : {xs : 'row-reverse', md : 'row'}}}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: 'none' }, 
            // width : '100%', justifyContent : 'flex-end'
             }}

          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ flexGrow: 1 , display: { xs: 'flex', sm: 'block' }, justifyContent : 'flex-start' , padding : {xs : '5px' , md :'12px'}, cursor : 'pointer'
           }}>
                  <div style={{width : '90px', position : 'relative', height : '76px'}}>
                  <Image priority={true}  onClick={()=> router.push('/')} fill objectFit='cover'  src={Logo} alt='اتيليه فساتين زفاف وافراح'/>
                  </div>
          </Box>

          <Box to="/page-link" sx={{ display: { xs: 'none', md: 'block' } }}  className='nav-link'>
               {navLink()}
              <IconButton
                size='large'
                color="inherit"
                edge="start"
                 title="Search Icon"
                sx={{ mr: 2}}
                aria-label="Search Icon"
                
          >
            <SearchIcon />
          </IconButton>

          </Box>
        </Toolbar>
        </Container>
      </AppBar>
      <Box component="nav">
        <Drawer
        anchor='left'
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { sm: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>     
    </Box>
      </LazyLoadComponent>
  );
}