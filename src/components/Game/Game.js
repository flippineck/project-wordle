import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import Guess from '../Game/Guess';
import GuessList from '../Game/GuessList';
import { checkGuess } from '../../game-helpers';
import {NUM_OF_GUESSES_ALLOWED} from '../../constants';

import { WellDone, GameOver} from '../Game/Banners';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [turn, setTurn] = React.useState(0);
  const [winner, setWinner] = React.useState(false);
  function addGuess(guess) {
    setTurn(turn + 1);
    console.log({guess});
    setWinner(guess === answer);
    const guessCheck = checkGuess(guess,answer);
    
    console.log({guessCheck});


    setGuesses([...guesses, {Id:Math.random(), Word:guess, Check:guessCheck}]);
    console.log(guesses);
  }
  
  return <div>
  <GuessList guesses = {guesses}/>
  {turn >= NUM_OF_GUESSES_ALLOWED && <GameOver theWord={answer}/>}
  <Guess addGuess = {addGuess} turn = {turn} winner = {winner}/>
  {winner && <WellDone turns={turn}/>}
  
  </div>
}


export default Game;
