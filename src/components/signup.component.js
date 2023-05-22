// Import React and Component from the React library
import React, { Component } from 'react'

// Create a React class component called SignUp
export default class SignUp extends Component {
    // The render method is called to display the component's HTML content
  render() {
    return (
            // Create a form for user registration
      <form>
        <h3>Sign Up</h3>

        {/* // Create a text input field for the user's first name */}
        <div className="mb-3">
          <label>First name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
          />
        </div>

        {/* // Create a text input field for the user's last name */}
        <div className="mb-3">
          <label>Last name</label>
          <input type="text" className="form-control" placeholder="Last name" />
        </div>

        {/* // Create an email input field for the user's email address */}
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>

        {/* // Create a password input field for the user's password */}
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>

        {/* // Create a submit button to submit the registration form */}
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>

        {/* // Display a link for users who are already registered to sign in */}
        <p className="forgot-password text-right">
          Already registered <a href="/sign-in">sign in?</a>
        </p>
      </form>
    )
  }
}
