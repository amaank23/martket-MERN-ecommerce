import React, { useState } from 'react'

const Tabs = () => {
    const [currentlyActive, setCurrenlyActive] = useState('tab1');

    function settingTabsDisplay(e){
        setCurrenlyActive(e.target.id);
    }

    return (
        <div className="tabs">
            <div className="tabs-heading">
                <ul>
                    <li id='tab1'  className={`${ currentlyActive === 'tab1' ? 'current' : '' }`} onClick={(e) => settingTabsDisplay(e)}>Description</li>
                    <li id='tab2'  className={`${ currentlyActive === 'tab2' ? 'current' : '' }`} onClick={(e) => settingTabsDisplay(e)}>Reviews</li>
                </ul>         
            </div>
            <div className="tabs-content">
                { currentlyActive === 'tab1' && (
                    <div className="description-tab tab-content">
                        DESCRIPTION HERE
                    </div>
                ) }
                { currentlyActive === 'tab2' && (  
                    <div className="review-tab tab-content">
                        REVIEWS HERE
                    </div>
                ) }
            </div>
        </div>
    )
}

export default Tabs
