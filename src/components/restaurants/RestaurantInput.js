import { useState } from 'react'

function RestaurantInput({ addRestaurant }) {
  const [text, setText] = useState('')

  const handleOnChange = (e) => {
    setText(e.target.value)
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()
    addRestaurant(this.state.text)
    setText('')
  }

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <label>Add Restaurant: </label>
        <input type='text' value={text} name='text' onChange={handleOnChange} />
        <input type='submit' />
      </form>
    </div>
  )
}

export default RestaurantInput
