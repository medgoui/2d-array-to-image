import React, { useState } from "react";
import { Button, Form, Header, Segment } from "semantic-ui-react";

export default function DessinCord({
  setSize,
  randomMatrixGenerator,
  setMatrix,
  setFlipped,
  setInverted,
}) {
  const [matrixSize, setMatrixSize] = useState(0);
  const [matrixCreated, setMatrixCreated] = useState([]);

  function createMatrix() {
    setSize(matrixSize);
    setMatrixCreated(randomMatrixGenerator());
    setMatrix(matrixCreated);
  }

  return (
    <>
      <Segment>
        <Header content="Cord" />
        <Form>
          <Form.Field>
            <input
              placeholder="Type matrix size..."
              value={matrixSize}
              name="size"
              onChange={(e) => setMatrixSize(parseInt(e.target.value))}
              type="text"
            />
          </Form.Field>
          <Form.Field>
            <Button onClick={createMatrix} content="Generate" positive />
          </Form.Field>
          <Form.Field>
            <Button
              onClick={() => setFlipped((flipped) => !flipped)}
              content="Flip (Horizontal)"
              positive
              fluid
            />
          </Form.Field>
          <Form.Field>
            <Button
              onClick={() => setInverted((inverted) => !inverted)}
              content="Invert"
              positive
              fluid
            />
          </Form.Field>
        </Form>
      </Segment>
    </>
  );
}
