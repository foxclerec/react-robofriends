import Card from "./Card";

const CardList = ({ robots }) => {
  return (
    <div className="justify-center flex flex-wrap">
      {robots.map((robot) => {
        return <Card id={robot.id} name={robot.name} email={robot.email} />;
      })}
    </div>
  );
};

export default CardList;
