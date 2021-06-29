export const cityWeatherInfo = (city) => `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e6bddce897f54b842958aada79a1720a&units=metric`;
export const weatherIcon = (icon) => `http://openweathermap.org/img/wn/${icon}@2x.png`;
export const weatherBackground = (background) => `http://openweathermap.org/img/wn/${background}@4x.png`;
export const countryFlag = (country) => `https://www.countryflags.io/${country}/flat/64.png`;