export const VoteResult = ({ votes, value }) => {
  let maxValue = Math.max(...votes)
  let maxIndex = votes.indexOf(maxValue)

  if (maxValue === 0 && maxIndex === 0) {
    return (
      <div>no voting has been carried out</div>
    )
  }

  return (
    <div>
      <h1>Anecdote with most votes</h1>
      <p>
        {value[maxIndex]}
      </p>
      <p>has {maxValue} votes</p>
    </div>
  )
}