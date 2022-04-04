import { useState, useEffect } from "react";

export default function LetterButton({
  letter,
  selectedLetters,
  setSelectedLetters,
}) {
  const [selected, setSelected] = useState(false);
  const [id, setId] = (`${letter}_${Math.floor(Math.random()*100)}`)


  const handleLetterButtonClick = (e) => {
    const { value } = e.target;
    setSelected(!selected);

    let newSelectedLetters = [...selectedLetters];

    if (!selected) {
      newSelectedLetters.push(value);
      setSelectedLetters(newSelectedLetters);
    } else {
      const letterIndex = newSelectedLetters.findIndex((le) => le === value);

      newSelectedLetters.splice(letterIndex, 1);
      setSelectedLetters(newSelectedLetters);
    }
  };

  useEffect(()=>{

    const appendBounceInAnimation = ()=>{
      const d = document;
      const input = d.getElementById(id);
      input.classList.add('animate__bounceIn')

    }

    appendBounceInAnimation();

  },[])

  return (
    <input
      onClick={(e) => handleLetterButtonClick(e)}
      id={id}
      title="Click"
      type="button"
      className={`LetterButton w-16 h-16 bg-blue-500 rounded-full text-white text-2xl ${
        selected ? "bg-blue-800" : ""
      } border-2 border-white ease-in-out duration-200 cursor-pointer `}
      value={letter.toString()}
    />
  );
}
