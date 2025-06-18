import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import Edit from "./pages/Edit";
import User from "./pages/User";
import Notfound from "./pages/Notfound";
import Users from "./pages/Users";
import Home from "./pages/Home";
import LessonTheory from "./pages/LessonTheory";
import LessonExercises from "./pages/LessonExercises";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Dashboard />} />
        <Route path="/profile/edit" element={<Edit />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:username" element={<User />} />
        <Route path="/lesson/:lessonId/theory" element={<LessonTheory />} />
        <Route path="/lesson/:lessonId/exercises" element={<LessonExercises />} />
        {/* <Route path="/404" element={<Notfound />} /> */}
        <Route path="*" element={<Notfound />} />
      </Routes>
    </Router>
  );
}

export default App;
