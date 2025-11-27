export const WEATHER_ICON_MAP = {
  Clear: "/weather/sun.svg",
  "Clear-night": "/weather/sun-night.svg",

  Clouds: "/weather/clouds.svg",
  "Clouds-night": "/weather/clouds-night.svg",

  Rain: "/weather/rain.svg",
  "Rain-night": "/weather/rain-night.svg",

  Snow: "/weather/snow.svg",
  "Snow-night": "/weather/snow-night.svg",

  Storm: "/weather/storm.svg",
  "Storm-night": "/weather/storm-night.svg",

  Wind: "/weather/wind.svg",
  "Wind-night": "/weather/wind-night.svg",
} as const;

export type WeatherIconKey = keyof typeof WEATHER_ICON_MAP;
