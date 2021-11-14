import './App.css';
import React from "react";
import Header from './components/Header.js';
import { MapContainer, TileLayer, Rectangle} from 'react-leaflet'; 
 
const cSize = 32;
const count = [];
for(let i=0; i<cSize; i++){
  count[i] = Array(cSize);
}
newFunc2();


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

  if(coord.count < 10) 
    color = { color: 'red' };
  else
    color = { color: 'green' };
  return <Rectangle key={coord.br+coord.tl} bounds={rectangle} pathOptions={color} />
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
    this.newFunc();
    this.setState({
      coords: count,
      isLoaded: true,
    })
    showArray();
    createTable([["row 1, cell 1", "row 1, cell 2"], ["row 2, cell 1", "row 2, cell 2"]]);
    makeTableHTML(count);
  }

  async newFunc() {
    const start_lat = 37.857;
    const start_long = -122.540;
    const mileSS = 159/32000;
    for(let i = 0; i < cSize; i++){
      for(let j = 0; j < cSize; j++){

        var lat1 = start_lat - (i * (mileSS));//negative
        var long1 = start_long + (j * (mileSS));//positive
        var lat2 = start_lat - mileSS - (i * (mileSS));//negative
        var long2 = start_long + mileSS + (j * (mileSS));//positive
        const coord = {
          br: [lat2, long2],
          tl: [lat1, long1],
          count: Math.ceil((Math.random()*100)),
        }
        count[i][j] = coord;

        //const url = `https://api.iq.inrix.com/v1/trips-count?od=destination&geoFilterType=bbox&points=${lat1}%7C${long1}%2C${lat2}%7C${long2}&limit=10&providerType=consumer&startDateTime=%3E%3D2020-12-01T02%3A31&endDateTime=%3C%3D2020-12-15T02%3A31`;
        
        //const url = `https://api.iq.inrix.com/v1/trips-count?od=destination&geoFilterType=bbox&points=${lat1}%7C${long1}%2C${lat2}%7C${long2}&startDateTime=%3E%3D2020-12-01T02%3A31&endDateTime=%3C%3D2020-12-15T02%3A31`;
        //console.log(url); 
        
       
      //   fetch(url, {
      //   headers: {
      //     "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhcHBJZCI6IjFqdW5xeWdkcWciLCJ0b2tlbiI6eyJpdiI6ImQ4MmQwMjhmMzM0OGE3NjQ2ZjdmZjNmNWU0MzVhYjI3IiwiY29udGVudCI6ImQ2MjQ4NDVmZTIyYTNiYTFmYTgwZDNkZjc1Njc3NTg3MDhlZWNkOWVhZDI3YWZlOWY2NTIxNDA3ODU1NGIwNzFhZmNkMmIyNTQ2NGE1NmMwOWZkNzZlNTFhOGMyMDFmNzc0OGY4MjE4ZTUxYzYxNTlmMGU5NTE2MDI3OGU2ZTBmMGE3N2FhM2JjN2MxMDc3OWE5ZjQzOGY4MTJmOGQ4NjIwNTA1ZDgwMDdiMTgxYjAzNDljYTBlZDJiOTgyMGI5YzMwNzA2YTlmYWRhZTVkMDgyOTA1ZTBiOGIyMjBlN2U5YTQ0MDNmNDdhOTA1ODMyZTRlYWM2ZjIzZTg3ZGUzMzQ4YzVkZWM3YjM3NTYzMjViNjU2ODIyYWExZDBjMmY2MDRiZTk4NmQwN2RhYWUxY2JhOWE5NTdlM2I5OWU2M2QyMTVhNTY1YWUyMDk3Njg0NDM4MzVhMzkwNDgwNzgyMDdjNGE4ZjEzODdhYWZhY2U3NjBhNWY5YmExMTMyZjk4Yzc4NDQ3NGRhOTQwODJhYTQ2NzQ0MTM0YzY5OGQ2MWNmMjFiNGMxZDgyZjI2ZjQzMTcwYzhhMDNlZjhkZmZjZjNkZTU2N2E1ZDFmZmEwNWVjOTIzNDQ0OTJlODg4YTIyYTJlNzY3M2Y1ZmY3NTVlMWYzZTkzZmUzZThhYTZjZWY0NGI1MjFhNGIwNDM5MzljMTkzMzM4MmE2YjEyODE2Njc4YTBiZDJjMjhjZGNkYmQ1YzU1YjI3NTEzZWUyMzQ0ZDFlNWZhNTY2MWQ5NWNiYjNkMmJiNzkzMTkwZmU4YzkwYTg3NWEzZjJmMzAwNDViYTg5NzVjYzQ3NTk2NDA5NTg2YTliZDMyMzc2ZTc5NDYyY2E2NzFkIn0sInNlY3VyaXR5VG9rZW4iOnsiaXYiOiJkODJkMDI4ZjMzNDhhNzY0NmY3ZmYzZjVlNDM1YWIyNyIsImNvbnRlbnQiOiJjNzM1OGQ2NGM0NWU2ZmYwZjBiY2ZjZGQ2YzJhNGJlMDM3YzNmZTlkODMwZWI3YmZlMTcwMDc1OGEyNTg4NzZjOGZmYjU0NjYxZjZkMTdmYmJjZTQ0NTZmIn0sImp0aSI6ImY3ZjU2ODdkLWIxMGItNDU5ZS04YzRlLTA0YzE4ZWZkODAyNiIsImlhdCI6MTYzNjg3MTc5NCwiZXhwIjoxNjM2ODc1Mzk0fQ.YwtSo_luxHvMm_oSI1LYsSYJmfXfbAAQW_7KAYc-TOM",
      //   }
      // }) 
      //   .then(res => res.json())
      //   .then(json => {
      //     console.log(json);
      //     //count[i].push(json);
      //   }).catch((err) => {
      //     console.log(err);
      //   })

        await new Promise(r => setTimeout(r, 3000))
      }
    }
  }

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

          <div class="sidenav">
            {/* <a href="#">Most Popular</a>
            <a href="#">Least Popular</a>
            <a href="#">MISC</a> */}
            <button> Most Popular</button>
            <button> Least Popular</button>
            <button> MISC</button>
          </div>

        </body>

      </div>

      
    );

  }


}

function showArray() {
  //Dummy values for testing rn
  // for(let i=0; i<cSize; i++){
  //   for(let j=0; j<cSize; j++){
  //     count[i][j] = Math.ceil((Math.random()*100));
  //   }
  // }

  for(let i=0; i<cSize; i++){
    console.log(count[i]);
  }
}
function createTable(tableData) {
  var table = document.createElement('table');
  var tableBody = document.createElement('tbody');

  tableData.forEach(function(rowData) {
    var row = document.createElement('tr');

    rowData.forEach(function(cellData) {
      var cell = document.createElement('td');
      cell.appendChild(document.createTextNode(cellData));
      row.appendChild(cell);
    });

    tableBody.appendChild(row);
  });

  table.appendChild(tableBody);
  document.body.appendChild(table);
}

function makeTableHTML(myArray) {
  var result = "<table border=1>";
  for(var i=0; i<myArray.length; i++) {
      result += "<tr>";
      for(var j=0; j<myArray[i].length; j++){
          result += "<td>"+myArray[i][j]+"</td>";
      }
      result += "</tr>";
  }
  result += "</table>";

  return result;
}


export default App;

