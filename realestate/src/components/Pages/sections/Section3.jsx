import styles from "./Section3.module.scss";
import { ArrowButton } from "../../buttons/Button";
import Carousel from "../../Carousel/Carousel";

import { SwiperSlide } from "swiper/react";
import Card from "../../Card/card";
import { gql, useQuery } from "@apollo/client";

import building3 from "../../../assets/building3.jpg";

const CARD_DATA = gql`
  query GET_CARDS {
    houses(
      filters: { categories: { Category: { contains: "Buy" } } }
      pagination: { limit: 6 }
    ) {
      data {
        attributes {
          location {
            data {
              attributes {
                City
              }
            }
          }
          Preview_Images {
            data {
              attributes {
                url
              }
            }
          }
          categories {
            data {
              attributes {
                Category
              }
            }
          }
          Neighbourhood
          Street
          Rooms
          Bedrooms
          Bathrooms
          Short_Adress
          Price
        }
      }
    }
  }
`;

const Section3 = () => {
  const { loading, error, data } = useQuery(CARD_DATA);
  const houseData = data?.house?.data;
  console.log(data);

  //if(loading) {
  //console.log("needs more time ")
  //return <p>loading....</p>}

  // else if(error) {
  //return <p>error...</p>}

  //else{
  return (
    <section className={styles.section_3}>
      <div className={styles.section_3_title}>
        <h1>Best Houses</h1>
        <ArrowButton text="See More" path="buy" />
      </div>
      {/* CARDS / CAROUSEL */}
      <div className={styles.cards}>
        <Carousel>
          <>
            {data?.houses?.data?.map((house, index) => (
              <SwiperSlide key={index}>
                <Card info={house} />
              </SwiperSlide>
            ))}
          </>
        </Carousel>
      </div>
    </section>
  ); //}
  
};

export default Section3;
