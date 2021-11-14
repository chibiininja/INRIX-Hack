import './App.css';
import React from "react";
import Header from './components/Header.js';
import { MapContainer, TileLayer, Rectangle, Tooltip} from 'react-leaflet'; 
 
const cSize = 40;
const count = [];
for(let i=0; i<cSize; i++){
  count[i] = Array(cSize);
}
newFunc2();
//newFunc3();

//RANDOM Version
function newFunc2() {
  const start_lat = 37.857;
  const start_long = -122.540;
  const mileSS = 159/32000;
  for(let i = 0; i < cSize; i++){
    for(let j = 0; j < cSize; j++){

      var lat1 = start_lat - (i * (mileSS));//negative
      var long1 = start_long + (j * (mileSS));//positive
      var lat2 = start_lat - mileSS - (i * (mileSS));//negative
      var long2 = start_long + mileSS + (j * (mileSS));//positive
      const coordinate = {
        br: [lat2, long2],
        tl: [lat1, long1],
        count: Math.ceil((Math.random()*100)),
      }
      count[i][j] = coordinate;
    }
  }
}


//API Version
// async function newFunc3() {
//   const start_lat = 37.857;
//   const start_long = -122.540;
//   const mileSS = 159/32000;
//   for(let i = 0; i < cSize; i++){
//     for(let j = 0; j < cSize; j++){

//       var lat1 = start_lat - (i * (mileSS));//negative
//       var long1 = start_long + (j * (mileSS));//positive
//       var lat2 = start_lat - mileSS - (i * (mileSS));//negative
//       var long2 = start_long + mileSS + (j * (mileSS));//positive
//       // const coord = {
//       //   br: [lat2, long2],
//       //   tl: [lat1, long1],
//       //   count: Math.ceil((Math.random()*100)),
//       // }
//       // count[i][j] = coord;

//       const url = `https://api.iq.inrix.com/v1/trips-count?od=destination&geoFilterType=bbox&points=${lat1}%7C${long1}%2C${lat2}%7C${long2}&limit=10&providerType=consumer&startDateTime=%3E%3D2020-12-01T02%3A31&endDateTime=%3C%3D2020-12-15T02%3A31`;
      
//       //const url = `https://api.iq.inrix.com/v1/trips-count?od=destination&geoFilterType=bbox&points=${lat1}%7C${long1}%2C${lat2}%7C${long2}&startDateTime=%3E%3D2020-12-01T02%3A31&endDateTime=%3C%3D2020-12-15T02%3A31`;
//       console.log(url); 
      
     
//       fetch(url, {
//       headers: {
//         "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhcHBJZCI6IjFqdW5xeWdkcWciLCJ0b2tlbiI6eyJpdiI6IjgyODYyMjZmOTRiYTEwMDlmODhhOTUyMjMxMzNmNDA5IiwiY29udGVudCI6ImUzMGUzNDFhZGY0YWEzMDRlMWIyYjVlYTBlOGVlZTYwNzQwYWJlNGRiYTg2YTExZTQ2YmYyNDdmYTBlZTM5YTEzOTljZWFkMzg3N2EzMWFiYTNiZmU1ZTRkMTY1YmRlNWM1MGQ3YmViODJiY2Q0Y2JmYjkwNTM1N2M0Y2IyNzI2YzRhYzFjYWZiMzY1Yzc2OWUyZjFiOGI0YTM4M2E1ZDI0OWVhM2M3MzMxNjljYzM0MWI4ZDNhNDQ4ZmVlZmVjZWIxYmM0OTYzZjU5NDQzYjVhOWQ1MTIxYjA5MWZjNTVkOTBlMmRlYWM4NzMzNDk1ZGM1YzA3MWEzZjQ2YWRmMDQ3Mjg5NGVjNzgyMmVjNGMxYWZkZmNmMDg0YzM5NjdiZTJiMTMwNTgwMjcxN2I4YjcxZDdiYTdlOTQxZTI4MTA1MDNlYzYyOGEyYWYzYTVjNDc4ZDgxMTdkZTJhOGM5OTNiMDBkMDJhZjAzNGM4MTFmMjgyYjM3NTAxNjIzN2UyZGUyYWI5MWRkOGNhM2MwOTVmNWZiYWVjMmE3NzRmMjVmOTJlODVmNGM1YmM2NmY5NzQwZWUyMDg1MzEwMDRkMjA2OTEyM2E2YmNlOGQ4ZWJhODc4MWFmOGExNzllZmQ5MmQxNDRhOGM5ZjAxYmM2NmE5ZmE1OTljY2VlN2FiNjA5YTkwMmZkNzc5Njg3NTkyNTAyZjY4NzI2NTBkNDBkYWQ1NTQ2ZmE2NDRmNWQzMGM3ZTJlODE4ZjIwY2Y2ZDk4Y2Y5NzdkZjQ2MmZkZTBkZTA1Y2UxODVlNTk2MDE0N2E4OGJjMDc5YzYyNzkyNTNlNWNiNjg3YzkwNTI5ZmFkMWZiZTRhNGMyNWI0NjUyMzg4OGFiNTVmIn0sInNlY3VyaXR5VG9rZW4iOnsiaXYiOiI4Mjg2MjI2Zjk0YmExMDA5Zjg4YTk1MjIzMTMzZjQwOSIsImNvbnRlbnQiOiJlMzVhMTIxZDhkNjJhZTNlZTZiM2JhZjE2YjhkZjYwYjczMmFjMjRjYTJiMTgzN2Y0Mzg1NWMxZmRjZWU3YTlkMjhhZDkxYWY5YzI4MDdkMTljYjJjZWRhIn0sImp0aSI6ImYzYzNkYjlmLTk4ODYtNGMyMS05MTNlLWExNzA3Yjc0NzFmNiIsImlhdCI6MTYzNjg4Mjg2MywiZXhwIjoxNjM2ODg2NDYzfQ.RqDu9JDiTqe0PhBeFgBn9K_rk45RnSpak44S_sMSKVo",
//       }
//     }) 
//       .then(res => res.json())
//       .then(json => {
//         console.log(json);
//         // count[i].push(json);
//         const coord = {
//           br: [lat2, long2],
//           tl: [lat1, long1],
          
