import LetterButton from "./LetterButton";

export default function LettersMenu({letters, selectedLetters, setSelectedLetters}) {
  return (
    <menu className="LettersMenu flex flex-col justify-center items-center my-4 ">
      <h1 className="text-white font-bold my-2">Letters set:</h1>
      <div className="grid grid-cols-3 grid-rows-auto gap-2 w-full place-items-center ">
          {letters.map((letter, index)=>(
              <LetterButton letter={letter} key={index} selectedLetters={selectedLetters} setSelectedLetters={setSelectedLetters} />
          ))}

      </div>
    </menu>
  );
}
