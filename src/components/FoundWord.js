export default function FoundWord({ word }) {
  return (
    <>
      <li className="foundWord animate__bounceInLeft bg-slate-300 p-2 mb-3">
        <span>{word}</span>
      </li>
    </>
  );
}
