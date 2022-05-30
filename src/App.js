import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./compontents/about/About";
import Home from "./compontents/home/Home";
import ContactUs from "./compontents/contactus/ContactUs";
import Login from "./compontents/login/Login";
import Nav from "./nav/Nav";
import Signup from "./compontents/signup/Signup";
import GreatFit from "./compontents/home/GreatFit";

function App() {
  return (
    <>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/greatfit" element={<GreatFit />} />
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
