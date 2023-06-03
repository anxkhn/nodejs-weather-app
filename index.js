const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 3000;
const API_KEY = 'YOUR_API_KEY'; // Replace with your OpenWeather API key

app.use(express.json());

app.post('/getWeather', async (req, res) => {
  const { cities } = req.body;
  const weatherPromises = cities.map(city => getWeather(city));

  try {
    const weatherResults = await Promise.all(weatherPromises);
    const weather = {};

    weatherResults.forEach((result, index) => {
      const { name, temperature } = result;
      weather[name] = temperature;
    });

    res.json({ weather });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch weather data' });
  }
});

async function getWeather(city) {
  try {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=346e9a3f02948ae82803e1f74cb06a2e&units=metric`);
    const { main } = response.data;
    const temperature = `${main.temp}C`;
    return { name: city, temperature };
  } catch (error) {
    console.error(error);
    return { name: city, temperature: 'N/A' };
  }
}

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