//           count: Number(json.count),
//         }
//         count[i][j] = coord;
//         console.log(coord);
//       }).catch((err) => {
//         console.log(err);
//       })

//       await new Promise(r => setTimeout(r, 3000))
//     }
//   }
// }



function MapSlot() {
  return (
    <MapContainer center={[37.7785, -122.441]} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {createGrid(count)}
    </MapContainer>
  );
}

function createGrid(coordsGrid) {
  return coordsGrid.map(createRow);
}

function createRow(row) {
  return row.map(createRectangle);
}

function createRectangle(coord) {
  const rectangle = [coord.br, coord.tl];
  
  let color = {};

  if(coord.count < 90) 
    color = { color: 'Salmon' };
  else
    color = { color: 'RoyalBlue' };
  return <Rectangle key={coord.br+coord.tl} bounds={rectangle} pathOptions={color}>
      <Tooltip>{coord.count}</Tooltip>
    </Rectangle>;
}

class App extends React.Component {
  
  constructor(props) {

    super(props);

    this.state = {
      coords: count,
      isLoaded: false,
    }

  }

  //http://docs.inrix.com/analytics/tradeareatrips/#get-trips-count

  componentDidMount() {
    
    this.setState({
      coords: count,
      isLoaded: true,
    })
    showArray();
  }

  // async newFunc() {
  //   const start_lat = 37.857;
  //   const start_long = -122.540;
  //   const mileSS = 159/32000;
  //   for(let i = 0; i < cSize; i++){
  //     for(let j = 0; j < cSize; j++){

  //       var lat1 = start_lat - (i * (mileSS));//negative
  //       var long1 = start_long + (j * (mileSS));//positive
  //       var lat2 = start_lat - mileSS - (i * (mileSS));//negative
  //       var long2 = start_long + mileSS + (j * (mileSS));//positive
  //       // const coord = {
  //       //   br: [lat2, long2],
  //       //   tl: [lat1, long1],
  //       //   count: Math.ceil((Math.random()*100)),
  //       // }
  //       // count[i][j] = coord;

  //       const url = `https://api.iq.inrix.com/v1/trips-count?od=destination&geoFilterType=bbox&points=${lat1}%7C${long1}%2C${lat2}%7C${long2}&limit=10&providerType=consumer&startDateTime=%3E%3D2020-12-01T02%3A31&endDateTime=%3C%3D2020-12-15T02%3A31`;
        
