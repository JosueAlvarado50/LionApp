import axios from "axios";
import { Fragment, useCallback, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import MeetingItem from "./MeetingItem";

import QuoteItem from "./MeetingItem";
import classes from "./MeetingList.module.css";

const MeetingList = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [salas, setSalas] = useState([]);

  const queryParams = new URLSearchParams(location.search);
  const isSortingAscending = queryParams.get("sort") === "asc";
  const endpoint = "http://127.0.0.1:8000/api";

  const getAllMeetings = useCallback(async () => {
    const response = await axios.get(`${endpoint}/salas`);
    setSalas(response.data);
  }, []);

  useEffect(() => {
    getAllMeetings();
  }, [getAllMeetings]);

  return (
    <Fragment>
      <div className={classes.relleno}>relleno</div>
      <div className={classes.list}>
        <div>
          <h1>Sala de juntas</h1>
        </div>
        <ul>
          {salas.map((quote) => (
            <MeetingItem
              key={quote.id}
              id={quote.id}
              nombre={quote.nombre}
              autor={quote.autor}
            />
          ))}
        </ul>
        <button>add new</button>
      </div>
      <div className={classes.relleno2}></div>
    </Fragment>
  );
};

export default MeetingList;
