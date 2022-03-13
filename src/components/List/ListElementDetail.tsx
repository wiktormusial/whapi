import React from "react";
import { countryCodeEmoji } from "country-code-emoji";
import { Cities } from "../../store/cities/citiesSlice";
import roundTemp from "../../utils/roundTemp/roundTemp";

interface Props {
  city: Cities;
}

const ListElementDetail: React.FC<Props> = ({ city }) => {
  return (
    <div className="list-city-detail">
      <div className="card-header">
        <span className="font-bold">
          {countryCodeEmoji(city.country) + "  " + city.city}
        </span>
        <br />
        <i>{city.description}</i>
        <hr />
      </div>
      <table className="table">
        <tbody>
          <tr>
            <td>Feels like</td>
            <td className="text-align-right">{roundTemp(city.feels_like)}°C</td>
          </tr>
          <tr>
            <td>Minimal temperature</td>
            <td className="text-align-right">{roundTemp(city.temp_min)}°C</td>
          </tr>
          <tr>
            <td>Maximal temperature</td>
            <td className="text-align-right">{roundTemp(city.temp_max)}°C</td>
          </tr>
          <tr>
            <td>Wind</td>
            <td className="text-align-right">{city.wind_speed}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ListElementDetail;
