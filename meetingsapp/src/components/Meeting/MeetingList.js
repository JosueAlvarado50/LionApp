import { Fragment } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import MeetingItem from "./MeetingItem";

import QuoteItem from "./MeetingItem";
import classes from "./MeetingList.module.css";

const MeetingList = (props) => {
  const navigate = useNavigate();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);

  const isSortingAscending = queryParams.get("sort") === "asc";

  return (
    <Fragment>
      <div className={classes.relleno}>relleno</div>
      <div className={classes.list}>
        <ul>
          {props.quotes.map((quote) => (
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
