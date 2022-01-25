import Circle from "../circle/Circle";
import ListCanal from "../listCanal/ListCanal";

const Home = () => {
  return (
    <div>
      <ListCanal />
      <div className="d-flex justify-content-center">
        <Circle />
      </div>
    </div>
  );
};

export default Home;
