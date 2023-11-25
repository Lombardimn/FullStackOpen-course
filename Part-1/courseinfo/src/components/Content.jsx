import { Parts } from "./Parts"

export const Content = ( {part1, part2, part3, exercises1, exercises2, exercises3} ) => {
  return (
    <>
      <Parts part={part1} exercise={exercises1}/>
      <Parts part={part2} exercise={exercises2}/>
      <Parts part={part3} exercise={exercises3}/>
    </>
  )
}