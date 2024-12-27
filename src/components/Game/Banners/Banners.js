import React from 'react';

export function WellDone({turns}){
  return <div class="happy banner">
  <p>
    <strong>Congratulations!</strong> Got it in
    <strong> {turns-1} guesses</strong>.
  </p>
</div>
}

export function GameOver({theWord}){
return <div className="sad banner">
    <p>Sorry, the correct answer is {theWord}.</p>
  </div>
}


