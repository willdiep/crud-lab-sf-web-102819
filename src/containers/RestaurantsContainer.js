import React from 'react'
import { connect } from 'react-redux'
import RestaurantInput from '../components/restaurants/RestaurantInput'
import Restaurants from '../components/restaurants/Restaurants'

//* Destructure props
function RestaurantsContainer({
  restaurants,
  addRestaurant,
  deleteRestaurant,
}) {
  return (
    <div>
      <RestaurantInput addRestaurant={addRestaurant} />
      <Restaurants
        restaurants={restaurants}
        deleteRestaurant={deleteRestaurant}
      />
    </div>
  )
}
// function RestaurantsContainer(props) {
//   return (
//     <div>
//       <RestaurantInput addRestaurant={props.addRestaurant} />
//       <Restaurants
//         restaurants={props.restaurants}
//         deleteRestaurant={props.deleteRestaurant}
//       />
//     </div>
//   )
// }

const mapStateToProps = (state) => {
  return {
    restaurants: state.restaurants,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addRestaurant: (text) => dispatch({ type: 'ADD_RESTAURANT', text }),
    deleteRestaurant: (id) => dispatch({ type: 'DELETE_RESTAURANT', id }),
    // deleteRestaurant: (id) => console.log(id),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RestaurantsContainer)
