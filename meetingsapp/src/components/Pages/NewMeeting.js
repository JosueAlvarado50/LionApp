import axios from "axios";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import classes from "./NewMeeting.module.css";

const NewMeeting = () => {
  const nameValueInput = useRef();
  const autorValueInput = useRef();
  const endpoint = "http://127.0.0.1:8000/api";
  const nameChangeHandler = (event) => {
    event.preventDefault();
    console.log(nameValueInput.current.value);
  };

  const autorChangeHandler = (event) => {
    event.preventDefault();
    console.log(autorValueInput.current.value);
  };
  const setOneMeeting = useCallback(async () => {
    await axios.post(`${endpoint}/sala`, {
      nombre: nameValueInput.current.value,
      autor: autorValueInput.current.value,
    });
  }, []);

  return (
    <div>
      <div className={classes.relleno}></div>
      <div className={classes.background}>
        <div className={classes.form}>
          <h1>New Metting</h1>
          <p>Nombre de la sala</p>
          <input
            onChange={nameChangeHandler}
            ref={nameValueInput}
            type="text"
          ></input>
          <p>Autor de la sala</p>
          <input
            onChange={autorChangeHandler}
            ref={autorValueInput}
            type="text"
          ></input>
        </div>
        <div className={classes.addButton}>
          <Link to={`/meeting`}>
            <button onClick={setOneMeeting} className={classes.button}>
              add
            </button>
          </Link>
        </div>
        <div className={classes.relleno2}></div>
      </div>
    </div>
  );
};

export default NewMeeting;
