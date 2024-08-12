import { useState, useEffect } from "react";
import { IMG_CDN_URL,IMG_CDN_URL2 } from "../config";

const useRestaurent = () => {
    const [allRestaurents, setAllRestaurents] = useState([]);
    const [filteredRestaurents, setfilteredRestaurents] = useState([]);

    useEffect(() => {
        getRestaurent();
      }, []);
    
      async function getRestaurent() {
        try {
          console.log("hello");
          const data = await fetch(IMG_CDN_URL2);
            if (!data.ok) {
              throw new Error(`HTTP error! Status: ${data.status}`);
            }
            const json = await data.json();
            console.log(json);
            setAllRestaurents(
              json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
                ?.restaurants
            );
            setfilteredRestaurents(
              json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
              ?.restaurants
            );
          // setAllRestaurents(
          //   json?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle
          //     ?.restaurants
          // );
          // setfilteredRestaurents(
          //   json?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle
          //     ?.restaurants
          // );
        } catch (error) {
          console.error("Error fetching data:", error);
          // console.log(error);
        }
      }

      return [allRestaurents,filteredRestaurents];
}

export default useRestaurent;