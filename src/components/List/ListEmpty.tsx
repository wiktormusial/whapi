import "./List.css";
import Error from "../Error";

const ListEmpty = () => {
  return (
    <>
      <div className="list" data-testid="list-empty">
        <Error />
        <div className="list-empty">
        List is empty, add some cities above
      </div>
      </div>
    </>
  );
};

export default ListEmpty;
