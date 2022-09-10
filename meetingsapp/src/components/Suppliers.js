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
  const [isValid, setIsValid] = useState(false);
  const [isValid2, setIsValid2] = useState(true);
  const [finalValue, setFinalValue] = useState();
  const [initialValue, setInitialValue] = useState();

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
        setInitialValue(getElement.horas);
        setIsValid(true);
      } else {
        console.log("esta ocupada la sesion");
        setIsValid(false);
      }
    } else {
      console.log("surgio un error al caputurar el elemento del horario");
    }

    finalValueInput.current.value = +initialValueInput.current.value + 1;
    setMaxValue(+initialValueInput.current.value + 2);
    setMinValue(+initialValueInput.current.value + 1);
  };
  let getFinalElement = [];
  const finalInputChange = () => {
    console.log("hora final");
    console.log(finalValueInput.current.value);
    setFinalValue(finalValueInput.current.value);

    getFinalElement = horario.find(
      (horario) => horario.horas === +finalValueInput.current.value
    );

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

  //TODO: boton reserve
  const updateMeeting = async (id) => {
    await axios.put(`${endpoint}/hora/${id}`, {
      horas: hora.horas,
      status: 2,
    });
    if (finalValue) {
      const aux = finalValue - initialValue;
      console.log(initialValue);
      console.log(finalValue);
      console.log("diferencia valor inicial - valor final");
      console.log(aux);
      if (aux > 1) {
        await axios.put(`${endpoint}/hora/${+id + 1}`, {
          horas: +hora.horas + 1,
          status: 2,
        });
      }
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
