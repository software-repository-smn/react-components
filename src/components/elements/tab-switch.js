import React from 'react';
import "../../styles/tab-switch.scss"
import { getClassName } from '../../utils/utils';

const TabSwitch = props => {
    const { tabs, currentTab, changeTab } = props;

    const getChangeTab = tab => () => {
        const nextTab = tabs.find(tabToFind => tab.id === tabToFind.id);
        if (nextTab.id !== currentTab.id) {
            changeTab(nextTab);
        }
    };

    return <div className={getClassName('tab-switch', '', [
        { condition: currentTab.id === 1, className: 'tab-switch--left' },
        { condition: currentTab.id === 2, className: 'tab-switch--right' }
    ])}>
        {
            tabs.map(tab =>
                <div key={tab.id}
                    onClick={getChangeTab(tab)}
                    className={getClassName('tab-switch__tab', '', {
                        condition: tab.id === currentTab.id, className: 'tab-switch__tab--active'
                    })}
                >
                    {tab.name}
                </div>
            )
        }
    </div>;
}
export default TabSwitch;