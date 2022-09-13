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
  const [inicialValueIsValid, setInitialValueIsValid] = useState(null);
  const [inicialValueIsValid2, setInitialValueIsValid2] = useState(true);
  const [finalValueIsValid, setFinalValueIsValid] = useState(true);
  const [finalValue, setFinalValue] = useState();
  const [initialValue, setInitialValue] = useState();
  const [horario, setHorario] = useState([]);

  const getAllMeetings = useCallback(async () => {
    const response = await axios.get(`${endpoint}/horario/${params.meetingId}`);
    setHorario(response.data);
  }, [params.meetingId]);

  useEffect(() => {
    getAllMeetings();
  }, [getAllMeetings]);

  const setOneMeeting = useCallback(async () => {
    const response = await axios.put(
      `${endpoint}/horario/${params.meetingId}`,
      horario
    );
    setHorario(response.data);
  }, [params.meetingId, horario]);

  //!------------------------
  //!------------------------
  let initialhr;
  //TODO: cuando se selecciona una hora
  const initialInputChange = () => {
    console.log(initialValueInput.current.value);
    initialhr = initialValueInput.current.value;
    //finalValueInput.current.value = +initialValueInput.current.value + 1;
    console.log("Estado inicial: " + initialhr);
    console.log(horario);
    //TODO:se obtiene el valor 1 o 2 para saber si esta disponible la sala
    const statusHoraInicial =
      horario[`hora_${initialValueInput.current.value}`];
    console.log(horario[`hora_${initialValueInput.current.value}`]);
    if (statusHoraInicial === 1) {
      console.log("Esta Disponible la sala de la hora inicial");
      setInitialValueIsValid(true);
      setInitialValueIsValid2(true);

      //!si se cambia de manera local pero falta actualizar la base
      //horario[`hora_${initialValueInput.current.value}`] = 2;
    } else {
      console.log("Se encuentra ocupada la sala de la hora inicial");
      setInitialValueIsValid(false);
      setInitialValueIsValid2(false);
    }

    console.log(horario);
    //!validar

    //finalValueInput.current.value = +initialValueInput.current.value + 1;
    setMaxValue(+initialValueInput.current.value + 2);
    setMinValue(+initialValueInput.current.value + 1);
  };

  const finalInputChange = () => {
    console.log("hora final");
    console.log(finalValueInput.current.value);
    setFinalValue(finalValueInput.current.value);
    const statusHoraFinal = horario[`hora_${finalValueInput.current.value}`];
    console.log(horario[`hora_${finalValueInput.current.value}`]);
    if (statusHoraFinal === 1) {
      console.log("Esta Disponible la sala de la hora final");
      setFinalValueIsValid(true);
      console.log("se cambia a 2 de ocupado");
      //!si se cambia de manera local pero falta actualizar la base
      //horario[`hora_${finalValueInput.current.value}`] = 2;
    } else {
      console.log("Se encuentra ocupada la sala de la hora final");
      setFinalValueIsValid(false);
    }
  };

  //!---------------
  //!---------------

  //TODO: cuando se selecciona una hora

  const submitHandler = () => {
    setEnteredInitalDate(initialValueInput.current.value);
    setEnteredFinalDate(finalValueInput.current.value);
    console.log(horario);
    console.log(enteredInitalDate);
    console.log(enteredFinalDate);
  };
  const reserveClickHandler = (event) => {
    event.preventDefault();
    if (inicialValueIsValid && finalValueIsValid) {
      console.log("se puede hacer la reservacion!");

      if (finalValueInput.current.value === "") {
        //!falta actualizar la base de datos
        console.log("hora inicial seteada safistactoriamente");
        horario[`hora_${initialValueInput.current.value}`] = 2;
        setOneMeeting();
        console.log(horario);
        setInitialValueIsValid(false);
        setInitialValueIsValid2(false);
        setFinalValueIsValid(false);
        initialValueInput.current.value = "";
      } else {
        //!falta actualizar la base de datos
        const resta =
          finalValueInput.current.value - initialValueInput.current.value;
        if (resta < 2) {
          horario[`hora_${initialValueInput.current.value}`] = 2;
          setInitialValueIsValid(false);
          setInitialValueIsValid2(false);
          setFinalValueIsValid(false);
          initialValueInput.current.value = "";
        } else {
          horario[`hora_${initialValueInput.current.value}`] = 2;
          setInitialValueIsValid(false);
          setInitialValueIsValid2(false);
          initialValueInput.current.value = "";
          horario[`hora_${finalValueInput.current.value - 1}`] = 2;
          setFinalValueIsValid(false);
          finalValueInput.current.value = "";
        }

        console.log("hora inicial y final seteada safistactoriamente");
        setOneMeeting();
        finalValueInput.current.value = "";
      }
    }
  };

  const endTimeHandler = (hora) => {
    console.log("se dio Click en eliminar");
    horario[`hora_${hora}`] = 1;
    console.log(horario);
    setHorario(horario);
    setOneMeeting();
    initialValueInput.current.value = "";
    finalValueInput.current.value = "";
  };

  //TODO: boton reserve
  return (
    <div className={classes.suppliersContainer}>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.selectors}>
          <label>Hora de Inicio</label>
          <input
            type="number"
            max="15"
            min="7"
            onChange={initialInputChange}
            ref={initialValueInput}
          ></input>
        </div>
        <div className={classes.selectors}>
          <label>Hora de finalizacion</label>
          <input
            type="number"
            ref={finalValueInput}
            min={minValue}
            onChange={finalInputChange}
            max={maxValue}
          ></input>
        </div>
      </form>
      <div className={classes.reserve}>
        {!inicialValueIsValid2 && (
          <label>La hora solicitada no se encuentra disponible!</label>
        )}
        {inicialValueIsValid && finalValueIsValid && (
          <button className={classes.blackButton} onClick={reserveClickHandler}>
            Reserve
          </button>
        )}
      </div>

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
              <td>{horario.hora_7 === 1 ? "Disponible" : "Ocupada"}</td>
              <td>
                {horario.hora_7 === 2 && (
                  <button onClick={() => endTimeHandler(`7`)}>
                    finalizar{" "}
                  </button>
                )}
              </td>
            </tr>
            <tr>
              <td>hora_8</td>
              <td>{horario.hora_8 === 1 ? "Disponible" : "Ocupada"}</td>
              <td>
                {horario.hora_8 === 2 && (
                  <button onClick={() => endTimeHandler(`8`)}>
                    finalizar{" "}
                  </button>
                )}
              </td>
            </tr>
            <tr>
              <td>hora_9</td>
              <td>{horario.hora_9 === 1 ? "Disponible" : "Ocupada"} </td>
              <td>
                {horario.hora_9 === 2 && (
                  <button onClick={() => endTimeHandler(`9`)}>
                    finalizar{" "}
                  </button>
                )}
              </td>
            </tr>
            <tr>
              <td>hora_10</td>
              <td>{horario.hora_10 === 1 ? "Disponible" : "Ocupada"} </td>
              <td>
                {horario.hora_10 === 2 && (
                  <button onClick={() => endTimeHandler(`10`)}>
                    finalizar
                  </button>
                )}
              </td>
            </tr>
            <tr>
              <td>hora_11</td>
              <td>{horario.hora_11 === 1 ? "Disponible" : "Ocupada"} </td>
              <td>
                {horario.hora_11 === 2 && (
                  <button onClick={() => endTimeHandler(`11`)}>
                    finalizar
                  </button>
                )}
              </td>
            </tr>
            <tr>
              <td>hora_12</td>
              <td>{horario.hora_12 === 1 ? "Disponible" : "Ocupada"} </td>
              <td>
                {horario.hora_12 === 2 && (
                  <button onClick={() => endTimeHandler(`12`)}>
                    finalizar{" "}
                  </button>
                )}
              </td>
            </tr>
            <tr>
              <td>hora_13</td>
              <td>{horario.hora_13 === 1 ? "Disponible" : "Ocupada"} </td>
              <td>
                {horario.hora_13 === 2 && (
                  <button onClick={() => endTimeHandler(`13`)}>
                    finalizar{" "}
                  </button>
                )}
              </td>
            </tr>
            <tr>
              <td>hora_14</td>
              <td>{horario.hora_14 === 1 ? "Disponible" : "Ocupada"} </td>
              <td>
                {horario.hora_14 === 2 && (
                  <button onClick={() => endTimeHandler(`14`)}>
                    finalizar{" "}
                  </button>
                )}
              </td>
            </tr>
            <tr>
              <td>hora_15</td>
              <td>{horario.hora_15 === 1 ? "Disponible" : "Ocupada"} </td>
              <td>
                {horario.hora_15 === 2 && (
                  <button onClick={() => endTimeHandler(`15`)}>
                    finalizar{" "}
                  </button>
                )}
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
