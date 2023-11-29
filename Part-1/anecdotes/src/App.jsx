import { useState } from "react"
import { anecdotes } from "./utils/types.d"

const App = () => {
  const [ selected, setSelected ] = useState(0)
  const [ votes, setVotes ] = useState(new Array(anecdotes.length).fill(0))

  console.log(votes)
  const handleClick = () => {
    let randomNum = Math.floor(Math.random() * 6)
    setSelected(randomNum)
  }

  const handleVoted = () => {
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <br />
      <button onClick={handleVoted}>vote</button>
      <button onClick={handleClick}>next anecdote</button>
    </div>
  )
}

export default App
