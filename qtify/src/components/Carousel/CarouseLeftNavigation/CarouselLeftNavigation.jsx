import React, {useState, useEffect} from "react";
import styles from "./CarouselLeftNavigation.module.css";
import {ReactComponent as LeftArrow} from "../../../assets/Left_button.svg";
import { useSwiper } from "swiper/react";

function CarouselLeftNavigation(){
    const swiper=useSwiper();
    const [isBeggining, setIsBeginning]=useState(swiper.isBeginning);

    useEffect(()=>{
        swiper.on("slideChange", function(){
            setIsBeginning(swiper.isBeginning);
        })
    },[])
    return (
        <div className={styles.leftNavigation}>
            {!isBeggining && <LeftArrow onClick={()=>swiper.slidePrev()} />}

        </div>
    )

}

export default CarouselLeftNavigation;