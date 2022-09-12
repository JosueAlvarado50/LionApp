import { useCallback, useEffect, useState } from "react";
import LoadingSpinner from "../UI/LoadingSpinner";
import NoQuotesFound from "../Meeting/NoQuotesFound";
import MeetingList from "../Meeting/MeetingList";
import axios from "axios";
const endpoint = "http://127.0.0.1:8000/api";
let salas = [];
const AllMeeting = () => {
  const getAllMeetings = useCallback(async () => {
    const response = await axios.get(`${endpoint}/salas`);
    salas = response.data;
  }, []);

  useEffect(() => {
    getAllMeetings();
  }, [getAllMeetings]);

  return <MeetingList quotes={salas} />;
};
export default AllMeeting;
