export function filterData(searchText, restaurents) {
    const filterData = restaurents.filter((restaurent) =>
      restaurent.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    return filterData;
  }