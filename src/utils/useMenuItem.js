import { useState , useEffect } from "react";

const useMenuItem = (id,MENU_ITEM_TYPE_KEY) => {
    const [menu, setMenu] = useState(null);

    useEffect(() => {
        getRestaurentInfo();
      }, []);

    async function getRestaurentInfo() {
        try {
            const data = await fetch(
           " https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.912185&lng=75.783304&restaurantId="+id+"&catalog_qa=undefined&submitAction=ENTER"
            );
            if(!data.ok){
                throw new Error(`HTTP error! Status: ${data.status}`);
              }
            const json = await data.json();
            console.log(json);
            // setMenu(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[*]?.card?.card?.itemCards[*]?.card?.info?.name);

          //   setMenu(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.map(card => {
          //     return card?.card?.card?.itemCards.map(itemCard => {
          //         return itemCard?.card?.info;
          //     });
          // }).flat().filter(name => name !== undefined));

          

            const menuItemsData =
            json?.data?.cards[4]
                ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map(
                    (x) => x.card?.card
                )
                ?.filter((x) => x["@type"] == MENU_ITEM_TYPE_KEY)
                ?.map((x) => x.itemCards)
                .flat()
                .map((x) => x.card?.info) || [];

        const uniqueMenuItems = [];
        menuItemsData.forEach((item) => {
            if (!uniqueMenuItems.find((x) => x.id === item.id)) {
                uniqueMenuItems.push(item);
            }
        });
        setMenu(uniqueMenuItems);
            
        } catch (error) {
            console.error('Error fetching data:', error);
        }
      }

      return menu;
}

export default useMenuItem;