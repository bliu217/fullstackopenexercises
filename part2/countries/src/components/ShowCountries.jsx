import React from "react";
import Warning from "./Warning";
import { useEffect, useState } from "react";
import axios from "axios";
import CountryView from "./CountryView";

const ShowCountries = ({ filter }) => {
  const [countries, setCountries] = useState([]);
  const allAPI = `https://studies.cs.helsinki.fi/restcountries/api/all`;
  console.log(filter);

  useEffect(() => {
    axios
      .get(allAPI)
      .then((c) => {
        setCountries(c.data);
      })
      .catch((e) => console.error(e));
  }, []);

  const filCountries = countries.filter((obj) => {
    return obj.name.common.toLowerCase().includes(filter.toLowerCase());
  });

  if (filCountries.length > 10) {
    console.log(filCountries.length);
    return <Warning message={"Too many matches, specify another filter"} />;
  }

  if (filCountries.length === 1) {
    const selected = filCountries[0];

    return <CountryView selected={selected} />;
  }

  const showView = (obj) => {
    return <CountryView selected={obj} list={false} />;
  };

  return (
    <div>
      {filCountries.map((c, i) => (
        <CountryView selected={c} key={i} list={true} />
      ))}
    </div>
  );
};

export default ShowCountries;
