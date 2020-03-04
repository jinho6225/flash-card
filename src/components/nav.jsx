import React from 'react'

const Nav = (props) => {
  const { setView } = props
  return (
    <>
      <ul className="nav justify-content-end">
        <li className="nav-item">
          <a className="nav-link active" href="#" id="create-card" onClick={(e) => {
            e.preventDefault()
            setView(e.target.id)
          }}>View Cards</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" id="review-cards" onClick={(e) => {
            e.preventDefault()
            setView(e.target.id)
          }}>Review</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" id="view-cards" onClick={(e) => {
            e.preventDefault()
            setView(e.target.id)
          }}>Create Card</a>
        </li>
      </ul>
    </>
  )
}

export default Nav;
