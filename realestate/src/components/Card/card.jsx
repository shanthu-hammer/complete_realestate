import styles from "./Card.module.scss";
//react icons
import { BsFillDoorOpenFill } from "react-icons/bs";
import { IoIosBed } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { FaBath } from "react-icons/fa";

import building3 from "../../assets/building3.jpg";
import { Link } from "react-router-dom";

const Card = ({ info, showInfo, secondClass }) => {
  //CONVERT PRICE FUNC
  const convertPrice = (price) => {
    if (price >= 1000 && price < 999999) return `${price / 1000}k `;
    if (price >= 1000000) return `${price / 1000000}m `;
    return price;
  };
  //CONVERT RENT FUNC
  const covnertRent = (rent) => {
    if (rent >= 1000) return `${rent / 1000}k `;
    return rent;
  };

  return (
    <div className={`${styles.card_container} ${secondClass}`}>
      {/* IMAGE */}
      <div className={styles.image_container}>
        <img
          src={`http://localhost:1337${info?.attributes?.Preview_Images.data[0]?.attributes?.url}`}
          alt="building"
        />
        {/* CITY */}
        <h3>{info?.attributes?.city}</h3>
        <h4>
          <p className={styles.neighbourhood}>{info.neighbourhood}</p>
          <p className={styles.street}>{info.street}</p>
        </h4>
        {/* ROOMS ETC */}
        <div className={styles.info}>
          {/* ROW1 */}
          <div className={styles.row1}>
            {/* ROOMS */}
            <div className={styles.rooms}>
              <BsFillDoorOpenFill />
              <span>{info?.attributes?.Rooms}</span>
            </div>
            {/* BEDROOMS */}
            <div className={styles.bedrooms}>
              <IoIosBed />
              <span>{info?.attributes?.Bedrooms}</span>
            </div>
          </div>
          {/* ROW2 */}
          <div className={styles.row2}>
            {/* BATHROOMS */}
            <div className={styles.bathrooms}>
              <FaBath />
              <span>{info?.attributes?.Bathrooms}</span>
            </div>
            {/* Short Andress (Airport Code) */}
            <div className={styles.shortAndress}>
              <IoLocationSharp />
              <span>{info?.attributes?.Short_Adress}</span>
            </div>
          </div>
        </div>

        <div className={styles.card_buy}>
          {/* PRICES */}
          <div className={styles.prices}>
            <h2>{info?.attributes?.Price}</h2>
          </div>
          {/* SEE MORE BUTTON */}
          <div className={styles.card_btn}>
            <Link to={`/property/${info?.id}`}>See More</Link>
          </div>
        </div>
      </div>
    </div>

    //newshit
    // <div>
    //   {console.log(info?.attributes?.Preview_Images.data[0]?.attributes?.url)}
    //   <h1>{info?.attributes?.Bathrooms}</h1>
    //   <h2> {info?.attributes?.Location?.data?.attributes?.City}</h2>
    //   <h2> {"hello"}</h2>
    //   <h1>{info?.attributes?.Bedrooms}</h1>
    //   <h1>{info?.attributes?.Neighbourhood}</h1>
    //   <h1>{info?.attributes?.Price}</h1>
    //   <img
    //     src={`http://localhost:1337${info?.attributes?.Preview_Images.data[0]?.attributes?.url}`}
    //   />
    // </div>
  );
};

export default Card;
