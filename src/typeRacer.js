import React, { useState} from 'react';



//tutorial: https://medium.com/@dtkatz/react-hooks-tutorial-learn-by-building-b90ec4db2b8e

const TypeRacer = () => {
  //arg 1 of useState: inital value
  //returns array of two values: index[0] current value, index[1] function to trigger state change
  const INITIAL_GAME_STATE = {victory: false, startTime: null, endTime: null}

  const SNIPPETS = [
    'Bears, beets, battlestar galactica',
  "What's Forrest Gump's password? 1Forrest1",
  'Where do programmers like to hangout? The Foo Bar'
  ]
  const [ snippet, setSnippet ] = useState('')

  const [ userText, setUserText ] = useState('')

  const [ gameState, setGameState ] = useState(INITIAL_GAME_STATE)
  //double arrow syntax sets up chooseSnippet to return a callback
  const chooseSnippet = snippetIndex => () => {
    console.log('setSnippet', snippetIndex)
    setSnippet(SNIPPETS[snippetIndex])
    //starts timer when snippet is choosen 
    setGameState({...gameState, startTime: new Date().getTime()})
  }

  const updateUserText = event => {
    setUserText(event.target.value);
    if(event.target.value === snippet){
      setGameState({
        ...gameState, 
        victory: true, 
        endTime: new Date().getTime() - gameState.startTime
      })
    }
  }

  return (
    <div>
      {snippet}
      <h4>{gameState.victory ? `Done! 🎉 Time: ${gameState.endTime}ms` : null}</h4>
      <h2>Type Race</h2>
      <input value={userText} onChange={updateUserText} />
      <hr />
      {
      SNIPPETS.map((SNIPPET, index) => (
        <button onClick={chooseSnippet(index)} key={index}>
        {SNIPPET.substring(0, 10)}...
        </button>
      ))
      }
    </div>
  )
}

export default TypeRacer;
