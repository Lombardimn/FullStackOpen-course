import { Parts } from "./Parts"

export const Content = ( { course } ) => {
  return (
    <>
      {
        course.parts.map( part =>
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