import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ScrollToTop() {
    return (
        <button onClick={() => {window.scrollTo({top: 0, left: 0, behavior: 'smooth'});}} className="btn btn-lg btn-light text-dark rounded-pill border" style={{
            position: 'fixed',
            padding: '1rem 2rem',
            fontSize: '20px',
            bottom: '40px',
            right: '40px'
          }}> 
            <FontAwesomeIcon icon="fa-caret-up" />
            </button>
    )
}

export default ScrollToTop;