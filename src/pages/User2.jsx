import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
// import './Contact.css'; 


const API = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

function User2() {
    const { idDrink } = useParams();

    const [drink, setDrink] = useState({});

    async function getUserNur() {
        try {
            const res = await fetch(`${API}${idDrink}`); 
            const result = await res.json(); 

            setDrink(result.drinks[0]);

            console.log(result); 

        } catch (error) {
            console.log(error); 
        }
    }

    useEffect(() => {
        getUserNur();
    }, [idDrink]);

    return (
        <div>
            <div className='nuri'>
            { <img src={drink.strDrinkThumb} alt="" />}
            <h1>{drink.strGlass}</h1>

            </div>
            
        </div>
    );
}

export default User2;