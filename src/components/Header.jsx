import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser} from "@fortawesome/free-regular-svg-icons";
import {faPlus} from "@fortawesome/free-solid-svg-icons";


const Header = props => {
  return (
    <div className="flex flex-row items-center bg-stone-600 text-white">
      <div className="flex justify-start w-1/2 pl-2">
        <p className="text-white text-center text-2xl">Eyesmart Issue Tracker</p>
      </div>
      <div className="flex justify-end w-1/2 ml-auto items-center gap-3 pr-2">
        <span>
          <button type="button"
                  className="hover:bg-stone-500 text-white font-bold my-2 p-2 rounded">
            <FontAwesomeIcon icon={faPlus}/>New Issue
          </button>
        </span>
        <FontAwesomeIcon icon={faUser}/>
      </div>
    </div>
  );
};

Header.propTypes = {};

export default Header;