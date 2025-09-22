const express = require('express');
const z = require('zod');

const app = express();
app.use(express.json());

const API_KEY = process.env.API_KEY || 'dev-key';
function requireApiKey(req, res, next) {
  const provided = req.header('x-api-key');
  if (!provided || provided !== API_KEY) {
    return res.status(401).json({ error: 'unauthorized' });
  }
  next();
}

app.get('/health', (_, res) => res.json({ ok: true }));

app.post('/user', (req, res) => {
  const Schema = z.object({ name: z.string() });
  const parsed = Schema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json(parsed.error);
  res.status(201).json(parsed.data);
});

app.get('/secret', requireApiKey, (_, res) => {
  res.json({ secret: 'swordfish' });
});

app.get('/boom', () => {
  const err = new Error('Something exploded');
  err.status = 418; // I’m a teapot, for fun
  throw err;
});

app.use((err, req, res, next) => {
  const status = err.status || 500;
  res.status(status).json({ error: err.message || 'internal error' });
});

app.listen(3000, () => console.log('Server listening on http://localhost:3000'));
