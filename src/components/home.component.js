// Import necessary React and react-leaflet components
import React, { Component } from 'react'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'

// Define a constant for the initial map position
const position = [51.505, -0.09]

// Create a React class component called HomePage
export default class HomePage extends Component {
    // The render method is called to display the component's HTML content
    render() {
        return (
            // Create a div container with Bootstrap classes for styling
            <div>
                <div className="w-75 p-3 home-main">
                {/* // Display a title for the feed section */}
                    <h1>Feed</h1>
                    {/* // Create a horizontal scrolling list group using Bootstrap classes */}
                    <ul class="list-group list-group-hscroll container-fluid">
                    {/* // Each list item contains a card with an image and text content */}
                        <li class="list-group-item">
                            <div class="card">
                            {/* // Display a placeholder image at the top of the card */}
                                <img class="card-img-top" src="https://assets.capitalfm.com/2022/43/ed-sheeran--1666953393-editorial-short-form-0.jpg" alt="Card image cap" />
                                {/* // Create a container for the card's text content */}
                                    <div class="card-body">
                                    {/* // Display a paragraph of text content in the card */}
                                        <p class="card-text">Hey Guys, Look at my new blog post about my favourite artists! I will talk more about them in this post.</p>
                                    </div>
                            </div>
                        </li>
                        {/* // The following list items are similar to the first one, each containing a card with an image and text content */}
                        <li class="list-group-item">
                            <div class="card">
                                <img class="card-img-top" src="https://dash-bootstrap-components.opensource.faculty.ai/static/images/placeholder286x180.png" alt="Card image cap" />
                                    <div class="card-body">
                                        <p class="card-text">What type of genre of music is the best? Discussion post down below.</p>
                                    </div>
                            </div>
                        </li>
                        <li class="list-group-item">
                            <div class="card">
                                <img class="card-img-top" src="https://dash-bootstrap-components.opensource.faculty.ai/static/images/placeholder286x180.png" alt="Card image cap" />
                                    <div class="card-body">
                                        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac tellus est. Pellentesque ornare, libero</p>
                                    </div>
                            </div>
                        </li>
                        <li class="list-group-item">
                            <div class="card">
                                <img class="card-img-top" src="https://dash-bootstrap-components.opensource.faculty.ai/static/images/placeholder286x180.png" alt="Card image cap" />
                                    <div class="card-body">
                                        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac tellus est. Pellentesque ornare, libero</p>
                                    </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
