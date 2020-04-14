import React from 'react';
import DuplicationModal from './duplication-modal.jsx';

class CreateCard extends React.Component {
  constructor(props) {
    super(props);
    this.initialState = {
      question: '',
      answer: '',
    };
    this.state = this.initialState;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.reset = this.reset.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { addCard, setView, isEditing, updateCard } = this.props;
    if (!isEditing) {
      addCard(this.state);
    }
    if (isEditing > 0) {
      updateCard(this.state);
    }
    this.setState(this.initialState);
    this.props.editing(false);
  }

  reset() {
    const { setView } = this.props;
    this.setState(this.initialState);
    this.props.editing(false);
    setView('view-cards');
  }

  componentDidMount() {
    this.props.setActiveCard(this.props.isEditing - 1);
  }

  componentDidUpdate(prevProps) {
    const { activeCard } = this.props;
    if (activeCard) {
      if (activeCard !== prevProps.activeCard) {
        this.setState({
          question: activeCard.question,
          answer: activeCard.answer,
        });
      }
    }
  }

  render() {
    const {
      isEditing,
      activeCard,
      setView,
      duplicatedQS,
      duplicationModal,
    } = this.props;
    return (
      <>
        {duplicatedQS ? (
          <DuplicationModal
            duplicatedQS={duplicatedQS}
            duplicationModal={duplicationModal}
            setView={this.setView}
          />
        ) : (
          ''
        )}
        <div>
          <h2 className="text-center mb-3">
            {isEditing ? 'Update Card' : 'Create New Card'}
          </h2>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="">Question:</label>
              <textarea
                className="form-control"
                rows="3"
                name="question"
                value={this.state.question}
                onChange={this.handleChange}
                required
              ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="">Answer:</label>
              <textarea
                className="form-control"
                rows="3"
                name="answer"
                value={this.state.answer}
                onChange={this.handleChange}
                required
              ></textarea>
            </div>
            <div className="d-flex justify-content-end">
              <button
                className="btn btn-outline-danger mx-1"
                type="submit"
                onClick={() => {
                  this.reset();
                }}
              >
                Cancel
              </button>
              <button className="btn btn-outline-primary mx-1" type="submit">
                Save Card
              </button>
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default CreateCard;
