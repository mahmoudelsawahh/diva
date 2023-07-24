/* eslint-disable @next/next/no-img-element */
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import LightGallery from 'lightgallery/react';
// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import Loading from '@/app/loading';
import { baseUrl } from '@/app/lib/baseUrl';
import { LazyLoadComponent } from 'react-lazy-load-image-component';

const ImageGallery = ({data}) => {
const dataItems = data.images
  return (
    <LazyLoadComponent >
         <LightGallery
                speed={500}
                plugins={[lgThumbnail, lgZoom]}
            >
               {dataItems ? dataItems.map((item, id)=>{
                return (
                  <a key={id}
          data-lg-size="1406-1390"
          className="gallery-item"
          data-src={`${baseUrl}/images?id=${item.large}`}
          data-sub-html={data.name}
            >
          <img
            className="img-responsive"
            src={`${baseUrl}/images?id=${item.small}`}
            style={{width : '100px', height : '100px', margin : '15px', border : '3px solid #001'}} loading='lazy'
            alt={data.name}
          />
        </a>
                )
               }): <Loading/>}
            </LightGallery>

    </LazyLoadComponent>
  )
}

export default ImageGallery