import { useEffect, useState } from "react";

import { airCondition, currentWeather } from "@/apis/weather";

import { WeatherIconKey } from "@/constants/weatherIconMap";

import { CurrentWeather, WeatehrProps } from "@/types/weather.types";
import { AirComponents } from "@/types/weather.types";

import { getWindDirection } from "@/utils/getWeatherDirection";
import { getWeatherIconKey } from "@/utils/getWeatherIconKey";

import { ColorInfoSection } from "./ColorInfoSection";
import { WeatherIconDisplay } from "./WeatherIconDisplay";

export const TodayWeather = ({ lat, lon }: WeatehrProps) => {
  const [weather, setWeather] = useState<CurrentWeather | null>(null);
  const [air, setAir] = useState<AirComponents | null>(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const data = await currentWeather(lat, lon);
        setWeather(data.current);
      } catch (error) {
        console.error(error);
      }
    };
    fetchWeather();
  }, [lat, lon]);

  useEffect(() => {
    const fetchAirCondition = async () => {
      try {
        const data = await airCondition(lat, lon);
        setAir(data.list[0].components);
      } catch (error) {
        console.error(error);
      }
    };
    fetchAirCondition();
  }, [lat, lon]);

  if (!weather) return <div>불러오는 중...</div>;

  const currentWeatherInfo = weather.weather[0];
  if (!currentWeatherInfo) return <div>날씨 정보를 불러오는 중...</div>;
  const windDirection = getWindDirection(weather.wind_deg);
  const iconKey: WeatherIconKey = getWeatherIconKey(currentWeatherInfo);
  const isNight = currentWeatherInfo?.icon.endsWith("n");
  const sunriseTime = weather.sunriseKst?.split(" ")[1] ?? "";

  const pm10 = air?.pm10 ?? 0;
  const pm2_5 = air?.pm2_5 ?? 0;

  const getDustLevel = (value: number) => {
    if (value <= 30) return "좋음";
    if (value <= 80) return "보통";
    return "나쁨";
  };

  return (
    <section className="flex w-full flex-col items-center justify-center gap-3">
      <div className="flex flex-col gap-[10px]">
        <div className="flex items-center justify-center gap-[10px]">
          <WeatherIconDisplay weather={iconKey} width={160} height={160} />
          <div className="text-h1 text-gray-60">{weather.temp}º</div>
        </div>

        <div className="text-gray-60 text-body-md flex justify-center">
          {isNight ? "야간" : "주간"} / {currentWeatherInfo.description}
        </div>

        <div className="flex items-center gap-2">
          <div className="flex gap-1">
            <p className="text-gray-40 text-lab-sm">체감</p>
            <p className="text-gray-60 text-lab-sm">{weather.feels_like}º</p>
          </div>
          <div className="text-cap-xs text-gray-40">●</div>
          <div className="flex gap-1">
            <p className="text-gray-40 text-lab-sm">습도</p>
            <p className="text-gray-60 text-lab-sm">{weather.humidity}%</p>
          </div>
          <div className="text-cap-xs text-gray-40">●</div>
          <div className="flex gap-1">
            <p className="text-gray-40 text-lab-sm">{windDirection}풍</p>
            <p className="text-gray-60 text-lab-sm">{weather.wind_speed} m/s</p>
          </div>
        </div>
      </div>

      <div className="flex gap-4 py-3">
        <ColorInfoSection label="미세먼지" status={getDustLevel(pm10)} />
        <ColorInfoSection label="초미세먼지" status={getDustLevel(pm2_5)} />
        <ColorInfoSection label="자외선" status={getUVStatus(weather.uvi)} />
        <ColorInfoSection
          label="일출"
          status={sunriseTime}
          bgColor="bg-lime"
          textColor="text-yellow"
          useStatusColor={false}
        />
      </div>
    </section>
  );
};
