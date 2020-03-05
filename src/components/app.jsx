import React from 'react'
import ViewCards from './view-cards.jsx'
import CreateCard from './create-card.jsx'
import ReviewCards from './review-cards.jsx'
import Nav from './nav.jsx'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cards: [],
      view: 'view-cards',
      activeCard: null
    }
    this.setView = this.setView.bind(this);
    this.saveCards = this.saveCards.bind(this);
    this.addCard = this.addCard.bind(this);
    this.setActiveCard = this.setActiveCard.bind(this)
  }

  setActiveCard(index) {
    const { cards } = this.state;
    this.setState({ activeCard: cards[index]})
  }

  getCard() {
    const FLASH_CARDS = 'flash-cards'
    const { cards } = this.state;
    if (localStorage.getItem(FLASH_CARDS) === null) {
      let checking = confirm('Card Deck is empty now. Do you want to create new card?')
      if (checking) {
        this.setView('create-card')
      }
    } else {
      const cardArr = JSON.parse(localStorage.getItem(FLASH_CARDS))
      this.setState({ cards: cardArr })
    }
  }

  componentDidMount() {
    this.getCard()
  }

  saveCards() {
    const FLASH_CARDS = 'flash-cards'
    const { cards } = this.state
    const stringified = JSON.stringify(cards)
    localStorage.setItem(FLASH_CARDS, stringified)
  }

  addCard(obj) {
    const arr = Array.from(this.state.cards)
    arr.push(obj)
    this.setState((state) => {
      return {cards: arr}
    }, ()=> {
      this.saveCards()
    })
  }

  setView(link) {
    this.setState({ view: link })
  }

  getView() {
    switch (this.state.view) {
      case 'create-card':
    return <CreateCard addCard={this.addCard} setView={this.setView} />;
      case 'review-cards':
    return <ReviewCards cards={this.state.cards} activeCard={this.state.activeCard} setActiveCard={this.setActiveCard} />;
      case 'view-cards':
    return <ViewCards cards={this.state.cards} />;
      default:
    return null;
    }
  }

  render() {
    const { view, activeCard } = this.state
    return (
      <div className="container">
        <Nav setView={this.setView} view={view} />
        { this.getView() }
      </div>
    )
  }
}

export default App;
