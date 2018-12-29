import React from "react";

function Person({ name, id, age, skill }) {
  return (
    <div>
      <h1 key={id}>{name}</h1>
      <h1>{age} years old!</h1>
      <p>His skills are {skill}</p>
    </div>
  );
}

export default Person;
