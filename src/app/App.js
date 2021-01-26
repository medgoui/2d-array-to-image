import React from "react";
import { Container } from "semantic-ui-react";
import Dashbord from "../components/Dashbord";
import NavBar from "../components/NavBar";

export default function App() {
  return (
    <>
      <NavBar />
      <Container className="main">
        <Dashbord />
      </Container>
    </>
  );
}

