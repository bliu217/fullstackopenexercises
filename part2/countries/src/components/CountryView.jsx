import React from "react";
import { useState } from "react";

const CountryView = ({ selected, list }) => {
  const [showView, setShowView] = useState(!list);

  return (
    <div>
      {list ? (
        <p>
          {selected.name.common}{" "}
          <button
            onClick={() => {
              setShowView(!showView);
            }}
          >
            Show
          </button>{" "}
        </p>
      ) : null}

      {showView ? (
        <div>
          <h1>{selected.name.common}</h1>
          <p>Capital {selected.capital[0]}</p>
          <p>Area {selected.area}</p>
          <h2>Languages</h2>
          <ul>
            {Object.values(selected.languages).map((lang, i) => (
              <li key={i}>{lang}</li>
            ))}
          </ul>
          <img src={selected.flags.png} alt={selected.flags.alt} />
        </div>
      ) : null}
    </div>
  );
};

export default CountryView;
