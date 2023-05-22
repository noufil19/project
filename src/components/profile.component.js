// Import necessary React and Firebase components
import React, { Component } from 'react'
import { ref, getDownloadURL, listAll } from "firebase/storage"
import { storage } from '../firebase';

// Create a React class component called Profile
export default class Profile extends Component {

    // Define the constructor and initial state for the component
  constructor(props) {
    super(props);
    this.state = {
      spotify: null,
      apple: null,
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
              if (url.includes("spotify")) {
                this.setState({ spotify: url });
              }
              if (url.includes("apple")) {
                this.setState({ apple: url });
              }
              if (url.includes("google")) {
                this.setState({ google: url });
              }
              if (url.includes("facebook")) {
                this.setState({ facebook: url });
              }
              if (url.includes("twitter")) {
                this.setState({ twitter: url });
              }
            })
            .catch((error) => {
              console.error(error);
            });
        })
      });
  }

    // The render method is called to display the component's HTML content
  render() {
    return (
      <div>
         {/* // Display the user's username */}
        <h3>@NoufilSulehri</h3>

        {/* // Display the user's profile picture */}
        <div className="mb-3">
          <img className="profile-pic" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Windows_10_Default_Profile_Picture.svg/2048px-Windows_10_Default_Profile_Picture.png" />
        </div>

        {/* // Display the user's name */}
        <div className="mb-3">
          <label>Name</label>
          <p>Noufil Sulehri</p>
        </div>

        {/* // Display the user's bio or "About me" section */}
        <div className="mb-3">
          <label>About me</label>
          <p className="fs-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac tellus est. Pellentesque ornare, libero.</p>
        </div>

        {/* // Display the user's music preferences as a list */}
        <div className="mb-3">
          <label>Music Preferences</label>
          <ul class="list-group list-group-horizontal list-group-vscroll container-fluid">
            <li class="list-group-item"><a href="">Hip Hop</a></li>
            <li class="list-group-item"><a href="">Pop</a></li>
            <li class="list-group-item"><a href="">Rap</a></li>
            <li class="list-group-item"><a href="">Jazz</a></li>
            <li class="list-group-item"><a href="">Traditional</a></li>
            <li class="list-group-item"><a href="">Upbeat</a></li>
          </ul>
        </div>

        {/* // Display the user's connections to music services */}
        <div className="mb-3">
          <label>Connections</label>
          <div className="mb-3">
            <div class="alert alert-success" role="alert">
              <img className='social-login' src={this.state.spotify} />&nbsp;
              Spotify Connected
            </div>
          </div>
          <div className="mb-3">
            <div class="alert alert-warning" role="alert">
              <img className='social-login' src={this.state.apple} />&nbsp;
              Apple Music Not Connected
            </div>
          </div>
        </div>

        <div className="d-grid">
        </div>
      </div>
    )
  }
}
