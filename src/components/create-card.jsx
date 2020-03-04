import React from 'react'

class CreateCard extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <h1 className="text-center">Create New Card</h1>
        <form>
          <div className="form-group">
            <label htmlFor="exampleFormControlTextarea1">Question:</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlTextarea1">Answer:</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
          <div className="d-flex justify-content-end">
              <button className="btn btn-outline-danger mx-1" type="submit">Cancel</button>
              <button className="btn btn-outline-primary mx-1" type="submit">Save Card</button>
          </div>
        </form>
      </div>
    )
  }
}

export default CreateCard;
