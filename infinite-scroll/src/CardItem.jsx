const CardItem = ({ body, title, id }) => {
  return (
    <div className="card-item">
      <p className="user-id">
        <strong>id:</strong> {id}
      </p>
      <h3 className="card-title">{title}</h3>
      <p className="card-body">{body}</p>
    </div>
  );
};

export default CardItem;
