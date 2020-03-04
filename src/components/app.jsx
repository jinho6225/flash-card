import React from 'react'
import ViewCards from './view-cards.jsx'
import CreateCard from './create-card.jsx'
import ReviewCards from './review-cards.jsx'
import Nav from './nav.jsx'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      view: 'create-card',
      cards: []
    }
    this.setView = this.setView.bind(this)
    this.saveCards = this.saveCards.bind(this)
    this.addCard = this.addCard.bind(this)
  }

  saveCards() {
    const { cards } = this.state
    const stringified = JSON.stringify(cards)
    localStorage.setItem('flash-cards', stringified)
  }

  addCard(obj) {
    const copiedArr = Array.from(this.state.cards)
    copiedArr.push(obj)
    this.saveCards()
  }

  setView(link) {
    this.setState({ view: link })
  }

  getView() {
    switch (this.state.view) {
      case 'create-card':
    return <CreateCard addCard={this.addCard} />;
      case 'review-cards':
    return <ReviewCards />;
      case 'view-cards':
    return <ViewCards />;
      default:
    return null;
    }
  }

  render() {
    const { view, cards } = this.state
    return (
      <div className="container">
        <Nav setView={this.setView} view={view} />
        { this.getView() }
      </div>
    )
  }
}

export default App;
