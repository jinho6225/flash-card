import React from 'react';
import Nav from './nav.jsx';

const Header = (props) => {
  const { editing, isEditing, setView, view } = props;
  return (
    <div className="bgBlack sticky-top py-4">
      <div className="container d-flex flex-wrap align-items-center justify-content-center justify-content-md-between px-4">
        <div className="m-2">
          <h2
            className="text-light m-0 title"
            onClick={() => {
              setView('view-cards');
            }}
          >
            💡 Flash Card
          </h2>
        </div>
        <div className="m-2">
          <Nav
            editing={editing}
            isEditing={isEditing}
            setView={setView}
            view={view}
          />
        </div>
      </div>
    </div>
  );
};
export default Header;
