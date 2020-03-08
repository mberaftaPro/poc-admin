import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/header/Header";
import Table from "./components/table/Table";
import { DATABASE_TABLES } from "./constants/database-tables";

function App() {
  const [currentTable, setCurrentTable] = useState({
    name: DATABASE_TABLES.events
  });

  const onSelectCurrentTable = event => {
    setCurrentTable({ name: event.target.innerText });
  };

  return (
    <>
      <Header title="Social Admin"></Header>
      <div className="container-fluid text-center">
        <div className="row">
          <div className="col-md-12" style={{ marginBottom: "2.5em" }}>
            <div class="d-flex">
              <ul className="list-group list-group-horizontal mx-auto justify-content-center">
                {Object.keys(DATABASE_TABLES).map((table, index) => (
                  <li
                    className={`list-group-item ${
                      currentTable.name === table ? "active" : ""
                    }`}
                    key={index}
                    onClick={onSelectCurrentTable}
                  >
                    {table}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-md-12">
            <Table currentModel={currentTable.name}></Table>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
