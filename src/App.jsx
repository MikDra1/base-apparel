import { useState } from "react";
import Hero from "./components/Hero";
import Navigation from "./components/Navigation";
import ThankYou from "./components/ThankYou";

function App() {
  const [inputEmail, setInputEmail] = useState("");
  const [isError, setIsError] = useState(false);
  const [thankYou, setThankYou] = useState(false);

  return (
    <div>
      <Navigation />
      {thankYou ? (
        <ThankYou setThankYou={setThankYou} inputEmail={inputEmail} setInputEmail={setInputEmail} />
      ) : (
        <Hero
          inputEmail={inputEmail}
          setInputEmail={setInputEmail}
          isError={isError}
          setIsError={setIsError}
          setThankYou={setThankYou}
        />
      )}
    </div>
  );
}

export default App;
