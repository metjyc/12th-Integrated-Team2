import type { WeatherIconKey } from "@/constants/weatherIconMap";

import { WeatherInfo } from "@/types/weather.types";

export const getWeatherIconKey = ({
  main,
  icon,
}: WeatherInfo): WeatherIconKey => {
  const isDaytime = icon?.endsWith("d"); // icon 자체를 사용
  const baseKey = main as WeatherIconKey;

  if (isDaytime) {
    return baseKey; // 낮이면 그대로
  }

  // 밤이면 -night 붙이기
  return `${main}-night` as WeatherIconKey;
};
