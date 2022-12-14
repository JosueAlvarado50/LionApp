import axios from "axios";
import { Fragment, useCallback, useEffect, useState } from "react";
import { useParams, Outlet } from "react-router-dom";
import HighlightedQuote from "../Meeting/HighlightedQuote";
import LoadingSpinner from "../UI/LoadingSpinner";

const endpoint = "http://127.0.0.1:8000/api";
let sala = [];

const QuoteDetail = () => {
  const params = useParams();
  const [loadedMeeting, setloadedMeeting] = useState([]);

  const getAllMeetings = useCallback(async () => {
    const response = await axios.get(`${endpoint}/sala/${params.meetingId}`);
    sala = response.data;
    setloadedMeeting(sala);
  }, [params.meetingId]);

  useEffect(() => {
    getAllMeetings();
  }, [getAllMeetings]);

  //TODO: se obtiene el id de la url para la meeting correspondiente

  //TODO: Buscar en la DB la meeting con su id

  return (
    <Fragment>
      <HighlightedQuote
        nombre={loadedMeeting.nombre}
        autor={loadedMeeting.autor}
      />
      <Outlet />
    </Fragment>
  );
};

export default QuoteDetail;
