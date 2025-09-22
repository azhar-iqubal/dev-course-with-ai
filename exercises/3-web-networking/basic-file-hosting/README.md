Title: Basic File Hosting (Static HTML/CSS)
Goal: Serve a local folder over HTTP and verify content and headers.
Files: index.html, styles.css

Acceptance Criteria:
- [ ] Start a static server on port 8000 serving this folder
- [ ] GET / returns HTML containing "Hello Web" and the <title> "Simple Static Site"
- [ ] GET /styles.css returns Content-Type: text/css and contains the color #0b5cff

Run (pick one):
- Python 3 built-in
```bash
cd exercises/3-web-networking/basic-file-hosting
python3 -m http.server 8000
```
- Bun (alternative)
```bash
cd exercises/3-web-networking/basic-file-hosting
bunx http-server -p 8000 .
```

Test:
```bash
# New terminal while server is running
curl -s http://localhost:8000/ | grep -E "Hello Web|<title>Simple Static Site</title>"
curl -s -i http://localhost:8000/styles.css | sed -n '1,5p'
curl -s http://localhost:8000/styles.css | grep "#0b5cff"
```
Hints:
- Port can be any free port; 8000 is common for static servers.
- If curl shows Windows newlines or odd encoding, add -L or -H 'Accept: text/html' explicitly.
