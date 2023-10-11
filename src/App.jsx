import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import StudentDashoard from "./components/StudentDash";
import Login from "./components/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/student" element={<StudentDashoard />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
