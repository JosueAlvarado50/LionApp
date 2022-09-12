import { useEffect, useState } from "react";
import LoadingSpinner from "../UI/LoadingSpinner";
import NoQuotesFound from "../Meeting/NoQuotesFound";
import MeetingList from "../Meeting/MeetingList";
import axios from "axios";
const endpoint = "http://127.0.0.1:8000/api";

const AllMeeting = () => {
  const [salas, setSalas] = useState([]);

  useEffect(() => {
    getAllMeetings();
  }, []);

  const getAllMeetings = async () => {
    const response = await axios.get(`${endpoint}/salas`);
    setSalas(response.data);
    console.log("response get con axios");
  };

  return <MeetingList quotes={salas} />;
};
export default AllMeeting;
