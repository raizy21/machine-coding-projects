import CardItem from "./CardItem";

const CardComponent = ({ data }) => {
  return (
    <div className="card-container">
      {data.map((item) => (
        <div key={item.id}>
          <CardItem body={item.body} title={item.title} Id={item.id} />
        </div>
      ))}
    </div>
  );
};

export default CardComponent;
