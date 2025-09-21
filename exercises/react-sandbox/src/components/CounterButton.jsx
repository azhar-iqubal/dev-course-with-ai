import { useState } from 'react'

export default function CounterButton({ initial = 0, step = 1 }) {
  const [count, setCount] = useState(initial)
  return (
    <button onClick={() => setCount((prev) => prev + step)}>
      count is {count}
    </button>
  )
}
