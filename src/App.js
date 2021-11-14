import './App.css';
import React from "react";
import Header from './Header.js';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
 
const count = [];

class App extends React.Component {
  
  constructor(props) {

    super(props);

    this.state = {
      items: [],
      isLoaded: false,
    }

  }

  //http://docs.inrix.com/analytics/tradeareatrips/#get-trips-count

  componentDidMount() {
    const start_lat = 37.352039;
    const start_long = -121.937393;
    const mileBS = 5/69;
    const mileSS = 5/1104;
    for(let i = 0; i < 32; i++){
      for(let j = 0; j < 32; j++){
        var lat1 = start_lat + mileBS - (i * (mileSS));
        var long1 = start_long - mileBS + (j * (mileSS));
        var lat2 = start_lat + mileBS - mileSS - (i * (mileSS));
        var long2 = start_long - mileBS + mileSS + (j * (mileSS));


        const url = `https://api.iq.inrix.com/v1/trips-count?od=origin&geoFilterType=bbox&points=%${lat1|long1},${lat2|long2}&startDateTime=%3E%3D2020-12-01T02%3A31&endDateTime=%3C%3D2020-12-15T02%3A31`;
      fetch(url, {
        headers: {
          "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhcHBJZCI6IjFqdW5xeWdkcWciLCJ0b2tlbiI6eyJpdiI6ImZjNjg2MmNmNGNlOTY3NTc2NzVjNWIxYzFhYTkwN2FjIiwiY29udGVudCI6Ijk3Mzk2ZjU4YmU0ZmQzNmFmY2FmOWE3MzIxZGFkMTBiYTdhY2RmOWRlN2Y3ZTRkZDNiOGQ0ZmE3YTc5ZjAxNjY2MzlmMGEwNDE2NzVlY2NkYWEzMWQ3ZDU5Zjc0NjA1YzJjODgyYWU4OGNkZWRhYTc2NGNkYWU0MTM2Mzk0YzllYWQ1NDViNjI5MzRlMWQ4Mzc1NDUyNmU4ODc5M2Q4MWY5NzUwM2NhZWE1NzljMDkyM2VkYWYwNWI3ZmEyNzUyMzU1OTdiYmE2NzRjZTBhMzMwODZiMTEwMzM5OTczMDdjZDA4NWYxY2MzYjdiNzAzMTY4NDZhMzg4M2ZhM2VlOWE3YjdjMDYxMjQ3YWU0MGFjYjFmNGJkODIyMGZlMTBlY2Y5MDUxNDczNzQ3NzcxZjQ5MWVkNzllOWIyNTFlNmYwNzY0MjdiYzJjZDAzODUzNWQ4ZWY0MDQyYWI4YTUzNTM4MzA2MzhhMDFiNTExMDk4MjU5Y2FmMDY5NjgxZWQzYzVkZWY4NzMzNmE3YmEyNDNlYWI4NzI1OTFhZWVhYTZjYzBjZDk3YTFhMWIxZDM0ZTBlNGY0NTA3Nzc1NWIwZTFmYWI2N2E3ODE3NjgxM2VkNGIyOTEwZWMwOTliMmEzYTcwOWEwZjNlNmE5MjRjZTE0OTNkM2M4ZTAwNjZlMWZlNzFmNDIzYmI3Mzc0YjUwNTU5NDdmNDE0OWM0Mzg2N2MyOGMyYjZiYmVkMWM4MzM5ZjMzZWIxY2VmNmFiYjcxYmRlZGRiY2RjNjdiYjhhNTdlZmMxOWQ2MDMwN2I3ZWY4NGUyNGEwYzRlMDI2NWEzNzcwNTg0Yzc4MTE2ZTU5ODcwNDlhNGQxMWQ1MDNkNDc3M2U0ODMwIn0sInNlY3VyaXR5VG9rZW4iOnsiaXYiOiJmYzY4NjJjZjRjZTk2NzU3Njc1YzViMWMxYWE5MDdhYyIsImNvbnRlbnQiOiJhMzNhMTE0YThlN2FkNDcyZjZiY2E0N2M0Njk2ZDM2MjlhYWVkN2RhZmVlZGUzYmMwMWI0N2ZlNWM0OTEzNDUxNzI4OTE1MGU1YzQyZDBmMjgwMDFlY2ViIn0sImp0aSI6IjUzZDgwZTcwLTBkNWUtNDdmMy1hNWM5LWFjYWYxOTcwNTEzNCIsImlhdCI6MTYzNjg0MjU3NSwiZXhwIjoxNjM2ODQ2MTc0fQ.YTcHkg_Azl4ttqOhEIYbp9Zb_By9cMOCMdH7L55sRsU"
        }
      }) 
        .then(res => res.json())
        .then(json => {
          count[i]=(json);
          console.log(json);
          this.this.setState({
            items: json,
            isLoaded: true,
          })
        }).catch((err) => {
          console.log(err);
        })

      }
      

    }
  }

  //renders App
  render() {

    return (  
      <div className="App">
        <body>
          <Header />
          <div class="sidenav">
            {/* <a href="#">Most Popular</a>
            <a href="#">Least Popular</a>
            <a href="#">MISC</a> */}
          </div>

          <div class="content">
            <h2>CSS Template</h2>
            <p>A full-height, fixed side and content.</p>
          </div>

          <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={[51.505, -0.09]}>
                <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
              </Marker>
          </MapContainer>

        </body>
      </div>
    );

  }

}

export default App;
