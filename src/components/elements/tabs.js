import React from 'react'
import "../../styles/tabs.scss"

const Tabs = () => {
    return (
        <div class="tabs">
            <label class="tabs__tab-item">
                <input id='radio-1' type="radio" name="radio" />
                <span class="tabs__tab-name label">React JS</span>
            </label>
            <label class="tabs__tab-item">
                <input id='radio-2' type="radio" name="radio" />
                <span class="tabs__tab-name label">Next JS</span>
            </label>
            <label class="tabs__tab-item">
                <input id='radio-3' type="radio" name="radio" />
                <span class="tabs__tab-name label">Csharp</span>
            </label>
        </div>
    )
}
export default Tabs