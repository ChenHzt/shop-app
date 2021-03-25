import React from 'react';

export class NavBar extends React.Component {

    render() {
        console.log();
        return (
            <div className="navbar">
                <div className="navbar__left-side">
                    <div className="navbar__logo">Shop-it</div>
                </div>
                <div className="navbar__right-side">
                    <div className='navbar__search'>
                        <input type="text" placeholder="What are you looking for?" />
                    </div>
                    
                </div>
            </div>
        )
    }
}


