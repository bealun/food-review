const apiKey = "4fd2dd29c14db73b1a3c8639ecc045bb"


fetch(`https://developers.zomato.com/api/v2.1/search?entity_id=61&entity_type=city&cuisines=25`, {headers:{ "user-key": apiKey}})
  .then(response => {
    return response.json();
  })
  .then((json) => {
    console.log(json)
    json.restaurants.forEach(item => {
      restaurant = item.restaurant
      console.log(restaurant)

      let nameOfRestaurant = restaurant.name
      console.log(nameOfRestaurant)

      let locationOfRestaurant = restaurant.location.locality
      console.log(locationOfRestaurant)

      let typeOfFood = restaurant.cuisines
      console.log(typeOfFood)

      let hoursOpen = restaurant.timings
      console.log(hoursOpen)
    })
  })