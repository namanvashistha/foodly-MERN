import {useState, useEffect} from 'react';

function RestaurantDetails({match}){
    
    
    

    const [restaurant, setRestaurant] = useState([]);
    
    const fetchRestaurant = async () => {
        const data = await fetch(
            `https://developers.zomato.com/api/v2.1/restaurant?res_id=${match.params.id}`,{
            method: 'GET',
            headers: {  
            'X-Zomato-API-Key': `${process.env.REACT_APP_ZOMATO}` ,
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json'
            }
        });
        const item = await data.json();
        // console.log(item);
        setRestaurant(item);
        
    }

    useEffect(() => {
        fetchRestaurant();
        // console.log(match.params.id);
     }, []);
    
    return(
        <div>
            <img src={restaurant.featured_image} /> 
            <h3>{restaurant.id} {restaurant.name}</h3>
            {/* <h4>{restaurant.location.address}</h4> */}
            {/* {restaurant.user_rating} */}
        </div>
    );
}

export default RestaurantDetails;