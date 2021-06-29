export default (value, isF) => {
    if (isF) {
      return `${Math.round((value * 9) / 5) + 32}°F`;
    }
    return `${value}°C`;
  };