const express = require('express');
const app = express();

// Ana dizin ("/") için GET isteği işleme
app.get('/', (req, res) => {
  res.send('Merhaba, burası ana sayfa!');
});

// Sunucuyu belirtilen portta dinleme
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Sunucu ${PORT} portunda çalışıyor.`);
});
