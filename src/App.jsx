import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import Events from "./components/Events";
import RegisterForm from "./components/RegisterForm";
import Footer from "./components/Footer";
import DesignSystem from "./components/DesignSystem";

export default function App() {
  const [view, setView] = useState("landing");

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [view]);

  return (
    <>
      <Navbar onNavigate={setView} onBrand={() => setView("landing")} />
      {view === "landing" ? (
        <main>
          <Hero />
          <Benefits />
          <Events />
          <RegisterForm />
        </main>
      ) : (
        <DesignSystem onNavigate={setView} />
      )}
      <Footer onNavigate={setView} />
    </>
  );
}
