import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./router/home/Home";
import CreateUser from "./router/create-user/CreateUser";
import AllUsers from "./router/all-users/AllUsers";
import { useSelector } from "react-redux";

function App() {
  let theme = useSelector((s) => s.theme.value);
  return (
    <div className={`app ${theme ? "dark" : "light"}`}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-user" element={<CreateUser />} />
        <Route path="/all-users" element={<AllUsers />} />
      </Routes>
    </div>
  );
}

export default App;
