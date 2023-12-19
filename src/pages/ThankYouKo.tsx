import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import { Message } from "../components/ThankYouMessage";

export const ThankYouKo = () => (
  <>
    <Header hideMenu={true} />
    <Hero />
    <Message messageContent="Ci dispiace sapere che non sarai con noi per questo giorno importante 😔" />
    <Footer />
  </>
);
