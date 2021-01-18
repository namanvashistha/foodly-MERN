function RestaurantCard({ _id , name , address , items, featured_image }){
    return(
        <div>
            <img src={featured_image} />
            <h3>{_id} {name}</h3>
            <h4>{address}</h4>
            <h5>{items.length}</h5>
        </div>
    );
}

export default RestaurantCard;