  //       //const url = `https://api.iq.inrix.com/v1/trips-count?od=destination&geoFilterType=bbox&points=${lat1}%7C${long1}%2C${lat2}%7C${long2}&startDateTime=%3E%3D2020-12-01T02%3A31&endDateTime=%3C%3D2020-12-15T02%3A31`;
  //       //console.log(url); 
        
       
  //       fetch(url, {
  //       headers: {
  //         "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhcHBJZCI6InZkanR3MTVvNjYiLCJ0b2tlbiI6eyJpdiI6ImQ5ZjQ2NjYzY2EyNmVkMmYxN2Y3MWZlMGZiYmYwMzNmIiwiY29udGVudCI6IjliZmRjZTZlMTBmNjQzNGY3ZmUzNTVjMWU0MjZmNGE5M2Y0ZjNiZmIxYzdkY2VhNmU4YmEyYzczNDI3NWNkNjAxZmMyNzVkMjMxYjA2ZDY2YmQ0NjNiMjU3MjUyNTIxMTY0YmJjNTU0ZjY3M2NkZTdjZTg3NjJhZDE5NTU2ODAxNTk2OTVhYjIxZGE3M2ZkNzQwZDBkYzAzNDk2N2E0MThiOTFjMTNjNzdkM2U0MjQwMTc4YmIxZTYwMWZiNGYyZTIwYmY0ODE3NGM2NWU4NDFjZGVlOTNkMmM2NWQ0ODdlYzYwMjFkODhmNTlmNzMyNTExZTNmYTg2YTExMjFlNzE1MGY4MjQ1YTEwYjFkNzBiMDU2OTQ0N2UwZjI5ZGU2NTVhNTAzZjk1OWRhYmM5MGM1NGFmMGI3OTYxZThjYWFiOWRkMDE0ZjhkMTA5OWUwOWYwOGZlMDgwNzU4MjM4Njk4MWEwZWM3YjdlNTk4ZGQ5ODc0MzU2NjgwZTI1NDU5NzVmMDkyMjZkMWIwM2ExNmI1Zjk2ZTlmMDVlN2ExZGNmNTZjZjc3YmUxOGFhMDg2M2UzZGU0MjE2MzIxZjdmYmRjN2QxNGUyNjczNGFhNTllMmM4N2UyOTkxZjQ1NTBkZjhiNmE4NjA1OWMyNTgxNDM5YzZhZDQxOTY3NjMxZTY0OThhOTEwNTcwYTlhYzZiOGNjMzYzZTU0NGM0MTRiYTEwOTRkZTJkMDY3MjFkZTQyMTM4YjdiZDcyNmY4YjE5YzZmYzc5NjdlZWI0Y2E3OGNiN2FkYzc3ZTI3MThiNzRjOTAwMjExMDdjOWQ2NThmYTU2YWM0NGU1M2IyYTk0NDkyYmQwNjE5ZGI2YWMwZWJlNDhjNDgzIn0sInNlY3VyaXR5VG9rZW4iOnsiaXYiOiJkOWY0NjY2M2NhMjZlZDJmMTdmNzFmZTBmYmJmMDMzZiIsImNvbnRlbnQiOiJhY2I0YzM3MDE1ZjM1Mzc0NjhmOTU1ZDBkYzY5ZDlkMDE4NmE0YmEyNjY3YmQ2ZTZiMmM5MzQzYzY5NGNjYTc3MjJmMDZkOWU0ZGJiNjI3YmFmNjMzNjFiIn0sImp0aSI6IjhjMDkzZDYwLWYwYjctNDY3OS04Y2NiLTY2Yzg5MGU1MWY1ZiIsImlhdCI6MTYzNjg4MzY3MCwiZXhwIjoxNjM2ODg3MjcwfQ.ZQ2SD5UMP_rBK-9oNMLQhypst3s9WoPGy_1gUP9xhZo",
  //       }
  //     }) 
  //       .then(res => res.json())
  //       .then(json => {
  //         console.log(json);
  //         const coord = {
  //           br: [lat2, long2],
  //           tl: [lat1, long1],
  //           count: Number(json.count),
  //         }
  //         count[i][j] = coord;
  //       }).catch((err) => {
  //         console.log(err);
  //       })

  //       await new Promise(r => setTimeout(r, 3000))
  //     }
  //   }
  // }

  // const tableData = count.map((row) =>
  //   <tr>{row}</tr>
  // );

  //renders App
  render() {

    return (  
      <div className="App">
        <body>
          
          <Header />

          {/* <div class="content">
            <h2>Population Density</h2>
            <p>San Francisco, California</p>
            { <table>{tableData}</table> }
          </div>  */}

          <MapSlot />

          {/* <div class="sidenav">
            <a href="#">Most Popular</a>
            <a href="#">Least Popular</a>
            <a href="#">MISC</a>
          </div> */}

        </body>

      </div>

      
    );

  }


}

function showArray() {
  // Dummy values for testing rn
  // for(let i=0; i<cSize; i++){
  //   for(let j=0; j<cSize; j++){
  //     count[i][j] = Math.ceil((Math.random()*100));
  //   }
  // }

  for(let i=0; i<cSize; i++){
    console.log(count[i]);
  }
}

export default App;