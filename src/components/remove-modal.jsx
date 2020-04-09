import React from 'react';

function RemoveModal(props) {
  const { activeCard, showModal, toggleModal, deleteCard } = props;
  return (
    <div
      className={`removeModal ${
        showModal.displayNone ? 'd-none' : 'd-flex'
      } overlay ${showModal.show ? 'fade-in' : 'fade-out'}`}
    >
      <div className="m-auto p-3">
        <div
          className={`bg-light p-3 rounded modal-message ${
            showModal.show ? 'slide-in' : 'slide-out'
          }`}
        >
          <h5 className="text-center">Do you want to remove card?</h5>
          <div className="btn-group w-100">
            <button
              className="btn btn-secondary text-white w-50"
              onClick={() => toggleModal()}
            >
              Cancel
            </button>
            <button
              className="btn btn-danger text-white w-50"
              onClick={() => {
                deleteCard(activeCard);
                toggleModal();
              }}
            >
              Remove Card
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RemoveModal;
