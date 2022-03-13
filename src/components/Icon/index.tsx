import React, { ReactNode } from "react";
import {
  BsSun,
  BsMoon,
  BsCloudSun,
  BsCloudMoon,
  BsCloudFill,
  BsCloud,
  BsCloudHail,
  BsCloudHailFill,
  BsCloudRainHeavy,
  BsCloudRainHeavyFill,
  BsCloudLightning,
  BsCloudLightningFill,
  BsCloudSnow,
  BsCloudSnowFill,
  BsCloudFog,
  BsCloudFogFill,
} from "react-icons/bs";

interface Props {
  weather: string;
}

interface WeatherIcons {
  [key: string]: ReactNode;
}

const Icon: React.FC<Props> = ({ weather }) => {
  const icons: WeatherIcons = {
    "01d": <BsSun />,
    "01n": <BsMoon />,
    "02d": <BsCloudSun />,
    "02n": <BsCloudMoon />,
    "03d": <BsCloud />,
    "03n": <BsCloudFill />,
    "09d": <BsCloudHail />,
    "09n": <BsCloudHailFill />,
    "10d": <BsCloudRainHeavy />,
    "10n": <BsCloudRainHeavyFill />,
    "11d": <BsCloudLightning />,
    "11n": <BsCloudLightningFill />,
    "13d": <BsCloudSnow />,
    "13n": <BsCloudSnowFill />,
    "50d": <BsCloudFog />,
    "50n": <BsCloudFogFill />,
  };

  return (
    <div data-testid={weather}>
      <img
        className="list-icon"
        src={`http://openweathermap.org/img/wn/${weather}.png`}
      />
    </div>
  );
};

export default Icon;
