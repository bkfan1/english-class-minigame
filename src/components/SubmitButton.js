

export default function SubmitButton({words,selectedLetters, setSelectedLetters,foundWords, setFoundWords, percentCompleted, setPercentCompleted, error, setError}){

    const handleSubmitButtonClick = ()=>{

        const submittedWord = selectedLetters.join("")

        if(words.includes(submittedWord)){
            const newFoundWords = [...foundWords];
            newFoundWords.push(submittedWord);
            setFoundWords(newFoundWords)
            setPercentCompleted(percentCompleted + 5)
            setSelectedLetters([]);
        }
        else{
            setError('ERROR: Wrong or inexistent word!')
        }



    }

    return(
        <button onClick={handleSubmitButtonClick} className="w-40 mt-2 p-3 bg-white text-blue-900 rounded-md border-2 border-blue-700 hover:opacity-80 ease-in-out duration-200" >Submit</button>
    )
}