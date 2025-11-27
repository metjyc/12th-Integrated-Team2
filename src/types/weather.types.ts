export interface WeatehrProps {
  lat: number;
  lon: number;
}
export type WeatherInfo = {
  main: string; // 날씨 간단 표현, 예: "Clouds"
  description: string; // 날씨 상세 설명, 예: "튼구름"
  icon: string; // 아이콘 코드, 예: "04n"
};
export type WeeklyWeatherPeriod = {
  weather: string; // 날씨
  avgTemp: number; // 평균 기온
  pop: number; // 강수확률 (percent)
};

export type WeeklyWeather = {
  date: string; // "2025-11-19"
  am: WeeklyWeatherPeriod;
  pm: WeeklyWeatherPeriod;
};

export type CurrentWeather = {
  temp: number; // 현재 온도
  feels_like: number; // 체감 온도
  humidity: number; // 습도 %
  wind_speed: number; // 풍속
  wind_deg: number; // 풍향
  uvi: number; // 자외선 지수
  weather: WeatherInfo[];
  sunrise: number; // 유닉스 timestamp (초)
  sunset: number; // 유닉스 timestamp (초)
  sunriseKst?: string; // KST 기준 문자열 (선택)
  sunsetKst?: string; // KST 기준 문자열 (선택)
};

export type HourlyWeather = {
  time: string;
  weather: string;
  temperature: number;
};

export type AirComponents = {
  co: number;
  no: number;
  no2: number;
  o3: number;
  so2: number;
  pm2_5: number;
  pm10: number;
  nh3: number;
};
