import Wrapper from "../Wrapper";
import SearchBar from "../SearchBar";
import List from "../List";
import Error from "../Error";

const Whapi = () => {
  return (
    <Wrapper>
      <Error/>
      <SearchBar />
      <List />
    </Wrapper>
  );
};

export default Whapi;
