import React from 'react';
import GuessResult from '../GuessResult';
import { range } from '../../../utils';

function GuessList({guesses}) {
  return  <div className="guess-results">
    
    {guesses.map((guess) => (
      <p className="guess" key={guess.Id}>
          <GuessResult Id={guess.Id} Word={guess.Word} Check={guess.Check}/>
      </p>
    ))}
    

  </div>
}

export default GuessList;