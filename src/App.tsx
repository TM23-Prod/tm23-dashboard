import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar.tsx";
import Dashboard from "./pages/Dashboard.tsx";
import Uploads from "./pages/Uploads.tsx";
import Socials from "./pages/Socials.tsx";
import Livestreams from "./pages/Livestreams.tsx";
import Music from "./pages/Music.tsx";
import Contact from "./pages/Contact.tsx";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/Uploads" element={<Uploads />} />
          <Route path="/Socials" element={<Socials />} />
          <Route path="/Livestreams" element={<Livestreams />} />
          <Route path="/Music" element={<Music />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </Router>
      <main></main>
    </>
  );
}

export default App;
