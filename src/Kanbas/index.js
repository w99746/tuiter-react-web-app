import Nav from "../Nav";
import KanbasNavigation from "./KanbasNavigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import 'bootstrap/dist/css/bootstrap.css';

import Courses from "./Courses";

function Kanbas() {
  return (
    <div className="d-flex">
      <KanbasNavigation/>
      <div className="main-content ps-3">
        <Routes>
          <Route path="/" element={<Navigate to="Dashboard" />} />
          <Route path="Account" element={<h1>Account</h1>} />
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="Courses/:courseId/*" element={<Courses/>} />
        </Routes>
      </div>
    </div>
  )
}
export default Kanbas;