import React, { useCallback, useEffect, useRef, useState } from "react";
import classes from "./Suppliers.module.css";
import axios from "axios";
import { useParams } from "react-router-dom";

const endpoint = "http://127.0.0.1:8000/api";

const Suppliers = () => {
  const params = useParams();

  const [enteredInitalDate, setEnteredInitalDate] = useState("");
  const [enteredFinalDate, setEnteredFinalDate] = useState("");
  const [maxValue, setMaxValue] = useState("");
  const [minValue, setMinValue] = useState(8);
  const initialValueInput = useRef();
  const finalValueInput = useRef();
  const [hora, setHora] = useState([]);
  const [isValid, setIsValid] = useState(false);
  const [isValid2, setIsValid2] = useState(true);
  const [finalValue, setFinalValue] = useState();
  const [initialValue, setInitialValue] = useState();
  const [horario, setHorario2] = useState([]);

  const getAllMeetings = useCallback(async () => {
    const response = await axios.get(`${endpoint}/horario/${params.meetingId}`);
    setHorario2(response.data);
    console.log(horario);
  }, [params.meetingId]);

  useEffect(() => {
    getAllMeetings();
  }, [getAllMeetings]);

  //TODO: cuando se selecciona una hora

  const submitHandler = () => {
    setEnteredInitalDate(initialValueInput.current.value);
    setEnteredFinalDate(finalValueInput.current.value);
    console.log(horario);
    console.log(enteredInitalDate);
    console.log(enteredFinalDate);
  };

  //TODO: boton reserve
  return (
    <div className={classes.suppliersContainer}>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.selectors}>
          <label>Hora de Inicio</label>
          <input type="number" max="15" min="7" ref={initialValueInput}></input>
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
      {isValid && isValid2 && (
        <button className={classes.blackButton}>Reserve</button>
      )}

      <div className={classes.horario}>
        <table>
          <thead>
            <tr>
              <th>hora</th>
              <th>status</th>
            </tr>
          </thead>
          <tbody>
            <tr key={horario.id}>
              <td>hora_7</td>
              <td>{horario.hora_7}</td>
              <td>
                <button>finalizar </button>
              </td>
              <td>
                <button>eliminar </button>
              </td>
            </tr>
            <tr>
              <td>hora_8</td>
              <td>{horario.hora_8}</td>
              <td>
                <button>finalizar </button>
              </td>
              <td>
                <button>eliminar </button>
              </td>
            </tr>
            <tr>
              <td>hora_9</td>
              <td>{horario.hora_9} </td>
              <td>
                <button>finalizar </button>
              </td>
              <td>
                <button>eliminar </button>
              </td>
            </tr>
            <tr>
              <td>hora_10</td>
              <td>{horario.hora_10} </td>
              <td>
                <button>finalizar</button>
              </td>
              <td>
                <button>eliminar</button>
              </td>
            </tr>
            <tr>
              <td>hora_11</td>
              <td>{horario.hora_11} </td>
              <td>
                <button>finalizar </button>
              </td>
              <td>
                <button>eliminar </button>
              </td>
            </tr>
            <tr>
              <td>hora_12</td>
              <td>{horario.hora_12} </td>
              <td>
                <button>finalizar </button>
              </td>
              <td>
                <button>eliminar </button>
              </td>
            </tr>
            <tr>
              <td>hora_13</td>
              <td>{horario.hora_13} </td>
              <td>
                <button>finalizar </button>
              </td>
              <td>
                <button>eliminar </button>
              </td>
            </tr>
            <tr>
              <td>hora_14</td>
              <td>{horario.hora_14} </td>
              <td>
                <button>finalizar </button>
              </td>
              <td>
                <button>eliminar </button>
              </td>
            </tr>
            <tr>
              <td>hora_15</td>
              <td>{horario.hora_15} </td>
              <td>
                <button>finalizar </button>
              </td>
              <td>
                <button>eliminar </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <button className={classes.blackButton}>add new</button>
    </div>
  );
};
export default Suppliers;
