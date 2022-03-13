import React, { useState } from "react";
import { BsSun } from "react-icons/bs";
import { useAppSelector } from "../../hooks/redux/hooks";
import { selectCityById } from "../../store/cities/citiesSlice";
import ListElementDetail from "./ListElementDetail";
import roundTemp from "../../utils/roundTemp/roundTemp";

import "./List.css";

interface Props {
  id: number;
}

const ListElement: React.FC<Props> = ({ id }) => {
  const [showDetail, setShowDetail] = useState(false);
  const city = useAppSelector((state) => selectCityById(state, id));

  let classList: string;
  if (showDetail) {
    classList = "list-element list-element-active";
  } else {
    classList = "list-element";
  }

  return (
    <>
      <li
        className={classList}
        onClick={() => {
          setShowDetail(!showDetail);
        }}
      >
        <div className="list-icon">
          <BsSun />
        </div>
        <div className="list-city">{city?.city}</div>
        <div className="list-temp">{roundTemp(city!.temp)}°C</div>
      </li>
      {showDetail ? <ListElementDetail city={city!} /> : ""}
    </>
  );
};

export default ListElement;
