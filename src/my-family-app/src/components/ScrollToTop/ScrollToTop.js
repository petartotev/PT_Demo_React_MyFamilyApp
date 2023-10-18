import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ScrollToTop() {
    return (
        <button onClick={() => {window.scrollTo({top: 0, left: 0, behavior: 'smooth'});}} className="btn btn-sm text-light rounded-pill border opacity-25" style={{
            fontSize: '20px',
            position: 'fixed',
            bottom: '5px',
            left: '50%',
            marginLeft: '-23px'
          }}> 
            &nbsp;<FontAwesomeIcon icon="fa-caret-up" />&nbsp;
        </button>
    )
}

export default ScrollToTop;