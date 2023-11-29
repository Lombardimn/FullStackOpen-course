import { StatisticTable } from "./StatisticTable"
export const Statistics = ({ good, neutral, bad }) => {
  if(good === 0 && neutral === 0 && bad === 0) {
    return <p>No feedback given</p>
  }

  return (
    <div>
      <h2>Statistics</h2>
      <StatisticTable 
        good={good} 
        neutral={neutral} 
        bad={bad} 
      />
    </div>
  )
}