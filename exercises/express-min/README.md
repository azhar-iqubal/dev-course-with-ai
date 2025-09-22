Title: Express Minimal API (/health, /user)
Goal: Learn to run a tiny Express server with one GET and one POST route.
Files: server.js

Acceptance Criteria:
- [ ] GET /health returns {"ok": true}
- [ ] POST /user with JSON {"name":"Azhar"} returns 201 and echoes payload
- [ ] POST /user with invalid payload (e.g., {"name":123}) returns 400 with validation details
- [ ] GET /secret without `x-api-key` returns 401 {"error":"unauthorized"}
- [ ] GET /secret with `x-api-key: dev-key` returns {"secret":"swordfish"}
- [ ] GET /boom returns error via centralized handler with status 418 and JSON {"error":"Something exploded"}

Run:
```bash
API_KEY=dev-key bun server.js
```
Test:
```bash
curl -s http://localhost:3000/health
curl -s -X POST -H 'Content-Type: application/json' -d '{"name":"Azhar"}' http://localhost:3000/user
curl -s -X POST -H 'Content-Type: application/json' -d '{"name":123}' http://localhost:3000/user -i
curl -s http://localhost:3000/secret -i
curl -s http://localhost:3000/secret -H 'x-api-key: dev-key' -i
curl -s http://localhost:3000/boom -i
```
