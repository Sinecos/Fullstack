import { useState } from "react";

const Header = ({ title }) => <div><h1>{title}</h1></div>

const Button = ({ handleClick, text }) => <button onClick={handleClick}> {text} </button>

const StatisticLine = ({ text, value, symb }) => {
  return (
    <tbody>
      <tr>
        <td>{text}</td>
        <td>{value}{symb}</td>
      </tr>
    </tbody>
  )
}

const Statistics = ({ good, neutral, bad }) => {

  const total = good + neutral + bad;
  let avg = (good * 1 + neutral * 0 + bad * (-1)) / total

  if (total === 0)
    return (
      <div>
        No feedback given
      </div>
    )

  return (
    <table>
      <StatisticLine text="good" value={good} />
      <StatisticLine text="neutral" value={neutral} />
      <StatisticLine text="bad" value={bad} />
      <StatisticLine text="total" value={total} />
      <StatisticLine text="average" value={avg} />
      <StatisticLine text="positive" value={good / total * 100} symb={" %"} />
    </table>
  )
}

function App() {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increaseGoodByOne = () => setGood(good + 1)
  const increaseNeutralByOne = () => setNeutral(neutral + 1)
  const increaseBadByOne = () => setBad(bad + 1)

  return (
    <div>
      <Header title={'give feedback'} />
      <Button handleClick={increaseGoodByOne} text="good"></Button>
      <Button handleClick={increaseNeutralByOne} text="neutral"></Button>
      <Button handleClick={increaseBadByOne} text='bad'></Button>
      <Header title={'statistics'} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div >
  )
}

export default App;
