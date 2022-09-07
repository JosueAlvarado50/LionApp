import { Fragment, useEffect } from "react";
import { useParams, Outlet } from "react-router-dom";

import HighlightedQuote from "../Meeting/HighlightedQuote";

import LoadingSpinner from "../UI/LoadingSpinner";

const QuoteDetail = () => {
  const params = useParams();

  //TODO: se obtiene el id de la url para la meeting correspondiente

  const meetingsArray = [
    { id: "m1", author: "Josue Alvarado", text: "Meeting 1 Sala Principal" },
    { id: "m2", author: "Josue Alvarado", text: "Meeting 2 Sala Secundaria" },
  ];

  //TODO: Buscar en la DB la meeting con su id
  const loadedMeeting = meetingsArray.filter(
    (meeting) => meeting.id === params.meetingId
  );
  console.log(loadedMeeting);

  /* 
  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className="centered">{error}</p>;
  }

  if (!loadedQuote.text) {
    return <p>No quote found!</p>;
  }
*/
  return (
    <Fragment>
      <HighlightedQuote
        text={loadedMeeting[0].text}
        author={loadedMeeting[0].author}
      />

      <Outlet />
    </Fragment>
  );
};

export default QuoteDetail;
