import { useAppSelector } from "../../hooks/redux/hooks";
import { selectCities } from "../../store/cities/citiesSlice";
import ListElement from "./ListElement";
import ListEmpty from "./ListEmpty";
import "./List.css";

const List = () => {
  const cities = useAppSelector(selectCities);

  if (cities.length !== 0) {
    return (
      <div className="list">
        <ul className="list-cities">
          {cities.map((item) => (
            <ListElement key={item.id} id={item.id} />
          ))}
        </ul>
      </div>
    );
  } else {
    return <ListEmpty />;
  }
};

export default List;
