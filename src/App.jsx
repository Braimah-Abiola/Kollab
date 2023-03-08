import { BrowserRouter } from "react-router-dom";
import {
  Companies,
  Features,
  Footer,
  Hero,
  Learn,
  Navbar,
  Reviews,
  Stats,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="bg-primary">
        <div className="bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <Companies />
        <Features />
        <Learn />
        <Reviews />
        <Stats />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
