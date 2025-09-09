const express = require('express');
const z = require('zod');

const app = express();
app.use(express.json());

app.get('/health', (_, res) => res.json({ ok: true }));

app.post('/user', (req, res) => {
  const Schema = z.object({ name: z.string() });
  const parsed = Schema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json(parsed.error);
  res.status(201).json(parsed.data);
});

app.listen(3000, () => console.log('Server listening on http://localhost:3000'));
