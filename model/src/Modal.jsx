const Modal = (props) => {
  const { showModal, setShowModal, handleAcceptOffer } = props;

  return (
    <>
      <div className="modal">
        <button onClick={() => setShowModal(false)}>X</button>
        <p>click the below button to accept our amazing offer</p>
        <button onClick={handleAcceptOffer}> accept offer </button>
      </div>
    </>
  );
};

export default Modal;
