import axios from "axios";

interface GetCityTemp {
    name: string;
    main: {
      temp: number;
    };
}

const getCityTemp = async (city: string) => {
  const response = await axios.get<GetCityTemp>(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`
  );

  return response.data;
};

export default getCityTemp;
