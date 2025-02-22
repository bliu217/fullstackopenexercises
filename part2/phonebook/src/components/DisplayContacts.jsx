import React from "react";

const DisplayContacts = ({ persons, filter }) => {
  return (
    <>
      {persons
        .filter((person) =>
          person.name.toLowerCase().includes(filter.toLowerCase())
        )
        .map((person, index) => (
          <p key={index}>
            {person.name} {person.number}
          </p>
        ))}
    </>
  );
};

export default DisplayContacts;
