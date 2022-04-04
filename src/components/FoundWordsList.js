import FoundWord from "./FoundWord";

export default function FoundWordsList({foundWords}) {
  return (
    <ul className="FoundWordsList h-80 p-3 bg-white rounded border-4 border-slate-300 shadow-md">
      <li className="text-2xl pb-4">Found Words List</li>
      {foundWords.map((word, index)=>(
        <FoundWord word={word} key={index} />
      ))}


    </ul>
  );
}
