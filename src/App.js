import PropTypes from "react";
import { Counter } from "./Counter";
import { Accordion } from "./Accordion";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
        <Accordion></Accordion>
        {/* <Header2 name="Jan" greeting="Yo" />
        <Header2 name="Louie" /> */}
      </header>
    </div>
  );
}

const Header2 = ({ name, greeting = "Hello" }) => (
  <h1>
    {greeting} {name}!
  </h1>
);

Header2.prototype = {
  greeting: PropTypes.string,
  name: PropTypes.string,
};

export default App;
