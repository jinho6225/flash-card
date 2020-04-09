import React from 'react';
import RemoveModal from './remove-modal';

class ViewCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: {
        show: false,
        displayNone: true,
      },
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.checkActiveCard = this.checkActiveCard.bind(this);
    this.timeId = null;
  }

  toggleModal() {
    const {
      showModal: { show },
    } = this.state;
    if (show) {
      this.setState({
        showModal: {
          show: false,
          displayNone: false,
        },
      });
      this.timeId = setTimeout(() => {
        this.setState({
          showModal: {
            show: false,
            displayNone: true,
          },
        });
      }, 750);
    } else {
      this.setState({
        showModal: {
          show: true,
          displayNone: false,
        },
      });
      clearTimeout(this.timeId);
    }
  }

  checkActiveCard(idx) {
    this.props.setActiveCard(idx);
  }

  render() {
    const { cards, setView, deleteCard, isEditing } = this.props;
    if (cards.length === 0) {
      return (
        <div>
          <h1 className="text-center mb-3">My Cards</h1>
          <h4 className="text-center">Card deck is empty...</h4>
          <h4 className="text-center">
            <span
              className="badge badge-primary p-2"
              onClick={() => {
                setView('create-card');
              }}
            >
              Create Card
            </span>
          </h4>
        </div>
      );
    } else {
      return (
        <div>
          <h1 className="text-center mb-4">My Cards</h1>
          {cards.map((card, i) => {
            return (
              <div className="row row-cols-1 row-cols-md-3">
                <div className="col mb-3" key={i}>
                  <div className="card">
                    <div className="card-body bg-dark">
                      <h6 className="card-title text-secondary">Question</h6>
                      <p className="card-text text-white">{card.question}</p>
                    </div>
                    <div className="card-body bg-secondary">
                      <h6 className="card-title text-dark">Answer</h6>
                      <p className="card-text text-white">{card.answer}</p>
                      <div className="bg-secondary d-flex justify-content-center">
                        <i
                          className="far fa-edit"
                          onClick={() => {
                            setView('create-card');
                            this.props.editing(i + 1);
                          }}
                        ></i>
                        <span>&#160;&#160;&#160;&#160;</span>
                        <i
                          className="far fa-trash-alt"
                          onClick={() => {
                            this.checkActiveCard(i);
                            this.toggleModal();
                          }}
                        ></i>
                      </div>
                    </div>
                  </div>
                </div>
                <RemoveModal
                  card={card}
                  deleteCard={this.props.deleteCard}
                  showModal={this.state.showModal}
                  toggleModal={this.toggleModal}
                />
              </div>
            );
          })}
        </div>
      );
    }
  }
}

export default ViewCards;
