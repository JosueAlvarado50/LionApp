import { Link } from "react-router-dom";

import classes from "./MeetingItem.module.css";

const MeetingItem = (props) => {
  return (
    <li className={classes.item}>
      <figure>
        <blockquote>
          <p>{props.text}</p>
        </blockquote>
        <figcaption>{props.author}</figcaption>
      </figure>
      <Link className="btn" to={`/meeting/${props.id}`}>
        book a Meeting
      </Link>
    </li>
  );
};

export default MeetingItem;
