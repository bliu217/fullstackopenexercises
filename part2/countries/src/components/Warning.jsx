import React from "react";

const Warning = ({ message }) => {
  if (message === null) {
    return null;
  }

  return <p>{message}</p>;
};

export default Warning;
