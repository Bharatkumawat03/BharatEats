
const RestaurentCard = ({name, cuisines, cloudinaryImageId, avgRating, user,}) => {
    // const {name, cuisines, cloudinaryImageId, avgRating} =Restaurent.info;
    return(
        <div className="card w-56 h-96 m-5 p-5 box-border shadow-md rounded-md hover:bg-orange-50">
            <img className="card-image h-36 w-52  object-cover rounded-t-md " src={ 
                "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +cloudinaryImageId
            } 
            />
            <h2 className="text-xl my-5">{name}</h2>
            <p className="text-sm ">{cuisines.join(", ")}</p>
            <h4 className="my-5">{avgRating} star</h4>
            <h4>{user.name}</h4>
        </div>
    );
};

export default RestaurentCard;