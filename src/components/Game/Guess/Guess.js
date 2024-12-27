import React from 'react';

function Guess({addGuess,turn}) {
  const [guess, setGuess] = React.useState('');
  return (
    <div>
      <form className="guess-input-wrapper" 
      onSubmit={(event) => {
        event.preventDefault();
        addGuess(guess);
        setGuess('')
      }}>
        <label>
          Guess the word:
          <input
            type="text"
            pattern="[A-Z]{5}"

            value={guess}
            disabled={turn >= 6}
            onChange={(event) => {
              setGuess(event.target.value)}}
          />
        </label>
      </form>
      
    </div>
  );
}

export default Guess;