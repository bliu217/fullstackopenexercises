import React, { useEffect } from "react";
import { useState } from "react";
import ShowCountries from "./components/ShowCountries";
import axios from "axios";

const App = () => {
  const [filter, setFilter] = useState("");

  return (
    <>
      <p>
        find countries
        <input
          onChange={(e) => {
            setFilter(e.target.value);
          }}
        />
      </p>
      <ShowCountries filter={filter} />
    </>
  );
};

export default App;
