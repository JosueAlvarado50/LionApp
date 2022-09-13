import { useEffect, useState } from "react";
import Suppliers from "../Suppliers";
import classes from "./HighlightedQuote.module.css";

const HighlightedQuote = (props) => {
  const [currentDay, setCurrentDay] = useState("");
  const [nombre, setNombre] = useState("");
  const [autor, setAutor] = useState("");

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
  const numeroDia = new Date().getUTCFullYear();
  const nombreDia = dias[numeroDia];
  useEffect(() => {
    setNombre(props.autor);
    setAutor(props.nombre);
  }, [props.autor, props.nombre]);

  return (
    <div>
      <div className={classes.relleno}>relleno</div>
      <figure className={classes.quote}>
        <h4>{nombre} </h4>
        <p>{autor}</p>

        <div>
          <label className={classes.daylabel}>Dia:</label>
          <label>{numeroDia} </label>
          <label></label>
          <Suppliers></Suppliers>
        </div>
      </figure>
      <div className={classes.relleno2}></div>
    </div>
  );
};

export default HighlightedQuote;
