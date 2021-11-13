import './App.css';
import React, { useState } from "react";
import Header from './Header.js';
import { getByDisplayValue } from '@testing-library/react';

const api_url = 
            'https://trade-areas-api.inrix.com/v1/trips-count?geoFilterType=polygon&od=origin&points=47.611512|-122.340262,47.609197|-122.338718,47.607809|-122.334083,47.612669|-122.331422,47.614926|-122.334168&limit=1000';  
      //"https://trade-areas-api.inrix.com/v1/trips?geoFilterType=polygon&od=origin&points=47.611512|-122.340262,47.609197|-122.338718,47.607809|-122.334083,47.612669|-122.331422,47.614926|-122.334168&limit=1000";

  
// Defining async function
async function getapi(url) {
    
    // Storing response
    const response = await fetch(url);
    
    // Storing data in form of JSON
    var data = await response.json();
    console.log(data);
    if (response) {
        hideloader();
    }
    show(data);
}
// Calling that async function
getapi(api_url);
  
// Function to hide the loader
function hideloader() {
    document.getElementById('loading').style.display = 'none';
}
// Function to define innerHTML for HTML table
function show(data) {
  let tab = 
      `<tr>
        <th>Count</th>
       </tr>`;
  
  // Loop to access all rows 
  for (let r of data.list) {
      tab += `<tr> 
  <td>${r.count} </td>          
</tr>`;
  }
  // Setting innerHTML as tab variable
  document.getElementById("employees").innerHTML = tab;
}

class App extends React.Component {
  
  // constructor(props) {

  //   super(props);

  //   this.state = {
  //     items: [],
  //     isLoaded: false,
  //   }

  // }

  

  // componentDidMount() {
      
    

  //   fetch('https://trade-areas-api.inrix.com/v1/trips?geoFilterType=polygon&od=origin&points=47.611512|-122.340262,47.609197|-122.338718,47.607809|-122.334083,47.612669|-122.331422,47.614926|-122.334168&limit=1000') 
  //     .then(res => res.json())
  //     .then(json => {
  //       console.log(json);
  //       getByDisplayValue(json);
  //       this.this.setState({
  //         items: json,
  //         isLoaded: true,
  //       })
  //     }).catch((err) => {
  //       console.log(err);
  //     })

  // }

  //renders App
  render() {

    return (  
      <div className="App">
        <body>
          <Header />
          <div class="sidenav">
            <a href="#">Most Popular</a>
            <a href="#">Least Popular</a>
            <a href="#">MISC</a>
          </div>

          <div class="content">
            <h2>CSS Template</h2>
            <p>A full-height, fixed side and content.</p>
          </div>

          <div class="d-flex justify-content-center">
            <div class="spinner-border" 
                 role="status" id="loading">
                <span class="sr-only">Loading...</span>
            </div>
        </div>
        <h1>Registered Employees</h1>
        <table id="employees"></table>

          </body>
      </div>
    );

  }

}

export default App;
