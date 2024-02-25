const express = require('express');
const fetch = require('node-fetch'); 
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/api/news', async (req, res) => {
  try {
    const apiKey = 'beda954c47f74560a55aa934f9f0b0ce';
    const apiUrl = 'https://newsapi.org/v2/top-headlines?country=us&category=sports';

    const response = await fetch(apiUrl, {
      headers: {
        'X-Api-Key': apiKey,
      },
    });

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error fetching news:', error.message);
    res.status(500).json({ error: 'Error fetching news' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
