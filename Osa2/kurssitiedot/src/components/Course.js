const Header = ({ course }) => <h2>{course}</h2>

const Content = ({ parts }) => {
    return (
        <div>
            {parts.map(part => <p key={part.id}> {part.name} {part.exercises} </p>)}
        </div>
    )
}

const Total = ({ parts }) => {

    const total = parts.reduce((sum, current) => {
        return sum + current.exercises
    }, 0)

    return (
        <div>
            <b>total of {total} exercises</b>
        </div>
    )

}

const Course = ({ course }) => {
    return (
        <div>
            <Header course={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </div>
    )
}

export default Course