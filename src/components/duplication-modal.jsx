import React from 'react';

function DuplicationModal(props) {
  const { duplicatedQS, duplicationModal, setView } = props;
  return (
    <div
      className={`duplicationModal ${
        duplicatedQS ? 'd-flex' : 'd-none'
      } overlay ${duplicatedQS ? 'fade-in' : 'fade-out'}`}
    >
      <div className="m-auto p-3">
        <div
          className={`bg-light p-3 rounded modal-message ${
            duplicatedQS ? 'slide-in' : 'slide-out'
          }`}
        >
          <h5 className="text-center">Same question's already exist</h5>
          <div className="btn-group w-100">
            <button
              className="btn btn-primary text-white w-50"
              onClick={() => {
                duplicationModal();
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

export default DuplicationModal;
