import { Parts } from "./Parts"

export const Content = ( { part1, part2, part3 } ) => {
  return (
    <>
      <Parts name={part1.name} exercises={part1.exercises}/>
      <Parts name={part2.name} exercises={part2.exercises}/>
      <Parts name={part3.name} exercises={part3.exercises}/>
    </>
  )
}