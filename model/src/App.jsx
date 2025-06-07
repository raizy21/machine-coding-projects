import Modal from "./Modal.jsx"; // modal component
import { useState } from "react"; // useState hook to manage state

export default function App() {
  const [showModal, setShowModal] = useState(false); // state to control modal visibility
  const [offerAccepted, setOfferAccepted] = useState(false); // state to track if the offer is accepted

  // accept offer and close the modal
  const handleAcceptOffer = () => {
    setShowModal(false);
    setOfferAccepted(true);
  };

  // handle clicks outside modal content to close it
  const handleOutsideClick = (e) => {
    if (e.target.classList.contains("modal-container")) {
      setShowModal(false);
    }
  };

  return (
    <>
      <h1 className="heading">modal component</h1>

      {/* main container for the centered content */}
      <div className={showModal ? "blurred main-container" : "main-container"}>
        {!showModal && !offerAccepted && (
          <button onClick={() => setShowModal(true)}> show modal </button>
        )}

        {offerAccepted && <p className="offer-accepted">offer accepted</p>}
      </div>

      {/* modal container */}
      {showModal && (
        <div className="modal-container" onClick={handleOutsideClick}>
          <Modal
            showModal={showModal}
            setShowModal={setShowModal}
            handleAcceptOffer={handleAcceptOffer}
          />
        </div>
      )}
    </>
  );
}
