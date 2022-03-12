import React from "react";
import { BsSun } from "react-icons/bs";
import { useAppSelector } from "../../hooks/redux/hooks";
import { selectCityById } from "../../store/cities/citiesSlice";

import "./List.css";

interface Props {
  id: number;
}

const ListElement: React.FC<Props> = ({ id }) => {
  const city = useAppSelector((state) => selectCityById(state, id));

  return (
    <>
      <li className="list-element">
        <div className="list-icon">
          <BsSun />
        </div>
        <div className="list-city">{city?.city}</div>
        <div className="list-temp">{city?.temp}°C</div>
      </li>
    </>
  );
};

export default ListElement;
