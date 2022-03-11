import { robots } from "./robots";

const Cards = (props) => {
  return (
    <>
      <h1>Robofriends</h1>
      {robots.map((robot) => {
        return (
          <div
            key={robot.id}
            className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"
          >
            <img
              src={`https://robohash.org/${robot.id}?size=180x180`}
              alt="robots"
            />
            <div>
              <h2>{robot.name}</h2>
              <p>{robot.email}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Cards;
