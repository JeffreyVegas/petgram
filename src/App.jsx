import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useAuthContext } from "./context";
import { Logo } from "./components/Logo";
import { NavBar } from "./components/NavBar";
import { Detail } from "./pages/Detail";
import { Favs } from "./pages/Favs";
import { User } from "./pages/User";
import Home from "./pages/Home";
import { Logger } from "./pages/Logger";

const App = () => {
  const { isAuth } = useAuthContext();
  return (
    <Router>
      <Logo />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/pet/:id" exact component={Home} />
        <Route path="/detail/:id" exact component={Detail} />
        <Route path="/favs" exact component={isAuth ? Favs : Logger} />
        <Route path="/user" exact component={isAuth ? User : Logger} />
      </Switch>
      <NavBar />
    </Router>
  );
};

export default App;
