# Weather App

The Weather App is a simple web application that allows users to retrieve real-time weather information for multiple cities. It provides an API endpoint to fetch weather data from OpenWeatherMap API and a user interface (UI) for entering city names and displaying the weather results.

## Features

- Fetches real-time weather data from the OpenWeatherMap API.
- Supports multiple cities input.
- Provides a RESTful API endpoint for retrieving weather information.
- Includes a user interface (UI) to interact with the application.

## Technologies Used

- Node.js: JavaScript runtime environment
- Express.js: Web application framework for Node.js
- Axios: Promise-based HTTP client for making API requests
- Bootstrap: CSS framework for styling the UI

## Getting Started

To get started with the Weather App, follow the instructions below:

### Prerequisites

- Node.js 
- OpenWeatherMap API key (have already embedded for this project)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/anxkhn/nodejs-weather-app.git
```

2. Navigate to the project directory:
```bash
cd weather-app
```
3. Install the dependencies:

```bash
npm install
```

4. Replace 'YOUR_API_KEY' in index.js with your OpenWeatherMap API key.


## Usage
Start the server:

```bash
node index.js
```
Open the Weather App UI in your web browser by visiting http://localhost:3000.

Enter the names of the cities you want to retrieve weather information for, separated by commas, in the input field.

Click the "Get Weather" button to fetch the real-time weather data.

## API Endpoint
The Weather App provides a single API endpoint:

POST /getWeather: Retrieves weather information for multiple cities.

Request Body:

```json
{
  "cities": ["city1", "city2", "city3"]
}
```

Response Body:

```json
{
  "weather": {
    "city1": "temperature",
    "city2": "temperature",
    "city3": "temperature"
  }
}```