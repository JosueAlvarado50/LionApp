import React, { useEffect, useRef, useState } from "react";
import classes from "./Suppliers.module.css";
import axios from "axios";

const endpoint = "http://127.0.0.1:8000/api";

const Suppliers = () => {
  const [enteredInitalDate, setEnteredInitalDate] = useState("");
  const [enteredFinalDate, setEnteredFinalDate] = useState("");
  const [horario, setHorario] = useState([]);

  const [maxValue, setMaxValue] = useState("");
  const [minValue, setMinValue] = useState(8);
  const initialValueInput = useRef();
  const finalValueInput = useRef();
  const [hora, setHora] = useState([]);
  const [horaFinal, setHoraFinal] = useState([]);
  const [status, setStatus] = useState(1);
  const [isValid, setIsValid] = useState(false);
  const [isValid2, setIsValid2] = useState(false);
  const [finalValue, setFinalValue] = useState();

  useEffect(() => {
    getAllMeetings();
  }, []);

  const getAllMeetings = async () => {
    const response = await axios.get(`${endpoint}/horas`);
    setHorario(response.data);
    console.log("response get con axios");
  };

  let getElement = [];
  //TODO: cuando se selecciona una hora
  const initialInputChange = () => {
    console.log(initialValueInput.current.value);

    //!validar

    getElement = horario.find(
      (horario) => horario.horas === +initialValueInput.current.value
    );

    setHora(getElement);
    if (getElement) {
      console.log("tengo el elemento");
      console.log(getElement);
      console.log(getElement.id);
      if (getElement.status === 1) {
        console.log("esta disponible la sesion");
        setIsValid(true);
      } else {
        console.log("esta ocupada la sesion");
        setIsValid(false);
      }
    } else {
      console.log("mo se armo");
    }

    finalValueInput.current.value = +initialValueInput.current.value + 1;
    setFinalValue(+initialValueInput.current.value + 1);
    setMaxValue(+initialValueInput.current.value + 2);
    setMinValue(+initialValueInput.current.value + 1);
  };
  let getFinalElement = [];
  const finalInputChange = () => {
    console.log("hora final");
    console.log(finalValueInput.current.value);

    getFinalElement = horario.find(
      (horario) => horario.horas === +finalValueInput.current.value
    );

    setHoraFinal(getFinalElement);
    console.log(getFinalElement);
    if (getFinalElement) {
      console.log("tengo el elemento final");
      console.log(getFinalElement);
      console.log(getFinalElement.id);
      if (getFinalElement.status === 1) {
        console.log("esta disponible la sesion final");
        setIsValid2(true);
      } else {
        console.log("esta ocupada la sesion final");
        setIsValid2(false);
      }
    } else {
      console.log("mo se armo");
    }
  };

  const submitHandler = () => {
    setEnteredInitalDate(initialValueInput.current.value);
    setEnteredFinalDate(finalValueInput.current.value);

    console.log(enteredInitalDate);
    console.log(enteredFinalDate);
  };
  const getIdElement = async (id) => {
    const response = await axios.get(`${endpoint}/horas/${id}`);
    setHorario(response.data);
    console.log("response get con axios");
  };

  //TODO: boton reserve
  const updateMeeting = async (id) => {
    await axios.put(`${endpoint}/hora/${id}`, {
      horas: hora.horas,
      status: 2,
    });
    if (finalValue) {
      await axios.put(`${endpoint}/hora/${+id + 1}`, {
        horas: +hora.horas + 1,
        status: 2,
      });
    }
    getAllMeetings();
  };
  const updateMeeting2 = async (horario) => {
    await axios.put(`${endpoint}/hora/${horario.id}`, {
      horas: horario.horas,
      status: 1,
    });
    getAllMeetings();
  };

  const deleteItem = async (id) => {
    await axios.delete(`${endpoint}/hora/${id}`);
    getAllMeetings();
  };

  const store = async (event) => {
    event.preventDefault();
    await axios.post("http://127.0.0.1:8000/api/hora", {
      horas: 19,
      status: 1,
    });
    getAllMeetings();
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
            onChange={finalInputChange}
          ></input>
        </div>
      </form>
      {isValid && isValid2 && (
        <button
          className={classes.blackButton}
          onClick={() => updateMeeting(hora.id)}
        >
          Reserve
        </button>
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
            {horario.map((horario) => (
              <tr key={horario.id}>
                <td>{horario.horas} </td>
                <td>{horario.status === 1 ? "Disponible" : "ocupado"} </td>
                <td>
                  {horario.status === 2 && (
                    <button onClick={() => updateMeeting2(horario)}>
                      finalizar sesion
                    </button>
                  )}
                </td>
                <td>
                  <button onClick={() => deleteItem(horario.id)}>
                    eliminar sesion
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button className={classes.blackButton} onClick={store}>
        add new
      </button>
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
