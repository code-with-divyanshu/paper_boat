import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Drinks from "../pages/Drinks";
import DrinksDetails from "../pages/DrinksDetails";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

const MainRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/drinks" element={<Drinks />}>
        <Route path="/drinks/:id" element={<DrinksDetails />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};

export default MainRoute;
