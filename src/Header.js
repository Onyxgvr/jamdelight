import React from 'react';
import './Header.css';


export default function Header(props) {

    return(
        <div className="Header">
            <div className="NavigationBarContainer">
                <button
                    className="NavigationBarButtonBack"
                >
                    Back
                </button>
                <span
                    className="BreadcrumbsContainer"
                >
                </span>
                <button
                    className="NavigationBarButtonForward"
                >
                    Forward
                </button>
            </div>
        </div>
    );
}

