import React, { useState } from "react";
import { Grid } from "semantic-ui-react";
import Dessin from "./Dessin";
import DessinCord from "./DessinCord";

export default function Dashbord() {
  const [matrixSize, setMatrixSize] = useState(0);
  const [matrix, setMatrix] = useState([]);
  const [flipped, setFlipped] = useState(false);
  const [inverted, setInverted] = useState(false);

  function randomMatrixGenerator() {
    let mat = [];

    for (let i = 0; i < matrixSize; i++) {
      mat[i] = [];
      for (let j = 0; j < matrixSize; j++) {
        mat[i][j] = Math.floor(Math.random() * 2);
      }
    }
    return mat;
  }

  return (
    <>
      <Grid>
        <Grid.Column width={12}>
          <Dessin
            matrix={matrix}
            flipped={flipped}
            inverted={inverted}
          />
        </Grid.Column>
        <Grid.Column width={4}>
          <DessinCord
            setSize={setMatrixSize}
            randomMatrixGenerator={randomMatrixGenerator}
            setMatrix={setMatrix}
            setFlipped={setFlipped}
            setInverted={setInverted}
          />
        </Grid.Column>
      </Grid>
    </>
  );
}
