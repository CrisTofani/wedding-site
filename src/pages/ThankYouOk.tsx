import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import { Message } from "../components/ThankYouMessage";

export const ThankYouOk = () => (
  <>
    <Header hideMenu={true} />
    <Hero />
    <Message
      messageContent={`Siamo felici di sapere che parteciperai al nostro evento non vediamo l'ora di vederti festeggiare con noi!`}
      confirm
    />
    <Footer />
  </>
);
