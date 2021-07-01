import React, { useEffect, useState } from "react";

function Tracker() {
  const [item,setItem] = useState([]);
  
  useEffect(() => {
    fetchitem()
  },[])

  const fetchitem = async () =>{
    const fetchdata = await fetch('https://corona.lmao.ninja/v2/countries/')
    const data = await fetchdata.json()
    console.log(data)
    setItem(data)
  }
  return (
    <div className="container">
      <div class="table-responsive">
        <table class="table table-striped table-sm">
          <thead>
            <tr>
              <th scope="col">Countries</th>
              <th scope="col">Cases</th>
              <th scope="col">Deaths</th>
              <th scope="col">Recovered</th>
              <th scope="col">Tests</th>
            </tr>
          </thead>
          <tbody>
            {item.map((elem,index) =>{
              return (
                <tr key={index}>
                <td>{elem.country}</td>
                <td>{elem.cases}</td>
                <td>{elem.deaths}</td>
                <td>{elem.recovered}</td>
                <td>{elem.tests}</td>
              </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Tracker;
