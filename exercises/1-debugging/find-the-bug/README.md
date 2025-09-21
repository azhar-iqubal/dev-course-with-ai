Title: Find the Bug (Debugging Basics)
Goal: Practice using console logs and a breakpoint to locate and fix a logic error.
Files: index.js

Acceptance Criteria:
- [ ] Running `bun index.js` prints `FAIL` initially (before your fix)
- [ ] You add at least 2 console logs to inspect variables and the condition
- [ ] You fix the condition so that the script prints `PASS`

Run:
```bash
cd exercises/1-debugging/find-the-bug
bun index.js
```
Hint: The bug is in the `if` condition. Add `console.log({ n, isEven: n % 2 === 0 })` to inspect values. You can also add `debugger;` and run with an inspector if you prefer stepping.
