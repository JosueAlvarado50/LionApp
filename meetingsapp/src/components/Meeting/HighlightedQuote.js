import { useState } from "react";
import Suppliers from "../Suppliers";
import classes from "./HighlightedQuote.module.css";

const HighlightedQuote = (props) => {
  const [currentDay, setCurrentDay] = useState("");

  const fechaComoCadena = "2022-09-07"; // día lunes
  const dias = [
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
    "Domingo",
  ];
  const numeroDia = new Date(fechaComoCadena).getDay();
  const nombreDia = dias[numeroDia];
  console.log("Nombre de día de la semana: ", nombreDia);
  return (
    <figure className={classes.quote}>
      <p>{props.text}</p>
      <figcaption>{props.author}</figcaption>
      <div>
        <label className={classes.daylabel}>Dia:</label>
        <label>{nombreDia} </label>
        <label></label>
        <Suppliers></Suppliers>
      </div>

      <button className={classes.blackButton}>Reserve</button>
    </figure>
  );
};

export default HighlightedQuote;
