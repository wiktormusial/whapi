import ListElement from "./ListElement";
import "./List.css";

const List = () => {
  return (
    <div className="list">
      <ul className="list-cities">
        <ListElement />
        <ListElement />
      </ul>
    </div>
  );
};

export default List;
