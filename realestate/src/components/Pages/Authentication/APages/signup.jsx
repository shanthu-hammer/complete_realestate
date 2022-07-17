import React from 'react';
import "../APages/signup.css"
import ANavbar from "../AComponents/ANavbar";
import styles from "../../sections/Section1.module.scss";


function Signup() {
  console.log('I was triggered during render-testsignip');
  return (
    //<div className='apps'>
    <div>
      


     {/* NAVBAR */}
     <div className={styles.Navbar}>
     <ANavbar BurgerColour={"whitesmoke"} />
   </div>
    


   
      <div className="form">
        <form>
            <h1 className='logincss'>Login</h1>
          <div className="input-container">
            <label className='labeltxt'>Username </label>
            <input type="text" name="uname" required />

          </div>
          <div className="input-container">
            <label>Password </label>
            <input type="password" name="pass" required />

          </div>
          <div className="button-container">
            <input type="submit" />
          </div>
        </form>
      </div>
      </div>

     // </div>




  );


}

export default Signup;