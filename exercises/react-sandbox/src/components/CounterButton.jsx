import { useState } from 'react'

export default function CounterButton({ initial = 0, step = 1 }) {
  const [count, setCount] = useState(initial)
  return (
    <button
      className="rounded-md border border-transparent bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
      onClick={() => setCount((prev) => prev + step)}
    >
      count is {count}
    </button>
  )
}
