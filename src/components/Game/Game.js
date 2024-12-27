import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import Guess from '../Game/Guess';
import GuessList from '../Game/GuessList';
import { checkGuess } from '../../game-helpers';


// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [turn, setTurn] = React.useState(0);

  function addGuess(guess) {
    setTurn(turn + 1);
    console.log({guess});

    const guessCheck = checkGuess(guess,answer);
    
    console.log({guessCheck});


    setGuesses([...guesses, {Id:Math.random(), Word:guess, Check:guessCheck}]);
    console.log(guesses);
  }
  
  return <div>
  <GuessList guesses = {guesses}/>
  <Guess addGuess = {addGuess} turn = {turn}/>

  
  </div>
}


export default Game;
