import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser} from "@fortawesome/free-regular-svg-icons";
import {faPlus} from "@fortawesome/free-solid-svg-icons";


const Header = props => {
  return (
    <div className="flex flex-row bg-stone-600 text-white text-center">
      <div className="justify-start w-1/2">
        <span>
          <p className="text-white text-center text-2xl">Eyesmart Issue Tracker</p>
        </span>
      </div>
      <div className="justify-end w-1/2 ml-auto items-center">
        <span className="px-2 h-full"><FontAwesomeIcon icon={faUser}/></span>
        <span className="px-2 h-full"><FontAwesomeIcon icon={faPlus}/></span>
        <span className="px-2 h-full">New Issue</span>
      </div>

    </div>
  );
};

Header.propTypes = {};

export default Header;