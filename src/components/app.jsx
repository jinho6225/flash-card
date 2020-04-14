import React from 'react';
import ViewCards from './view-cards.jsx';
import CreateCard from './create-card.jsx';
import UpdateCard from './update-card.jsx';
import ReviewCards from './review-cards.jsx';
import Header from './header.jsx';
import Footer from './footer.jsx';
import IntroModal from './intro-modal.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      view: 'view-cards',
      activeCard: null,
      isEditing: false,
      showModal: {
        show: true,
        displayNone: false,
      },
      duplicatedQS: false,
    };
    this.setView = this.setView.bind(this);
    this.saveCards = this.saveCards.bind(this);
    this.addCard = this.addCard.bind(this);
    this.updateCard = this.updateCard.bind(this);
    this.setActiveCard = this.setActiveCard.bind(this);
    this.deleteCard = this.deleteCard.bind(this);
    this.editing = this.editing.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.duplicationModal = this.duplicationModal.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    const { cards, showModal } = this.state;
    if (prevState.cards !== cards) {
      if (!showModal.show) {
        this.setState({
          showModal: {
            show: true,
            displayNone: false,
          },
        });
      }
    }
  }

  toggleModal() {
    const {
      showModal: { show },
      cards,
    } = this.state;
    if (show) {
      this.setState({
        showModal: {
          show: false,
          displayNone: true,
        },
      });
    }
  }

  duplicationModal() {
    const { duplicatedQS } = this.state;
    this.setState({
      duplicatedQS: !duplicatedQS,
    });
  }

  updateCard(obj) {
    const { isEditing } = this.state;
    const index = Number(isEditing) - 1;
    this.state.cards.splice(index, 1, obj);
    this.setState(
      (state) => {
        return { cards: this.state.cards };
      },
      () => {
        this.saveCards();
        this.setView('view-cards');
      }
    );
  }

  editing(idx) {
    this.setState({
      isEditing: idx,
    });
  }

  deleteCard(targetCard) {
    const { cards } = this.state;
    var newCardArr = cards.filter((card, i) => {
      return card.question !== targetCard.question;
    });
    this.setState({ cards: newCardArr }, () => {
      this.saveCards();
    });
  }

  setActiveCard(index) {
    const { cards } = this.state;
    this.setState({ activeCard: cards[index] });
  }

  getCard() {
    const FLASH_CARDS = 'flash-cards';
    const { cards } = this.state;
    if (localStorage.getItem(FLASH_CARDS) !== null) {
      const cardArr = JSON.parse(localStorage.getItem(FLASH_CARDS));
      this.setState({ cards: cardArr });
    }
  }

  componentDidMount() {
    this.getCard();
  }

  saveCards() {
    const FLASH_CARDS = 'flash-cards';
    const { cards } = this.state;
    const stringified = JSON.stringify(cards);
    localStorage.setItem(FLASH_CARDS, stringified);
  }

  addCard(obj) {
    const arr = Array.from(this.state.cards);
    const duplication = arr.filter((qs) => {
      return qs.question === obj.question;
    });
    if (duplication.length === 0) {
      arr.push(obj);
      this.setState(
        (state) => {
          return { cards: arr };
        },
        () => {
          this.saveCards();
          this.setView('view-cards');
        }
      );
    } else {
      this.duplicationModal();
    }
  }

  setView(link) {
    this.setState({ view: link });
  }

  getView() {
    switch (this.state.view) {
      case 'create-card':
        return (
          <CreateCard
            editing={this.editing}
            isEditing={this.state.isEditing}
            updateCard={this.updateCard}
            addCard={this.addCard}
            setView={this.setView}
            setActiveCard={this.setActiveCard}
            activeCard={this.state.activeCard}
            cards={this.state.cards}
            duplicatedQS={this.state.duplicatedQS}
            duplicationModal={this.duplicationModal}
          />
        );
      case 'review-cards':
        return (
          <ReviewCards
            cards={this.state.cards}
            setView={this.setView}
            activeCard={this.state.activeCard}
            setActiveCard={this.setActiveCard}
          />
        );
      case 'view-cards':
        return (
          <ViewCards
            editing={this.editing}
            isEditing={this.state.isEditing}
            cards={this.state.cards}
            setView={this.setView}
            activeCard={this.state.activeCard}
            setActiveCard={this.setActiveCard}
            deleteCard={this.deleteCard}
          />
        );
      default:
        return null;
    }
  }

  render() {
    const {
      view,
      activeCard,
      isEditing,
      cards,
      showModal,
      duplicatedQS,
    } = this.state;
    return (
      <>
        <Header
          editing={this.editing}
          isEditing={isEditing}
          setView={this.setView}
          view={view}
        />
        {cards.length === 0 ? (
          <IntroModal
            showModal={showModal}
            toggleModal={this.toggleModal}
            setView={this.setView}
          />
        ) : (
          ''
        )}
        <div className="container mainbody py-3">{this.getView()}</div>
        <Footer />
      </>
    );
  }
}

export default App;
