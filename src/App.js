//import PropTypes from "react";
// import { Counter } from "./Counter";
// import { Accordion } from "./Accordion";
// import { Input } from "./Input";
import MoviesList from "./movies/MoviesList";
import MovieDetail from "./movies/MovieDetail";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/movie/:id">
            <MovieDetail />
          </Route>
          <Route path="/">
            <MoviesList />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <Input></Input>
//         <Counter />
//         <Accordion></Accordion>
//         {/* <Header2 name="Jan" greeting="Yo" />
//         <Header2 name="Louie" /> */}
//       </header>
//     </div>
//   );
// }

// const Header2 = ({ name, greeting = "Hello" }) => (
//   <h1>
//     {greeting} {name}!
//   </h1>
// );

// Header2.prototype = {
//   greeting: PropTypes.string,
//   name: PropTypes.string,
// };

export default App;
