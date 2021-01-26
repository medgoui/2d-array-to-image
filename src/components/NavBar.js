import React from "react";
import { Container, Menu } from "semantic-ui-react";

export default function NavBar() {
  return (
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item>Matrix</Menu.Item>
        </Container>
      </Menu>
  );
}
