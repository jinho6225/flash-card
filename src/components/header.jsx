import React from 'react';
import Nav from './nav.jsx';

const Header = (props) => {
  const { editing, isEditing, setView, view } = props;
  return (
    <div className="bgBlack text-white sticky-top py-5">
      <div className="container d-flex align-items-center justify-content-between">
        <h3 className="text-light m-0 title pointer">🚀 Flash Card</h3>
        <Nav
          editing={editing}
          isEditing={isEditing}
          setView={setView}
          view={view}
        />
      </div>
    </div>
  );
};
export default Header;
