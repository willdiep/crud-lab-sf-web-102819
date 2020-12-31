import cuid from 'cuid'

export default function manageRestaurants(
  state = {
    restaurants: [
      // {
      //   id: 1,
      //   text: 'taco',
      // },
    ],
    reviews: [],
  },
  action
) {
  switch (action.type) {
    case 'ADD_RESTAURANT':
      // console.log('reducer received this action:', action)
      const restaurantObj = {
        id: cuid(),
        text: action.text,
      }

      return {
        ...state,
        restaurants: [...state.restaurants, restaurantObj],
      }

    case 'DELETE_RESTAURANT':
      // console.log('reducer received this action:', action)
      return {
        ...state,
        restaurants: [
          ...state.restaurants.filter((obj) => obj.id !== action.id),
        ],
        reviews: [...state.reviews.filter((obj) => obj.restaurantId !== action.id)],
      }

    case 'ADD_REVIEW':
      // console.log('reducer received this action:', action)
      const reviewObj = {
        id: cuid(),
        text: action.review.text,
        restaurantId: action.review.restaurantId,
      }

      return {
        ...state,
        reviews: [...state.reviews, reviewObj],
      }

    case 'DELETE_REVIEW':
      // console.log('reducer received this action:', action)
      return {
        ...state,
        reviews: [...state.reviews.filter((obj) => obj.id !== action.id)],
      }

    default:
      return state
  }
}
