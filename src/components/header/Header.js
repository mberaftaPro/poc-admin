import React, { useEffect } from "react";

const Header = props => {
  const style = {
    backgroundColor: "#2c3e50",
    color: "white"
  };

  return (
    <div className="jumbotron jumbotron-fluid" style={style}>
      <div className="container">
        <h3 className="text-center">{props.title}</h3>
      </div>
    </div>
  );
};

export default Header;
