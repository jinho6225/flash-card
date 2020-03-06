import React from 'react'

class ViewCards extends React.Component {
  constructor(props) {
    super(props)
      this.state = {
        isOpen: false,
    };
    this.switchOpen = this.switchOpen.bind(this)
    this.checkActiveCard = this.checkActiveCard.bind(this)
  }

  switchOpen () {
    this.setState({isOpen: !this.state.isOpen});
  }

  checkActiveCard(idx) {
    this.props.setActiveCard(idx)
    this.switchOpen()
  }

  render() {
    const { cards, setView, deleteCard } = this.props
    if (cards.length === 0) {
      return (
        <div>
          <h1 className="text-center">My Cards</h1>
            <br></br>
          <h4 className="text-center">Card deck is empty...</h4>
        </div>
      )
    } else {
      return (
        <div>
          <h1 className="text-center mb-4">My Cards</h1>

            <div className={`${this.state.isOpen ? 'basic-modal' : ''} ${this.state.isOpen ? '' : 'hidden'}`} onClick={this.switchOpen}>
                <div onClick={e => e.stopPropagation()} className="basic-modal-content border border-dark p-4">
                    <div onClick={this.switchOpen} className="basic-modal-close">
                    <a href="#" className="badge badge-primary" onClick={this.switchOpen}>X</a></div>
                    <h1>Really???</h1>
                    <p>Do you really want to delete it?? please confirm!?</p>
                    <div className="input-group mb-3">
                      <button className="btn btn-danger mx-1" onClick={() => {
                        deleteCard(this.props.activeCard)
                        this.switchOpen()
                      }} >Delete</button>
                      <button className="btn btn-outline-info mx-1" onClick={this.switchOpen}>Cancel</button>
                    </div>
                </div>
            </div>

          <div className={`row row-cols-1 row-cols-md-3 ${this.state.isOpen ? 'hidden' : ''}`} >
            {cards.map((card, i) => {
              return (
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
                        <i className="far fa-trash-alt"
                          onClick={() => {
                            this.checkActiveCard(i)
                          }}>
                        </i>
                        </div>
                      </div>
                    </div>
                  </div>
              )
            })
            }
          </div>
        </div>
      )
    }
  }
}

export default ViewCards;
