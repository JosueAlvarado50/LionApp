import { Fragment } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import MeetingItem from "./MeetingItem";

import QuoteItem from "./MeetingItem";
import classes from "./MeetingList.module.css";

const sortQuotes = (quotes, ascending) => {
  return quotes.sort((quoteA, quoteB) => {
    if (ascending) {
      return quoteA.id > quoteB.id ? 1 : -1;
    } else {
      return quoteA.id < quoteB.id ? 1 : -1;
    }
  });
};

const MeetingList = (props) => {
  const navigate = useNavigate();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);

  const isSortingAscending = queryParams.get("sort") === "asc";

  return (
    <Fragment>
      <ul className={classes.list}>
        {props.quotes.map((quote) => (
          <MeetingItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default MeetingList;
