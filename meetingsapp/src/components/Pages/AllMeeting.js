import { useState } from "react";
import LoadingSpinner from "../UI/LoadingSpinner";
import NoQuotesFound from "../Meeting/NoQuotesFound";
import MeetingList from "../Meeting/MeetingList";

const AllMeeting = () => {
  const meetingsArray = [
    { id: "m1", author: "Josue Alvarado", text: "Meeting 1 Sala Principal" },
    { id: "m2", author: "Josue Alvarado", text: "Meeting 2 Sala Secundaria" },
  ];

  const [status, setStatus] = useState("");
  const [error, setError] = useState(false);
  const [loadedQuotes, setloadedQuotes] = useState("");
  /* 
  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }
  if (error) {
    return <p className="centered focused">{error}</p>;
  }
  if (status === "completed" && (!loadedQuotes || loadedQuotes.length === 0)) {
    return <NoQuotesFound />;
  }
*/
  return <MeetingList quotes={meetingsArray} />;
};
export default AllMeeting;
