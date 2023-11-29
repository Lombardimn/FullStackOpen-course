import { StatisticLine } from "./StatisticLine"

export const StatisticTable = ({ good, neutral, bad }) => {
  const total = good + neutral + bad
  const average = (good - bad) / total
  const positive = (good / total) * 100

  return (

    <table>
      <thead>
        <tr>
          <th>Statistic</th>
          <th>Value</th>
        </tr>
      </thead>

    <tbody>
        <StatisticLine text="good" value={good} />
        <StatisticLine text="neutral" value={neutral} />
        <StatisticLine text="bad" value={bad} />
        <StatisticLine text="all" value={total} />
        <StatisticLine text="average" value={average} />
        <StatisticLine text="positive" value={`${positive} 
        %`} />
    </tbody>
  </table>
  )
}