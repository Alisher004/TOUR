import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
// import './Contact.css'; 


const API = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a";

function Contact() {

  const [drink, setDrink] = useState([]); 

  async function getUserNur() {
    try {
      const res = await fetch(API); 
      const result = await res.json(); 

      setDrink(result.drinks); 
      console.log(result); 

    } catch (error) {
      console.log(error); 
    }
  }

  useEffect(() => {
    getUserNur();
  }, []);

  return (
    <div>
      <div className='Nur'>
      {drink.map((drink) => (
        <div key={drink.idDrink}>
          <Link to={`/contact/${drink.idDrink}`}>
            <img src={drink.strDrinkThumb} alt="" />
            <h1>{drink.strCategory}</h1>

          </Link>
        </div>
      ))}
    </div>
    </div>
  );
}

export default Contact;