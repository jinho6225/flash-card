import React from 'react'

const ViewCards = (props) => {
  const { cards } = props
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
        <div className="row row-cols-1 row-cols-md-3">
          {cards.map((card, i) => {
            return (
                <div className="col mb-3" key={i}>
                  <div className="card" key={card.id}>
                    <div className="card-body bg-dark">
                      <h6 className="card-title text-secondary">Question</h6>
                      <p className="card-text text-white">{card.question}</p>
                    </div>
                    <div className="card-body bg-secondary">
                      <h6 className="card-title text-dark">Answer</h6>
                      <p className="card-text text-white">{card.answer}</p>
                    </div>
                  </div>
                </div>
            )
          })}
        </div>
      </div>
    )
  }

}

export default ViewCards;
