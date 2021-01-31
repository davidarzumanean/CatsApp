import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import styled from "styled-components";
import Sidebar from "./components/Layout/Sidebar";
import CatsList from "./components/Layout/CatsList";

function App() {
  const MainWrapper = styled.div`
    background-color: #393351;
    @media screen and (min-width: 769px) {
      display: flex;
      align-items: flex-start;
    }
  `

  return (
    <MainWrapper>
      <Router>
        <Switch>
          <Route path="/:categoryId?">
            <Sidebar />
            <CatsList />
          </Route>
        </Switch>
      </Router>
    </MainWrapper>
  );
}

export default App;
