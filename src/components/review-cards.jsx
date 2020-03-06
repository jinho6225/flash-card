import React from 'react'

class ReviewCards extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      front: true,
      initial: 0
    }
    this.nextCard = this.nextCard.bind(this)
    this.previouseCard = this.previouseCard.bind(this)
    this.flipCard = this.flipCard.bind(this)
  }

  flipCard() {
    this.setState({
      front: !this.state.front
    })
  }

  nextCard() {
    const { initial } = this.state
    this.setState(state => {
      if (initial < this.props.cards.length-1) {
        return ({
          initial: state.initial + 1
        })
      } else {
        return ({
          initial: 0
        })
      }
    }, ()=> {
      this.props.setActiveCard(this.state.initial)
    })
  }

  previouseCard() {
    const { initial } = this.state
    this.setState(state => {
      if (initial <= 0) {
        return ({
          initial: state.initial + (this.props.cards.length-1)
        })
      } else {
        return ({
          initial: state.initial - 1
        })
      }
    }, ()=> {
      this.props.setActiveCard(this.state.initial)
    })
  }

  componentDidMount() {
    this.props.setActiveCard(this.state.initial)
  }

  render() {
    const { activeCard, cards, setActiveCard } = this.props
    return (
      <>
        <h1 className="text-center mb-4">Review</h1>
        <div className="row ">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="review-card d-flex">

                    <div className={`col-2 d-flex justify-content-center align-items-center ${this.state.front ? 'bg-dark' : 'bg-secondary'}`}><div className="" onClick={() => {
                      this.previouseCard()
                    }} role="button" data-slide="prev">
                      <span className="carousel-control-prev-icon" ></span>
                    </div></div>
                    <div className={`review-card-body col-8 d-flex align-items-center justify-content-center ${this.state.front ? 'bg-dark' : 'bg-secondary'}`} onClick={() => {
                      this.flipCard()
                    }}>
                      <span><h3 className="review-card-title text-white mb-0 text-center">{activeCard ? this.state.front ? activeCard.question : activeCard.answer : '???'}</h3></span>
                    </div>
                    <div className={`col-2 d-flex justify-content-center align-items-center ${this.state.front ? 'bg-dark' : 'bg-secondary'}`}><a className="" onClick={() => {
                      this.nextCard()
                    }} role="button" data-slide="next">
                      <span className="carousel-control-next-icon" ></span>
                    </a></div>
                    </div>

                </div>
            </div>
        </div>
      </>
    )
  }
}

export default ReviewCards;
