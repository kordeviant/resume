import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "پوشش نانو گرانیت",
          "دوام بالا",
          "نچسب و مقاوم",
          "صرفه جویی در انرژی",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
