import React, { Component } from 'react'

class ReviewInput extends Component {
  state = {
    text: '',
  }

  handleOnChange = (event) => {
    const { name, value } = event.target
    this.setState({
      [name]: value,
    })
  }

  handleOnSubmit = (event) => {
    event.preventDefault()
    this.props.addReview({ text: this.state.text, restaurantId: this.props.restaurantId })

    this.setState({
      text: '',
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <label>Add Review: </label>
          <input
            type='text'
            value={this.state.text}
            name='text'
            onChange={this.handleOnChange}
          />
          <input type='submit' />
        </form>
      </div>
    )
  }
}

export default ReviewInput
