import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import StudentLife from "./components/StudentLife";
import Facilities from "./components/Facilities";
import Gallery from "./components/Gallery";
import Achievements from "./components/Achievements";
import Courses from "./components/CoursesOffered";
import Careers from "./components/Careers";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/studentlife" element={<StudentLife />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/careers" element={<Careers />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;