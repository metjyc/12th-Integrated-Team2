const getDustLevel = (pm: number, type: "pm10" | "pm2_5") => {
  if (type === "pm10") {
    if (pm <= 30) return "좋음";
    if (pm <= 80) return "보통";
    return "나쁨";
  } else {
    if (pm <= 15) return "좋음";
    if (pm <= 35) return "보통";
    return "나쁨";
  }
};
