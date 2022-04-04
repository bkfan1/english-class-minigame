import { useState, useEffect } from "react";

export default function FoundWord({ word }) {
  const [id, setId] = useState(`${word}_${Math.floor(Math.random() * 100)}`);

  useEffect(() => {
    const appendBounceInAnimation = () => {
      const d = document;
      const figure = d.getElementById(id);
      figure.classList.add("animate__bounceIn");
    };

    appendBounceInAnimation();
  }, []);

  return (
    <>
      <figure id={id} className="flex mb-4">
        <span className="text-4xl mr-1 text-slate-400">·</span>
        <li className="flex items-center w-fit bg-slate-300 p-2 rounded">
          <p className="text-sm">{word}</p>
        </li>
      </figure>
    </>
  );
}
