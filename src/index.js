import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import Root from "./Root";
import Navbar from "./components/Navbar";
import Posts from "./routes/Posts";
import "./styles.css";

function App() {
  return (
    <Root>
      <Router>
        <Navbar />
        <div className="container">
          <Route path="/" exact component={Home} />
          <Route path="/posts" component={Posts} />
        </div>
      </Router>
    </Root>
  );
}

function Home() {
  return <Redirect to="/posts" />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
