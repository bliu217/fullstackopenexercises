import React from "react";

const DisplayContacts = ({ persons, filter, deleteFn }) => {
  return (
    <>
      {persons
        .filter((person) =>
          person.name.toLowerCase().includes(filter.toLowerCase())
        )
        .map((person, index) => (
          <p key={index}>
            {person.name} {person.number}{" "}
            <button onClick={() => deleteFn(person.id)}>delete</button>
          </p>
        ))}
    </>
  );
};

export default DisplayContacts;
