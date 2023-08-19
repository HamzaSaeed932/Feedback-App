import React from "react";
import PropTypes from "prop-types";

export default function Header(props) {
  return (
    <header style={{backgroundColor:props.bgColor ,color:props.textColor}}>
      <div className="container">
        <h1>{props.text}</h1>
      </div>
    </header>
  );
}
Header.defaultProps = {
  text: "Hello",
  bgColor:'black',
  textColor:'red'
};
Header.propTypes = {
  text: PropTypes.string,
};
