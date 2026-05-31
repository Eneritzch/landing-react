import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Menu from "./components/Menu";
import ReservationForm from "./components/forms/ReservationForm";
import Footer from "./components/Footer";
import DesignSystem from "./components/DesignSystem";

export default function App() {
  const [view, setView] = useState("landing");

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [view]);

  return (
    <>
      <Navbar onNavigate={setView} />
      {view === "landing" ? (
        <main>
          <Hero />
          <Experience />
          <Menu />
          <ReservationForm />
        </main>
      ) : (
        <DesignSystem onNavigate={setView} />
      )}
      <Footer onNavigate={setView} />
    </>
  );
}
