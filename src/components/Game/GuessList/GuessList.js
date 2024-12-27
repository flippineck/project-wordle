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
    {range(0, 6 - guesses.length).map((i) => (
        <p className="guess" key={i}>
          {range(0, 5).map((j) => (
            <span className="cell" key={Math.random()}>&nbsp;</span>
          ))}

        </p>
    ))}

  </div>
}

export default GuessList;