import React, { Component } from 'react'

class RestaurantInput extends Component {
  state = {
    text: '',
  }

  handleOnChange = (e) => {
    const { name, value } = e.target
    this.setState({
      [name]: value,
    })
  }

  handleOnSubmit = e => {
    e.preventDefault()
    
    this.props.addRestaurant(this.state.text)

    this.setState({
      text: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <label>Add Restaurant: </label>
          <input
            type='text'
            value={this.state.text}
            name='text'
            onChange={this.handleOnChange}
          />
        </form>
      </div>
    )
  }
}

export default RestaurantInput
