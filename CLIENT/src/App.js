import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FanSignUp from "./Components/fanSignUp/SignUp";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FanSignUp />} />
      </Routes>
    </Router>
  );
}

export default App;  
