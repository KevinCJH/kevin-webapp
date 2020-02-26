import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollUpButton from "react-scroll-up-button";
import { Home } from "./components/Home";
import { Layout } from "./components/Layout";
import { NavigationBar } from "./components/NavigationBar";
import { Jumbotron } from "./components/Jumbotron";
import { Footer } from "./components/Footer";

function App() {
  return (
    <React.Fragment>
      <NavigationBar />
      <Jumbotron />
      <Layout>
        <Router>
          <Switch>
            <Route component={Home} />
          </Switch>
        </Router>
      </Layout>
      <ScrollUpButton />
      <Footer />
    </React.Fragment>
  );
}

export default App;
