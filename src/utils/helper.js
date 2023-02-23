export function filterData(searchInput, allRestaurants) {
  return allRestaurants.filter((restaurant) =>
    restaurant?.data?.name?.toLowerCase().includes(searchInput.toLowerCase())
  );
}
