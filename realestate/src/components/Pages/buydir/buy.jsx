import styles from "./Buy.module.scss";

import Card from "../../Card/card";
import { useQuery } from "@apollo/client";
import { gql } from "@apollo/client";
import Navbar from "../../navbar/Navbar";

const BUY_CARDS = gql`
  query GET_BUY_CARDS {
    houses(filters: { categories: { Category: { contains: "Buy" } } }) {
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
          Price
        }
      }
    }
  }
`;

const Buy = () => {
  const { loading, data, error } = useQuery(BUY_CARDS);

  return (
    <main>
      <Navbar />
      <div className={styles.content}>
        <h1>Houses For Sale</h1>
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

export default Buy;
