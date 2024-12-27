import React from 'react';
import {NUM_OF_GUESSES_ALLOWED} from '../../../constants';
function Guess({addGuess,turn,winner}) {
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
            disabled={(turn >= NUM_OF_GUESSES_ALLOWED) || winner}
            onChange={(event) => {
              setGuess(event.target.value)}}
          />
        </label>
      </form>
      
    </div>
  );
}

export default Guess;