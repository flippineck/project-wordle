import React from 'react';

function Guess({addGuess}) {
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
            value={guess}
            onChange={(event) => {
              
              setGuess(event.target.value)}}
          />
        </label>
      </form>
      
    </div>
  );
}

export default Guess;