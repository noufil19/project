// Import necessary React, Bootstrap, and react-router-dom components
import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

// Import custom components for the application
import HomePage from './components/home.component'
import Login from './components/login.component'
import SignUp from './components/signup.component'
import Profile from './components/profile.component'

// Define the App functional component
function App() {
  return (
        // Wrap the application with the Router component for handling navigation
    <Router>
      <div className="App">
      {/* // Define a fixed-top navigation bar using Bootstrap classes */}
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
          {/* // Add a link to the home page using the Link component */}
            <Link className="navbar-brand" to={'/'}>
              MusiLinked
            </Link>
            {/* // Define a collapsible navigation menu */}
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            {/* // Create a list of navigation links */}
              <ul className="navbar-nav ml-auto">
              {/* // Add a link to the login page */}
                <li className="nav-item">
                  <Link className="nav-link" to={'/sign-in'}>
                    Login
                  </Link>
                </li>
                 {/* Add a link to the sign-up page */}
                <li className="nav-item">
                  <Link className="nav-link" to={'/sign-up'}>
                    Sign up
                  </Link>
                </li>
                {/* // Add a link to the profile page */}
                <li className="nav-item">
                  <Link className="nav-link" to={'/profile'}>
                    Profile
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* // Create a container for authentication-related components */}
        <div className="auth-wrapper">
          <div className="auth-inner">
          {/* // Define application routes using the Routes component */}
            <Routes>
            {/* // Map each route to its corresponding component */}
              <Route exact path="/" element={<HomePage />} />
              <Route path="/sign-in" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  )
}

// Export the App component for use in other parts of the application
export default App
