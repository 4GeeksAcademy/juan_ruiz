/* eslint-disable */
import "./style.css";

window.onload = () => {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#the-excuse").innerHTML = generateExcuse();
  });
  console.log("Hello Rigo from the console!");
};

let generateExcuse = () => {
  let pronoun = ["Mi", "Nuestro", "El", "Un"];
  let subject = [
    "profesor",
    "vecino",
    "hermano",
    "amigo",
    "compañero de trabajo",
    "jefe"
  ];
  let action = ["comió", "destruyó", "tomó", "escondió", "rompió", "arruinó"];
  let preposition = ["mi", "el", "un"];
  let where = [
    "tarea",
    "llaves del coche",
    "teléfono",
    "computadora",
    "zapatos",
    "almuerzo"
  ];

  let pronounIndex = Math.floor(Math.random() * pronoun.length);
  let subjectIndex = Math.floor(Math.random() * subject.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let prepositionIndex = Math.floor(Math.random() * preposition.length);
  let whereIndex = Math.floor(Math.random() * where.length);

  return (
    pronoun[pronounIndex] +
    " " +
    subject[subjectIndex] +
    " " +
    action[actionIndex] +
    " " +
    preposition[prepositionIndex] +
    " " +
    where[whereIndex]
  );
};
