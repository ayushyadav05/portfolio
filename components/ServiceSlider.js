import {Swiper, SwiperSlide} from 'swiper/react';
import Chessiitk from './Chessiitk';
import Ppoc from './Ppoc';


import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";

import {FreeMode, Pagination} from 'swiper'


// data
const serviceData = [
  {
    icon: <Chessiitk />,
    title: 'Coordinator',
    org: 'Chess Club, IITK',
    description1: 'Hosted prestigious Chess Masters Premier League with 80+ colleges, 17 guests, and 3.5L+ prize money.',
    description2: 'Engaged in a transformative collaboration with PRAYAS, to empower underprivileged students through the games of chess.'
  },
  {
    icon: <Ppoc />,
    title: 'Manager',
    org: 'PPOC, IITK',
    description1: 'Organized Bramhastra - A national level case study competition in collaboration with IIMC, IIFTK, BITS PILANI, IIMU.',
    description2: 'Responsible for organizing and managing Policy Conclave, a flagship event addressed by key dignitaries of the country.'
  },
  // {
  //   icon: <RxDesktop />,
  //   title: 'Organizer',
  //   org: 'Udghosh, IITK',
  //   description1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  // },
];

const ServiceSlider = () => {
  return (
  <Swiper
   breakpoints={{
    320:{
      slidesPerView:1,
      spaceBetween:15,
    },
    640:{
      slidesPerView:2,
      spaceBetween:15,
    },
   }}
   freeMode={true}
   pagination={{
    clickable:true
   }}
   modules={[FreeMode,Pagination]}
   className='h-[240px] sm:h-[400px]'
  >
    {
      serviceData.map((item,index)=>{
        return (
        <SwiperSlide key={index}>
          <div className='bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300'>
              {/* <div className='h-40 w-14 mx-40'>{item.icon}</div> */}
              <div className='mb-10'>
              <div className='mb-0 -mt-2 text-lg'>{item.title}</div>
                
                <div className='mb-5 text-base text-accent'>{item.org}</div>
                <p className='max-w-[350px] leading-normal text-sm mb-2'>{item.description1}</p>
                <p className='max-w-[350px] leading-normal text-sm'>{item.description2}</p>
              </div>
            <div className='text-3xl'>
              <RxArrowTopRight  className='group-hover:rotate-45 group-hover:text-accent transition-all duration-300' ahref='https://www.youtube.com/'/>
            </div>
            
            
          </div>
        </SwiperSlide>
        );
      })
    }
  </Swiper>
  );
};

export default ServiceSlider;
