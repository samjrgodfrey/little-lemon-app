import { Routes, Route } from "react-router-dom";
import Main from "./Pages/Main";
import AboutPage from "./Pages/AboutPage";
import Menu from "./Pages/Menu";
import BookingPage from "./Pages/BookingPage";
import Confirmation from "./Pages/Confirmation";

export default function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/reservations" element={<BookingPage />} />
      <Route path="/confirmation" element={<Confirmation />} />
    </Routes>
  );
}
