import React from 'react'

const Nav = (props) => {
  const { setView, view } = props
  return (
      <ul className="nav nav-pills justify-content-end">
        <li className="nav-item">
          <a className={`nav-link ${view === 'view-cards' ? 'active' : ''} `} href="#" id="view-cards" onClick={(e) => {
            e.preventDefault()
            setView(e.target.id)
          }}>View Cards</a>
        </li>
        <li className="nav-item">
          <a className={`nav-link ${view === 'review-cards' ? 'active' : ''} `} href="#" id="review-cards" onClick={(e) => {
            e.preventDefault()
            setView(e.target.id)
          }}>Review</a>
        </li>
        <li className="nav-item">
          <a className={`nav-link ${view === 'create-card' ? 'active' : ''} `} href="#" id="create-card" onClick={(e) => {
            e.preventDefault()
            setView(e.target.id)
          }}>Create Card</a>
        </li>
      </ul>
  )
}

export default Nav;
