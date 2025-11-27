const getUVStatus = (uvi: number) => {
  if (uvi <= 2) return "낮음";
  if (uvi <= 5) return "보통";
  if (uvi <= 7) return "높음";
  if (uvi <= 10) return "매우 높음";
  return "위험";
};
