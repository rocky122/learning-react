import React from "react";
import Person from "./Person";

function NameList() {
  //   const names = ["Prateek", "Rocky", "InstillHub"];
  const persons = [
    {
      id: 1,
      name: "Prateek",
      age: 21,
      skill: "Angular,React,Vue"
    },
    {
      id: 2,
      name: "Rocky",
      age: 22,
      skill: "Angular,Vue"
    },
    {
      id: 3,
      name: "Pranshu",
      age: 22,
      skill: "PHP CodeIgniter"
    }
  ];
  const namesList = persons.map(({ name, id, age, skill }) => {
    return <Person name={name} id={id} age={age} skill={skill} />;
  });

  return <ul>{namesList}</ul>;
}

export default NameList;
