import React from 'react';

function GuessResult({Id,Word,Check}) {
  
  return Check.map((check) => (
    <span className={"cell " +check.status} key={Math.random()}>
      {check.letter}
    </span>
  ))
}

export default GuessResult;


