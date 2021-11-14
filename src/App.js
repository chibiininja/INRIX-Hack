import './App.css';
import React from "react";
import Header from './components/Header.js';
import MapSlot from './components/MapSlot.js'
 
const count = [];

// for(int i=0; i<30; i++){
//   count[i] = Array(30);
// }





class App extends React.Component {
  
  // constructor(props) {

  //   super(props);

  //   this.state = {
  //     items: [],
  //     isLoaded: false,
  //   }

  // }

  //http://docs.inrix.com/analytics/tradeareatrips/#get-trips-count

   componentDidMount() {
    this.newFunc();
  }

  async newFunc() {
    const start_lat = 37.857;
    const start_long = -122.540;
    //const mileBS = .159;
    const mileSS = 159/32000;
    for(let i = 0; i < 5; i++){
      for(let j = 0; j < 5; j++){

        var lat1 = start_lat - (i * (mileSS));//negative
        var long1 = start_long + (j * (mileSS));//positive
        var lat2 = start_lat - mileSS - (i * (mileSS));//negative
        var long2 = start_long + mileSS + (j * (mileSS));//positive
        

        const url = `https://api.iq.inrix.com/v1/trips-count?od=destination&geoFilterType=bbox&points=${lat1}%7C${long1}%2C${lat2}%7C${long2}&limit=10&providerType=consumer&startDateTime=%3E%3D2020-12-01T02%3A31&endDateTime=%3C%3D2020-12-15T02%3A31`;
        
        //const url = `https://api.iq.inrix.com/v1/trips-count?od=destination&geoFilterType=bbox&points=${lat1}%7C${long1}%2C${lat2}%7C${long2}&startDateTime=%3E%3D2020-12-01T02%3A31&endDateTime=%3C%3D2020-12-15T02%3A31`;
        //console.log(url); 
        
        console.log(url); 
        fetch(url, {
        headers: {
          "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhcHBJZCI6Ijh4YjFwbzViMjEiLCJ0b2tlbiI6eyJpdiI6ImQ4MmQwMjhmMzM0OGE3NjQ2ZjdmZjNmNWU0MzVhYjI3IiwiY29udGVudCI6ImFiOGMzZWM5YjhjY2MzZjNlODVjZjYyMTU2YWUwZmY5NTNiZWE2Njk1YTMxN2NlNGQ3NmEzZTk0NzM4N2RhMWIyN2FlNWIxZTUzYWFjMmUxMjZjOTQyMTVmZjEyMzU5MDA5YTk2NTQ3NDM0OTE5ZWVlOTY3NDNjMTI4YTRkNGU2NjIyZmEyZjFiZjNhYWUzZTA5MjBkMjBlNWI3NDJhMjU1ODhkZmQzMzg2YThmY2JkMzcxZDVhMjdmNGJjYjg3NWVlZGYxMGY2N2I3ZmJiNjU5NWJlODgyZmQyYmJmODQwYjk4ZGQwMDg5NGFkYzBjY2EzYWM4MDE4ZjE1YzdmOGU3MjJlMzdlMzhhNmU5ZmNlODQwYTVhODFmOTZiZGNhMmVjMTI0NzQ1MTQ2M2Y1N2FmMmI3YjRiMjc0NDc5NjQzZTkzMDdkOWQyZjAyZjZmNzE2OWIzYTY5NGI4OGU1ZDM5MmUxYjRmMzcwN2Q5N2UwMzFmOGUyNTgxM2Q2NGE3NmZiMzQxNTcxNTllNDkwNjM2YjkwYmY4NDc5YzZkMGI5Yzk2ZjYwNjUzYjYwZTY4NjViMDY0OTIxZjBiN2IyM2NiYzk5ZjAzZDJlYzk2MGE2Nzk1ODIyNjFjMTdlNWQ2MDg4M2Q4MWIyN2M2NTc5NGMyOWQ0NjFhYzhjNGQzMzFhYTBmYTc3YmNkZDRlOWU4NTM5Nzg1YzQ4Y2U2NDU0NjgxYTM0ZmMxNTkyYTU5MzJkZjczYzMyYzc5YTE5YjcyY2RlNGRmZGQ4YWU4MWMxYmI5OTFiM2E1MzA0MTY1ZTIyMDkyYjhkMTc3YTM3NGVkYmY0YzZkZmQ1MTIyNDUwYzYyMGRlNWZhYWRmNDIzZWI1MDhkMzk0In0sInNlY3VyaXR5VG9rZW4iOnsiaXYiOiJkODJkMDI4ZjMzNDhhNzY0NmY3ZmYzZjVlNDM1YWIyNyIsImNvbnRlbnQiOiJhYWQ4MmNlODhhZGVjOGRmZGUwY2U2MzEzN2U1MGVhYTZmYjU4MjJkNDIwODFhOTI4MTQyMDdjNzY5YTdlMzA4MTg4MDI0N2QzMDk4Y2NjNzc2OWQ1MzJiIn0sImp0aSI6IjM2Y2Q1YzUxLThhODEtNGI2OC1hOTBhLWE2OTBhYTYwZjYxZCIsImlhdCI6MTYzNjg2OTQ1OSwiZXhwIjoxNjM2ODczMDU5fQ.lrauMJkVp_5lswzBOA7e61XIVNPx8UfB5KLEdAmmrK4",
        }
      }) 
        .then(res => res.json())
        .then(json => {
          console.log(json);
          count.push(json);
        }).catch((err) => {
          console.log(err);
        })

        await new Promise(r => setTimeout(r, 3000))
      }
    }
  }
  //renders App
  render() {

    return (  
      <div className="App">
        <body>
          
          <Header />

          <div class="content">
            <h2>Population Density</h2>
            <p>San Francisco, California</p>
          </div> 

          <MapSlot />

          <div class="sidenav">
            <a href="#">Most Popular</a>
            <a href="#">Least Popular</a>
            <a href="#">MISC</a>
          </div>

        </body>
      </div>
    );

  }


}
export default App;
