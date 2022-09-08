import React, { useEffect, useRef, useState } from "react";
import classes from "./Suppliers.module.css";
import axios from "axios";

const endpoint = "http://127.0.0.1:8000/api";

const Suppliers = () => {
  const [enteredInitalDate, setEnteredInitalDate] = useState("");
  const [enteredFinalDate, setEnteredFinalDate] = useState("");
  const [horario, setHorario] = useState([]);
  const [maxValue, setMaxValue] = useState("");
  const [minValue, setMinValue] = useState("");
  const initialValueInput = useRef();
  const finalValueInput = useRef();

  useEffect(() => {
    getAllMeetings();
  }, []);

  const getAllMeetings = async () => {
    const response = await axios.get(`${endpoint}/horas`);
    setHorario(response.data);
    console.log("response get con axios");
  };
  const updateMeeting = () => {};

  const initialInputChange = () => {
    console.log(initialValueInput.current.value);

    let getElement = [];
    getElement = horario.find(
      (horario) => horario.horas === +initialValueInput.current.value
    );
    console.log("se encontro el elemento");
    console.log(getElement.id);
    finalValueInput.current.value = +initialValueInput.current.value + 1;
    setMaxValue(+initialValueInput.current.value + 2);
    setMinValue(+initialValueInput.current.value + 1);
  };
  const submitHandler = () => {
    setEnteredInitalDate(initialValueInput.current.value);
    setEnteredFinalDate(finalValueInput.current.value);

    console.log(enteredInitalDate);
    console.log(enteredFinalDate);
  };

  return (
    <div className={classes.suppliersContainer}>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.selectors}>
          <label>Hora de Inicio</label>
          <input
            type="number"
            max="15"
            min="7"
            ref={initialValueInput}
            onChange={initialInputChange}
          ></input>
        </div>
        <div className={classes.selectors}>
          <label>Hora de finalizacion</label>
          <input
            type="number"
            ref={finalValueInput}
            min={minValue}
            max={maxValue}
          ></input>
        </div>
      </form>
      <div className={classes.horario}>
        <table>
          <thead>
            <tr>
              <th>hora</th>
              <th>status</th>
            </tr>
          </thead>
          <tbody>
            {horario.map((horario) => (
              <tr key={horario.id}>
                <td>{horario.horas} </td>
                <td>{horario.status === 1 ? "Disponible" : "ocupado"} </td>
                <td>
                  {horario.status === 2 && <button>finalizar sesion</button>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Suppliers;

/* 
import Select from "react-select";
const horario = [
  { value: "7", disp: true },
  { value: "8", disp: true },
  { value: "9", disp: true },
  { value: "10", disp: true },
  { value: "11", disp: true },
  { value: "12", disp: true },
  { value: "13", disp: true },
  { value: "14", disp: true },
];
const options = [
  { value: "7", label: "7" },
  { value: "8", label: "8" },
  { value: "9", label: "9" },
  { value: "10", label: "10" },
  { value: "11", label: "11" },
  { value: "12", label: "12" },
  { value: "13", label: "13" },
  { value: "14", label: "14" },
];
*/
