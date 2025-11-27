import { apiClient } from "./apiClient";

export const currentWeather = async (lat: number, lon: number) => {
  try {
    const res = await apiClient.get("/weather/onecall", {
      params: { lat, lon },
    });
    return res.data.current;
  } catch (error) {
    console.error(error);
  }
};

export const hourlyWeather = async (lat: number, lon: number) => {
  try {
    const res = await apiClient.get("/weather/onecall", {
      params: { lat, lon },
    });
    return res.data.hourly;
  } catch (error) {
    console.error(error);
  }
};

export const airCondition = async (lat: number, lon: number) => {
  try {
    const res = await apiClient.get("/weather/air", {
      params: { lat, lon },
    });
    return res.data;
  } catch (error) {
    console.error(error);
  }
};
export const fiveDaysWeather = async (lat: number, lon: number) => {
  try {
    const res = await apiClient.get("/weather/5days", {
      params: { lat, lon },
    });
    return res.data;
  } catch (error) {
    console.error(error);
  }
};
