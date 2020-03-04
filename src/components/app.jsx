import React from 'react'
import ViewCards from './view-cards.jsx'
import CreateCard from './create-card.jsx'
import ReviewCards from './review-cards.jsx'
import Nav from './nav.jsx'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      view: 'view-cards'
    }
    this.setView = this.setView.bind(this)
  }

  setView(link) {
    this.setState({ view: link })
  }

  getView() {
    switch (this.state.view) {
      case 'create-card':
    return <CreateCard />;
      case 'review-cards':
    return <ReviewCards />;
      case 'view-cards':
    return <ViewCards />;
      default:
    return null;
    }
  }

  render() {
    const { view } = this.state
    return (
      <div>
        <Nav setView={this.setView} view={view} />
        { this.getView() }
      </div>
    )
  }
}

export default App;
