// Goal: fix the bug by using logs and a breakpoint
// Task: sum only the even numbers in the list

function sumEvenNumbers(numbers) {
  let sum = 0
  for (const n of numbers) {
    // BUG: This condition currently adds odd numbers instead of even ones
    // TODO: Use console.log to inspect n and the condition
    // TODO: Place a `debugger;` here and run with an inspector if you want to step through
    if (n % 2) {
      sum += n
    }
  }
  return sum
}

// Minimal self-check (acts like a tiny test)
const sample = [1, 2, 3, 4, 5, 6]
const expected = 12 // 2 + 4 + 6
const result = sumEvenNumbers(sample)

console.log('result:', result)
if (result !== expected) {
  console.error('FAIL: expected', expected, 'but got', result)
  process.exitCode = 1
} else {
  console.log('PASS')
}
