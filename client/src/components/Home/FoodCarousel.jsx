import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import "swiper/css";
import "swiper/css/navigation";
import {Navigation} from 'swiper'
import DeliveryCard from './DeliveryCard';
import img1 from '../../images/SouthFood.jpg'
import img2 from '../../images/Roti.jpeg'
import img3 from '../../images/Premiuim Thali.jpeg'
import img4 from '../../images/green.jpg'

function FoodCarousel() {
    const items = [
        {
            image:"https://b.zmtcdn.com/data/o2_assets/2122e9de1fd26063893a1afa0dca748b1632716603.png",
            title:"Khichdi"
        },
        {
            image:"https://b.zmtcdn.com/data/o2_assets/2b5a5b533473aada22015966f668e30e1633434990.png",
            title:"Paratha"
        },
        {
            image:"https://b.zmtcdn.com/data/o2_assets/7b0966fb0ab1c60888a652b2eaf826da1632716547.png",
            title:"Salad"
        },
        {
            image:"https://b.zmtcdn.com/data/dish_images/838c7929dcc09479600f118c9088af7b1614910398.png",
            title:"Bowl"
        },
        {
            image: img1,
            title:"South Indian"
        },
        {
            image: img2,
            title:"Roti"
        },
        {
            image: img3,
            title:"Premiuim Thali"
        },
        {
            image: img4,
            title:"Green Thali"
        },
          
    ]
    const slideConfig = {
        slidesPerView: 6,
        spaceBetween: 0,
        pagination: {
          clickable: true,
        },
        breakpoints: {
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 50,
          },
        },
        modules: [Navigation],
        className: "mySwiper",
        navigation: true,
      };

  return (
    <div>
        <h5 className='font-semibold text-2xl py-2 lg:px-16 md:px-8 px-4'>Inspiration for your first order</h5>
            <div className='px-2.5 py-5 md:hidden flex items-center justify-center gap-2.5 flex-wrap'>
                {items.map((item)=>(
                    <DeliveryCard {...item} key={item.title}></DeliveryCard>
                ))}
            </div>
        <div className='hidden md:flex py-5'>
            <Swiper {...slideConfig}>
                {items.map((item,index) =>(
                    <SwiperSlide key={index}>
                        <DeliveryCard {...item}></DeliveryCard>
                    </SwiperSlide>
                ))}
            </Swiper>
      </div>
    </div>
  )
}

export default FoodCarousel