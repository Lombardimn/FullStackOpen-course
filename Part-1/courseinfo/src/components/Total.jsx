export const Total = ( { course } ) => {
  return (
      <p>
        Number of exercises {course.parts.reduce( ( total, part ) => total + part.exercises, 0 )}
      </p>
  )
}