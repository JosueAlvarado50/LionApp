import { useState } from "react";
import Suppliers from "../Suppliers";
import classes from "./HighlightedQuote.module.css";

const HighlightedQuote = (props) => {
  const [currentDay, setCurrentDay] = useState("");

  const fechaComoCadena = "2022-09-12"; // día lunes
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
    <div>
      <div className={classes.relleno}>relleno</div>
      <figure className={classes.quote}>
        <h4>{props.author} </h4>
        <p>{props.text}</p>

        <div>
          <label className={classes.daylabel}>Dia:</label>
          <label>{nombreDia} </label>
          <label></label>
          <Suppliers></Suppliers>
        </div>
      </figure>
      <div className={classes.relleno2}></div>
    </div>
  );
};

export default HighlightedQuote;
