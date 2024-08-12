import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useMenu from "../utils/useMenu";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
// import useMenuItem from "../utils/useMenuItem";
// import {
//   swiggy_menu_api_URL,
//   // MENU_ITEM_TYPE_KEY,
//   // RESTAURANT_TYPE_KEY,
// } from "../config";

const RestaurentMenu = () => {
  const params = useParams();
  const { id } = params;
  // console.log(params);
  // const [restaurent, setRestaurent] = useState({});
  const [restaurent] = useMenu(
    swiggy_menu_api_URL,
    id,
    RESTAURANT_TYPE_KEY,
    // MENU_ITEM_TYPE_KEY
  );

  const dispatch = useDispatch();

  const handleAddItem = () => {
    dispatch(addItem("aalu"));
  };

  return (
    <div>
        <div>
        <h1>restaurent id : {id}</h1>
      <h2>{restaurent?.name}</h2>
      <h3>{restaurent?.area}</h3>
      <h3>{restaurent?.city}</h3>
      <h3>{restaurent?.avgRating}</h3>
      <h3>{restaurent?.costForTwoMsg}</h3>

        </div>

        <button onClick={handleAddItem} className="m-5 p-5 bg-green-300">add item</button>

        {/* <div>
          {menuItems && menuItems.name && console.log(Object.values(menuItems?.name))}

          {menuItems && menuItems.map((item) =>{
            <div key={item?.id}>
              <p>{item?.name}</p>
            </div>
          })}
        </div> */}
      

      

    </div>
  );
};

export default RestaurentMenu;
