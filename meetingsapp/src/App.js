import { Navigate, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import HomePage from "./components/Layout/HomePage";
import SalaJuntas from "./components/Layout/SalaJuntas";
import MainNavigation from "./components/MainNavigation";
import AllMeeting from "./components/Pages/AllMeeting";
import QuoteDetail from "./components/Pages/QuoteDetail";
import classes from "./App.module.css";
import MeetingList from "./components/Meeting/MeetingList";

// usar rafce para crear componentes rapido
function App() {
  return (
    <div className={classes.app}>
      <div className={classes.nav}>
        <MainNavigation></MainNavigation>
      </div>
      <div className={classes.body}>
        <Routes>
          <Route
            path="/"
            element={<Navigate replace to={"/HomePage"}></Navigate>}
          ></Route>
          <Route path="/HomePage" element={<HomePage></HomePage>}>
            {" "}
          </Route>
          <Route path="/meeting" element={<MeetingList></MeetingList>}>
            {" "}
          </Route>
          <Route
            path="/meeting/:meetingId"
            element={<QuoteDetail></QuoteDetail>}
          ></Route>
        </Routes>
      </div>
      <div className={classes.footer}>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
