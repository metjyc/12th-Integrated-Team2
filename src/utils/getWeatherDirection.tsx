import { WIND_DIRECTION_LABEL } from "@/constants/windDirectionMap";

export const getWindDirection = (deg: number): string => {
  const directions = [
    "N",
    "NNE",
    "NE",
    "ENE",
    "E",
    "ESE",
    "SE",
    "SSE",
    "S",
    "SSW",
    "SW",
    "WSW",
    "W",
    "WNW",
    "NW",
    "NNW",
  ];

  // 360°를 16방위로 나누고, 중앙값 기준
  // 0~360 범위 보장
  const index = Math.floor((deg + 11.25) / 22.5) % 16;
  const dir = directions[index];
  return WIND_DIRECTION_LABEL[dir];
};
