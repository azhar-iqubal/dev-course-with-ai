import { useState } from 'react'

export default function CounterButton({ initial = 0 }) {
  const [count, setCount] = useState(initial)
  return (
    <button onClick={() => setCount((prev) => prev + 1)}>
      count is {count}
    </button>
  )
}
