import React from 'react';

function IntroModal(props) {
  const { showModal, toggleModal, setView } = props;
  return (
    <div
      className={`introModal ${
        showModal.displayNone ? 'd-flex' : 'd-none'
      } overlay ${showModal.show ? 'fade-out' : 'fade-in'}`}
    >
      <div className="m-auto p-3">
        <div
          className={`bg-dark p-3 rounded modal-message ${
            showModal.show ? 'slide-out' : 'slide-in'
          }`}
        >
          <h4 className="text-center text-white p-2">Card deck is empty...</h4>
          <h5 className="text-center text-white">
            Do you want to create card??
          </h5>
          <div className="btn-group w-100 p-2">
            <button
              className="btn btn-secondary text-white w-50"
              onClick={() => toggleModal()}
            >
              Cancel
            </button>
            <button
              className="btn btn-primary text-white w-50"
              onClick={() => {
                toggleModal();
                setView('create-card');
              }}
            >
              Create Card
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IntroModal;
