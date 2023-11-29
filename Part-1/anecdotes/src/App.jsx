import { useState } from "react"
import { anecdotes } from "./utils/types.d"
import { Button } from "./components/Button"
import { VoteResult } from "./components/VoteResult"

const App = () => {
  const [ selected, setSelected ] = useState(0)
  const [ votes, setVotes ] = useState(new Array(anecdotes.length).fill(0))

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
      <Button handleClick={handleVoted} text="vote" />
      <Button handleClick={handleClick} text="next anecdote" />
      <VoteResult votes={votes} value={anecdotes}/>
    </div>
  )
}

export default App
