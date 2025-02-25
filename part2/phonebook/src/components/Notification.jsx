import React from "react";

const success = {
  color: "green",
  background: "lightgrey",
  fontSize: 20,
  borderStyle: "solid",
  borderRadius: 5,
  padding: 10,
  marginBottom: 10,
};

const error = {
  color: "red",
  background: "lightgrey",
  fontSize: 20,
  borderStyle: "solid",
  borderRadius: 5,
  padding: 10,
  marginBottom: 10,
};

const Notification = ({ message, type }) => {
  if (message === null) {
    return null;
  }

  const style = type === "error" ? error : success;

  return <div style={style}> {message} </div>;
};

export default Notification;
