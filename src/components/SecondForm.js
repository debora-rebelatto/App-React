import React, { Component } from "react";

class SecondForm extends Component {
  constructor() {
    super()
    this.state = {
      firstName: '',
      lastName: '',
      age: '',
      gender: '',
      destination: '',
      isVegan: false,
      isKosher: false,
      isLactoseFree: false
    }
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    const { type, value, name, checked } = event.target;
    type === 'checkbox'
      ? this.setState({ [name]: checked })
      : this.setState({ [name]: value })

  }

  render() {
    let kosher = this.state.isKosher && 'Kosher';
    let vegan = this.state.isVegan && 'Vegan';
    let lactose = this.state.isLactoseFree && 'Lactose';

    return (
      <main>
        <form>
          <input
            name='firstName'
            value={this.state.firstName}
            onChange={this.onChange}
            placeholder="First Name"
          /> <br />
          <input
            name="lastName"
            value={this.state.lastName}
            onChange={this.onChange}
            placeholder="Last Name"
          /> <br />
          <input
            name="age"
            value={this.state.age}
            onChange={this.onChange}
            placeholder="Age"
          /> <br />
          <label>
            <input
              name='gender'
              type="radio"
              value='male'
              onChange={this.onChange}
            /> Male
                    </label>
          <br />
          <label>
            <input
              name='gender'
              type="radio"
              value='female'
              onChange={this.onChange}
            /> Female
                    </label>

          <br />

          <select
            name="destination"
            value={this.state.destination}
            onChange={this.onChange}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>

          <br />

          <label>
            <input
              name="isVegan"
              type="checkbox"
              value={this.state.isVegan}
              onChange={this.onChange}
            /> Vegan
          </label>

          <label>
            <input
              name="isKosher"
              type="checkbox"
              value={this.state.isKosher}
              onChange={this.onChange}
            /> Kosher
          </label>

          <label>
            <input
              name="isLactoseFree"
              type="checkbox"
              value={this.state.isLactoseFree}
              onChange={this.onChange}
            /> Lactose Free
          </label>
          <br />

          <button>Submit</button>
        </form>
        <hr />
        <h2>Entered information:</h2>
        <p>Your name: {this.state.firstName} {this.state.lastName} </p>
        <p>Your age: {this.state.age} </p>
        <p>Your gender: {this.state.gender}</p>
        <p>Your destination: {this.state.destination}</p>
        <p>
          Your dietary restrictions: <br />
          {kosher} {vegan} {lactose}
        </p>
      </main>
    )
  }
}

export default SecondForm;