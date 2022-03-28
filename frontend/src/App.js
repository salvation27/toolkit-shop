import { BrowserRouter, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import About from "./pages/About/About";
import Cart from "./pages/Cart.js/Cart";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route exact path="/about"><About /></Route>
          <Route exact path="/cart"><Cart /></Route>
          <Route  path=""><NotFound /></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
