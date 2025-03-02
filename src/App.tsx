import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Team from "./Pages/Team";
import ApplyForm from "./Pages/ApplyForm";
import SignUp from "./Pages/SignUp";
import Contact from "./Pages/Contact";
import Gallery from "./Pages/Gallery";
import Feedback from "./Pages/Feedback";
import Chat from "./Pages/Chat";
import Events from "./Pages/Events";
import Activities from "./Pages/Activities";
function App () {
  return (
    <div id="root">
      <nav>
        <ul className="navbar">
          <div className="navbar-logo">
            <Link to="/"><img src="./public/Logo.jpg" alt="Logo" /></Link>
          </div>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/team">Team</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
          <li className="submenu-parent">Class
            <ul className="submenu">
              <li><Link to="/class/schedule">Schedule</Link></li>
              <li><Link to="/class/assignments">Assignments</Link></li>
              <li><Link to="/class/resources">Resources</Link></li>
            </ul>
          </li>
          <li><Link to="/activities">Activities</Link></li>
          <li><Link to="/apply">Apply</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/signUp">SignUp</Link></li>
          <li><Link to="/chat">Chat</Link></li>
          <li><Link to="/searchBar">Search</Link></li>
          <li><Link to="/feedback">Feedback</Link></li>
        </ul>
      </nav>
      <div className="main-content">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/apply" element={<ApplyForm />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/events" element={<Events />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/Activities" element={<Activities />} />
        </Routes>
      </div>
    </div>
  );
}

export default App