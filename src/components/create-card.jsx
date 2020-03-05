import React from 'react'

class CreateCard extends React.Component {
  constructor(props) {
    super(props)
    this.initialState = {
      question: '',
      answer: ''
    }
    this.state = this.initialState
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.reset = this.reset.bind(this)
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    const { addCard, setView } = this.props
    addCard(this.state)
    this.setState(this.initialState)
    setView('view-cards')
  }

  reset() {
    const { setView } = this.props
    this.setState(this.initialState)
    setView('view-cards')
  }


  render() {
    return (
      <div>
        <h1 className="text-center">Create New Card</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="">Question:</label>
            <textarea
              className="form-control"
              rows="2"
              name="question"
              value={this.state.question}
              onChange={this.handleChange}
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="">Answer:</label>
            <textarea
              className="form-control"
              rows="2"
              name="answer"
              value={this.state.answer}
              onChange={this.handleChange}
            ></textarea>
          </div>
          <div className="d-flex justify-content-end">
              <button className="btn btn-outline-danger mx-1" type="submit" onClick={() => {
                this.reset()
              }}>Cancel</button>
              <button className="btn btn-outline-primary mx-1" type="submit">Save Card</button>
          </div>
        </form>
      </div>
    )
  }
}

export default CreateCard;
