import React, {useEffect} from "react";
 import { Navigation } from "swiper/modules";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import styles from "./Carousel.module.css";
import CarouselLeftNavigation from "./CarouseLeftNavigation/CarouselLeftNavigation";
import CarouselRightNavigation from "./CarouselRightNavigation/CarouselRightNavigation";

// Import Swiper styles
import "swiper/css";

const Controls=({data})=>{
    const swiper=useSwiper();
    useEffect(()=>{
        swiper.slideTo(0);
    },[data]);
    return <></>;

}

function Carousel({data, renderComponent}) {
  return (
    <div className={styles.wrapper}>
      <Swiper
        // install Swiper modules
        style={{padding:"0px 20px"}}
        initialSlide={0}
        modules={[Navigation]}
        spaceBetween={40}
        slidesPerView={"auto"}
        allowTouchMove
      >
        <Controls data={data} />
        <CarouselRightNavigation />
        <CarouselLeftNavigation />
        {data.map((ele)=>(
            <SwiperSlide>{renderComponent(ele)}</SwiperSlide>

        ))}
      </Swiper>
    </div>
  );
}

export default Carousel;
