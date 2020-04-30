import React, { Component } from 'react';

class Forms extends Component {
  constructor() {
    super()
    this.state = {
      firstName: '',
      lastName: '',
      textarea: '',
      isFriendly: true,
      gender: '',
      favColor: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value, type, checked } = event.target;
    type === 'checkbox'
      ? this.setState({ [name]: checked })
      : this.setState({ [name]: value })
  }

  render() {
    return (
      <form>
        <input
          type="text"
          value={this.state.firstName}
          name="firstName"
          placeholder="first name"
          onChange={this.handleChange}
        />

        <input
          type="text"
          value={this.state.lastName}
          name="lastName"
          placeholder="last name"
          onChange={this.handleChange}
        />

        <br />

        <textarea
          value={this.state.textarea}
          name="textarea"
          onChange={this.handleChange}
        />

        <br />

        <input
          type="checkbox"
          name="isFriendly"
          checked={this.state.isFriendly}
          onChange={this.handleChange}
        />

        <br />

        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={this.state.gender === 'male'}
            onChange={this.handleChange}
          /> Male
        </label>


        <br />

        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={this.state.gender === 'female'}
            onChange={this.handleChange}
          /> Female
        </label>

        <br />

        <select
          value={this.state.favColor}
          onChange={this.handleChange}
          name="favColor"
        >
          <option value="red"> red </option>
          <option value="green"> green </option>
          <option value="blue"> blue </option>
        </select>

      <br />

      <button> Submit </button>

        <h1>
          {this.state.firstName} <br />
          {this.state.lastName} <br />
          {this.state.textarea} <br />
          {this.state.gender} <br />
          {this.state.favColor} <br />
        </h1>
      </form>
    )
  }
}

export default Forms;