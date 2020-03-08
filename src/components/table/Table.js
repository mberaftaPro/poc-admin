import React, { useState, useEffect } from "react";

const Table = props => {
  const [data, setData] = useState([]);
  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {
    console.log("Current model : ", props.currentModel);
    if (props.currentModel !== "") {
      setData([]);

      const url = `http://localhost:3010/api/v0/admin/${props.currentModel}`;
      fetch(url, {
        method: "GET",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCIsImtpZCI6IjE4MWJkZDk0LWE0MzktNGNlOC1hYjYwLWIxMDYzNTViY2Q1MSJ9.eyJzdWIiOiI4MzZhNzA1My05M2RlLTQ5ZDktYjJkNi1jZjEyM2E3YjBlMmQiLCJpYXQiOjE1ODM1MDQxMTMsImV4cCI6MTU4MzUwNDQxM30.YxwXxnygLlmmsa8nopelcKy2H8qfBeH-jrrnMptmiTQ0LcOlcMW_3apbGZ4PucApYvjs70V2BLaF8wPIO2SBUQ"
        }
      })
        .then(response => response.json())
        .then(responseData => {
          console.log(responseData);
          setData(responseData);
        })
        .catch(err => setFetchError(err));
    }
  }, [props.currentModel]);

  useEffect(() => {
    console.log("updated", data);
    setFetchError(null);
  }, [data]);

  return !!data && data.length > 0 ? (
    <div class="table-responsive">
      <table
        className="table table-md table-striped w-auto"
        style={{ fontSize: "12px" }}
      >
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            {Object.keys(data[0]).map((field, i) => (
              <th scope="col" key={`field-${i}`}>
                {field}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((d, i) => (
            <tr>
              <th scope="row" key={`row-${i}`}>
                {i}
              </th>
              {Object.values(d).map(val => (
                <td>{val}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ) : (
    <p className="text-center text-info">La table demandée n'a aucune donnée</p>
  );
};

export default Table;
