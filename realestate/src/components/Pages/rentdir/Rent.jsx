import styles from "./Rent.module.scss";

import Card from "../../Card/card";
import { useQuery } from "@apollo/client";
import { gql } from "@apollo/client";
import Navbar from "../../navbar/Navbar";

const RENT_CARDS = gql`
  query GET_RENT_CARDS {
    houses(filters: { categories: { Category: { contains: "Rent" } } }) {
      data {
        id
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
          Rent
        }
      }
    }
  }
`;

const Rent = () => {
  const { loading, data, error } = useQuery(RENT_CARDS);

  return (
    <main>
      <Navbar />
      <div className={styles.content}>
        <h1>Houses For Rent</h1>
        <div className={styles.card}>
          {loading || error ? (
            <h1 style={{ color: "#333" }}>Loading ...</h1>
          ) : (
            <div className={styles.cards}>
              {data.houses.data.map((house, index) => (
                <Card info={house}
                
                />
              ))}
              
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Rent;
