import React from 'react';
import { NavLink} from 'react-router-dom';

const Navigation = props=> {
    return (
        <div className = 'nav'>
            <NavLink className= 'link' to ='/'>Entrees</NavLink>
            <NavLink className = 'link' to = '/cart'>
            Cart
            </NavLink>
            <NavLink className = 'link' to ='/apps'>Appetizers</NavLink>
            <NavLink className = 'link' to ='/drinks'>Drinks</NavLink>

        </div>

    )

}

export default Navigation;