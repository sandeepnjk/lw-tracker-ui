import React from 'react';
import PropTypes from 'prop-types';

const Header = props => {
  return (
    <div className="flex flex-col bg-stone-600">
      <p className="text-white text-center text-2xl">Eyesmart Issue Tracker</p>
      <p>User</p>
      <p>New Issue</p>
    </div>
  );
};

Header.propTypes = {
  
};

export default Header;