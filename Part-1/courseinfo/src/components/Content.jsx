import { Parts } from "./Parts"

export const Content = ( { parts } ) => {
  return (
    <>
      {
        parts.map( part =>
          <Parts 
            key={part.name} 
            name={part.name} 
            exercises={part.exercises} 
          />
        )
      }
    </>
  )
}