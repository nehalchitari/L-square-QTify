import React, { useState, useEffect } from "react";
import styles from "./Section.module.css";
import { CircularProgress } from "@mui/material";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";
import Filters from "../Filters/Filters";



export default function Section({ title, data, filterSource, type }) {
  const [carouselToggle, setCarouselToggle] = useState(true);
  const [filters, setFilters]=useState([{key:"all", label:"All"}])
  const [selectedFilterindex, setSelectedFilterindex]=useState(0);

  const handleToggle = () => {
    setCarouselToggle((prevState) => !prevState);
  };

  useEffect(()=>{
    if (filterSource) {
      filterSource().then((response)=>{
        const {data}=response;
        setFilters([...filters, ...data]);
      })
    }
  }, []);

  const showFilters=filters.length>1;
  const cardsToRender=data.filter((card)=>
  showFilters && selectedFilterindex !==0 ?
  card.genre.key===filters[selectedFilterindex].key
  : card);

  return (
    <div>
      <div className={styles.header}>
        <h3>{title}</h3>
        {!showFilters && (<h4 className={styles.toggleText} onClick={handleToggle}>
          {!carouselToggle ? "Collapse All" : "Show All"}
        </h4>)}
      </div>
      {showFilters && (
        <div className={styles.filterWrapper}>
          <Filters 
          filters={filters}
          selectedFilterindex={selectedFilterindex}
          setSelectedFilterindex={setSelectedFilterindex}
          />

          </div>
      )}
      {cardsToRender.length === 0 ? (
        <CircularProgress />
      ) : (
        <div className={styles.cardWrapper}>
          {!carouselToggle ? (
            <div className={styles.wrapper}>
              {cardsToRender.map((ele) => (
                <Card data={ele} type={type} />
              ))}
            </div>
          ) : (
            <Carousel data={cardsToRender} 
            renderComponent={(data)=><Card data={data} type={type}/>}
            />
            )}
        </div>
      )}
    </div>
  );
}
