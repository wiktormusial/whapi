import { BsSun } from "react-icons/bs";

import "./List.css";

const ListElement = () => {
  return (
    <>
      <li className="list-element">
        <div className="list-icon">
          <BsSun />
        </div>
        <div className="list-city">Szczebrzeszyn</div>
        <div className="list-temp">15°C</div>
      </li>
    </>
  );
};

export default ListElement;
