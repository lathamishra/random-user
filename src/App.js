import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  // const url = "https://randomuser.me/api";
  const [data, setData] = useState("");

  // const fetchInfo = () => {
  //   return fetch(url)
  //     .then((res) => res.json())
  //     .then((d) => setData(d));
  // };

  useEffect(() => {
    // fetchInfo();
    fetch("https://randomuser.me/api")
      .then((resp) => {
        return resp.json();
      })
      .then((res) => {
        setData(res);
        console.log("res---", res);
      });
  }, []);

  console.log("data-----", data);

  return (
    <div className="app">
      <div className="card">
        <div className="card-title">
          <h3> Ramdom User fetch Information </h3>
        </div>
        <div className="card-body">
          <table className="my_table table-bordered">
            <thead className="bg-dark text-white">
              <tr>
                <th> ID </th>
                <th> Fullname </th>
                <th> Email </th>
              </tr>
            </thead>

            <tbody>
              {data &&
                data.results.map((item, i) => (
                  <tr>
                    <td> {i}</td>

                    <td>
                      {item.name.title} {item.name.first}
                      {item.name.last}
                    </td>
                    <td> {item.email}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
