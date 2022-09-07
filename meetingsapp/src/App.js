import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./components/Layout/HomePage";
import SalaJuntas from "./components/Layout/SalaJuntas";
import MainNavigation from "./components/MainNavigation";
import AllMeeting from "./components/Pages/AllMeeting";
import QuoteDetail from "./components/Pages/QuoteDetail";
function App() {
  return (
    <div className="App">
      <MainNavigation></MainNavigation>
      <Routes>
        <Route
          path="/"
          element={<Navigate replace to={"/HomePage"}></Navigate>}
        ></Route>
        <Route path="/HomePage" element={<HomePage></HomePage>}>
          {" "}
        </Route>
        <Route path="/meeting" element={<AllMeeting></AllMeeting>}>
          {" "}
        </Route>
        <Route
          path="/meeting/:meetingId"
          element={<QuoteDetail></QuoteDetail>}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
