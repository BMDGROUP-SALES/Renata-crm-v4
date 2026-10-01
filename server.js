import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();
const PORT = process.env.PORT || 10000;
const distPath = join(__dirname, 'dist');

if (!fs.existsSync(distPath)) {
  console.error('ERROR: dist folder not found at', distPath);
  console.error('Run: npm run build');
  process.exit(1);
}

app.use(express.static(distPath, { maxAge: '1d' }));

app.get('*', (req, res) => {
  res.sendFile(join(distPath, 'index.html'), (err) => {
    if (err) {
      console.error('Error serving index.html:', err);
      res.status(500).send('Server Error');
    }
  });
});

app.use((err, req, res, next) => {
  console.error('Server error:', err);
  res.status(500).send('Server Error');
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`✓ Server running on port ${PORT}`);
  console.log(`✓ Serving files from: ${distPath}`);
  console.log(`✓ Access at: http://0.0.0.0:${PORT}`);
});
