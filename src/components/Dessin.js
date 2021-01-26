import React, { useEffect, useState } from "react";
import cuid from "cuid";
import { vflip } from "2d-array-rotation";

export default function Dessin({ matrix, flipped, inverted }) {
  const zeroDivStyle = {
    backgroundColor: "black",
    width: 50,
    height: 50,
  };

  const [mat, setMat] = useState([]);

  useEffect(() => {
    if(flipped) {
      setMat(reverse(matrix));
    } else if(inverted) {
      setMat(vflip(matrix));
    } else {
      setMat(matrix);
    }
  }, [flipped, inverted, matrix])

  const reverse = (matrix) => matrix.map((row) => row.reverse());

  function displayDessin() {
    if (flipped && inverted) {
      return reverse(vflip(mat)).map((value, i) =>
        value.map((el, j) =>
          el === 0 ? (
            <div
              style={{
                ...zeroDivStyle,
                position: "absolute",
                top: i * 50,
                left: j * 50,
              }}
              key={cuid()}
            ></div>
          ) : null
        )
      );
    } else {
      return mat.map((value, i) =>
        value.map((el, j) =>
          el === 0 ? (
            <div
              style={{
                ...zeroDivStyle,
                position: "absolute",
                top: i * 50,
                left: j * 50,
              }}
              key={cuid()}
            ></div>
          ) : null
        )
      );
    }
  }

  return <>{displayDessin()}</>;
}
