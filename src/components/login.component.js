// Import necessary React, Firebase, and react-router-dom components
import React, { Component } from 'react'
import { ref, getDownloadURL, listAll } from "firebase/storage"
import { storage } from '../firebase';
import { Link } from "react-router-dom";

// Create a React class component called Login
export default class Login extends Component {

  // Define the constructor and initial state for the component
  constructor(props) {
    super(props);
    this.state = {
      facebook: null,
      twitter: null,
      google: null
    };
  }

    // Fetch social media icons from Firebase storage once the component is mounted
  componentDidMount() {
    const images = [];
    const reference = ref(storage, '/images');
    listAll(reference)
      .then(r => {
        r.items.forEach(i => {
          getDownloadURL(ref(storage, i))
            .then((url) => {
             // Update the component state based on the fetched image URLs
              console.log(url);
              if (url.includes("google.png")) {
                this.setState({ google: url });
              } else if (url.includes("facebook.png")) {
                this.setState({ facebook: url });
              } else if (url.includes("twitter.png")) {
                this.setState({ twitter: url });
              }
            })
            .catch((error) => {
              console.error(error);
            });
        })
      });
  }

  // Handle form submission for login
  signUpSubmit = e => {
    e.preventDefault();
    console.log(e.target[0].value);
    console.log(e.target[1].value);
  }


    // The render method is called to display the component's HTML content
  render() {
    return (
      <div>
         {/* // Create a form for the login process */}
        <form onSubmit={this.signUpSubmit}>
          <h3>Sign In</h3>

          <div className="mb-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
            />
          </div>

          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
            />
          </div>

          <div className="mb-3">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
              />
              <label className="custom-control-label" htmlFor="customCheck1">
                Remember me
              </label>
            </div>
          </div>

          {/* // Create a submit button with a link to the home page */}
          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
            <Link style={{color: 'yellow'}} to="/">Submit</Link>
            </button>
          </div>
          {/* // Add a link for password recovery */}
          <p className="forgot-password text-right">
            Forgot <a href="#">password?</a>
          </p>
        </form>
        {/* // Display social media icons for alternative login methods */}
        <h3 className="mb-3 text-center">
          or
          <hr />
          <a href="/">
          <img className='social-login' src={this.state.google} />&nbsp;&nbsp;
          <img className='social-login' src={this.state.facebook} />&nbsp;&nbsp;
          <img className='social-login' src={this.state.twitter} /></a>

        </h3>
        <div className='mb-3'>
        </div>
      </div>
    )
  }
}
