import RestaurantCard from './RestaurantCard/RestaurantCard';
import {Link} from 'react-router-dom';
import {useState, useEffect} from 'react';

function Restaurants(){

    useEffect(() => {
        fetchRestaurants();
    }, []);
    

    const [restaurants, setRestaurants] = useState([]);
    
    const fetchRestaurants = async () => {
        const data = await fetch(
            `https://developers.zomato.com/api/v2.1/search`,{
            method: 'GET',
            headers: {  
            'X-Zomato-API-Key': `${process.env.REACT_APP_ZOMATO}` ,
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json'
            }
        });
        const items = await data.json();
        setRestaurants(items.restaurants);
        console.log(items.restaurants);
    }

    
    
    return(
        <div className="Restaurants">
            {restaurants.map(restaurant => (
                <Link key={restaurant.restaurant.id} to = {`/restaurant/${restaurant.restaurant.id}`}>
                <RestaurantCard 
                    key={restaurant.restaurant.id}
                    _id={restaurant.restaurant.id} 
                    name={restaurant.restaurant.name}
                    address={restaurant.restaurant.location.address} 
                    items = {restaurant.restaurant.menu_url} 
                    featured_image = {restaurant.restaurant.featured_image}
                />
                </Link>
            ))}
            
        </div>
    );
}

export default Restaurants;